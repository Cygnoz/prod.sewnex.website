import FaceBook from "../../assets/icons/FaceBook"
import Instagram from "../../assets/icons/Instagram"
import LocationIcon from "../../assets/icons/LocationIcon"
import Mail from "../../assets/icons/Mail"
import PhoneIcon from "../../assets/icons/PhoneIcon"
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
            <div
                className="bg-[#004040] h-auto lg:h-[500px] pb-10">
                    <div className="relative py-8 px-10 rounded-lg overflow-hidden mb-6">
                    <div
                    className="relative rounded-3xl flex flex-col md:flex-row items-center md:items-start gap-6 
             bg-blend-multiply"
                    style={{
                        backgroundImage: `url(${greenBg})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        height: '350px'
                    }}
                >
                   <div className="flex">
                   <div className="p-16 flex flex-col">
                        <p className="text-[#35FC85] text-[64px] font-medium">Contact Us</p>
                        <p className="text-[#E5E5E5] text-xl font-normal">Transform your boutique experience with us. Let's connect <br />and craft the perfect solution for your business</p>
                    </div>
                    <div className="ml-auto ms-80">
                        <img className="w-[500px] h-[350px]" src={headerBg} alt="" />
                    </div>
                   </div>
                </div>
                    </div>
            </div>
            <div className="bg-[#262525] w-full h-[600px] overflow-hidden">
                <div className="grid grid-cols-12 items-center">
                    <div className="col-span-5 px-14 ms-10 mt-14">
                        <p className="text-[#FFFFFF] text-3xl font-medium">Have Something On Your Mind?</p>
                        <p className="text-[#E9EBF8] text-xl font-normal my-4">Fill out the form below, and we'll get back to you as soon as possible. We love hearing from salon owners, staff, and professionals who are looking for a smarter way to manage their business</p>
                    </div>
                    <div className="col-span-7">
                        <div className="bg-[#07C6C638] rounded-tl-[50px] rounded-tr-xl w-[700px] h-[500px] mt-24 ml-auto me-10">
                            <div className="grid grid-cols-2 gap-10 p-6">
                                <div className="w-full mt-8">
                                    <label className="text-[#FFFFFF] text-xl font-normal block">Name</label>
                                    <input type="text" placeholder="Enter Your Name" className="bg-[#204848] text-[#FFFFFF40] text-sm font-normal w-full h-9 my-1 border-b border-[#FEFEFE85] focus:ring-0 focus:outline-none p-2" />
                                </div>
                                <div className="w-full mt-8">
                                    <label className="text-[#FFFFFF] text-xl font-normal">Email</label>
                                    <input type="text" placeholder="Enter Your Email" className="bg-[#204848] text-[#FFFFFF40] text-sm font-normal w-full h-9 my-1 border-b border-[#FEFEFE85] focus:ring-0 focus:outline-none p-2" />
                                </div>
                                <div className="w-full">
                                    <label className="text-[#FFFFFF] text-xl font-normal">Phone Number</label>
                                    <input type="text" placeholder="Enter Your Phone Number" className="bg-[#204848] text-[#FFFFFF40] text-sm font-normal w-full h-9 my-1 border-b border-[#FEFEFE85] focus:ring-0 focus:outline-none p-2" />
                                </div>
                                <div className="w-full">
                                    <label className="text-[#FFFFFF] text-xl font-normal">Company/Organization Name</label>
                                    <input type="text" placeholder="Enter Name" className="bg-[#204848] text-[#FFFFFF40] text-sm font-normal w-full h-9 my-1 border-b border-[#FEFEFE85] focus:ring-0 focus:outline-none p-2" />
                                </div>
                            </div>
                            <div className="w-full p-6">
                                <label className="text-[#FFFFFF] text-xl font-normal block">Message</label>
                                <textarea className="w-full rounded-lg h-20 my-1 border border-[#FEFEFE85] bg-[#204848] text-[#FFFFFF40] text-sm font-normal focus:ring-0 focus:outline-none p-2"></textarea>
                            </div>
                            <div className="rounded-[50px] bg-[#FFFFFF] w-fit h-12 flex justify-center items-center px-10 py-6 ms-60">
                                <p className="text-[#232222] text-2xl font-medium">Send Message</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#EFFFEB] w-full h-[700px]">
                <div className="grid grid-cols-12 items-center">
                    <div className="col-span-5 flex justify-center items-center">
                        <img className="w-[534px] h-[605px] my-12 filter sepia-[40%] hue-rotate-[60deg] brightness-90 contrast-90" src={person} alt="" />
                    </div>
                    <div className="col-span-1"></div>
                    <div className="col-span-6">
                        <p className="text-[#004D4D] text-3xl font-semibold mb-10">Our Direct Lines</p>
                        <div className="flex gap-2 items-center my-6">
                            <div className="bg-[#004D4D] rounded-full w-12 h-12 flex justify-center items-center">
                                <PhoneIcon bg="#FFFFFF" color="#FFFFFF" />
                            </div>
                            <div>
                                <p className="text-[#004D4D] text-2xl font-medium">Call Us  <span className="text-[#32E379] text-2xl font-medium">+91 95 444 211 66</span></p>
                                <p className="text-[#004D4D] text-base font-normal">We're ready to assist you during our office hours</p>
                            </div>
                        </div>
                        <div className="flex gap-2 items-center my-6">
                            <div className="bg-[#004D4D] rounded-full w-12 h-12 flex justify-center items-center">
                                <Mail bg="#FFFFFF" size={18} color="#004D4D" />
                            </div>
                            <div>
                                <p className="text-[#004D4D] text-2xl font-medium">Reach us directly at  <span className="text-[#32E379] text-2xl font-medium">info@salonexonline.com</span></p>
                                <p className="text-[#004D4D] text-base font-normal">for any inquiries or assistance</p>
                            </div>
                        </div>
                        <div className="flex gap-2 items-center my-4">
                            <div className="bg-[#004D4D] rounded-full w-12 h-12 flex justify-center items-center">
                                <LocationIcon color="#FFFFFF" />
                            </div>
                            <div>
                                <p className="text-[#004D4D] text-2xl font-medium">Visit Us  <span className="text-[#32E379] text-2xl font-medium underline">Get The Location</span></p>
                                <p className="text-[#004D4D] text-base font-normal">Want to meet in person? We'd be happy to chat!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative bg-black text-white p-6 sm:p-8 md:p-10 h-auto rounded-t-[30px]">
                <img
                    src={backgredient}
                    loading="lazy"
                    alt="Background Gradient"
                    className="absolute inset-0 w-full h-full z-0 opacity-20 rounded-t-[30px]"
                />

                <div className="relative z-10 grid grid-cols-2 items-center gap-4 sm:gap-6 md:flex md:justify-between text-center md:text-left">
                    <div className="p-4 flex justify-center md:justify-start">
                        <div>
                            <p className="text-[42px] font-normal text-[#07C6C6] leading-tight">
                                Stay connected, stay inspired.
                            </p>
                            <p className="text-[#D9D9D9] text-base font-normal my-2">Join us on social media and be part of the Sewnex community.
                            </p>
                        </div>
                    </div>

                    <div className="p-4 flex flex-col items-center justify-center space-y-2">
                        <p className="text-[42px] font-medium text-[#D9D9D9]">
                            Follow Us On
                        </p>

                        <div className="flex justify-center md:justify-start gap-2 sm:gap-4 items-center">
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
    )
}

export default ContactUs