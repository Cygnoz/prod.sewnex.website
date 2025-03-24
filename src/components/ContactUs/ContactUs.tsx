import FaceBook from "../../assets/icons/FaceBook"
import Instagram from "../../assets/icons/Instagram"

import Twitter from "../../assets/icons/Twitter"
import YouTube from "../../assets/icons/YouTube"
import person from '../../assets/images/ContactUsImg.webp'
// import blackBgImage from '../../assets/images/blackBg.png'
import headerBg from '../../assets/images/contactUsBg.png'
import greenBg from '../../assets/images/greenColorBg.png'
import backgredient from "../../assets/images/FooterBg.png";

type Props = {}

const ContactUs = ({ }: Props) => {
    return (
        <div>
            <div className="bg-[#004040] h-auto pb-10 lg:h-[400px]">
      <div className="relative py-8 px-6 md:px-10 rounded-lg overflow-hidden mb-6">
        <div
          className="relative rounded-3xl flex flex-col md:flex-row items-center gap-6 bg-blend-multiply"
          style={{
            backgroundImage: `url(${greenBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "300px",
          }}
        >
          <div className="p-8 md:p-16 flex flex-col max-w-xl">
            <p className="text-[#35FC85] text-4xl md:text-5xl lg:text-[64px] font-medium">
              Contact Us
            </p>
            <p className="text-[#E5E5E5] text-base md:text-lg lg:text-xl font-normal mt-4">
              Transform your boutique experience with us. Let's connect
              and craft the perfect solution for your business.
            </p>
          </div>

          <div className="w-full flex justify-between md:justify-end">
            <img
              className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:w-[500px] h-auto"
              src={headerBg}
              alt="Contact Us"
            />
          </div>
        </div>
      </div>
    </div>
            <div className="bg-[#262525] w-full lg:h-[750px] overflow-hidden">
      <div className="bg-[#F6F6F6] w-full min-h-[800px] overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
          {/* Left Section */}
          <div className="lg:col-span-5 px-8 lg:px-14 mt-20 text-center lg:text-left">
            <p className="text-[#002222] text-3xl font-semibold">Have Something On Your Mind?</p>
            <p className="text-[#555555] text-lg lg:text-xl font-normal my-4">
              Fill out the form below, and we'll get back to you as soon as possible. We love hearing from salon owners, staff, and professionals who are looking for a smarter way to manage their business.
            </p>
            <div className="flex justify-center lg:justify-start mt-10">
              <img
                className="w-full max-w-[534px] h-auto rounded-t-[30px]"
                src={person}
                alt="Contact Person"
              />
            </div>
          </div>

          {/* Right Section (Form) */}
          <div className="lg:col-span-7 flex justify-center mt-10 lg:mt-14">
            <div className="bg-[#004040] lg:rounded-tl-[50px] lg:rounded-tr-xl w-full max-w-[796px] lg:h-[700px] p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {['Name', 'Email', 'Phone Number', 'Company Name'].map((label) => (
                  <div key={label} className="w-full">
                    <label className="text-[#FFFFFF] text-xl font-normal block">{label}</label>
                    <input
                      type="text"
                      placeholder={`Enter Your ${label}`}
                      className="bg-[#004040] text-[#FFFFFF40] text-sm font-normal w-full h-10 my-1 border-b border-[#FEFEFE85] focus:ring-0 focus:outline-none p-2"
                    />
                  </div>
                ))}
              </div>

              <div className="w-full mt-6">
                <label className="text-[#FFFFFF] text-xl font-normal block">Company Address</label>
                <input
                  type="text"
                  placeholder="Enter Address"
                  className="bg-[#004040] text-[#FFFFFF40] text-sm font-normal w-full h-10 my-1 border-b border-[#FEFEFE85] focus:ring-0 focus:outline-none p-2"
                />
              </div>

              <div className="w-full mt-6">
                <label className="text-[#FFFFFF] text-xl font-normal block">Message</label>
                <textarea
                  placeholder="Enter Message"
                  className="w-full rounded-lg h-32 my-1 border border-[#FEFEFE85] bg-[#004040] text-[#FFFFFF40] text-sm font-normal focus:ring-0 focus:outline-none p-2"
                ></textarea>
              </div>

              <div className="flex justify-center mt-8">
  <button className="rounded-[50px] bg-[#FFFFFF] w-fit h-12 flex justify-center items-center px-8 py-2">
    <p className="text-[#232222] text-2xl font-medium">Send Message</p>
  </button>
</div>

            </div>
          </div>
        </div>
      </div>
    </div>
         
            <div className="relative bg-black text-white p-6 sm:p-8 md:p-10 h-auto lg:rounded-t-[30px]">
                <img
                    src={backgredient}
                    loading="lazy"
                    alt="Background Gradient"
                    className="absolute inset-0 w-full h-full z-0 opacity-20 lg:rounded-t-[30px]"
                />

<div className="relative bg-black text-white  p-4 sm:p-6 md:p-10 h-auto lg:rounded-t-[30px]">
        {/* Background Gradient */}
        <img
          src={backgredient}
          loading="lazy"
          alt="Background Gradient"
          className="absolute inset-0 w-full h-full z-0 opacity-20 lg:rounded-t-[30px]"
        />

        {/* Content Section */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 items-center gap-4 sm:gap-6 md:flex md:justify-between text-center md:text-left">

          {/* Text Section */}
          <div className="p-4 flex flex-col items-center md:items-start">
            <p className="text-2xl sm:text-3xl md:text-[42px] font-normal text-[#07C6C6] leading-tight text-center md:text-left">
              Stay connected, stay inspired.
            </p>
            <p className="text-[#D9D9D9] text-sm sm:text-base font-normal my-2 text-center md:text-left">
              Join us on social media and be part of the Sewnex community.
            </p>
          </div>

          {/* Social Media Section */}
          <div className="p-4 flex flex-col items-center justify-center space-y-2">
            <p className="text-xl sm:text-2xl md:text-[42px] font-medium text-[#D9D9D9] text-center">
              Follow Us On
            </p>

            {/* Social Icons */}
            <div className="flex flex-wrap justify-center md:justify-start gap-3 sm:gap-4 items-center">
              <a href="https://www.facebook.com/cygnotechlabs/" target="_blank" rel="noopener noreferrer">
                <FaceBook bg="#FEFEFE" size={26} />
              </a>
              <a href="https://www.instagram.com/cygnoz_/" target="_blank" rel="noopener noreferrer">
                <Instagram bg="#FEFEFE" color="" size={32} />
              </a>
              <a href="" target="_blank" rel="noopener noreferrer">
                <YouTube bg="#FEFEFE" color="" size={32} />
              </a>
              <Twitter bg="#FEFEFE" color="" size={24} />
            </div>
          </div>

        </div>
      </div>
            </div>
        </div>
    )
}

export default ContactUs