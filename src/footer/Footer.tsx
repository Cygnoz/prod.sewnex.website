import backgredient from "../assets/images/footer/bggradient.png";
import fb from "../assets/images/footer/Vector-1.png";
import insta from "../assets/images/footer/hugeicons_instagram.png";
import x from "../assets/images/footer/flowbite_x-solid.png";
import whatsapp from "../assets/images/footer/Vector-2.png";
// import getintouch from "../assets/images/footer/get in touch.png";
import sewwnex from "../assets/images/footer/Sewnex.png";


function Footer() {
  return (
    <>
      <div className="relative bg-[#FFB974] text-white p-6 sm:p-8 md:p-10 h-auto">
        {/* Background Image */}
        <img
          src={backgredient}
          alt="Background Gradient"
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-20"
        />

        {/* Content Section */}
        <div className="relative bg-[#FFB974] text-white p-6 sm:p-8 md:p-10 h-auto">
          {/* Background Image */}
          <img
            src={backgredient}
            alt="Background Gradient"
            className="absolute inset-0 w-full h-full object-cover z-0 opacity-20"
          />

          {/* Content Section */}
          <div className="relative z-10 grid grid-cols-2 items-center gap-4 sm:gap-6 md:flex md:justify-between text-center md:text-left">
            {/* Left Section - Text */}
            <div className="p-4 flex justify-center md:justify-start">
              <p className="text-[16px] sm:text-[20px] md:text-[32px] font-bold text-[#7F5303] leading-tight">
                Discover more about <br className="hidden sm:block" /> our offerings
              </p>
            </div>

            {/* Right Section - Get in Touch */}
            <div className="p-4 flex flex-col items-center md:items-start space-y-2 sm:space-y-4">
              <p className="text-[16px] sm:text-[20px] md:text-[32px] font-bold text-[#7F5303]">
                Get in touch
              </p>

              {/* Social Media Icons */}
              <div className="flex justify-center md:justify-start gap-2 sm:gap-4">
                <a href="#"><img src={whatsapp} alt="WhatsApp" className="w-[20px] sm:w-[24px]" /></a>
                <a href="https://www.instagram.com/cygnoz_/" target="_blank" rel="noopener noreferrer">
                  <img src={insta} alt="Instagram" className="w-[20px] sm:w-[24px]" />
                </a>
                <img src={x} alt="X (Twitter)" className="w-[20px] sm:w-[24px]" />
                <a href="https://www.facebook.com/cygnotechlabs/" target="_blank" rel="noopener noreferrer">
                  <img src={fb} alt="Facebook" className="w-[20px] sm:w-[24px]" />
                </a>
              </div>
            </div>
          </div>
        </div>


      </div>

      <footer className="bg-white py-10">
  <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-12 px-6 md:px-10 py-10">
    {/* About Us Section */}
    <div>
      <h3 className="text-lg font-semibold mb-4">About Us</h3>
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
      </ul>
    </div>

    {/* Contact Us Section */}
    <div>
      <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
      <p className="text-gray-600">
        NM Arcade, Near All India Radio (AIR), NGO Quarters, Kochi, Kerala, India
      </p>
      <p className="text-gray-600 mt-2">+91 95 444 211 66</p>
      <p className="text-gray-600 mt-2">notify@cygnoz.com</p>
    </div>

    {/* Community Section */}
    <div>
      <h3 className="text-lg font-semibold mb-4">Community</h3>
      <p className="text-gray-600 mb-4">
        Stay up to date on Sewnex news, projects and more
      </p>
      <form className="flex items-center border border-gray-300 rounded overflow-hidden">
        <input
          type="email"
          placeholder="Enter email"
          className="w-full p-2 focus:outline-none"
        />
        <button
          type="submit"
          className="p-2 bg-gray-800 text-white hover:bg-gray-700"
        >
          →
        </button>
      </form>
      <div className="mt-4 flex items-center">
        <input type="checkbox" id="privacy" className="w-4 h-4" />
        <label htmlFor="privacy" className="ml-2 text-gray-600">
          I accept the Privacy Policy
        </label>
      </div>
    </div>
  </div>

  {/* Logo and Copyright Section */}
  <div className="flex flex-col items-center mt-10">
    {/* Large Sewnex Logo */}
    <div className="mb-6 px-4">
      <img
        className="w-[180px] sm:w-[250px] md:w-[400px] lg:w-[500px] xl:w-[600px]"
        src={sewwnex}
        alt="Sewnex Logo"
      />
    </div>
    {/* Copyright Text */}
    <p className="text-gray-600 text-sm text-center px-4 whitespace-nowrap">
      © Copyright 2024 sewnex® Inc. All rights reserved.
    </p>
  </div>
</footer>




    </>
  );
}

export default Footer;
