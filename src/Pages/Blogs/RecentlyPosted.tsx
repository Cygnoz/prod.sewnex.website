import Calendar from "../../assets/icons/Calendar"
import Clock from "../../assets/icons/Clock"
// import recentBlog1 from '../../assets/images/recentBlog1.png'
import profile from '../../assets/images/blogProfile.png'
import DOMPurify from "dompurify";
import noImage from '../../assets/images/noImage.png'
import { useState } from "react";
import PreviousIcon from "../../assets/icons/PreviousIcon";
import NextIcon from "../../assets/icons/NextIon";

type Props = { blogData: any }

const RecentlyPosted = ({ blogData }: Props) => {

    const getTimeAgo = (timestamp: string | number | Date | null | undefined): string => {
        if (!timestamp) return "Invalid date";

        const now = new Date().getTime(); // Get current time in milliseconds
        const createdAt = new Date(timestamp).getTime(); // Convert timestamp to milliseconds

        if (isNaN(createdAt)) return "Invalid date"; // Ensure timestamp is valid

        const diffInMs = now - createdAt; // Difference in milliseconds
        const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60)); // Convert to hours

        return diffInHours > 0 ? `${diffInHours} Hours Ago` : "Just now";
    };
    const [currentPage, setCurrentPage] = useState(1);
    const blogsPerPage = 2; // Show 2 blogs per page
  
    // Reverse the data to show the latest blogs first
    const reversedBlogs = [...blogData].reverse();
  
    // Calculate total pages
    const totalPages = Math.ceil(reversedBlogs.length / blogsPerPage);
  
    // Get blogs for the current page
    const startIndex = (currentPage - 1) * blogsPerPage;
    const endIndex = startIndex + blogsPerPage;
    const paginatedBlogs = reversedBlogs.slice(startIndex, endIndex);
  
    return (
        <div>
        {paginatedBlogs.length > 0 ? (
          paginatedBlogs.map((item: any, index: number) => (
            <div key={index} className="flex flex-col sm:flex-row justify-between gap-3 sm:gap-5 my-2 sm:my-4">
              
              {/* Image Section */}
              <div className="w-full sm:w-64">
                <img className="w-full sm:w-64 h-44 rounded-md" src={item?.image[0] || noImage} alt="Blog Image" />
              </div>
  
              {/* Content Section */}
              <div className="me-auto">
                
                {/* Category */}
                <div className="bg-[#F3E6E6] w-fit h-fit py-1 px-2 rounded-md">
                  <p className="text-[#666666] text-sm font-normal">{item?.category?.categoryName || "Uncategorized"}</p>
                </div>
  
                {/* Title */}
                <p className="text-[#222222] text-xl sm:text-3xl font-semibold mt-2 sm:mt-3">
                  {item?.title || "Untitled"}
                </p>
  
                {/* Author, Date, Time */}
                <div className="flex flex-wrap gap-2 sm:gap-2 items-center my-3 sm:my-4">
                  <img className="w-5 h-5 rounded-full" src={item.createdBy?.userImage || profile} loading="lazy" alt="User" />
                  <p className="text-[#777777] text-xs font-normal">{item?.createdBy?.userName || "Anonymous"}</p>
  
                  <div className="bg-[#999999] w-[1px] h-3"></div>
  
                  <div><Calendar /></div>
                  <p className="text-[#777777] text-xs font-normal">{new Date(item.createdAt).toLocaleDateString('en-GB')}</p>
  
                  <div className="bg-[#999999] w-[1px] h-3"></div>
  
                  <div><Clock /></div>
                  <p className="text-[#777777] text-xs font-normal">{getTimeAgo(item?.createdAt)}</p>
                </div>
  
                {/* Description */}
                <p className="text-[#555555] text-sm sm:text-base font-normal mt-2 sm:mt-4">
                  <span
                    className="text-[#555555] text-sm sm:text-base font-normal"
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(item.content),
                    }}
                  />
                </p>
              </div>
            </div>
          ))
        ) : (
          <div className="text-red-500 text-center my-11">No Blogs Available!</div>
        )}
  
        {/* Pagination Controls */}
        {totalPages > 1 && (
         <div className="flex justify-between items-center mt-4">
         <div className="text-xs text-[#71736B] font-medium flex gap-2">
           Showing {currentPage} of {totalPages || 1}
           <div className="flex gap-2">
             <button
               onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
               disabled={currentPage === 1}
             >
               <PreviousIcon size={20} color="#71736B" />
             </button>
             <button className="border text-[#FFFFFF] bg-[#97998E] px-2 py-1">
               {currentPage}
             </button>
             <button
               onClick={() =>
                 setCurrentPage((prev) => Math.min(prev + 1, totalPages))
               }
               disabled={currentPage === totalPages || totalPages === 0}
             >
               <NextIcon size={20} color="#71736B" />
             </button>
           </div>
         </div>
         {/* <div className="flex gap-2 items-center text-[#71736B] font-medium text-xs">
           Showing per page
           <select
             value={rowsPerPage}
             onChange={handleRowsPerPageChange}
             className="border border-gray-300 rounded-md p-1 text-sm"
           >
             {[5, 10, 20, 50].map((option) => (
               <option key={option} value={option}>
                 {option}
               </option>
             ))}
           </select>
         </div> */}
       </div>
        )}
      </div>
    )
}

export default RecentlyPosted