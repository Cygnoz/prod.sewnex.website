import backgredient from "../assets/images/footer/bggradient.png";
import fb from "../assets/images/footer/Vector-1.png";
import insta from "../assets/images/footer/hugeicons_instagram.png";
import x from "../assets/images/footer/flowbite_x-solid.png";
import whatsapp from "../assets/images/footer/Vector-2.png";
import getintouch from "../assets/images/footer/get in touch.png";
import sewwnex from "../assets/images/footer/Sewnex.png";


function Footer() {
  return (
    <>
    <div className="relative bg-[#FFB974] text-white p-8 h-auto md:h-[359px]">
  {/* Background Image */}
  <img
    src={backgredient}
    alt="Background Gradient"
    className="absolute inset-0 w-full h-full object-cover z-0 opacity-20"
  />

  {/* Content */}
  <div className="flex flex-col md:flex-row justify-between relative z-10 p-6 md:p-10">
    <div className="w-full md:w-[597px]">
      <img src={getintouch} alt="" className="mx-auto md:mx-0" />
    </div>

    <div className="space-y-6 md:space-y-11 mt-6 text-center md:text-left">
      <p className="mt-4 text-[32px] md:text-[64px] leading-[1.2] font-bold underline decoration-skip-ink-none text-[#FC830B]">
        Get in touch
      </p>
      <div className="flex justify-center md:justify-start space-x-4">
        <a href="">
          <img src={whatsapp} alt="" className="w-[24px] h-[24px]" />
        </a>
        <a
          href="https://www.instagram.com/cygnoz_/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={insta} alt="" className="w-[24px] h-[24px]" />
        </a>
        <img src={x} alt="" className="w-[24px] h-[24px]" />
        <a
          href="https://www.facebook.com/cygnotechlabs/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={fb} alt="" className="w-[24px] h-[24px]" />
        </a>
      </div>
    </div>
  </div>
</div>

<footer className="bg-[#FFFFFF] py-10 h-[547px]">
  <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-y-8 gap-x-12 px-10 py-10">
    {/* Community Section */}
    <div className="">
      <h3 className="text-lg font-semibold mb-4">Community</h3>
      <p className="text-gray-600 mb-4">
        Stay up to date on Sewnex news, projects and more
      </p>
      <form className="flex items-center space-x-2">
        <input
          type="email"
          placeholder="Enter email"
          className="w-full p-2 border border-gray-300 rounded focus:outline-none"
        />
        <button
          type="submit"
          className="p-2 bg-gray-800 text-white rounded hover:bg-gray-700"
        >
          →
        </button>
      </form>
      <div className="mt-4 flex items-center space-x-2">
        <input
          type="checkbox"
          id="privacy"
          className="w-4 h-4 border-gray-300 focus:ring-gray-500"
        />
        <label htmlFor="privacy" className="text-gray-600">
          I accept the Privacy Policy
        </label>
      </div>
    </div>
    <div>
   
    </div>

    {/* About Sewnex Section */}
    <div>
      <h3 className="text-lg font-semibold mb-4">About Sewnex</h3>
      <ul className="space-y-2 text-gray-600">
        <li>Company Information</li>
        <li>Worldwide Directory</li>
        <li>Investor Relations</li>
        <li>Careers</li>
        <li>News and Press</li>
        <li>Events</li>
        <li>Customer Stories</li>
        <li>Newsletter</li>
      </ul>
    </div>

    {/* Quick Links Section */}
    <div>
      <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
      <ul className="space-y-2 text-gray-600">
        <li>Home</li>
        <li>About</li>
        <li>Features</li>
        <li>Implementation</li>
        <li>Blog</li>
        <li>Contact</li>
      </ul>
    </div>

    {/* Contact Us Section */}
    <div>
      <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
      <p className="text-gray-600">
        NM Arcade, Near All India Radio (AIR), NGO Quarters, Kochi, Kerala,
        India
      </p>
      <p className="text-gray-600 mt-2">+91 95 444 211 66</p>
      <p className="text-gray-600 mt-2">info@tailormateonline.com</p>
    </div>
  </div>

  <div className="flex flex-col lg:flex-row items-center justify-center px-6 py-4 space-y-4">
  <img className="w-full max-w-[300px] lg:max-w-none" src={sewwnex} alt="Sewnex Logo" />
  <p className="lg:absolute lg:ms-[1090px] lg:pb-[220px] text-center text-gray-600 text-sm lg:text-base">
    © Copyright 2024 sewnex® Inc. All rights reserved.
  </p>
</div>


</footer>

    </>
  );
}

export default Footer;
