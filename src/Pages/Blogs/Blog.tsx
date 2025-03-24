import { useNavigate } from 'react-router-dom'
import Calendar from '../../assets/icons/Calendar'
import Clock from '../../assets/icons/Clock'
// import blog1 from '../../assets/images/Blogs1.png'
import profile from '../../assets/images/blogProfile.png'
// import recentBlog1 from '../../assets/images/recentBlog1.png'
// import recentBlog2 from '../../assets/images/recentBlog2.png'
import Categories from './Categories'
import { endPoints } from '../../service/apiEndpoints'
import { useEffect, useState } from 'react'
import useApi from '../../Hooks/useApi'
import DOMPurify from "dompurify";
import RecentlyPosted from './RecentlyPosted'
import noImage from '../../assets/images/noImage.png'

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

        <div className="flex gap-4 my-4 overflow-x-auto px-4 sm:px-6 md:px-8">
          {thisMonth.length > 0 ? (
            thisMonth.reverse().map((item: any, index: number) => (
              <div
                key={index}
                onClick={() => navigate(`/blog/view/${item._id}`, { state: { blog: blogData } })}
                className="w-[90%] sm:w-[400px] flex-shrink-0 cursor-pointer"
              >
                {/* Category Tag */}
                <div className="bg-gradient-to-b from-[#925E00] to-[#D28600] w-fit h-fit py-1 px-3 rounded-md">
                  <p className="text-[#FFFFFF] text-sm font-normal">{item?.category?.categoryName}</p>
                </div>

                {/* Blog Title */}
                <p className="text-[#222222] text-xl sm:text-[26px] font-semibold my-3">
                  {item.title}
                </p>

                {/* Blog Image */}
                <div>
                  <img src={item.image[0] || noImage}
                    className="w-full sm:w-[401px] h-[200px] sm:h-[229px] rounded-lg object-cover"
                    alt="" />
                </div>

                {/* Author & Meta Info */}
                <div className="flex flex-wrap gap-2 items-center my-2 text-xs sm:text-sm">
                  <img className="w-5 h-5 rounded-full" src={item.createdBy.userImage || profile} alt="" />
                  <p className="text-[#777777]">{item.createdBy.userName}</p>
                  <div className="hidden sm:block bg-[#999999] w-[1px] h-3"></div>

                  <div className="flex items-center gap-1">
                    <Calendar />
                    <p className="text-[#777777]">{new Date(item.createdAt).toLocaleDateString('en-GB')}</p>
                  </div>

                  <div className="hidden sm:block bg-[#999999] w-[1px] h-3"></div>

                  <div className="flex items-center gap-1">
                    <Clock />
                    <p className="text-[#777777]">{getTimeAgo(item?.createdAt)}</p>
                  </div>
                </div>

                {/* Blog Content Preview */}
                <p
                  className="mt-4 text-sm sm:text-base font-normal text-[#555555] leading-relaxed"
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(item.content),
                  }}
                />
              </div>
            ))
          ) : (
            <div className="flex items-center justify-center text-red-500 mt-28">
              No Blogs Available !
            </div>
          )}
        </div>


        <div className='bg-[#D9D9D9] grid grid-cols-12 gap-4 md:gap-6 lg:gap-0'>
          {/* Left Section (Recently Posted) */}
          <div className="col-span-12 md:col-span-8 lg:-mx-8 lg:px-8 lg:py-4">
            <div className='lg:px-6 lg:py-4'>
              <p className='text-[#088A8A] text-xl font-medium text-center md:text-left'>
                Recently <span className='text-[#222222]'>Posted</span>
              </p>
              <RecentlyPosted blogData={blogData} />
            </div>
          </div>

          {/* Right Section (Categories) */}
          <div className="col-span-12 md:col-span-4 lg:ps-24 lg:mx-3">
            <Categories />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Blog