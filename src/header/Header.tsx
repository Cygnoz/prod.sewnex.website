import { useState } from "react";
import headerbg from "../assets/images/header/headerbg.png";
import header from "../assets/images/header/Frame 99.png";
import "./Header.css";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
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
        <nav className="bg-opacity-60">
          <div className="px-4 flex justify-between items-center">
          <button
              onClick={() => setMenuOpen((prev) => !prev)}
              className="text-xl text-gray-400 focus:outline-none  relative"
            >
              Menu
            </button>
            {/* Dropdown Menu */}
            {menuOpen && (
              <div className="absolute top-16 left-2 bg-[#039494] shadow-lg rounded-md w-40 py-2">
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-100 hover:text-black"
                >
                  Product
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-100 hover:text-black"
                >
                  Service
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-100 hover:text-black"
                >
                  Contact Us
                </a>
              </div>
            )}

            {/* Brand & Sign Up */}
            <div className="flex items-center gap-4 mt-5 lg:me-5">
              
              <button className="button px-4 py-2 lg:px-8 lg:py-3">
                <div className="dots_border"></div>
                <span className="text_button text-white">Sign Up</span>
              </button>
              <h3 className="text-[#039494] text-2xl">Sewnex</h3>
            </div>
          </div>
        </nav>

        <div className="flex flex-col lg:flex-row justify-between items-center px-5 lg:px-10 h-auto lg:h-[700px]">
          {/* Header Image */}
          <div className="mt-5 lg:mt-[10px]">
            <img
              src={header}
              alt="Header"
              className="max-w-full h-auto lg:h-[390px] lg:w-[618px]"
            />
          </div>

          {/* Call to Actions */}
          <div className="flex flex-col lg:flex-row justify-center items-center gap-5 mt-5 lg:mt-[450px] mx-2 lg:mx-10">
            <button className="bg-[#FFFFFF] w-[212px] lg:w-[250px] h-[54px] rounded-full font-bold">
              Get a free demo
            </button>
            <button className="bg-[#90DDAF] w-[212px]  lg:w-[212px] h-[54px] rounded-full font-bold ">
              Watch Video
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
