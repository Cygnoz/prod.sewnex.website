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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 px-12 gap-4">
          <div className="col-span-1">
          <p className="text-[#232222] text-2xl font-medium">Address</p>
          <p className="text-[#786D6D] text-base font-normal text-start">Cygnonex Innovations Private Limited, Mythripuram Road, Near AIR, NGO Quarters, Thrikkakara PO, Kochi, Kerala, India, 682021</p>
          </div>
          <div className="col-span-1 lg:ms-20">
          <p className="text-[#232222] text-2xl font-medium">Contact</p>
          <div className="flex gap-1 items-center">
            <Mail size={18} color="#232222"/>
            <p className="text-[#786D6D] text-center text-base font-normal">notify@sewnex.com</p>
          </div>
          <div className="flex gap-1 items-center">
            <PhoneIcon   size={18} color="#232222"/>
            <p className="text-[#786D6D] text-center text-base font-normal">+919544421166</p>
          </div>
          </div>
          <hr className="lg:rotate-90 lg:border-dashed lg:border-[#0BA158] lg:w-80 lg:-ms-10 lg:mt-24" />
          
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
            <li><a href="/customerStories">Customer Stories</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-[#232222] text-2xl font-medium mb-1">Learn</h3>
          <ul className="text-[#786D6D] font-normal text-base space-y-1">
            <li><a href="/blogs">Blogs</a></li>
            <li><a href="/knowledge-base">Knowledge Base</a></li>
            <li><a href="/news-and-events">News & Events</a></li>
          </ul>
        </div>
          
          <div className="col-span-1">
          <div className="lg:flex gap-4 mt-10">
            <img className="w-24 h-16" loading="lazy" src={footer1} alt="" />
            <img className="w-28 h-14" loading="lazy" src={footer2} alt="" />
            <img className="w-32 h-14" loading="lazy" src={footer3} alt="" />
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
