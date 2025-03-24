import Calendar from "../../assets/icons/Calendar"
import Clock from "../../assets/icons/Clock"
// import recentBlog1 from '../../assets/images/recentBlog1.png'
import profile from '../../assets/images/blogProfile.png'
import DOMPurify from "dompurify";
import noImage from '../../assets/images/noImage.png'

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

    return (
        <div>
            {blogData.length > 0 ? (
                blogData.reverse().map((item: any, index: number) => (
                    <div key={index} className="flex flex-col sm:flex-row justify-between gap-3 sm:gap-5 my-2 sm:my-4">
    
                    {/* Image Section */}
                    <div className="w-full sm:w-64">
                        <img className="w-full sm:w-64 h-44 rounded-md" src={item?.image[0] || noImage} alt="" />
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
                            <img className="w-5 h-5 rounded-full" src={item.createdBy?.userImage || profile} alt="" />
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
                <div></div>
            )}

        </div>
    )
}

export default RecentlyPosted