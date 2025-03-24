import { useLocation, useNavigate, useParams } from "react-router-dom"
import Calendar from "../../assets/icons/Calendar"
import ChevronLeft from "../../assets/icons/ChevronLeft"
import Clock from "../../assets/icons/Clock"
// import img from '../../assets/images/viewBlog.webp'
import Categories from "./Categories"
import recentPost from '../../assets/images/viewBlog2.png'
import { useEffect, useState } from "react"
import useApi from "../../Hooks/useApi"
import { endPoints } from "../../service/apiEndpoints"
import DOMPurify from "dompurify";
import noImage from '../../assets/images/noImage.png'

type Props = {}

const BlogView = ({ }: Props) => {
  const location = useLocation();
  const blogData = location.state?.blog || [];
  console.log('blogs', blogData);

  const [viewBlog, setViewBlog] = useState<any[]>([]);
  const { id } = useParams()
  const navigate = useNavigate()
  const { request: getABlog } = useApi('get', 3001)

  const handleViewBlog = async () => {
    try {
      const url = `${endPoints.GET_A_POST}/${id}`;
      const { response, error } = await getABlog(url);

      console.log('uu', url);
      console.log('rr', response);
      console.log('ee', error);

      if (response && !error) {
        console.log(response.data.data);

        // Ensure data is always an array
        setViewBlog(Array.isArray(response.data.data) ? response.data.data : [response.data.data]);
      } else {
        console.log(error.response.data.message);
      }
    } catch (err) {
      console.log('error occurred', err);
    }
  };

  useEffect(() => {
    handleViewBlog();
  }, []);

  console.log('aa', viewBlog);

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
      <div className="grid grid-cols-12 gap-4 m-7">
        <div className="col-span-8">
          {viewBlog.map((item: any) => (
            <div>
              <div
                className="h-[350px] sm:h-[548px] rounded-3xl relative overflow-hidden"
                style={{ backgroundImage: `url(${item?.image[0] || noImage})`, backgroundSize: "cover", backgroundPosition: "center" }}
              >
                {/* Back Button */}
                <div onClick={() => navigate('/blogs')}
                  className="p-3 sm:p-5 rounded-full cursor-pointer w-10 sm:w-12 h-10 sm:h-12 border border-[#E7E7E7] flex items-center justify-center mt-4 sm:mt-6 mx-3 sm:mx-4">
                  <ChevronLeft size={18} color="#E7E7E7" />
                </div>

                {/* Content Box */}
                <div className="bg-white/10 backdrop-blur-md w-full px-6 sm:px-8 py-6 sm:py-8 absolute inset-x-0 bottom-2 sm:bottom-4 border-x-0 border-y border-2 rounded-b-3xl border-white">
                  <p className="text-white text-lg sm:text-[28px] font-semibold leading-tight sm:leading-10">
                    {item.title}
                  </p>
                  <p className="text-white/60 text-xs sm:text-sm font-semibold leading-tight sm:leading-10 mt-2"
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(item?.content),
                    }}>
                  </p>

                  {/* Author, Date, and Category */}
                  <div className="flex flex-wrap items-center gap-2 text-xs text-white mt-3 sm:mt-4">
                    <img src={item.createdBy?.userImage || noImage} alt="" className="h-4 w-4 sm:h-[18px] sm:w-[18px] rounded-full" />
                    <span>{item?.createdBy?.userName || 'Anonymous'}</span> |
                    <Calendar color="white" /> <span>{new Date(item.createdAt).toLocaleDateString('en-GB')}</span> |
                    <Clock color="white" /> <span>{getTimeAgo(item?.updatedAt)}</span>

                    <div className="ml-auto flex gap-3 sm:gap-5">
                      <div className="h-[30px] sm:h-[35px] px-3 sm:px-4 bg-white/0 rounded-[20px] border border-white/50 backdrop-blur-[42.60px] flex items-center text-white text-xs">
                        {item?.category?.categoryName || "Uncategorized"}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-[#666666] text-sm sm:text-[15px] font-normal leading-snug mt-3 sm:mt-4"
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(item?.content),
                }}>
              </p>
            </div>

          ))}


          <div>
            <div className="relative justify-start my-5">
              <p className="text-[#7F5303] text-xl sm:text-2xl font-medium">Related Post</p>
            </div>

            <div className="overflow-x-auto flex flex-col sm:flex-row gap-4">
              {blogData.length > 0 ? (
                blogData.map((item: any, index: number) => (
                  <div
                    key={index}
                    className="w-full sm:w-[413px] h-auto sm:h-[548px] bg-white rounded-[5px] p-3 sm:p-5 flex-shrink-0"
                  >
                    {/* Image */}
                    <img className="w-full h-auto sm:h-[262px] rounded-[5px]" src={item?.image[0] || recentPost} alt="" />

                    {/* Category */}
                    <div className="h-5 px-2 py-1 bg-[#f5cf4a] rounded-[3px] inline-flex justify-center items-center gap-2.5 mt-2">
                      <p className="text-[#666666] text-xs font-normal capitalize leading-3">{item?.category?.categoryName}</p>
                    </div>

                    {/* Title */}
                    <p className="text-[#222222] text-lg sm:text-[27px] font-semibold capitalize leading-[28px] sm:leading-[37.80px] mt-2">
                      {item?.title}
                    </p>

                    {/* Author & Date */}
                    <div className="flex flex-wrap items-center gap-2 text-xs text-[#777777] mt-3 sm:mt-4">
                      <img src={item?.createdBy?.userImage || recentPost} alt="" className="h-4 w-4 sm:h-[18px] sm:w-[18px] rounded-full" />
                      <span>{item?.createdBy?.userName || 'Anonymous'}</span>
                      <div className="border-[0.5px] border-[#999999] w-[1px] h-3"></div>
                      <Calendar /> <span>{new Date(item?.createdAt).toLocaleDateString('en-GB')}</span>
                      <div className="border-[0.5px] border-[#999999] w-[1px] h-3"></div>
                      <Clock /> <span>{getTimeAgo(item?.updatedAt)}</span>
                    </div>

                    {/* Description */}
                    <p
                      className="text-[#555555] text-sm sm:text-[15px] leading-snug mt-2"
                      dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(item?.content),
                      }}
                    ></p>
                  </div>
                ))
              ) : (
                <div>No related posts available</div>
              )}
            </div>
          </div>




        </div>
        <div className="col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-4 flex flex-col px-1 sm:px-2">
          <Categories />
        </div>

      </div>
    </div>
  )
}

export default BlogView