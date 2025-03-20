import { useNavigate } from 'react-router-dom'
import Calendar from '../../assets/icons/Calendar'
import Clock from '../../assets/icons/Clock'
import blog1 from '../../assets/images/Blogs1.png'
import profile from '../../assets/images/blogProfile.png'
// import recentBlog1 from '../../assets/images/recentBlog1.png'
// import recentBlog2 from '../../assets/images/recentBlog2.png'
import Categories from './Categories'
import { endPoints } from '../../service/apiEndpoints'
import { useEffect, useState } from 'react'
import useApi from '../../Hooks/useApi'
import DOMPurify from "dompurify";
import RecentlyPosted from './RecentlyPosted'

type Props = {}

const Blog = ({ }: Props) => {
  const [blogData, setBlogData] = useState<any>([]);
  const [thisMonth, setThisMonth] = useState<any>([]);
  // const [loading, setLoading] = useState<boolean>(true);
  const { request: getData } = useApi("get", 3001);
  const navigate = useNavigate();

  const handleGetBlogData = async () => {
    try {
      // setLoading(true);
      const url = `${endPoints.GET_POST}?postType=Blogs&project=SewNex`;
      const { response, error } = await getData(url);
      console.log('url', url);
      console.log('res', response);
      console.log('err', error);

      if (!error && response) {
        console.log(response.data);

        const allPosts = response.data.data;

        const currentMonth = new Date().getMonth();
        const currentYear = new Date().getFullYear();

        const filteredPosts = allPosts.filter((post: any) => {
          if (!post.createdAt) return false;
          const postDate = new Date(post.createdAt);
          return (
            postDate.getMonth() === currentMonth &&
            postDate.getFullYear() === currentYear
          );
        });

        setBlogData(allPosts);
        setThisMonth(filteredPosts);
      }
    } catch (error) {
      console.log("Error", error);
    }
    // finally {
    //   setLoading(false); // Set loading to false after API call completes
    // }
  };

  useEffect(() => {
    handleGetBlogData();
  }, []);

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
        <p className="text-[#7F5303] text-2xl font-medium">Featured This Month</p>

        <div className="flex gap-4 my-4 overflow-x-auto">
          {thisMonth.length > 0 ? (
            thisMonth.map((item: any, index: number) => (
              <div key={index} onClick={() => navigate(`/blog/view/${item._id}`, { state: { blog: blogData } })} className="w-[400px] mt-6 mb-4 flex-shrink-0 cursor-pointer">
                <div className="bg-gradient-to-b from-[#925E00] to-[#D28600] w-fit h-fit py-1 px-3 rounded-md">
                  <p className="text-[#FFFFFF] text-sm font-normal">{item?.category?.categoryName}</p>
                </div>
                <p className="text-[#222222] text-[26px] font-semibold my-3">{item.title}</p>
                <div>
                  <img src={item.image[0] || blog1} className='w-[401px] h-[229px] rounded-lg' alt="" />
                </div>
                <div className='flex gap-2 items-center my-2'>
                  <img className='w-5 h-5 rounded-full' src={item.createdBy.userImage || profile} alt="" />
                  <p className='text-[#777777] text-xs font-normal'>{item.createdBy.userName}</p>
                  <div className="bg-[#999999] w-[1px] h-3 items-center"></div>
                  <div>
                    <Calendar />
                  </div>
                  <p className='text-[#777777] text-xs font-normal'>{new Date(item.createdAt).toLocaleDateString('en-GB')}</p>
                  <div className="bg-[#999999] w-[1px] h-3 items-center"></div>
                  <div>
                    <Clock />
                  </div>
                  <p className='text-[#777777] text-xs font-normal'>{getTimeAgo(item?.createdAt)}</p>
                </div>
                <p className='text-[#555555] text-base font-normal'>
                  <p
                    className="mt-4 text-base font-normal text-[#555555]"
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(item.content),
                    }}
                  />
                </p>
              </div>
            ))
          ) : (
            <div className="flex items-center justify-center text-red-500 mt-28">No Blogs Available !</div>
          )}
        </div>

        <div className='bg-[#D9D9D9] grid grid-cols-12'>
          <div className="col-span-8">
            <div className='px-6 py-4'>
              <p className='text-[#088A8A] text-xl font-medium'>Recently <span className='text-[#222222]'>Posted</span></p>
              <RecentlyPosted blogData={blogData} />
              {/* <div className='flex justify-between gap-5 my-4'>
                <div>
                  <img className='w-64 h-44 rounded-md' src={recentBlog1} alt="" />
                </div>
                <div>
                  <div className="bg-[#F3E6E6] w-fit h-fit py-1 px-2 rounded-md">
                    <p className="text-[#666666] text-sm font-normal">CRM</p>
                  </div>
                  <p className='text-[#222222] text-3xl font-semibold mt-3'>How Sewnex Simplifies Inventory Management</p>
                  <div className='flex gap-2 items-center my-4'>
                    <img className='w-5 h-5 rounded-full' src={profile} alt="" />
                    <p className='text-[#777777] text-xs font-normal'>Jenny Kiaa</p>
                    <div className="bg-[#999999] w-[1px] h-3 items-center"></div>
                    <div>
                      <Calendar />
                    </div>
                    <p className='text-[#777777] text-xs font-normal'>02 december 2022</p>
                    <div className="bg-[#999999] w-[1px] h-3 items-center"></div>
                    <div>
                      <Clock />
                    </div>
                    <p className='text-[#777777] text-xs font-normal'>3 min. to read</p>
                  </div>
                  <p className='text-[#555555] text-base font-normal'>Expense tracking isn't just about recording numbers; it's about making informed financial decisions.</p>
                </div>
              </div> */}

              {/* <div className='flex justify-between gap-5 my-4'>
                <div>
                  <img className='w-64 h-44 rounded-md' src={recentBlog2} alt="" />
                </div>
                <div>
                  <div className="bg-[#F3E6E6] w-fit h-fit py-1 px-2 rounded-md">
                    <p className="text-[#666666] text-sm font-normal">CRM</p>
                  </div>
                  <p className='text-[#222222] text-3xl font-semibold mt-3'>The Role of AI in Modern Business Billing</p>
                  <div className='flex gap-2 items-center my-4'>
                    <img className='w-5 h-5 rounded-full' src={profile} alt="" />
                    <p className='text-[#777777] text-xs font-normal'>Jenny Kiaa</p>
                    <div className="bg-[#999999] w-[1px] h-3 items-center"></div>
                    <div>
                      <Calendar />
                    </div>
                    <p className='text-[#777777] text-xs font-normal'>02 december 2022</p>
                    <div className="bg-[#999999] w-[1px] h-3 items-center"></div>
                    <div>
                      <Clock />
                    </div>
                    <p className='text-[#777777] text-xs font-normal'>3 min. to read</p>
                  </div>
                  <p className='text-[#555555] text-base font-normal'>Expense tracking isn't just about recording numbers; it's about making informed financial decisions.</p>
                </div>
              </div> */}
            </div>
          </div>
          <div className="col-span-4">
            <Categories />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog