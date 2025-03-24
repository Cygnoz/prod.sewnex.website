import blackBgImage from '../../assets/images/blackBg.png'
import aboutUs1 from '../../assets/images/aboutUs1.png'
import aboutUs2 from '../../assets/images/aboutUs2.png'
// import headerBg from '../../assets/images/aboutUsBg.png'
import headerBg2 from '../../assets/images/tinted_image (2).png'
import greenBg from '../../assets/images/greenColorBg.png'
import FaceBook from '../../assets/icons/FaceBook'
import Instagram from '../../assets/icons/Instagram'
import YouTube from '../../assets/icons/YouTube'
import Twitter from '../../assets/icons/Twitter'
import backgredient from "../../assets/images/FooterBg.png";

type Props = {}

const AboutUs = ({ }: Props) => {
    return (
        <div>
            <div
                className="bg-[#004040] h-auto lg:h-[680px] pb-16 rounded-b-3xl"
            // style={{
            //     backgroundImage: `url(${blackBgImage})`,
            //     backgroundSize: "cover",
            //     backgroundPosition: "center",
            // }}
            >
                <div className="relative p-6 rounded-lg overflow-hidden mb-6">
                    <div
                        className="relative p-12 rounded-lg flex flex-col md:flex-row items-center md:items-start gap-6 
             bg-blend-multiply"
                        style={{
                            backgroundImage: `url(${greenBg})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    >
                        <div className="relative w-[700px] h-[512px] ml-auto">
                            <img src={headerBg2} alt="Sewnex Threads" className="rounded-lg shadow-lg" />
                        </div>

                        {/* Text Section */}
                        <div className="absolute w-[750px] h-[416px] text-white bg-[#004040] p-16 ms-6 flex flex-col justify-center rounded-l-3xl rounded-br-[50px]">
                            <h2 className="text-2xl md:text-3xl font-bold text-green-400">About Sewnex</h2>
                            <p className="mt-4 text-gray-300 leading-relaxed">
                                At Sewnex, we understand that managing a boutique involves much more than just daily operations.
                                It’s about creating meaningful customer experiences while keeping inventory, staff, and sales running smoothly.
                                That’s why we’ve designed Sewnex to streamline the complexities, giving you more time to focus on what matters most—
                                nurturing relationships, growing your brand, and delivering top-notch service to your customers.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
            <div style={{
                backgroundImage: `url(${blackBgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}>
                <div className='grid grid-cols-12'>
                    <div className="col-span-5">
                        <div className='flex items-center justify-center px-6 py-10'>
                            <img className='w-[482px] h-[532px]' src={aboutUs1} alt="" />
                        </div>
                    </div>
                    <div className="col-span-7">
                        <div className='bg-[#FFFFFF] h-full px-20 py-48'>
                            <p className='text-[#003636] text-3xl font-semibold mb-4'>Why Sewnex?</p>
                            <p className='text-[#262525] text-xl font-normal'>To make boutique management as easy and enjoyable as <br />possible. By creating a reliable, intuitive tool that handles your <br />operational challenges, we free up your time so you can focus on <br />what you do best—delivering outstanding customer experiences <br />and building your brand</p>
                        </div>
                    </div>
                    {/* <div className="col-span-7">
                        <div className="bg-[#FFFFFF] h-full flex flex-col items-center justify-center">
                            <p className="text-[#003636] text-3xl font-semibold mb-4">Why Sewnex?</p>
                            <p className="text-[#262525] text-xl font-normal">
                                To make boutique management as easy and enjoyable as <br />
                                possible. By creating a reliable, intuitive tool that handles your <br />
                                operational challenges, we free up your time so you can focus on <br />
                                what you do best—delivering outstanding customer experiences <br />
                                and building your brand.
                            </p>
                        </div>
                    </div> */}

                </div>
                <div className='grid grid-cols-12 bg-[#004040] bg-opacity-60 w-full rounded-lg overflow-hidden'>
                    {/* <div className="col-span-4">
                <p className='text-[#35FC85] text-[36px] font-semibold flex items-center justify-center my-16'>Our Core Values</p>
                <div className='flex items-center justify-center'>
                    <img className='w-[435px] h-[524px]' src={aboutUs2} alt="" />
                </div>
            </div> */}
                    <div className="col-span-4 relative px-8 pt-8 w-full rounded-lg overflow-hidden">
                        <p className="text-[#35FC85] text-[36px] font-semibold flex items-center justify-center my-16 relative z-10">
                            Our Core Values
                        </p>
                        <div className="flex items-center justify-center relative z-10">
                            <img className="w-[435px] h-[524px] object-cover" src={aboutUs2} alt="" />
                        </div>
                        <div className="absolute inset-0 opacity-60 mix-blend-multiply"></div>
                    </div>

                    <div className="col-span-8">
                        <div className='bg-[#004040] h-full ms-10 items-center flex justify-center'>
                            <div className="grid grid-cols-2 px-28 gap-8 mt-4">
                                <div className="">
                                    <div className="flex gap-2 items-center">
                                        <p className='text-[60px] text-[#07C6C6] font-semibold'>01</p>
                                        <p className='text-2xl text-[#07C6C6] font-medium'>Efficiency</p>
                                    </div>
                                    <p className='text-[#FFFFFF] text-base font-normal'>Our features are built to simplify operations, reduce busywork, and enhance your workflow.</p>
                                </div>
                                <div className="">
                                    <div className="flex gap-2 items-center">
                                        <p className='text-[60px] text-[#07C6C6] font-semibold'>02</p>
                                        <p className='text-2xl text-[#07C6C6] font-medium'>Trust</p>
                                    </div>
                                    <p className='text-[#FFFFFF] text-base font-normal'>We're not just a tool — We're committed to being there for you when you need us</p>
                                </div>
                                <div className="">
                                    <div className="flex gap-2 items-center">
                                        <p className='text-[60px] text-[#07C6C6] font-semibold'>03</p>
                                        <p className='text-2xl text-[#07C6C6] font-medium'>Growth</p>
                                    </div>
                                    <p className='text-[#FFFFFF] text-base font-normal'>Sewnex grows with your business, and we're always looking for ways to add more value.</p>
                                </div>
                                <div className="">
                                    <div className="flex gap-2 items-center">
                                        <p className='text-[60px] text-[#07C6C6] font-semibold'>04</p>
                                        <p className='text-2xl text-[#07C6C6] font-medium'>Simplicity</p>
                                    </div>
                                    <p className='text-[#FFFFFF] text-base font-normal'>We believe in making things easy. Our software is intuitive, so you don't have to be a tech expert to use it.</p>
                                </div>
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

export default AboutUs