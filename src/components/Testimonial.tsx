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
      "I recently purchased a tailoring management software. I am very pleased with its performance. The software is user-friendly and efficient, making our operations smoother. A special mention goes to Fousiya, who handles support excellently. She is always prompt and provides accurate assistance whenever we need it. Highly recommended.",
    name: "Susie Wolff",
  },
  {
    image: frame2,
    sentance:
      "Our new tailoring management software has been a fantastic investment. It's easy to use and has significantly improved our efficiency. A big thank you to Fousiya for her excellent support. She's always there to help when we need it.",
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
          <h1 className="text-[24px] sm:text-[28px] md:text-[36px] font-bold ms-5 pt-3">
            What our clients are saying
          </h1>
        </div>
        <div className="flex flex-col md:flex-row px-5 sm:px-10 gap-5 md:gap-10 pb-10 sm:pb-16 md:pb-20">
          <div className="w-full md:w-[420px] ms-0 md:ms-5">
            <img src={testimonials[index].image} loading="lazy" className="pt-5 w-full" alt="" />
          </div>
          <div className="text-[#CCCCCC] w-full md:w-[700px] md:mt-[18%] 2xl:mt-[10%]">
            <p className="text-[16px] h-[65%] sm:text-[20px] md:text-[24px] font-[400] pt-8 md:pt-[10%] text-justify leading-snug">
              {testimonials[index].sentance}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-8 md:pt-[10%]" style={{ minHeight: "100px" }}>
              <p className="text-[12px] sm:text-[14px] self-center">
                {testimonials[index].name} <br /> Entrepreneur
              </p>
              <div className="flex justify-end md:justify-start">
                <button
                  onClick={toggleTestimonials}
                  className="flex gap-5 text-[#FFFFFF] text-[14px] sm:text-[16px] items-center"
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