import { useNavigate } from "react-router-dom"
import RecentNews from "./RecentNews"
// import ChevronLeft from "../../assets/icons/ChevronLeft"
// import bg from '../../assets/images/blogViewBg.webp'
import ArrowUpRight from "../../assets/icons/ArrowUpRight"
// import image1 from '../../assets/images/RecentNews1.png'
// import eventImage from '../../assets/images/Frame 1618873146.png'
import { useEffect, useState } from "react"
import { endPoints } from "../../service/apiEndpoints"
import useApi from "../../Hooks/useApi"
import DOMPurify from "dompurify";
import defaultImage from '../../assets/images/noImage.png'

type Props = {}

const NewsandEvent = ({ }: Props) => {

  const [blogData, setBlogData] = useState([]);
  const [thisMonth, setThisMonth] = useState<any>([]);
  const [latestNews, setLatestNews] = useState<any>(null);
  const [latestEvent, setLatestEvent] = useState<any>(null);

  const { request: getNewsData } = useApi("get", 3001);
  const { request: getEventsData } = useApi("get", 3001);

  const handleGetBlogData = async () => {
    try {
      const url = `${endPoints.GET_POST}?postType=News&project=SewNex`;

      const { response, error } = await getNewsData(url);
      console.log('url', url);
      console.log('res', response);
      console.log('err', error);


      if (!error && response) {
        const allPosts = response.data.data;

        const currentMonth = new Date().getMonth();
        const currentYear = new Date().getFullYear();

        const sortedPosts = allPosts
          .filter((post: any) => post.createdAt)
          .sort(
            (a: any, b: any) =>
              new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          );

        const filteredPosts = sortedPosts.filter((post: any) => {
          const postDate = new Date(post.createdAt);
          return (
            postDate.getMonth() === currentMonth &&
            postDate.getFullYear() === currentYear
          );
        });

        const latestPost = filteredPosts.length > 0 ? filteredPosts[0] : null;

        setBlogData(sortedPosts);
        setLatestNews(latestPost);
      }
    } catch (error) {
      console.error("Error fetching blog data", error);
    }
  };

  const handlegetEvent = async () => {
    try {
      const url = `${endPoints.GET_POST}?postType=Events&project=SewNex`;

      const { response, error } = await getEventsData(url);
      console.log('ur', url);
      console.log('response', response);
      console.log('error', error);

      if (!error && response) {
        const allPosts = response.data.data;

        const currentMonth = new Date().getMonth();
        const currentYear = new Date().getFullYear();

        const sortedPosts = allPosts
          .filter((post: any) => post.createdAt)
          .sort(
            (a: any, b: any) =>
              new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          );

        const filteredPosts = sortedPosts.filter((post: any) => {
          const postDate = new Date(post.createdAt);
          return (
            postDate.getMonth() === currentMonth &&
            postDate.getFullYear() === currentYear
          );
        });

        const latestPost = filteredPosts.length > 0 ? filteredPosts[0] : null;

        setThisMonth(filteredPosts);
        setLatestEvent(latestPost);
      }
    } catch (error) {
      console.error("Error fetching blog data", error);
    }
  };

  useEffect(() => {
    handleGetBlogData();
    handlegetEvent();
  }, []);

  console.log("Latest News Image", latestNews);
  const navigate = useNavigate()
  console.log('ss',latestEvent);
  console.log(thisMonth);


  return (
    <div>
      <div className="grid grid-cols-12">
        <div className="lg:col-span-8 col-span-12 lg:mt-6 lg:p-6 p-3">
          {latestNews ? (
           <div
           key={latestNews._id}
           className="h-[548px] sm:h-[400px] rounded-3xl relative overflow-hidden"
           style={{ backgroundImage: `url(${latestNews?.image?.[0] || defaultImage})`, backgroundSize: "cover" }}
         >
           {/* Content Box */}
           <div className="w-full px-6 sm:px-8 py-6 sm:py-8 absolute inset-x-0 bottom-0">
             
             {/* Date Box */}
             <div className="bg-black rounded-3xl w-fit sm:w-44 h-6 sm:h-7 flex gap-2 sm:gap-3 items-center px-3 sm:px-4">
               <div className="bg-[#FFFFFF] rounded-full w-2 h-2"></div>
               <p className="text-[#FFFFFF] text-xs sm:text-sm">
                 {new Date(latestNews.createdAt).toLocaleDateString('en-GB')}
               </p>
             </div>
         
             {/* Title */}
             <p className="text-white text-[20px] sm:text-[28px] font-semibold leading-8 sm:leading-10 my-2 sm:my-3">
               {latestNews?.title}
             </p>
         
             {/* Buttons */}
             <div className="flex flex-col sm:flex-row gap-3 sm:gap-5">
               
               {/* Arrow Icon */}
               <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full flex justify-center items-center bg-black border border-[#FFFFFF80]">
                 <ArrowUpRight size={10} />
               </div>
               
               {/* Read Article Button */}
               <div className="rounded-3xl bg-[black] w-fit h-9 sm:h-10 px-3 sm:px-4 border-t-0 border-b-2 border-[#FFFFFFB5] flex items-center justify-center">
                 <p className="text-[#FFFFFF] text-xs sm:text-sm font-normal">Read Article</p>
               </div>
         
             </div>
           </div>
         </div>
         
          ) : (
            <div className="flex items-center justify-center h-[535px] text-red-500">
              No News Available!
            </div>
          )}

          <div>
            <RecentNews data={blogData} />
          </div>
        </div>
        <div className="lg:col-span-4 col-span-12 m-3 pe-4 pt-5">
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
          <div>
          
            <div
    className="h-[244px] relative sm:h-[300px] md:h-[350px] w-[300px] lg:h-[300px] sm:w-[480px] mt-3"
    style={{
      backgroundImage: `url(${latestEvent?.image[0]|| defaultImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
    <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#004141] to-transparent sm:h-20">
      <div className="absolute bottom-0 left-0 p-3 text-white sm:p-5">
        <div className="flex flex-col gap-2">
          <p className="font-semibold text-base sm:text-lg">
            {latestEvent?.title || 'N/A'}
          </p>

          <div className="bg-[#004D4D] rounded-3xl w-44 h-7 flex items-center gap-2 px-4 sm:w-52 sm:h-8">
          <div className="bg-[#FFFFFF] rounded-full w-2 h-2"></div>
            <p className="text-white text-[10px] sm:text-xs">{latestEvent?.category?.categoryName || 'News'}</p>
          </div>
        </div>

        <p
          className="text-sm font-normal sm:text-base"
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(latestEvent?.content),
          }}
        />
      </div>
    </div>
  </div>
          </div>
          <div className="min-h-[300px] max-h-[700px] overflow-y-auto">
            {thisMonth.length > 0 ? (
              thisMonth.map((item: any, index: number) => (
                <div key={index} className="bg-[#FFFFFF] rounded-xl border p-4 w-full mt-4">
                  <div className="flex justify-between">
                    <div>
                      <p className="text-[#393939] text-sm font-semibold">{item.title || 'N/A'}</p>
                      <div className="bg-[#C4ECEC] rounded-3xl lg:w-44 h-7 my-2 flex gap-3 items-center px-4">
                        <div className="bg-[#393939] rounded-full w-2 h-2"></div>
                        <p>{item?.category?.categoryName || 'N/A'}</p>
                      </div>
                      <p className="text-[#5F5E5E] text-xs font-normal"
                        dangerouslySetInnerHTML={{
                          __html: DOMPurify.sanitize(item.content),
                        }}
                      >
                      </p>
                    </div>
                    <img src={item?.image[0] || defaultImage} className="w-28 h-28 sm:w-28 sm:h-28 object-cover rounded-md" alt="" />
                  </div>
                </div>
              ))
            ) : (
              <div className="text-red-600 flex items-center justify-center my-5">No Events Available !</div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewsandEvent