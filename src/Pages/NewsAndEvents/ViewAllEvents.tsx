import { useEffect, useState } from "react"
import ChevronLeft from "../../assets/icons/ChevronLeft"
import FilterIcon from "../../assets/icons/FilterIcon"
import { useNavigate } from "react-router-dom"
import image1 from '../../assets/images/eventViewImage.webp'
import { endPoints } from "../../service/apiEndpoints"
import useApi from "../../Hooks/useApi"
import DOMPurify from "dompurify";

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
                <div className="flex items-center justify-between">
                    <div className="flex gap-4 items-center">
                        <div onClick={() => navigate("/news-and-events")} className="bg-[#5D5D5D1A] w-12 h-12 cursor-pointer rounded-full border-2 border-[#FFFFFFA6] items-center flex justify-center">
                            <ChevronLeft size={20} />
                        </div>
                        <p className="text-2xl font-bold text-black">
                            Events
                        </p>
                    </div>
                    <div className="flex gap-4">
                        <div className="bg-[#FFFFFF] rounded-3xl w-fit h-11 border items-center flex justify-center px-3 gap-2">
                            <FilterIcon />
                            <p className="text-[#565148] text-sm font-normal">News Category</p>
                        </div>
                        <div className="flex items-center w-80 max-w-sm rounded-[20px] border px-4 py-2">
                            <input
                                type="text"
                                placeholder="Search"
                                className="w-full outline-none bg-transparent pl-2 text-[#565148] text-sm font-normal"
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
                {filteredNewsData.length > 0 ? (
                    filteredNewsData.map((item: any) => (
                        <div onClick={() => navigate(`/news-and-events/view-all-events/view-event/${item?._id}`)} className="mx-3 my-4 border-b pb-4 cursor-pointer">
                            <div className="grid grid-cols-12  gap-5">
                                <div className="col-span-2 flex items-center justify-center">
                                    <img src={item?.image[0] || image1} alt="News" className=" h-[124px] w-full " />
                                </div>
                                <div className="col-span-10">
                                    <div className="flex justify-between">
                                        <h2 className="text-xl font-semibold my-3">{item?.title ? item?.title : 'N/A'}</h2>
                                        <div className="bg-[#C4ECEC] rounded-3xl w-44 h-7 flex gap-3 items-center px-4">
                                            <div className="bg-[#393939] rounded-full w-2 h-2"></div>
                                            <p>{item?.meetingType || 'N/A'}</p>
                                        </div>
                                    </div>
                                    <div className="flex space-x-3">
                                        <p className="text-[#393939] text-sm font-normal">Venue: <span>{item.meetingType === "Online" ? "Online" : item.venueName || "N/A"}</span></p>
                                        <div className="bg-[#5F5E5E] w-[1px] h-5"></div>
                                        <p className="text-[#393939] text-sm font-normal">Date: <span>{new Date(item?.meetingDate).toLocaleDateString('en-GB')}</span></p>
                                        <div className="bg-[#5F5E5E] w-[1px] h-5"></div>
                                        <p className="text-[#393939] text-sm font-normal">Start Time: <span>{item.startTime || "N/A"}</span></p>
                                        <div className="bg-[#5F5E5E] w-[1px] h-5"></div>
                                        <p className="text-[#393939] text-sm font-normal">End Time: <span>{item.endTime || "N/A"}</span></p>
                                    </div>
                                    <p className="text-gray-600 text-sm mt-3 ">
                                        <p
                                            className="text-lg font-semibold whitespace-pre-wrap text-black mt-2"
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
                    <div className="text-red-600 flex items-center justify-center my-5">No Events Available !</div>
                )}

                {/* <div onClick={() => navigate("/news-and-events/view-all-events/view-event")} className="mx-3 my-4 border-b pb-4 cursor-pointer">
                    <div className="grid grid-cols-12  gap-5">
                        <div className="col-span-2 flex items-center justify-center">
                            <img src={image1} alt="News" className=" h-[124px] w-full " />
                        </div>
                        <div className="col-span-10">
                            <div className="flex justify-between">
                            <h2 className="text-xl font-semibold my-3">Exciting Launch Ahead: BizTrack ERP Software Set to Transform Inventory Management!</h2>
                            <div className="bg-[#C4ECEC] rounded-3xl w-44 h-7 flex gap-3 items-center px-4">
                                    <div className="bg-[#393939] rounded-full w-2 h-2"></div>
                                    <p>ERP Software</p>
                                </div>
                            </div>
                            <div className="flex space-x-3">
                                <p className="text-[#393939] text-sm font-normal">Venue: <span>The Grand Oak Hall</span></p>
                                <div className="bg-[#5F5E5E] w-[1px] h-5"></div>
                                <p className="text-[#393939] text-sm font-normal">Date: <span>02 December 2025</span></p>
                                <div className="bg-[#5F5E5E] w-[1px] h-5"></div>
                                <p className="text-[#393939] text-sm font-normal">Start Time: <span>9.00 Am</span></p>
                                <div className="bg-[#5F5E5E] w-[1px] h-5"></div>
                                <p className="text-[#393939] text-sm font-normal">End Time: <span>5.00 Pm</span></p>
                            </div>
                            <p className="text-gray-600 text-sm mt-3 ">
                                <p
                                    className="text-lg font-semibold whitespace-pre-wrap text-black mt-2"
                                // dangerouslySetInnerHTML={{
                                //     __html: DOMPurify.sanitize(item.content),
                                // }}
                                />
                                Join industry leaders, business owners, and financial experts at the Bill Bizz Annual Business Summit 2025. This event will cover the latest trends in billing and financial management, product updates, and networking opportunities.
                            </p>
                        </div>
                    </div>
                </div>

                <div onClick={() => navigate("/news-and-events/view-all-events/view-event")} className="mx-3 my-4 border-b pb-4 cursor-pointer">
                    <div className="grid grid-cols-12  gap-5">
                        <div className="col-span-2 flex items-center justify-center">
                            <img src={image1} alt="News" className=" h-[124px] w-full " />
                        </div>
                        <div className="col-span-10">
                            <div className="flex justify-between">
                            <h2 className="text-xl font-semibold my-3">Exciting Launch Ahead: BizTrack ERP Software Set to Transform Inventory Management!</h2>
                            <div className="bg-[#C4ECEC] rounded-3xl w-44 h-7 flex gap-3 items-center px-4">
                                    <div className="bg-[#393939] rounded-full w-2 h-2"></div>
                                    <p>ERP Software</p>
                                </div>
                            </div>
                            <div className="flex space-x-3">
                                <p className="text-[#393939] text-sm font-normal">Venue: <span>The Grand Oak Hall</span></p>
                                <div className="bg-[#5F5E5E] w-[1px] h-5"></div>
                                <p className="text-[#393939] text-sm font-normal">Date: <span>02 December 2025</span></p>
                                <div className="bg-[#5F5E5E] w-[1px] h-5"></div>
                                <p className="text-[#393939] text-sm font-normal">Start Time: <span>9.00 Am</span></p>
                                <div className="bg-[#5F5E5E] w-[1px] h-5"></div>
                                <p className="text-[#393939] text-sm font-normal">End Time: <span>5.00 Pm</span></p>
                            </div>
                            <p className="text-gray-600 text-sm mt-3 ">
                                <p
                                    className="text-lg font-semibold whitespace-pre-wrap text-black mt-2"
                                // dangerouslySetInnerHTML={{
                                //     __html: DOMPurify.sanitize(item.content),
                                // }}
                                />
                                Join industry leaders, business owners, and financial experts at the Bill Bizz Annual Business Summit 2025. This event will cover the latest trends in billing and financial management, product updates, and networking opportunities.
                            </p>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default ViewAllEvents