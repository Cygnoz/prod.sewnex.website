import plus from "../assets/icons/plusIcon.png"
import image from "../assets/images/latestNewsImg.png"
type Props = {}

function LatestNews({ }: Props) {
    return (
        <div>
            <div className="px-16">
                <div className="flex justify-between">
                    <p className="text-[#7F5303] text-[36px] font-[700]">Explore our latest news & insight</p>
                    <p className="text-[#847B6C] text-[16px] font-[400] pt-3">Blog</p>
                </div>
                <p className="text-center text-[#9A9898] text-[15px] font-[400] py-10">
                    Stay informed with our latest news and insights. Discover groundbreaking discoveries, industry <br /> trends, and thought-provoking perspectives that shape the world around us.
                </p>
                <div className="text-center">
                    <button className="text-center text-[#7A7A7A] text-[12px]">
                        <img src={plus} className="ms-2" loading="lazy" alt="" />
                        See more
                    </button>
                </div>
                <div>
                    <img src={image}
                        className="w-full h-full sm:h-auto md:h-full object-cover"
                        loading="lazy"
                        alt="" />
                </div>
            </div>
        </div>
    )
}

export default LatestNews