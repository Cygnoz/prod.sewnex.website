import { useLocation, useNavigate, useParams } from "react-router-dom"
import Calendar from "../../assets/icons/Calendar"
import ChevronLeft from "../../assets/icons/ChevronLeft"
import Clock from "../../assets/icons/Clock"
import img from '../../assets/images/viewBlog.webp'
import Categories from "./Categories"
import recentPost from '../../assets/images/viewBlog2.png'
import { useEffect, useState } from "react"
import useApi from "../../Hooks/useApi"
import { endPoints } from "../../service/apiEndpoints"
import DOMPurify from "dompurify";

type Props = {}

const BlogView = ({}: Props) => {
  const location = useLocation();
  const blogData = location.state?.blog || [];
  console.log('blogs',blogData);

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
        {viewBlog.map((item:any)=>(
          <div>
            <div
              className="h-[548px] rounded-3xl relative overflow-hidden"
              style={{ backgroundImage: `url(${item?.image[0] || img})`, backgroundSize: "cover" }}
            >
              <div onClick={()=>navigate('/blogs')} className="p-5 rounded-full cursor-pointer w-12 h-12 border border-[#E7E7E7] items-center flex justify-center mt-6 mx-4">
                <ChevronLeft size={20} color="#E7E7E7"/>
              </div>
              <div className="bg-white/10 backdrop-blur-md w-full px-8 py-8 absolute inset-x-0 border-x-0 bottom-4 border-y border-2 rounded-b-3xl border-white">
                <p className="text-white text-[28px] font-semibold leading-10">
                {item.title}
                </p>
                <p className="text-white/60 text-sm font-semibold leading-10"
                 dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(item?.content),
                }}
                >
                
                </p>
                <div className="flex items-center gap-2 text-xs text-white mt-4">
                  <img src={item.createdBy?.userImage || img} alt="" className="h-[18px] w-[18px] rounded-full" />
                  <span>{item?.createdBy?.userName || 'Anonymous'}</span> |
                  <Calendar color="white" /> <span>{new Date(item.createdAt).toLocaleDateString('en-GB')}</span> |
                  <Clock color="white" /> <span>{getTimeAgo(item?.updatedAt)}</span>
                  <div className="ml-auto flex gap-5">
                    <div className="h-[35px] px-4 bg-white/0 rounded-[20px] border border-white/50 backdrop-blur-[42.60px] flex items-center text-white text-xs">
                    {item?.category?.categoryName || "Uncategorized"}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-[#666666] text-[15px] font-normal leading-snug mt-4">
              Small businesses often struggle with managing invoices, tracking expenses, and ensuring timely payments. A smart billing system like Bill Bizz simplifies these processes by automating invoicing, reducing errors, and providing real-time financial insights...
            </p>
          </div>
        ))}
    

        <div>
          <div className="relative justify-start my-5">
           <p className="text-[#7F5303] text-2xl font-medium">Related Post</p>
          </div>
          <div className="overflow-x-auto flex">
            <div className="">
              {blogData.length>0?(
                blogData.map((item:any, index:number)=>(
                  <div key={index} className="w-[413px] h-[548px] bg-white rounded-[5px] p-5 flex-shrink-0">
                  <img className="h-[262px] rounded-[5px]" src={item?.image[0] || recentPost} alt="" />
                  <div className="h-5 px-2 py-1 bg-[#f5cf4a] rounded-[3px] inline-flex justify-center items-center gap-2.5">
                    <div className="relative justify-start text-[#666666] text-xs font-normal capitalize leading-3">
                    {item.category?.categoryName}
                    </div>
                  </div>
                  <p className="text-[#222222] text-[27px] font-semibold capitalize leading-[37.80px] mt-2">
                  {item.title}
                  </p>
                  <div className="flex items-center gap-2 text-xs text-[#777777] mt-4">
                    <img src={item.createdBy.userImage || recentPost} alt="" className="h-[18px] w-[18px] rounded-full" />
                    <span>e{item?.createdBy?.userName || 'Anonymous'}</span> |
                    <Calendar /> <span>{new Date(item.createdAt).toLocaleDateString('en-GB')}</span> |
                    <Clock /> <span>{getTimeAgo(item?.updatedAt)}</span>
                  </div>
                  <p className="text-[#555555] text-[15px] leading-snug mt-2"
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(item?.content),
                  }}
                  >
                  </p>
                </div>
                ))
              ):(
                <div></div>
              )}
                
            </div>
            {/* <div className="flex">
                <div className="w-[413px] h-[548px] bg-white rounded-[5px] p-5 flex-shrink-0">
                  <img className="h-[262px] rounded-[5px]" src={recentPost} alt="" />
                  <div className="h-5 px-2 py-1 bg-[#f5cf4a] rounded-[3px] inline-flex justify-center items-center gap-2.5">
                    <div className="relative justify-start text-[#666666] text-xs font-normal capitalize leading-3">
                    AI- Powered
                    </div>
                  </div>
                  <p className="text-[#222222] text-[27px] font-semibold capitalize leading-[37.80px] mt-2">
                  Automate Invoicing for Faster Payments
                  </p>
                  <div className="flex items-center gap-2 text-xs text-[#777777] mt-4">
                    <img src={recentPost} alt="" className="h-[18px] w-[18px] rounded-full" />
                    <span>Jesica koli</span> |
                    <Calendar /> <span>02 december 2022</span> |
                    <Clock /> <span>3 min. to read</span>
                  </div>
                  <p className="text-[#555555] text-[15px] leading-snug mt-2">
                  Generate invoices, enable recurring billing, and automate payment reminders.
                  </p>
                </div>
            </div>
            <div className="">
                <div className="w-[413px] h-[548px] bg-white rounded-[5px] p-5 flex-shrink-0">
                  <img className="h-[262px] rounded-[5px]" src={recentPost} alt="" />
                  <div className="h-5 px-2 py-1 bg-[#f5cf4a] rounded-[3px] inline-flex justify-center items-center gap-2.5">
                    <div className="relative justify-start text-[#666666] text-xs font-normal capitalize leading-3">
                    AI- Powered
                    </div>
                  </div>
                  <p className="text-[#222222] text-[27px] font-semibold capitalize leading-[37.80px] mt-2">
                  Automate Invoicing for Faster Payments
                  </p>
                  <div className="flex items-center gap-2 text-xs text-[#777777] mt-4">
                    <img src={recentPost} alt="" className="h-[18px] w-[18px] rounded-full" />
                    <span>Jesica koli</span> |
                    <Calendar /> <span>02 december 2022</span> |
                    <Clock /> <span>3 min. to read</span>
                  </div>
                  <p className="text-[#555555] text-[15px] leading-snug mt-2">
                  Generate invoices, enable recurring billing, and automate payment reminders.
                  </p>
                </div>
            </div> */}
          </div>
        </div>



      </div>
      <div className="col-span-4 flex flex-col px-2">
        <Categories/>
      </div>
    </div>
    </div>
  )
}

export default BlogView