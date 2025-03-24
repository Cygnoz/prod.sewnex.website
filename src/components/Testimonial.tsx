import BGImg from "../assets/images/TestimonialBgImg.jpg";
import frame1 from "../assets/images/Frame 629508(ne) (2).png";
import frame2 from "../assets/images/Frame 629508(fe) (1).png";
import { useState } from "react";
import ArrowRight from "../assets/icons/arrowRight";
import ArrowLeftIcon from "../assets/icons/ArrowLeftIcon";

const testimonials = [
  {
    image: frame1,
    sentance:
      "Sewnex has completely transformed the way we manage our textile operations! From inventory tracking to order processing, everything is seamless and efficient. The multi-tenant feature allows us to manage multiple branches effortlessly, and the automation tools save us hours of manual work.",
    name: "Susie Wolff",
  },
  {
    image: frame2,
    sentance:
      "Sewnex has completely transformed the way we manage our textile operations! From inventory tracking to order processing, everything is seamless and efficient. The multi-tenant feature allows us to manage multiple branches effortlessly, and the automation tools save us hours of manual work.",
    name: "Mads Mikkelsen",
  },
];

function Testimonial() {
  const [index, setIndex] = useState(0);
  const toggleTestimonials = () => setIndex((prev) => (prev === 0 ? 1 : 0));

  return (
    <div className="px-4 sm:px-8 md:px-16 py-8 sm:py-12 md:py-16">
      <div
        style={{
          backgroundImage: `url(${BGImg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          borderRadius: "10px",
        }}
        className="w-full"
      >
        <div className="flex flex-col md:flex-row text-[#DBDBDB] px-5 sm:px-10 justify-between">
          <h1 className="text-[36px] text-[#DBDBDB] sm:text-[28px] md:text-[36px] font-normal ms-5 pt-3">
            What our clients are saying
          </h1>
        </div>
        <div className="flex flex-col md:flex-row px-5 sm:px-10 gap-5 md:gap-10 pb-10 sm:pb-16 md:pb-20">
          <div className="w-full md:w-[420px] ms-0 md:ms-5">
            <img src={testimonials[index].image} loading="lazy" className="pt-5 w-full" alt="" />
          </div>
          <div className="text-[#CCCCCC] w-full md:w-[700px] md:mt-[18%] 2xl:mt-[10%]">
            <p className="text-[22px] h-[65%] sm:text-[20px] md:text-[24px] font-normal pt-8 md:pt-[10%] text-justify leading-snug">
              {testimonials[index].sentance}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-8 md:pt-[10%]" style={{ minHeight: "100px" }}>
              <p className="text-[13px] text-[#B8B8B8] font-normal sm:text-[14px] self-center">
                {testimonials[index].name} <br /> Entrepreneur
              </p>
              <div className="flex justify-end md:justify-start">
                <button
                  onClick={toggleTestimonials}
                  className="flex gap-5 text-[#FFFFFF] text-[18px] font-normal sm:text-[16px] items-center"
                >
                  {index === 0 ? (
                    <>
                      See More <ArrowRight color="#F6F6F6" size={20} />
                    </>
                  ) : (
                    <ArrowLeftIcon color="#F6F6F6" size={20} />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;