import { useNavigate } from "react-router-dom"
import image1 from '../../assets/images/RecentNews1.png'
import image2 from '../../assets/images/RecentNews2.png'

type Props = {}

const RecentNews = ({ }: Props) => {

  const cards = [
    {
      image: image1,
      category: "ERP Software",
      title: "How Sewnex Simplifies Inventory Management",
    },
    {
      image: image2,
      category: "Business",
      title: "Optimize Your Business with BillBizz",
    },
    
  ];

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
        <div className="flex flex-wrap gap-4">
      {cards.map((card, index) => (
        <div  key={index} className="bg-[#FFFFFF] border border-[#E8E8EA] rounded-xl p-4 w-96 mt-4">
          <img src={card.image} className="" alt="" />
          <div className="bg-[#C4ECEC] rounded-3xl w-44 h-7 my-4 flex gap-3 items-center px-4">
            <div className="bg-[#393939] rounded-full w-2 h-2"></div>
            <p>{card.category}</p>
          </div>
          <p className="text=[#393939] text-2xl font-semibold">{card.title}</p>
        </div>
      ))}
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