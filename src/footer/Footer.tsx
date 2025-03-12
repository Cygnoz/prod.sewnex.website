// import backgredient from "../assets/images/footer/bggradient(f).png";
// import sewwnex from "../assets/images/footer/Sewnex.png";
// import ArrowRight from "../assets/icons/arrowRight";
// import WhatsappIcon from "../assets/icons/WhatsappIcon";
// import InstagramIcon from "../assets/icons/InstagramIcon";
// import TwitterIcon from "../assets/icons/TwitterIcon";
// import FacebookIcon from "../assets/icons/FacebookIcon";
import Mail from "../assets/icons/Mail";
import PhoneIcon from "../assets/icons/PhoneIcon";
import footer1 from '../assets/images/Footer1.png'
import footer2 from '../assets/images/Footer2.png'
import footer3 from '../assets/images/Footer3.png'

function Footer() {
  return (
    <>
      {/* <div className="relative bg-[#FFB974] text-white p-6 sm:p-8 md:p-10 h-auto">
        <img
          src={backgredient}
          loading="lazy"
          alt="Background Gradient"
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-20"
        />

        <div className="relative z-10 grid grid-cols-2 items-center gap-4 sm:gap-6 md:flex md:justify-between text-center md:text-left">
          <div className="p-4 flex justify-center md:justify-start">
            <p className="text-[16px] sm:text-[20px] md:text-[32px] font-bold text-[#7F5303] leading-tight">
              Discover more about <br className="hidden sm:block" /> our offerings
            </p>
          </div>

          <div className="p-4 flex flex-col items-center md:items-start space-y-2 sm:space-y-4">
            <p className="text-[16px] sm:text-[20px] md:text-[32px] font-bold text-[#A06600]">
              Get in touch
            </p>

            <div className="flex justify-center md:justify-start gap-2 sm:gap-4 items-center">
              <a><WhatsappIcon color="#A06600" size={24} /></a>
              <a href="https://www.instagram.com/cygnoz_/" target="_blank" rel="noopener noreferrer">
                <InstagramIcon size={24} />
              </a>
              <TwitterIcon size={24} />
              <a href="https://www.facebook.com/cygnotechlabs/" target="_blank" rel="noopener noreferrer">
                <FacebookIcon color="#A06600" size={24} />
              </a>
            </div>
          </div>
        </div>
      </div> */}

      <footer className="bg-white py-10">

        <div className="">
          <div>
          <div className="flex items-center gap-4 px-12 py-4">
          <div className="flex -space-x-2">
          <div className="rounded-full bg-[#32B271] w-12 h-12"></div>
          <div className="rounded-full bg-[#0BA158] w-12 h-12"></div>
          </div>
          <p className="text-[#232222] text-3xl font-medium">Sewnex</p>
        </div>
        <div className="grid grid-cols-6 px-12 gap-4">
          <div className="col-span-1">
          <p className="text-[#232222] text-2xl font-medium">Address</p>
          <p>Cygonex Innovations Private Limited, NM Arcade, Near All India Radio (AIR), NGO Quarters Kakkanad, Kochi, Kerala, India</p>
          </div>
          <div className="col-span-1 ms-20">
          <p className="text-[#232222] text-2xl font-medium">Contact</p>
          <div className="flex gap-1 items-center">
            <Mail size={18} color="#232222"/>
            <p className="text-[#786D6D] text-center text-base font-normal">notify@sewnex.com</p>
          </div>
          <div className="flex gap-1 items-center">
            <PhoneIcon   size={18} color="#232222"/>
            <p className="text-[#786D6D] text-center text-base font-normal">+919544431166</p>
          </div>
          </div>
          <hr className="rotate-90 border-dashed border-[#0BA158] w-80 -ms-10 mt-24" />
          {/* <div className="col-span-1">
          <p className="text-[#232222] text-2xl font-medium mb-1">Site Info</p>
          <p className="my-1 text-[#786D6D] font-normal text-base">Legal Privacy</p>
          <p className="text-[#786D6D] font-normal text-base">Terms & Services</p>
          <p className="my-1 text-[#786D6D] font-normal text-base">Security</p>
          </div> */}
          <div>
          <h3 className="text-[#232222] text-2xl font-medium mb-1">Site Info</h3>
          <ul className="text-[#786D6D] font-normal text-base space-y-1">
            <li><a href="/privacy-policy">Legal Privacy</a></li>
            <li><a href="/security">Security</a></li>
            <li><a href="/terms-and-conditions">Terms & Services</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-[#232222] text-2xl font-medium mb-1">About Sewnex</h3>
          <ul className="text-[#786D6D] font-normal text-base space-y-1">
            <li><a href="/aboutus">About Us</a></li>
            <li><a href="/contactus">Contact Us</a></li>
            <li><a href="">Customer Stories</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-[#232222] text-2xl font-medium mb-1">Learn</h3>
          <ul className="text-[#786D6D] font-normal text-base space-y-1">
            <li><a href="/">Blogs</a></li>
            <li><a href="/">Knowledge Base</a></li>
            <li><a href="/">News & Events</a></li>
          </ul>
        </div>
          {/* <div className="col-span-1">
          <p className="text-[#232222] text-2xl font-medium">About Sewnex</p>
          <p className="my-1 text-[#786D6D] font-normal text-base">About Us</p>
          <p className="text-[#786D6D] font-normal text-base">Contact Us</p>
          <p className="my-1 text-[#786D6D] font-normal text-base">Customer Stories</p>
          </div>
          <div className="col-span-1">
          <p className="text-[#232222] text-2xl font-medium">Learn</p>
          <p className="my-1 text-[#786D6D] font-normal text-base">Blogs</p>
          <p className="text-[#786D6D] font-normal text-base">Knowledge Base</p>
          <p className="my-1 text-[#786D6D] font-normal text-base">News & Events</p>
          </div> */}
          <div className="col-span-1">
          <div className="flex gap-4 mt-10">
            <img className="w-24 h-16" src={footer1} alt="" />
            <img className="w-28 h-14" src={footer2} alt="" />
            <img className="w-32 h-14" src={footer3} alt="" />
          </div>
          </div>
        </div>
          </div>
        </div>
      </footer>
      <div className="bg-[#004040] flex flex-col md:flex-row justify-between text-center md:text-left h-auto md:h-[60px] p-2">
    <div className="ml-auto px-6 flex items-center justify-end">
      <p className="text-[#FFFFFF] text-sm">Sewnex 2024 | All Rights Reserved</p>
    </div>
  </div>
    </>
  );
}

export default Footer;
