import { useNavigate } from "react-router-dom"
import RecentNews from "./RecentNews"
// import ChevronLeft from "../../assets/icons/ChevronLeft"
import bg from '../../assets/images/blogViewBg.webp'
import ArrowUpRight from "../../assets/icons/ArrowUpRight"
import image1 from '../../assets/images/RecentNews1.png'
import eventImage from '../../assets/images/Frame 1618873146.png'
import { useEffect, useState } from "react"
import { endPoints } from "../../service/apiEndpoints"
import useApi from "../../Hooks/useApi"
import DOMPurify from "dompurify";

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
  console.log(latestEvent);
  console.log(thisMonth);


  return (
    <div>
      <div className="grid grid-cols-12 p-6">
        <div className="col-span-8">
          {latestNews ? (
            <div
              key={latestNews._id}
              className="h-[548px] rounded-3xl relative overflow-hidden"
              style={{ backgroundImage: `url(${latestNews?.image?.[0] || bg})`, backgroundSize: "cover" }}
            >
              {/* <div onClick={() => navigate('/blog')} className="p-5 rounded-full cursor-pointer w-12 h-12 border border-[#E7E7E7] cu items-center flex justify-center mt-6 mx-4">
                <ChevronLeft size={20} color="#E7E7E7" />
              </div> */}
              <div className="w-full px-8 py-8 absolute inset-x-0 bottom-0">
                <div className="bg-black rounded-3xl w-44 h-7 flex gap-3 items-center px-4">
                  <div className="bg-[#FFFFFF] rounded-full w-2 h-2"></div>
                  <p className="text-[#FFFFFF]">{new Date(latestNews.createdAt).toLocaleDateString('en-GB')}</p>
                </div>
                <p className="text-white text-[28px] font-semibold leading-10 my-3">
                  {latestNews?.title}
                </p>
                <div className="flex gap-5">
                  <div className="w-11 h-11 rounded-full flex justify-center items-center bg-black border border-[#FFFFFF80]">
                    <ArrowUpRight size={12} />
                  </div>
                  <div className="rounded-3xl bg-[black] w-fit h-10 px-4 border-t-0 border-b-2 border-[#FFFFFFB5] flex items-center justify-center">
                    <p className="text-[#FFFFFF] text-sm font-normal">Read Article</p>
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
          <div
          // className="h-[548px] rounded-3xl relative overflow-hidden"
          //  style={{ backgroundImage: `url(${eventImage})`, backgroundSize: "cover" }}
          >
            <img src={eventImage} alt="" />
          </div>
          {thisMonth.length > 0 ? (
            thisMonth.map((item: any, index: number) => (
              <div key={index} className="bg-[#FFFFFF] rounded-xl border p-4 w-full mt-4">
                <div className="flex justify-between">
                  <div>
                    <p className="text-[#393939] text-sm font-semibold">{item.title || 'Tech Innovations Summit'}</p>
                    <div className="bg-[#C4ECEC] rounded-3xl w-44 h-7 my-2 flex gap-3 items-center px-4">
                      <div className="bg-[#393939] rounded-full w-2 h-2"></div>
                      <p>ERP Software</p>
                    </div>
                    <p className="text-[#5F5E5E] text-xs font-normal"
                      dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(item.content),
                      }}
                    >
                    </p>
                  </div>
                  <img src={item?.image[0] || image1} className="w-28 h-28" alt="" />
                </div>
              </div>
            ))
          ) : (
            <div className="text-red-600 flex items-center justify-center my-5">No Events Available !</div>
          )}
          {/* <div className="bg-[#FFFFFF] rounded-xl border p-4 w-full mt-4">
             <div className="flex justify-between">
               <div>
                 <p className="text-[#393939] text-sm font-semibold">Tech Innovations Summit</p>
                 <div className="bg-[#C4ECEC] rounded-3xl w-44 h-7 my-2 flex gap-3 items-center px-4">
                  <div className="bg-[#393939] rounded-full w-2 h-2"></div>
                   <p>ERP Software</p>
                 </div>
                <p className="text-[#5F5E5E] text-xs font-normal">Join industry leaders, business owners, and financial experts at the Sewnex Annual Business Summit 2025.See what Sewnex has to offer</p>
               </div>
               <img src={image1} className="w-28 h-28" alt="" />
            </div>
           </div> */}
        </div>
      </div>
    </div>
  )
}

export default NewsandEvent