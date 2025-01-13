import { useState } from "react";
import headerbg from "../assets/images/header/headerbg.png";
import header from "../assets/images/header/Frame 99.png";
import "./Header.css";
function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div
        className="bg-[#004040] h-[840px]"
        style={{ backgroundImage: `url(${headerbg})`, backgroundSize: "cover" }}
      >
        <nav className=" bg-opacity-60">
          <div className="px-4  flex justify-between items-center">
            {/* Menu Button */}
            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              className="text-xl  text-gray-400 focus:outline-none relative"
            >
              Menu
            </button>

            {/* Dropdown Menu */}
            {menuOpen && (
              <div className="absolute top-16 left-2 bg-transparent shadow-lg rounded-md w-40 py-2">
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-100 hover:text-[#039494]"
                >
                  Product
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-100 hover:text-[#039494]"
                >
                  Service
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-100 hover:text-[#039494]"
                >
                  Contact Us
                </a>
              </div>
            )}

            {/* Sign Up Button */}
            <div className="ml-2 flex justify-between gap-3 mt-5">
              <button className="button px-8 py-3">
                <div className="dots_border"></div>
                <span className="text_button text-white">Sign Up</span>
              </button>
              <h3 className="px-7 py-2 text-[#039494] text-2xl">Sewnex</h3>
            </div>
          </div>
        </nav>

        <div className="flex justify-between px-10 items-center  h-[700px]">
          <div className=" mt-[10px]">
            <img src={header} alt="" className="h-[390px] w-[618px] " />
          </div>
          <div className="flex justify-between gap-5 mt-[450px] mx-10">
            <button className="bg-[#FFFFFF] w-[250px] h-[54px]  rounded-full font-bold">
              Get a free demo
            </button>
            <button className="bg-[#90DDAF] w-[212px] h-[54px]  rounded-full font-bold">
              Watch Video
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
