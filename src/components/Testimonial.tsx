import BGImg from "../assets/images/TestimonialBgImg.jpg"
import frame1 from "../assets/images/TestimoniFrame1.png"
import frame2 from "../assets/images/TestimoniFrame2.png"
import seemore from "../assets/icons/VectorRight.png"
import seemoreLeft from "../assets/icons/VectorLeft.png"
import { useState } from "react"

type Props = {}
const Testimonial1 = [
    {
        image: frame1,
        sentance: "I recently purchased a tailoring management software. I am very pleased with its performance. The software is user-friendly and efficient, making our operations smoother. A special mention goes to Fousiya,who handles support excellently. She is always prompt and provides accurate assistance whenever we need it. Highly recommended.",
        name: "Susie Wolff",
        button: seemore,
    }
]
const Testimonial2 = [

    {
        image: frame2,
        sentance: "Our new tailoring management software has been a fantastic investment. It's easy to use and has significantly improved our efficiency. A big thank you to Fousiya for her excellent support. She's always there to help when we need it.",
        name: "Mads mikkelsen",
        button: seemoreLeft,
    }
]
function Testimonial({ }: Props) {


    const [currentTestimonial, setCurrentTestimonial] = useState(Testimonial1);

    const toggleTestimonials = () => {
        setCurrentTestimonial((prev) =>
            prev === Testimonial1 ? Testimonial2 : Testimonial1
        );
    };

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
                <div>
                    <div className="flex flex-col md:flex-row text-[#DBDBDB] px-5 sm:px-10 justify-between">
                        <h1 className="text-[24px] sm:text-[28px] md:text-[36px] font-bold ms-5 pt-3">
                            What customers are saying
                        </h1>
                        <p className="text-[14px] sm:text-[16px] pt-3 sm:pt-5 font-[400]">
                            Testimonial
                        </p>
                    </div>
                    {currentTestimonial.map((testimoni, index) => (
                        <div
                            key={index}
                            className="flex flex-col md:flex-row px-5 sm:px-10 gap-5 md:gap-10 pb-10 sm:pb-16 md:pb-20"
                        >
                            <div className="w-full md:w-[420px] ms-0 md:ms-5">
                                <img src={testimoni.image}  loading="lazy" className="pt-5 w-full" alt="" />
                            </div>
                            <div className="text-[#CCCCCC] w-full md:w-[700px] md:mt-[18%] 2xl:mt-[10%]">
                                <p className="text-[16px] h-[65%]  sm:text-[20px] md:text-[24px] font-[400] pt-8 md:pt-[10%] text-justify leading-snug">
                                    {testimoni.sentance}
                                </p>
                                <div
                                    className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-8 md:pt-[10%]"
                                    style={{ minHeight: "100px" }} /* Ensure consistent height */
                                >
                                    <p className="text-[12px] sm:text-[14px] self-center">
                                        {testimoni.name} <br /> Entrepreneur
                                    </p>
                                    <p className="flex justify-start items-center">
                                        <button
                                            onClick={toggleTestimonials}
                                            className="flex gap-5 text-[#FFFFFF] text-[14px] sm:text-[16px]"
                                        >
                                            {currentTestimonial === Testimonial1 ? (
                                                <>
                                                    See More <img src={testimoni.button} loading="lazy" alt="" />
                                                </>
                                            ) : (
                                                <img src={testimoni.button} loading="lazy" className="ms-20" alt="" />
                                            )}
                                        </button>
                                    </p>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}

export default Testimonial