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
           <div className="bg-[#004040]  lg:h-[680px] pb-16 lg:rounded-b-3xl">
      <div className="relative p-6 lg:rounded-lg overflow-hidden mb-6">

        {/* Main Content Container */}
        <div
          className="relative p-6 md:p-12 lg:rounded-lg flex flex-col md:flex-row items-center gap-6 h-[600px]"
          style={{
            backgroundImage: `url(${greenBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Image Section */}
          <div className="relative w-full max-w-[700px] lg:h-auto md:h-[512px] ml-auto">
            <img
              src={headerBg2}
              alt="Sewnex Threads"
              className="lg:rounded-lg shadow-lg w-full lg:h-full object-cover"
            />
          </div>

          {/* Text Section */}
          <div className="absolute w-full md:w-[750px] max-w-full h-auto md:h-[416px] mt-60 bg-[#004040] lg:-mt-24 text-white p-8 md:p-16 ms-0 md:ms-6 flex flex-col justify-center lg:rounded-3xl md:rounded-l-3xl lg:rounded-br-[40px]">
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
                 <div>
      {/* Why Sewnex Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="lg:col-span-5 flex items-center justify-center px-6 py-10">
          <img
            className="w-full max-w-[482px] h-auto lg:h-[532px]"
            src={aboutUs1}
            alt="Why Sewnex"
          />
        </div>
        <div className="lg:col-span-7 bg-white h-full px-6 sm:px-10 lg:px-20 py-12 lg:py-48">
          <p className="text-[#003636] text-2xl sm:text-3xl font-semibold mb-4">Why Sewnex?</p>
          <p className="text-[#262525] text-base sm:text-xl font-normal leading-relaxed">
            To make boutique management as easy and enjoyable as possible. By creating a reliable, intuitive tool that
            handles your operational challenges, we free up your time so you can focus on what you do best—delivering
            outstanding customer experiences and building your brand.
          </p>
        </div>
      </div>

      {/* Our Core Values Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 bg-[#004040] bg-opacity-60 w-full rounded-lg overflow-hidden mt-12">
        <div className="lg:col-span-4 relative px-8 pt-8 w-full rounded-lg">
          <p className="text-[#35FC85] text-3xl sm:text-[36px] font-semibold flex items-center justify-center my-8 sm:my-16 relative z-10">
            Our Core Values
          </p>
          <div className="flex items-center justify-center relative z-10">
            <img
              className="w-full max-w-[435px] h-auto lg:h-[524px] object-cover"
              src={aboutUs2}
              alt="Our Core Values"
            />
          </div>
        </div>

        <div className="lg:col-span-8 bg-[#004040] h-full ms-0 lg:ms-10 flex items-center justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 p-8 sm:px-16 lg:px-28 mt-4">
            {[
              { number: '01', title: 'Efficiency', description: 'Our features are built to simplify operations, reduce busywork, and enhance your workflow.' },
              { number: '02', title: 'Trust', description: "We're not just a tool — We're committed to being there for you when you need us." },
              { number: '03', title: 'Growth', description: "Sewnex grows with your business, and we're always looking for ways to add more value." },
              { number: '04', title: 'Simplicity', description: "We believe in making things easy. Our software is intuitive, so you don't have to be a tech expert to use it." },
            ].map((value, index) => (
              <div key={index}>
                <div className="flex gap-2 items-center">
                  <p className="text-[48px] sm:text-[60px] text-[#07C6C6] font-semibold">{value.number}</p>
                  <p className="text-xl sm:text-2xl text-[#07C6C6] font-medium">{value.title}</p>
                </div>
                <p className="text-[#FFFFFF] text-sm sm:text-base font-normal leading-relaxed">{value.description}</p>
              </div>
            ))}
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
    )
}

export default AboutUs