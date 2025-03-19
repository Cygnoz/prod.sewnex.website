import { useNavigate } from "react-router-dom"
import RecentNews from "./RecentNews"
import ChevronLeft from "../../assets/icons/ChevronLeft"
import bg from '../../assets/images/blogViewBg.webp'
import ArrowUpRight from "../../assets/icons/ArrowUpRight"
import image1 from '../../assets/images/RecentNews1.png'
import eventImage from '../../assets/images/Frame 1618873146.png'

type Props = {}

const NewsandEvent = ({ }: Props) => {
  const navigate = useNavigate()
  return (
    <div>
      <div className="grid grid-cols-12 p-6">
        <div className="col-span-8">
          <div
            className="h-[548px] rounded-3xl relative overflow-hidden"
            style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover" }}
          >
            <div onClick={() => navigate('/blog')} className="p-5 rounded-full cursor-pointer w-12 h-12 border border-[#E7E7E7] cu items-center flex justify-center mt-6 mx-4">
              <ChevronLeft size={20} color="#E7E7E7" />
            </div>
            <div className="w-full px-8 py-8 absolute inset-x-0 bottom-0">
              <div className="bg-black rounded-3xl w-44 h-7 flex gap-3 items-center px-4">
                <div className="bg-[#FFFFFF] rounded-full w-2 h-2"></div>
                <p className="text-[#FFFFFF]">Tehnology</p>
              </div>
              <p className="text-white text-[28px] font-semibold leading-10 my-3">
                The Impact of Technology on the Workplace: How Technology is Changing
              </p>
              <div className="flex gap-5">
                <div className="w-11 h-11 rounded-full flex justify-center items-center bg-black border border-[#FFFFFF80]">
                  <ArrowUpRight size={12} />
                </div>
                <div className="rounded-3xl bg-[black] w-fit h-10 px-4 border-t-0 border-b-2 border-[#FFFFFFB5] flex items-center justify-center">
                  <p className="text-[#FFFFFF] text-sm font-normal">Read Article</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <RecentNews />
          </div>
        </div>
        <div className="col-span-4 m-3 pe-4 pt-5">
          <div className="flex">
            <h3 className="font-bold text-xl text-black">
              Recent Events
            </h3>
            <div className="ml-auto">
              <button
                className="text-[#004141] text-sm"
                onClick={() => navigate("/news-and-events/view-all-events")}
              >
                View all
              </button>
            </div>
          </div>
          <div 
          // className="h-[548px] rounded-3xl relative overflow-hidden"
          //  style={{ backgroundImage: `url(${eventImage})`, backgroundSize: "cover" }}
          >
<img src={eventImage} alt="" />
          </div>

          <div className="bg-[#FFFFFF] rounded-xl border p-4 w-full mt-4">
            <div className="flex justify-between">
              <div>
                <p className="text-[#393939] text-sm font-semibold">Tech Innovations Summit</p>
                <div className="bg-[#C4ECEC] rounded-3xl w-44 h-7 my-2 flex gap-3 items-center px-4">
                  <div className="bg-[#393939] rounded-full w-2 h-2"></div>
                  <p>ERP Software</p>
                </div>
                <p className="text-[#5F5E5E] text-xs font-normal">Join industry leaders, business owners, and financial experts at the Sewnex Annual Business Summit 2025.See what Sewnex has to offer</p>
              </div>
              <img src={image1} className="w-28 h-28" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewsandEvent