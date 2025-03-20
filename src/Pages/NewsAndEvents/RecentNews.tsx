import { useNavigate } from "react-router-dom"
import image1 from '../../assets/images/RecentNews1.png'

type Props = {data?: any}

const RecentNews = ({data }: Props) => {


  const navigate = useNavigate()
  return (
    <div>
      <div className="p-5">
        <div className="flex">
          <h3 className="font-bold text-xl text-black">
            Recent News
          </h3>
          <div className="ml-auto">
            <button
              className="text-[#004141] text-sm"
              onClick={() => navigate("/news-and-events/view-all-news")}
            >
              View all
            </button>
          </div>
        </div>
        <div className="flex flex-wrap gap-4 overflow-x-auto">
      {data.length>0 ?(
        data.reverse().map((item:any, index:number) => (
          <div  key={index} className="bg-[#FFFFFF] border border-[#E8E8EA] rounded-xl p-4 w-96 mt-4">
            <img src={item.image[0] || image1} className="" alt="" />
            <div className="bg-[#C4ECEC] rounded-3xl w-44 h-7 my-4 flex gap-3 items-center px-4">
              <div className="bg-[#393939] rounded-full w-2 h-2"></div>
              <p>{item?.category?.categoryName}</p>
            </div>
            <p className="text=[#393939] text-2xl font-semibold">{item?.title}</p>
          </div>
        ))
      )
      :(
        <div className="text-red-600 flex items-center justify-center my-5">No News Available !</div>
      )
      }
    </div>
        {/* <div className="bg-[#FFFFFF] border border-[#E8E8EA] rounded-xl p-4 w-96 mt-4">
          <img src={image1} className="" alt="" />
          <div className="bg-[#C4ECEC] rounded-3xl w-44 h-7 my-4 flex gap-3 items-center px-4">
            <div className="bg-[#393939] rounded-full w-2 h-2"></div>
            <p>ERP Software</p>
          </div>
          <p className="text=[#393939] text-2xl font-semibold">How Sewnex Simplifies Inventory Management</p>
        </div> */}
      </div>
    </div>
  )
}

export default RecentNews