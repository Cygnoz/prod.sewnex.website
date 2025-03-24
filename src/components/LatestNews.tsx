// import PlusIcon from "../assets/icons/PlusIcon"
import FaceBook from "../assets/icons/FaceBook"
import Instagram from "../assets/icons/Instagram"
import Twitter from "../assets/icons/Twitter"
import YouTube from "../assets/icons/YouTube"
// import image from "../assets/images/Group 1321314621 (1).png"
import backgredient from "../assets/images/FooterBg.png";


type Props = {}

function LatestNews({ }: Props) {
  return (
    <div>
      <div className="relative bg-black text-white -mt-10 p-4 sm:p-6 md:p-10 h-auto rounded-t-[30px]">
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


  )
}

export default LatestNews