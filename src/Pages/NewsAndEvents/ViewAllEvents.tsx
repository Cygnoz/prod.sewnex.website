import { useEffect, useState } from "react"
import ChevronLeft from "../../assets/icons/ChevronLeft"
import FilterIcon from "../../assets/icons/FilterIcon"
import { useNavigate } from "react-router-dom"
import { endPoints } from "../../service/apiEndpoints"
import useApi from "../../Hooks/useApi"
import DOMPurify from "dompurify";
import noImage from '../../assets/images/noImage.png'

type Props = {}

const ViewAllEvents = ({ }: Props) => {

    const navigate = useNavigate()
    const [newsData, setnewsData] = useState([]);
    const { request: getAllEventsData } = useApi("get", 3001);

    const handleGetnewsData = async () => {
        try {
            const url = `${endPoints.GET_POST}?postType=Events&project=SewNex`;
            const { response, error } = await getAllEventsData(url);
            console.log('uuu', url);
            console.log('rrr', response);
            console.log('eee', error);

            if (!error && response) {
                const allPosts = response.data.data;

                setnewsData(allPosts);
            }
        } catch (error) {
            console.log("Error", error);
        }
    };

    useEffect(() => {
        handleGetnewsData();
    }, []);


    const [searchTerm, setSearchTerm] = useState("");

    const filteredNewsData = newsData.filter((item: any) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    console.log(filteredNewsData);


    return (
        <div>
            <div className="p-6">
                {/* Header */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    {/* Back Button & Title */}
                    <div className="flex gap-4 items-center">
                        <div
                            onClick={() => navigate("/news-and-events")}
                            className="bg-[#5D5D5D1A] w-10 h-10 sm:w-12 sm:h-12 cursor-pointer rounded-full border-2 border-[#FFFFFFA6] flex justify-center items-center"
                        >
                            <ChevronLeft size={18} />
                        </div>
                        <p className="text-xl sm:text-2xl font-bold text-black">Events</p>
                    </div>

                    {/* Filters & Search */}
                    <div className="flex flex-wrap gap-3 sm:gap-4 justify-center sm:justify-start">
                        <div className="bg-[#FFFFFF] rounded-3xl w-fit h-10 sm:h-11 border flex items-center justify-center px-3 gap-2">
                            <FilterIcon />
                            <p className="text-[#565148] text-xs sm:text-sm font-normal">News Category</p>
                        </div>
                        <div className="flex items-center sm:w-80 max-w-sm rounded-[20px] border px-3 sm:px-4 py-2">
                            <input
                                type="text"
                                placeholder="Search"
                                className="w-full outline-none bg-transparent pl-2 text-[#565148] text-xs sm:text-sm font-normal"
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                    </div>
                </div>

                {/* Events List */}
                {filteredNewsData.length > 0 ? (
                    filteredNewsData.reverse().map((item: any) => (
                        <div
                            key={item?._id}
                            onClick={() => navigate(`/news-and-events/view-all-events/view-event/${item?._id}`)}
                            className="mx-0 sm:mx-3 my-4 border-b pb-4 cursor-pointer"
                        >
                            <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-5">
                                {/* Image */}
                                <div className="sm:col-span-2 flex items-center justify-center">
                                    <img
                                        src={item?.image[0] || noImage}
                                        alt="News"
                                        className="h-[124px] sm:w-full rounded-md object-cover"
                                    />
                                </div>

                                {/* Event Details */}
                                <div className="lg:col-span-10">
                                    <div className="flex flex-wrap justify-between">
                                        <h2 className="text-lg sm:text-xl font-semibold my-2 sm:my-3">{item?.title || 'N/A'}</h2>
                                        <div className="bg-[#C4ECEC] rounded-3xl w-fit sm:w-44 h-6 sm:h-7 flex gap-2 sm:gap-3 items-center px-3 sm:px-4">
                                            <div className="bg-[#393939] rounded-full w-2 h-2"></div>
                                            <p className="text-xs sm:text-sm">{item?.category?.categoryName || 'N/A'}</p>
                                        </div>
                                    </div>

                                    {/* Event Info */}
                                    <div className="flex flex-wrap gap-2 sm:space-x-3">
                                        <p className="text-[#393939] text-xs sm:text-sm font-normal">Venue: <span>{item.meetingType === "Online" ? "Online" : item.venueName || "N/A"}</span></p>
                                        <div className="hidden sm:block bg-[#5F5E5E] w-[1px] h-5"></div>
                                        <p className="text-[#393939] text-xs sm:text-sm font-normal">Date: <span>{new Date(item?.meetingDate).toLocaleDateString('en-GB')}</span></p>
                                        <div className="hidden sm:block bg-[#5F5E5E] w-[1px] h-5"></div>
                                        <p className="text-[#393939] text-xs sm:text-sm font-normal">Start Time: <span>{item.startTime || "N/A"}</span></p>
                                        <div className="hidden sm:block bg-[#5F5E5E] w-[1px] h-5"></div>
                                        <p className="text-[#393939] text-xs sm:text-sm font-normal">End Time: <span>{item.endTime || "N/A"}</span></p>
                                    </div>

                                    {/* Content */}
                                    <p className="text-gray-600 text-xs sm:text-sm mt-2 sm:mt-3">
                                        <p
                                            className="text-base whitespace-pre-wrap text-[#5F5E5E] font-normal mt-2"
                                            dangerouslySetInnerHTML={{
                                                __html: DOMPurify.sanitize(item.content),
                                            }}
                                        />
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="text-red-600 flex items-center justify-center my-5">No Events Available!</div>
                )}
            </div>


        </div>
    )
}

export default ViewAllEvents