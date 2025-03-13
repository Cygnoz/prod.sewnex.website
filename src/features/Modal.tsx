import React, { useEffect, useMemo } from "react";

type Props = {
  onClose: () => void;
  open: boolean;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  align?: "top" | "center" | "left" | "right";
};

const Modal = ({
  onClose,
  open,
  children,
  className,
  style,
  align = "center",
}: Props) => {
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  const getPositionStyles = useMemo(() => {
    switch (align) {
      case "top":
        return "justify-center items-start";
      case "center":
        return "justify-center items-center";
      case "left":
        return "justify-start items-center";
      case "right":
        return "justify-end items-center";
      default:
        return "justify-center items-center";
    }
  }, [align]);

  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    console.log("Backdrop Clicked!"); // Debugging Step
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  if (!open) return null; // Ensure modal is not rendered when closed

  return (
    <div
      className={`fixed inset-0 flex ${getPositionStyles} bg-black/50 transition-opacity duration-300`}
      style={{ zIndex: 999 }}
      onClick={handleBackdropClick}
      aria-modal="true"
      role="dialog"
    >
      <div
        className={`bg-white rounded-lg shadow-lg ${className || "w-[68%]"} transition-transform duration-300`}
        style={style}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
