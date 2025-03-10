// import PlusIcon from "../assets/icons/PlusIcon"
import image from "../assets/images/Group 1321314621 (1).png"
type Props = {}

function LatestNews({ }: Props) {
    return (
        <div className="px-4 sm:px-8 md:px-16 py-6 sm:py-10">
        {/* Title Section */}
        <div className="text-center md:text-left flex justify-between">
          <p className="text-[#7F5303] text-[20px] sm:text-[32px] md:text-[36px] font-[700] whitespace-nowrap">
            Explore our latest dashboard
          </p>
          {/* <p className="text-[#847B6C] font-normal text-base">
            Blog
          </p> */}
        </div>
      
        {/* Subtitle Text */}
        <p className="text-center text-[#9A9898] text-[14px] sm:text-[15px] md:text-[16px] font-[400] py-4 sm:py-6">
          Stay informed with our latest news and insights. Discover groundbreaking discoveries, industry <br className="hidden sm:block" />
          trends, and thought-provoking perspectives that shape the world around us.
        </p>
        {/* <div>
        <p className="flex justify-center items-center">
  <PlusIcon size={30} />
</p>
<p className="text-xs font-normal text-[#7A7A7A] flex justify-center items-center">
  See More 
</p>
        </div> */}
      
        {/* Image Section */}
        <div className="w-full">
          <img
            src={image}
            className="w-full h-auto object-cover rounded-lg"
            loading="lazy"
            alt="News & Insights"
          />
        </div>
      </div>
      
    )
}

export default LatestNews