import { useNavigate, useParams } from "react-router-dom"
// import image from '../../assets/images/eventViewImage.webp'
import ChevronLeft from "../../assets/icons/ChevronLeft"
import image2 from '../../assets/images/ViewNewsFooter.png'
import { endPoints } from "../../service/apiEndpoints"
import { useEffect, useState } from "react"
import useApi from "../../Hooks/useApi"
import DOMPurify from "dompurify";
import noImage from '../../assets/images/noImage.png'
type Props = {}

const ViewAEvent = ({ }: Props) => {
  const navigate = useNavigate()

  const [aEvent, setAEvent] = useState<any>(null);
  const { request: getEvent } = useApi('get', 3001)
  const { id } = useParams()
  // console.log('ii',id);
  const [loading, setLoading] = useState<boolean>(true);
  const handleAGetEvent = async () => {
    try {
      setLoading(true);
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
    finally {
      setLoading(false);
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
          loading?<p>Loading</p>:
         <div className="px-4 sm:px-8">
         {/* Title & Back Button */}
         <div className="flex flex-wrap gap-4 items-center">
           <div 
             onClick={() => navigate("/news-and-events/view-all-events")} 
             className="bg-[#5D5D5D1A] w-10 h-10 sm:w-12 sm:h-12 cursor-pointer rounded-full border-2 border-[#FFFFFFA6] flex justify-center items-center"
           >
             <ChevronLeft size={18} />
           </div>
           <p className="text-xl sm:text-2xl font-bold text-black">
             {aEvent.title || 'N/A'}
           </p>
         </div>
       
         {/* Event Details */}
         <div className="flex flex-wrap justify-between items-center text-gray-500 text-xs sm:text-sm mt-2 space-x-0 sm:space-x-3 px-0 sm:px-16">
           <div className="flex flex-wrap gap-2 sm:space-x-3">
             <p className="text-[#393939]">Venue: <span>{aEvent.meetingType === "Online" ? "Online" : aEvent.venueName || "N/A"}</span></p>
             <div className="hidden sm:block bg-[#5F5E5E] w-[1px] h-5"></div>
             <p className="text-[#393939]">Date: <span>{new Date(aEvent?.meetingDate).toLocaleDateString('en-GB')}</span></p>
             <div className="hidden sm:block bg-[#5F5E5E] w-[1px] h-5"></div>
             <p className="text-[#393939]">Start Time: <span>{aEvent.startTime}</span></p>
             <div className="hidden sm:block bg-[#5F5E5E] w-[1px] h-5"></div>
             <p className="text-[#393939]">End Time: <span>{aEvent.endTime}</span></p>
           </div>
           
           {/* Category Tag */}
           <div className="bg-[#C4ECEC] rounded-3xl w-fit sm:w-fit h-6 sm:h-7 flex gap-2 sm:gap-3 items-center px-3 sm:px-4 mt-2 sm:mt-0">
             <div className="bg-[#393939] rounded-full w-2 h-2"></div>
             <p className="text-xs sm:text-sm">{aEvent?.category?.categoryName}</p>
           </div>
         </div>
       
         {/* Event Image & Description */}
         <div className="my-6 px-0 sm:px-4 py-4">
           <div className="flex justify-center">
             <img 
               className="h-auto sm:h-[540px] w-full sm:w-auto rounded-md object-cover" 
               src={aEvent.image[0] || noImage} 
               alt="" 
               loading="lazy"
             />
           </div>
           <p className="my-6 text-sm sm:text-base leading-relaxed"
             dangerouslySetInnerHTML={{
               __html: DOMPurify.sanitize(aEvent?.content),
             }}
           />
         </div>
       
         {/* Bottom Image */}
         <div className="mt-10 flex justify-center">
           <img className="w-full sm:w-auto" loading="lazy" src={image2} alt="" />
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