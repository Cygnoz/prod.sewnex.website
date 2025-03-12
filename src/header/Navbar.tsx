import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom"
import '../header/Header.css'

type Props = {}

const Navbar = ({}: Props) => {
    
       const [menuOpen, setMenuOpen] = useState(false);
        const menuRef = useRef<HTMLDivElement>(null);
      
        useEffect(() => {
          const handleClickOutside = (event: any) => {
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
    <div>
        <div className="bg-[#004040] w-full h-auto">
<nav className="bg-opacity-60 w-full py-4 px-6 flex justify-between items-center relative">
          {/* Left Section: Logo */}
          <h3 className="text-[#039494] text-2xl font-bold">Sewnex</h3>

          {/* Center Section: Navigation Menu (Hidden on Mobile) */}
          <div className="hidden md:flex text-white text-lg bg-[#004D4D] h-16 rounded-[50px] w-[595px] px-5 py-1 gap-10 justify-center items-center">
            <Link to="/" className="hover:text-gray-300 hover:scale-125 transition-transform duration-200">Home</Link>
            <Link to="/aboutus" className="hover:text-gray-300">About Us</Link>
            <Link to="/features" className="hover:text-gray-300">Features</Link>
            <Link to="/contactus" className="hover:text-gray-300">Contact Us</Link>
          </div>

          {/* Right Section: Sign Up Button (Hidden on Mobile) */}
          <div className="hidden md:flex items-center gap-4 lg:me-5">
            <button className="button px-4 py-2 lg:px-8 lg:py-3">
              <div className="dots_border"></div>
              <span className="text_button text-white">Get a Free Demo</span>
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
              <Link to="/" className="hover:text-gray-300 hover:scale-125 transition-transform duration-200">Home</Link>
              <Link to="/aboutus" className="hover:text-gray-300">About Us</Link>
              <Link to="/features" className="hover:text-gray-300">Features</Link>
              <Link to="/contactus" className="hover:text-gray-300">Contact Us</Link>
            </div>
          )}
        </nav>
</div>
    </div>
  )
}

export default Navbar