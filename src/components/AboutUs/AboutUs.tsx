import blackBgImage from '../../assets/images/blackBg.png'
import aboutUs1 from '../../assets/images/aboutUs1.png'
import aboutUs2 from '../../assets/images/aboutUs2.png'
// import headerBg from '../../assets/images/aboutUsBg.png'
import headerBg2 from '../../assets/images/tinted_image (2).png'

type Props = {}

const AboutUs = ({ }: Props) => {
    return (
        <div>
            <div
                className="bg-[#004040] h-auto lg:h-[640px] pb-16 rounded-b-3xl"
            // style={{
            //     backgroundImage: `url(${blackBgImage})`,
            //     backgroundSize: "cover",
            //     backgroundPosition: "center",
            // }}
            >
                <div className="relative p-6 rounded-lg overflow-hidden mb-6">
                <div
                    className="relative bg-[#004040] bg-opacity-60 p-12 rounded-lg flex flex-col md:flex-row items-center md:items-start gap-6 
             bg-blend-multiply"
                    style={{
                        backgroundImage: `url(${blackBgImage})`,
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
            <div className="bg-[#1A1A1A] rounded-t-3xl w-full h-80">
                <div className="">
                    <div className="grid grid-cols-2 px-20 py-20">
                        <div className="col-span-1">
                            <p className="text-[#07C6C6] text-[50px] font-normal">Join The Sewnex Family</p>
                            <p className="text-[#D9D9D9] text-base font-normal">Sewnex isn't just about software; it's about being part of a community of passionate boutique owners who are shaping the future of retail. Ready to elevate your boutique? Let Sewnex be your trusted partner in growth.</p>
                        </div>
                        <div className="col-span-1 items-center ml-auto px-40 py-16">
                            <div className="rounded-[50px] bg-[#FFFFFF] w-fit h-12 flex justify-center items-center px-8">
                                <p className="text-[#232222] text-2xl font-medium">Get Started With Sewnex</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs