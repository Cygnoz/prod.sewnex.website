import img from '../../assets/images/blogProfile.png'
// import img1 from '../../assets/images/customerBg.png'
import img1 from '../../assets/images/customerStoriesBg.jpg'
import img2 from '../../assets/images/customerStoriesImage3.png'
import img3 from '../../assets/images/customerStoriesBg2.png'
import img4 from '../../assets/images/customerStoriesImage2.png'
import img5 from '../../assets/images/customerStoriesProfile.png'
import StarIcon from '../../assets/icons/StarIcon'
import SearchIcon from '../../assets/icons/SearchIcon'
import Twitter from '../../assets/icons/Twitter'
import YouTube from '../../assets/icons/YouTube'
import Instagram from '../../assets/icons/Instagram'
import FaceBook from '../../assets/icons/FaceBook'
import backgredient from "../../assets/images/FooterBg.png";


type Props = {}

const CustomerStories = ({ }: Props) => {
    return (
        <div>
            <div className="mt-5 ">
                {/* Profile Images Section */}
                <div className="flex items-center justify-center">
                    <div className="flex items-center border rounded-full p-2 bg-white">
                        <div className="flex -space-x-4 items-center">
                            <img
                                src={img}
                                alt=""
                                className="w-10 h-10 rounded-full border-2 border-white"
                            />
                            <img
                                src={img}
                                alt=""
                                className="w-10 h-10 rounded-full border-2 border-white"
                            />
                            <img
                                src={img}
                                alt=""
                                className="w-10 h-10 rounded-full border-2 border-white"
                            />
                            <img
                                src={img}
                                alt=""
                                className="w-10 h-10 rounded-full border-2 border-white"
                            />
                            {/* <div className="w-10 h-10 flex items-center justify-center bg-blue-200 text-black text-sm font-medium rounded-full border-2 border-white">
              +50
            </div> */}
                        </div>
                        <p className="ml-3">Loved by many satisfied customers</p>
                    </div>
                </div>

                {/* Heading Section */}
                <div className="relative text-center justify-start items-center mt-5">
                    <p className='text-[#002222] text-[48px] font-semibold'>Empowering businesses with a growing base <br />of <span className='text-[#7F5303]'>satisfied customers!</span></p>
                </div>

                {/* Customer Stories Section */}
                <div className="flex items-center justify-center mt-5">
                    <div
                        className="relative h-[614px] w-[1206px] flex items-center"
                        style={{
                            backgroundImage: `url(${img1})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    >

                        <div className="absolute top-20 left-10 bg-[#00000033] border border-[#4E4E4E] bg-opacity-50 text-white p-5 rounded-xl w-80">
                            <h2 className="text-lg font-normal text-[#FFFFFF]">Driving Your Growth</h2>
                            <p className="text-sm mt-2 text-[#EEEEEE] font-['YDGothic 100 Pro'] font-normal">
                                Our expertise delivers measurable impact—efficiency, scalability, and
                                innovation combined into success.
                            </p>
                            <div className="mt-3">
                                <div className="relative h-2 bg-gray-700 rounded-full">
                                    <div className="absolute top-0 left-0 h-2 bg-[#7F5303] rounded-full" style={{ width: "95%" }}></div>
                                </div>
                                <p className="text-right text-sm mt-1">95%</p>
                            </div>
                            <p className="text-xs">Customer Success Rate</p>
                        </div>
                        {/* Left Floating Card */}

                        {/* Right Floating Card */}
                        <div className="absolute top-20 right-10 bg-[#5E5E5E1A] border border-[#4E4E4E] bg-opacity-50 text-white p-5 rounded-xl w-80">
                            <h2 className="text-lg text-[#FFFFFF] font-normal font-['YDGothic 100 Pro']">Innovative Solutions</h2>
                            <p className="text-sm mt-2 text-[#EDEDED] font-normal font-['YDGothic 100 Pro']">
                                Empowering businesses with cutting-edge technology and creative
                                strategies to stay ahead in the digital age.
                            </p>
                        </div>
                        <div className="absolute bottom-8 left-6 w-52 h-48 bg-[#00000040] border border-[#FFFFFFB5] shadow-2xl rounded-xl p-4">
                            <img className='w-11 h-11 mt-2' src={img2} alt="" />
                            <div className="text-[#FFFFFF] text-base font-bold my-2 pe-10">
                                Free Customer Trial
                            </div>
                            <div className="text-[#FFFFFFA3] text-[8px] font-normal">
                                Lorem ipsum dolor sit Lorem ipsum dolor sit ametLorem ipsum dolor
                                sit Lorem ipsum dolor sit ametA
                            </div>
                        </div>

                        <div className="absolute bottom-28 flex items-center left-[450px] border border-[#FFFFFFB5] justify-center bg-[#00000040] rounded-full px-4 py-2 shadow-lg">
                            <span className="text-[#FFFFFF85] text-sm font-normal">
                                <SearchIcon/>
                            </span>
                            <input
                                type="text"
                                placeholder="Why is Sewnex The Best"
                                className="ml-2 outline-none bg-transparent text-[#FFFFFF85] text-sm font-normal"
                            />
                        </div>
                    </div>
                </div>

                <div
                    className="w-full h-[185px] px-6 flex-col items-start gap-2.5"
                    style={{
                        backgroundImage: `url(${img3})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    <div className="h-[145px] inline-flex justify-center items-center gap-[184px] px-10">
                        <div className="h-[90px] inline-flex flex-col items-start gap-2">
                            <div className="relative justify-start text-[#212121] text-[42px] font-semibold">
                                What we're doing
                            </div>
                            <div className="w-[600px] relative justify-start text-[#212121] text-xl font-normal">
                                Streamlining finances, simplifying business operations.
                            </div>
                        </div>
                        <div className="h-[94px] flex justify-start items-start gap-12">
                            <div className="w-[174px] h-[94px] relative">
                                <div className="relative justify-start text-[#212121] text-[32px] font-bold">
                                    12+
                                </div>
                                <div className="w-[174px] relative justify-start text-[#212121] text-base font-normal">
                                    Ongoing
                                    <br />
                                    Management projects
                                </div>
                            </div>
                            <div className="w-[147px] h-[94px] relative">
                                <div className="relative justify-start text-[#212121] text-[32px] font-bold">
                                    20
                                </div>
                                <div className="relative justify-start text-[#212121] text-base font-normal">
                                    Efficient
                                    <br />
                                    Bill Bizz Employees
                                </div>
                            </div>
                            <div className="w-32 h-[94px] relative">
                                <div className="relative justify-start text-[#212121] text-[32px] font-bold">
                                    08
                                </div>
                                <div className="w-32 relative justify-start text-[#212121] text-base font-normal">
                                    Projects under Management
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center mt-2">
                    <p className='text-[#909396] text-sm font-medium'>WHAT OUR CUSTOMERS SAYS</p>
                </div>
                <div className="flex -mt-6">

                    {/* Left Image */}
                    <div className="bg-[#004D4D] w-72 flex-shrink-0">
                        <img src={img4} alt="" className="w-full" />
                    </div>

                    {/* Center Image */}
                    <div className="flex items-center -ms-10 -mt-20 flex-shrink-0">
                        <img className='w-80 h-[480px]' src={img5} alt="" />
                    </div>

                    {/* Text Content */}
                    <div className="flex items-center mx-20">
                        <div className="h-[217px] flex flex-col justify-center items-start gap-4 -mt-16">
                            {/* Name */}
                            <div className="text-[#202020] text-[64px] font-bold -space-y-6">
                                <p>Daisy</p>
                                <p>Welch</p>
                            </div>

                            {/* Role */}
                            <div className="text-[#202020] text-base font-normal -mt-4">
                                Chief Branding Producer
                            </div>

                            {/* Stars */}
                            <div className="flex items-center -mt-2 gap-1">
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                            </div>

                            {/* Testimonial Text */}
                            <div className=" w-[68%] mt-4">
                                <p className="text-[#202020] font-medium text-xl overflow-hidden">
                                    Sewnex ERP has been a game-changer for our textile business! Managing inventory, production, and orders has never been this smooth. The automation features save us so much time, and the reports give us clear insights to make better decisions. The support team is also fantastic—always quick to assist. Highly recommended for any textile manufacturer looking for an efficient ERP solution!
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="relative bg-black text-white p-6 sm:p-8 md:p-10 h-auto rounded-t-[30px] -mt-8">
        <img
          src={backgredient}
          loading="lazy"
          alt="Background Gradient"
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-20 rounded-t-[30px]"
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
                <Instagram bg="#FEFEFE" color="" size={32}/>
              </a>
              <a href="" target="_blank" rel="noopener noreferrer">
                <YouTube bg="#FEFEFE" color="" size={32}/>
              </a>
              {/* <TwitterIcon size={24} /> */}
              <Twitter bg="#FEFEFE" color="" size={24}/>
             
            </div>
          </div>
        </div>
      </div>





            </div>


        </div>
    )
}

export default CustomerStories