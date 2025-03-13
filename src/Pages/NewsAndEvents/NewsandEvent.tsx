import { useNavigate } from "react-router-dom"
import RecentNews from "./RecentNews"

type Props = {}

const NewsandEvent = ({}: Props) => {
    const navigate = useNavigate()
  return (
    <div>
        <div className="grid grid-cols-12">
        <div className="col-span-8">
            <div>
                <RecentNews/>
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
        </div>
        </div>
    </div>
  )
}

export default NewsandEvent