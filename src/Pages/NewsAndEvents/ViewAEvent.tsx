import { useNavigate, useParams } from "react-router-dom"
import image from '../../assets/images/eventViewImage.webp'
import ChevronLeft from "../../assets/icons/ChevronLeft"
import image2 from '../../assets/images/ViewNewsFooter.png'
import { endPoints } from "../../service/apiEndpoints"
import { useEffect, useState } from "react"
import useApi from "../../Hooks/useApi"
import DOMPurify from "dompurify";

type Props = {}

const ViewAEvent = ({ }: Props) => {
  const navigate = useNavigate()

  const [aEvent, setAEvent] = useState<any>(null);
  const { request: getEvent } = useApi('get', 3001)
  const { id } = useParams()
  // console.log('ii',id);

  const handleAGetEvent = async () => {
    try {
      const url = `${endPoints.GET_A_POST}/${id}`
      console.log('id', id);

      const { response, error } = await getEvent(url)
      console.log('url', url);
      console.log('res', response);
      console.log('err', error);
      if (response && !error) {
        console.log(response.data);
        setAEvent(response.data.data)
      }
      else {
        console.log(error.response.data.message);
      }
    }
    catch (error) {
      console.log('error occured', error);

    }
  }

  useEffect(() => {
    handleAGetEvent()
  }, [])

  console.log('getOne', aEvent);
  return (
    <div>
      <div className="p-6">
        {aEvent ?(
          <div>
          <div className="flex gap-4 items-center">
            <div onClick={() => navigate("/news-and-events/view-all-events")} className="bg-[#5D5D5D1A] w-12 h-12 cursor-pointer rounded-full border-2 border-[#FFFFFFA6] items-center flex justify-center">
              <ChevronLeft size={20} />
            </div>
            <p className="text-2xl font-bold text-black">
            {aEvent.title || 'N/A'}
            </p>
          </div>
          <div className="flex justify-between items-center text-gray-500 text-sm mt-1 space-x-3 px-16">
            <div className="flex space-x-3">
              <p className="text-[#393939] text-sm font-normal">Venue: <span>{aEvent.meetingType === "Online" ? "Online" : aEvent.venueName || "N/A"}</span></p>
              <div className="bg-[#5F5E5E] w-[1px] h-5"></div>
              <p className="text-[#393939] text-sm font-normal">Date: <span>{new Date(aEvent?.meetingDate).toLocaleDateString('en-GB')}</span></p>
              <div className="bg-[#5F5E5E] w-[1px] h-5"></div>
              <p className="text-[#393939] text-sm font-normal">Start Time: <span>{aEvent.startTime}</span></p>
              <div className="bg-[#5F5E5E] w-[1px] h-5"></div>
              <p className="text-[#393939] text-sm font-normal">End Time: <span>{aEvent.endTime}</span></p>
            </div>
            <div className="bg-[#C4ECEC] rounded-3xl w-44 h-7 flex gap-3 items-center px-4">
              <div className="bg-[#393939] rounded-full w-2 h-2"></div>
              <p>{aEvent?.category?.categoryName}</p>
            </div>
          </div>

          <div className="my-6 px-4 py-4">
            <img className="h-[540px]" src={aEvent.image[0] || image} alt="" />
            <p className="my-6"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(aEvent?.content),
          }}
            >
          
            </p>
          </div>

          <div className="mt-10">
            <img className="" src={image2} alt="" />
          </div>
        </div>
        ):(
          <div className="text-red-600 flex items-center justify-center my-5">No Events Available !</div>
        )}
        
      </div>
    </div>
  )
}

export default ViewAEvent