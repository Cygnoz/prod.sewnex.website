import { useNavigate } from "react-router-dom"

type Props = {}

const RecentNews = ({}: Props) => {

    const navigate =useNavigate()
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
        </div>
    </div>
  )
}

export default RecentNews