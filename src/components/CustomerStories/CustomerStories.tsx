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
                        <div className="flex -space-x-4 items-center  max-w-sm sm:max-w-md">
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
                <div className="relative text-center justify-start items-center mt-5 ">
                    <p className='text-[#002222] lg:text-[48px] font-semibold'>Empowering businesses with a growing base <br />of <span className='text-[#7F5303]'>satisfied customers!</span></p>
                </div>

                {/* Customer Stories Section */}
                <div className="flex items-center justify-center mt-5">
            <div
                className="relative h-[730px] w-full max-w-[1206px] flex flex-col sm:flex-row items-center sm:h-[634px]"
                style={{
                    backgroundImage: `url(${img1})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="flex flex-col gap-4 w-full px-4 sm:px-0 sm:absolute sm:top-10 mt-4 sm:left-10">
                    {/* Left Floating Card */}
                    <div className="bg-black bg-opacity-40 border border-gray-600 text-white p-5 rounded-xl w-full max-w-xs">
                        <h2 className="text-lg font-normal">Driving Your Growth</h2>
                        <p className="text-sm mt-2 text-gray-200">
                            Our expertise delivers measurable impact—efficiency, scalability, and
                            innovation combined into success.
                        </p>
                        <div className="mt-3">
                            <div className="relative h-2 bg-gray-700 rounded-full">
                                <div className="absolute top-0 left-0 h-2 bg-red-600 rounded-full" style={{ width: "95%" }}></div>
                            </div>
                            <p className="text-right text-sm mt-1">95%</p>
                        </div>
                        <p className="text-xs">Customer Success Rate</p>
                    </div>

                    {/* Bottom Left Card */}
                    <div className="w-52 h-52 bg-black bg-opacity-75 border border-white shadow-2xl mt-14 rounded-xl p-4 ">
                        <img className="w-11 h-11 mt-2" src={img2} alt="Customer Trial" />
                        <div className="text-white text-base font-bold my-2 pr-10">
                            Free Customer Trial
                        </div>
                        <div className="text-white text-opacity-65 text-xs">
                            Experience our product with a free trial! Get full access to premium features and see how it fits your business.
                        </div>
                    </div>

                    {/* Right Floating Card */}
                    <div className="bg-gray-600 bg-opacity-20 border border-gray-600 text-white p-5 rounded-xl w-full max-w-xs sm:absolute sm:right-12 sm:top-72">
                        <h2 className="text-lg font-normal">Innovative Solutions</h2>
                        <p className="text-sm mt-2 text-gray-300">
                            Empowering businesses with cutting-edge technology and creative
                            strategies to stay ahead in the digital age.
                        </p>
                    </div>
                </div>

                {/* Search Bar */}
                <div className="mt-4 sm:mt-0  sm:absolute sm:bottom-20 sm:left-1/2 sm:transform sm:-translate-x-1/2 flex items-center border border-white bg-black bg-opacity-25 rounded-full px-4 py-2 shadow-lg w-[80%] max-w-md">
                    <span className="text-white text-opacity-60 text-sm -mt-4 left-20">
                        <SearchIcon />
                    </span>
                    <input
                        type="text"
                        placeholder="Why is Sewnex The Best"
                        className="ml-4 outline-none bg-transparent text-white text-opacity-60 text-sm w-full"
                        aria-label="Search BillBizz"
                    />
                </div>

            </div>
        </div>
        <div className="flex items-center justify-center lg:px-4 md:px-8">
      <div
        className="w-full max-w-[1700px] h-auto p-4 md:p-6 rounded-2xl flex flex-col justify-start items-start gap-4"
        style={{
          backgroundImage: `url(${img3})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col md:flex-row justify-between items-center w-full gap-8">
          {/* Left Content */}
          <div className="flex flex-col justify-start items-start gap-2 text-center md:text-left">
            <h2 className="text-[#212121] text-3xl md:text-[42px] font-['Sequel_Sans'] leading-snug">
              What we’re doing
            </h2>
            <p className="text-[#212121] text-lg md:text-xl font-['Sequel_Sans'] leading-relaxed max-w-md">
              Streamlining finances, simplifying business operations.
            </p>
          </div>

          {/* Stats Section */}
          <div className="flex justify-between items-start gap-8 md:gap-12 flex-wrap">
            {[
              { number: "12+", label: "Ongoing\nManagement projects" },
              { number: "20", label: "Efficient\nSewnexEmployees" },
              { number: "20", label: "Projects under \nManagement" },
            ].map((stat, index) => (
              <div key={index} className="text-center md:text-left">
                <div className="text-[#212121] font-bold text-3xl md:text-[32px] font-['Sequel_Sans'] leading-snug">
                  {stat.number}
                </div>
                <p className="text-[#212121] text-base leading-tight whitespace-pre-line">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
               
       
    
      <div className="flex flex-col md:flex-row ">
        {/* Left Image */}
        <div className="bg-black w-full md:w-56 flex-shrink-0">
          <img src={img4} alt="" className="w-full" />
        </div>

        {/* Center Image */}
        <div className="flex items-center -ms-0 md:-ms-10 md:w-72 flex-shrink-0 my-4 md:my-0">
          <img src={img5} alt="" />
        </div>

        {/* Text Content */}
        <div className="flex items-center lg:mx-4 w-full">
        <div className="h-auto md:h-[217px] flex flex-col justify-center items-start gap-4">
          {/* Name */}
          <div className="w-full text-[#202020] text-6xl font-semibold md:text-[64px] font-['Sequel_Sans'] leading-tight md:leading-[74px]">
            Daisy <br /> Welch
          </div>

          {/* Role */}
          <div className="text-[#202020] text-sm md:text-base ms-4 font-normal font-['Sequel_Sans']">
            Chief Branding Producer
          </div>

          {/* Stars */}
          <div className="flex items-center ms-4 ">
          <StarIcon/>
          <StarIcon/>
          <StarIcon/>
          <StarIcon/>
          <StarIcon/>
          </div>

          {/* Testimonial Text */}
          <div className="w-full h-fit p-4">
      <p className="text-[#202020] font-medium text-lg md:text-xl leading-relaxed break-words">
      Sewnex ERP has been a game-changer for our textile business! <br/> Managing inventory, production, and orders has 
      never been this <br/> smooth. The automation features save us so much time, and the <br/> reports give us clear insights 
      to make better decisions. The <br/> support team is also fantastic—always
       quick to assist. Highly <br/>recommended for any textile manufacturer looking for an efficient <br/> ERP solution!
      </p>
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

<div className="relative bg-black text-white  p-4 sm:p-6 md:p-10 h-auto rounded-t-[30px]">
        {/* Background Gradient */}
        <img
          src={backgredient}
          loading="lazy"
          alt="Background Gradient"
          className="absolute inset-0 w-full h-full z-0 opacity-20 rounded-t-[30px]"
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


        </div>
    )
}

export default CustomerStories