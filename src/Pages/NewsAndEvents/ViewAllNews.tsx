import { useNavigate } from "react-router-dom"
import Calendar from "../../assets/icons/Calendar"
import Clock from "../../assets/icons/Clock"
import ChevronLeft from "../../assets/icons/ChevronLeft"
// import image1 from '../../assets/images/eventViewImage.webp'
import { useEffect, useState } from "react"
import FilterIcon from "../../assets/icons/FilterIcon"
import { endPoints } from "../../service/apiEndpoints"
import useApi from "../../Hooks/useApi"
import DOMPurify from "dompurify";
import noImage from '../../assets/images/noImage.png'

type Props = {}

const ViewAllNews = ({ }: Props) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [allNewsData, setAllNewsData] = useState([])
    const { request: allNews } = useApi('get', 3001)

    const handleGetAllNews = async () => {
        try {
            const url = `${endPoints.GET_POST}?postType=News&project=SewNex`
            const { response, error } = await allNews(url)
            console.log('res', response);
            console.log('err', error);
            if (response && !error) {
                console.log(response.data.data);
                setAllNewsData(response.data.data)
            }
            else {
                console.log(error.response.data.message);

            }
        }
        catch (err) {
            console.log('error occured', err);

        }
    }
    useEffect(() => {
        handleGetAllNews()
    }, [])

    const filteredNews = allNewsData.filter((item: any) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase()))

    const navigate = useNavigate()

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
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex gap-4 items-center">
                        <div onClick={() => navigate("/news-and-events")} className="bg-[#5D5D5D1A] w-12 h-12 cursor-pointer rounded-full border-2 border-[#FFFFFFA6] items-center flex justify-center">
                            <ChevronLeft size={20} />
                        </div>
                        <p className="text-2xl font-bold text-black">
                            News
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <div className="bg-[#FFFFFF] rounded-3xl w-fit h-11 border items-center flex justify-center px-3 gap-2">
                            <FilterIcon />
                            <p className="text-[#565148] text-sm font-normal">News Category</p>
                        </div>
                        <div className="flex items-center w-full sm:w-80 max-w-sm rounded-[20px] border px-4 py-2">
                            <input
                                type="text"
                                placeholder="Search"
                                className="w-full outline-none bg-transparent pl-2 text-[#565148] text-sm font-normal"
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
                {allNewsData ? filteredNews.reverse().map((item: any) => (
                    <div onClick={() => navigate(`/news-and-events/view-all-news/view-news/${item._id}`)} className="cursor-pointer">
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 border-b mx-3 my-4 pb-4">
                            <div className="md:col-span-2 flex items-center justify-center mt-4">
                                <img src={item?.image[0] || noImage} alt="News" className=" h-[124px] w-full object-cover" />
                            </div>
                            <div className="md:col-span-10">
                                <h2 className="text-xl font-semibold my-3">{item?.title ? item?.title : 'N/A'}</h2>
                                <div className="flex flex-wrap items-center text-gray-500 text-sm mt-1 space-x-3">
                                    <div className="bg-[#C4ECEC] rounded-3xl w-44 h-7 flex gap-3 items-center px-4">
                                        <div className="bg-[#393939] rounded-full w-2 h-2"></div>
                                        <p>{item?.category?.categoryName}</p>
                                    </div>
                                    <div className="bg-[#5F5E5E] w-[1px] h-5 hidden md:block"></div>
                                    <div className="flex items-center gap-2 me-2">
                                        <Calendar />
                                        <span>{new Date(item?.createdAt).toLocaleDateString('en-GB')}</span>
                                    </div>
                                    <div className="bg-[#5F5E5E] w-[1px] h-5 hidden md:block"></div>
                                    <div className="flex items-center gap-2">
                                        <Clock />
                                        <span>{getTimeAgo(item?.createdAt)}</span>
                                    </div>
                                </div>
                                <p className="text-gray-600 text-sm mt-3 ">
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
                    : (
                        <div className="text-red-600 flex items-center justify-center my-5">No News Available !</div>
                    )}

            </div>
        </div>
    )
}

export default ViewAllNews