// import PlusIcon from "../assets/icons/PlusIcon"
import FaceBook from "../assets/icons/FaceBook"
import Instagram from "../assets/icons/Instagram"
import Twitter from "../assets/icons/Twitter"
import YouTube from "../assets/icons/YouTube"
import image from "../assets/images/Group 1321314621 (1).png"
import backgredient from "../assets/images/FooterBg.png";


type Props = {}

function LatestNews({ }: Props) {
    return (
      <div>
        <div className="px-4 sm:px-8 md:px-16 py-6 sm:py-10">
        <div className="text-center md:text-left flex justify-between">
          <p className="text-[#7F5303] text-[20px] sm:text-[32px] md:text-[36px] font-[700] whitespace-nowrap">
            Explore our latest dashboard
          </p>
        </div>
      
        <p className="text-center text-[#9A9898] text-[14px] sm:text-[15px] md:text-[16px] font-[400] py-4 sm:py-6">
          Stay informed with our latest news and insights. Discover groundbreaking discoveries, industry <br className="hidden sm:block" />
          trends, and thought-provoking perspectives that shape the world around us.
        </p>
   
      
        <div className="w-full">
          <img
            src={image}
            className="w-full h-auto object-cover rounded-lg"
            loading="lazy"
            alt="News & Insights"
          />
        </div>
      </div>
      <div className="relative bg-black text-white p-6 sm:p-8 md:p-10 h-auto">
        <img
          src={backgredient}
          loading="lazy"
          alt="Background Gradient"
          className="absolute inset-0 w-full h-full z-0 opacity-20"
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
              <Twitter bg="#FEFEFE" color="" size={24}/>
             
            </div>
          </div>
        </div>
      </div>
      </div>

      
    )
}

export default LatestNews