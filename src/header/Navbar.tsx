import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../header/Header.css";
import FreeDemoModal from "../components/FreeDemoModal";
// import { useResponse } from "../context/ResponseContext";

type Props = {};

const Navbar = ({}: Props) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  // const { setIsFeedbackModalOpen } = useResponse();
  const [modalOpen, setModalOpen] = useState(false); 
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        menuButtonRef.current &&
        !menuButtonRef.current.contains(event.target as Node)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  const handleOpenModal = () => {
    setModalOpen(true); // Open modal
  };

  const handleCloseModal = () => {
    setModalOpen(false); // Close modal
  };

  const handleAction = () => {
    console.log("Action button clicked!");
    handleCloseModal(); // Close the modal after the action
  };

  return (
    <div>
      <div className="bg-[#004040] w-full h-auto relative z-10">
        <nav className="bg-opacity-60 w-full py-4 px-6 flex justify-between items-center relative z-20">
          {/* Left Section: Logo */}
          <div className="flex items-center gap-4 px-12 py-4">
            <div className="flex -space-x-2">
              <div className="rounded-full bg-[#32B271] w-10 h-10"></div>
              <div className="rounded-full bg-[#0BA158] w-10 h-10"></div>
            </div>
            <p className="text-white text-3xl font-medium">Sewnex</p>
          </div>

          {/* Center Section: Navigation Menu (Hidden on Mobile) */}
          <div className="hidden md:flex text-white text-lg bg-[#004D4D] h-16 rounded-[50px] w-[595px] px-5 py-1 gap-10 justify-center items-center">
            <Link to="/" className="hover:text-gray-300 hover:scale-125 transition-transform duration-200">Home</Link>
            <Link to="/aboutus" className="hover:text-gray-300 hover:scale-125 transition-transform duration-200">About Us</Link>
            <Link to="/" className="hover:text-gray-300 hover:scale-125 transition-transform duration-200">Features</Link>
            <Link to="/contactus" className="hover:text-gray-300 hover:scale-125 transition-transform duration-200">Contact Us</Link>
          </div>

          {/* Right Section: Sign Up Button (Hidden on Mobile) */}
          <div className="hidden md:flex items-center gap-4 lg:me-5">
            <button onClick={handleOpenModal} className="button px-4 py-2 lg:px-8 lg:py-3">
              <div className="dots_border"></div>
              <span className="text_button text-white">Get a Free Demo</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            ref={menuButtonRef}
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white text-2xl focus:outline-none"
          >
            ☰
          </button>

          {/* Mobile Dropdown Menu */}
          {menuOpen && (
            <div
              ref={menuRef}
              className="absolute top-16 right-4 bg-[#039494] shadow-lg rounded-md w-40 py-2 flex flex-col space-y-2 text-center text-white z-50"
            >
              <Link to="/" onClick={handleLinkClick} className="hover:text-gray-300 hover:scale-125 transition-transform duration-200">Home</Link>
              <Link to="/aboutus" onClick={handleLinkClick} className="hover:text-gray-300">About Us</Link>
              <Link to="/" onClick={handleLinkClick} className="hover:text-gray-300">Features</Link>
              <Link to="/contactus" onClick={handleLinkClick} className="hover:text-gray-300">Contact Us</Link>
            </div>
          )}
        </nav>
      </div>
      <FreeDemoModal
       open={modalOpen}
       onClose={handleCloseModal}
       onAction={handleAction}
      />
    </div>
  );
};

export default Navbar;