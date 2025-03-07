import headerbg from "../assets/images/header/headerbg.png";
import header from "../assets/images/header/Frame 99.png";
import "./Header.css";
import { useEffect, useRef, useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close the menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event:any) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <>
      <div
  className="bg-[#004040] h-auto lg:h-[840px] pb-10"
  style={{
    backgroundImage: `url(${headerbg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
<nav className="bg-opacity-60 w-full py-4 px-6 flex justify-between items-center relative">
      {/* Left Section: Logo */}
      <h3 className="text-[#039494] text-2xl font-bold">Sewnex</h3>

      {/* Center Section: Navigation Menu (Hidden on Mobile) */}
      <div className="hidden md:flex space-x-6 text-white text-lg">
        <a href="#" className="hover:text-gray-300">Product</a>
        <a href="#" className="hover:text-gray-300">Services</a>
        <a href="#" className="hover:text-gray-300">Pricing</a>
        <a href="#" className="hover:text-gray-300">Contact Us</a>
      </div>

      {/* Right Section: Sign Up Button (Hidden on Mobile) */}
      <div className="hidden md:flex items-center gap-4 lg:me-5">
        <button className="button px-4 py-2 lg:px-8 lg:py-3">
          <div className="dots_border"></div>
          <span className="text_button text-white">Sign Up</span>
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden text-white text-2xl focus:outline-none"
      >
        ☰
      </button>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div
          ref={menuRef}
          className="absolute top-16 right-4 bg-[#039494] shadow-lg rounded-md w-40 py-2 flex flex-col space-y-2 text-center text-white"
        >
          <a href="#" className="py-2 hover:text-black">Product</a>
          <a href="#" className="py-2 hover:text-black">Services</a>
          <a href="#" className="py-2 hover:text-black">Pricing</a>
          <a href="#" className="py-2 hover:text-black">Contact Us</a>
        </div>
      )}
    </nav>


  <div className="flex flex-col lg:flex-row justify-between items-center px-5 lg:px-10 h-auto lg:h-[700px]">
    {/* Header Image */}
    <div className="mt-5 lg:mt-[10px]">
      <img
        src={header}
        alt="Header"
        className="max-w-[90%] sm:max-w-[70%] md:max-w-[60%] lg:w-[618px] h-auto"
      />
    </div>

    {/* Call to Actions */}
    <div className="flex flex-row justify-center items-center gap-3 sm:gap-5 mt-5 lg:mt-[280px] mx-2 lg:mx-10 ">
      <button className="bg-white px-[30px] sm:w-[200px] md:w-[220px] lg:w-[250px] h-[54px] rounded-full font-bold no">
        Get a free demo
      </button>
      <button className="bg-[#90DDAF] px-[30px] sm:w-[200px] md:w-[20px] lg:w-[250px] h-[54px] rounded-full font-bold">
        Watch Video
      </button>
    </div>
  </div>
</div>

    </>
  );
}

export default Header;
