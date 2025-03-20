import { useNavigate, useParams } from "react-router-dom"
// import image from '../../assets/images/ViewNewsImage.png'
import ChevronLeft from "../../assets/icons/ChevronLeft"
import image2 from '../../assets/images/ViewNewsFooter.png'
import Clock from "../../assets/icons/Clock"
import Calendar from "../../assets/icons/Calendar"
import { useEffect, useState } from "react"
import { endPoints } from "../../service/apiEndpoints"
import useApi from "../../Hooks/useApi"
import DOMPurify from "dompurify";

type Props = {}

const ViewANews = ({ }: Props) => {

    const navigate = useNavigate()
    const { id } = useParams()
    const [aNews, setANews] = useState<any[]>([]);
    const { request: getNews } = useApi('get', 3001)

    const handleAGetNews = async () => {
        try {
            const url = `${endPoints.GET_A_POST}/${id}`;
            const { response, error } = await getNews(url);

            if (response && !error) {
                const data = response.data?.data;
                console.log(data);
                // Ensure data is always treated as an array
                setANews(Array.isArray(data) ? data : [data]);
            } else {
                console.log(error.response.data.message);
            }
        } catch (error) {
            console.log("error occurred", error);
        }
    };

    useEffect(() => {
        handleAGetNews()
    }, [])

    console.log('news', aNews);


    const getTimeAgo = (timestamp: string | number | Date | null | undefined): string => {
        if (!timestamp) return "Invalid date";

        const now = new Date().getTime(); // Get current time in milliseconds
        const createdAt = new Date(timestamp).getTime(); // Convert timestamp to milliseconds

        if (isNaN(createdAt)) return "Invalid date"; // Ensure timestamp is valid

        const diffInMs = now - createdAt; // Difference in milliseconds
        const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60)); // Convert to hours

        return diffInHours > 0 ? `${diffInHours} Hours Ago` : "Just now";
    };

    return (
        <div>
            <div className="p-6">
                {aNews.length > 0 ? (
                    aNews.map((item: any) => (
                        <div>
                            <div className="flex gap-4 items-center">
                                <div onClick={() => navigate("/news-and-events/view-all-news")} className="bg-[#5D5D5D1A] w-12 h-12 cursor-pointer rounded-full border-2 border-[#FFFFFFA6] items-center flex justify-center">
                                    <ChevronLeft size={20} />
                                </div>
                                <p className="text-2xl font-bold text-black">
                                    {item?.title ? item?.title : 'N/A'}
                                </p>
                            </div>
                            <div className="flex items-center text-gray-500 text-sm mt-1 space-x-3 px-16">
                                <div className="bg-[#C4ECEC] rounded-3xl w-44 h-7 flex gap-3 items-center px-4">
                                    <div className="bg-[#393939] rounded-full w-2 h-2"></div>
                                    <p>ERP Software</p>
                                </div>
                                <div className="bg-[#5F5E5E] w-[1px] h-5"></div>
                                <div className="flex items-center gap-2 me-2">
                                    <Calendar />
                                    <span>{new Date(item?.createdAt).toLocaleDateString('en-GB')}</span>
                                </div>
                                <div className="bg-[#5F5E5E] w-[1px] h-5"></div>
                                <div className="flex items-center gap-2">
                                    <Clock />
                                    <span>{getTimeAgo(item?.createdAt)}</span>
                                </div>
                            </div>

                            <div className="my-6 px-4 py-4">
                                <div className="items-center flex justify-center">
                                <img className="h-[540px]" src={item?.image[0]} alt="" />
                                </div>
                                <p className="my-6"
                                >
                                    <p
                                        className="text-base whitespace-pre-wrap text-[#5F5E5E] font-normal mt-2"
                                        dangerouslySetInnerHTML={{
                                            __html: DOMPurify.sanitize(item.content),
                                        }}
                                    />
                                </p>
                            </div>

                            <div className="mt-10">
                                <img className="" src={image2} alt="" />
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="text-red-600 flex items-center justify-center my-5">No News Available !</div>
                )}

                {/* <div>
                    <div className="flex gap-4 items-center">
                        <div onClick={() => navigate("/news-and-events/view-all-news")} className="bg-[#5D5D5D1A] w-12 h-12 cursor-pointer rounded-full border-2 border-[#FFFFFFA6] items-center flex justify-center">
                            <ChevronLeft size={20} />
                        </div>
                        <p className="text-2xl font-bold text-black">
                            Exciting Launch Ahead: BizTrack ERP Software Set to Transform Inventory Management!
                        </p>
                    </div>
                    <div className="flex items-center text-gray-500 text-sm mt-1 space-x-3 px-16">
                        <div className="bg-[#C4ECEC] rounded-3xl w-44 h-7 flex gap-3 items-center px-4">
                            <div className="bg-[#393939] rounded-full w-2 h-2"></div>
                            <p>ERP Software</p>
                        </div>
                        <div className="bg-[#5F5E5E] w-[1px] h-5"></div>
                        <div className="flex items-center gap-2 me-2">
                            <Calendar />
                            <span>02 december 2022</span>
                        </div>
                        <div className="bg-[#5F5E5E] w-[1px] h-5"></div>
                        <div className="flex items-center gap-2">
                            <Clock />
                            <span>8 Hours Ago</span>
                        </div>
                    </div>

                    <div className="my-6 px-4 py-4">
                        <img className="h-[540px]" src={image} alt="" />
                        <p className="my-6">
                            Join industry leaders, business owners, and financial experts at the Bill Bizz Annual Business Summit 2025. This event will cover the latest trends in billing and financial management, product updates, and networking opportunities.urus egestas sit nisl lacinia ornare adipiscing pellentesque quis suscipit. Aliquet non vel quis nulla mattis elementum sed ante. Dolor sit dolor imperdiet porttitor morbi nibh. Risus proin mattis senectus pellentesque viverra.
                            Amet in et pellentesque tempor netus nec. Phasellus est aenean ac lectus vulputate varius euismod turpis eget. Pharetra odio pulvinar eget nec neque sapien elit ipsum. Aliquet a sit ipsum donec cras nisl morbi. Aenean tortor blandit dignissim amet turpis. Fringilla pellentesque sed malesuada dis aliquet nec dictum sed tellus. Sapien ac proin velit ipsum vitae velit sed tincidunt. Aenean gravida amet amet elit molestie. Sed semper at eu velit metus elit. Scelerisque eu gravida risus sit sit pretium vitae. Auctor malesuada malesuada arcu sit. Vel scelerisque ultrices ut vitae elit feugiat. Est a vehicula dictum amet eget.
                            <br />
                            Sem etiam interdum ultricies amet urna tortor ullamcorper. A aliquet purus nibh a. Velit diam nunc tellus eget dolor pellentesque. Auctor vitae ullamcorper vitae urna arcu lorem nunc urna faucibus. Malesuada cursus neque velit non suspendisse. Tempus nibh sed quis sagittis metus iaculis amet amet magna. Lobortis neque odio viverra augue ut. Gravida aliquet diam in ut morbi sit dictumst. Pharetra elementum urna urna elementum lacus enim bibendum. A turpis volutpat.
                        </p>
                    </div>

                    <div className="mt-10">
                        <img className="" src={image2} alt="" />
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default ViewANews