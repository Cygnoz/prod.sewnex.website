import bg from '../assets/images/homeBg8.png'
import bg2 from '../assets/images/homeBg7.png'
import image from '../assets/images/homeBg5.png'
import image2 from '../assets/images/homeBg9.png'
import image3 from '../assets/images/girlImage.png'

function ServiceDelivey() {
  return (
   
    <>
 <div
    className="w-full lg:h-[610px] overflow-hidden"
    style={{
      backgroundImage: `url(${bg2})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      // borderRadius: "10px",
    }}
    >

      <div className='grid grid-cols-1 md:grid-cols-12'>
      {/* Text Section */}
      <div className="md:col-span-7">
        <div className='px-8 py-12 md:px-20 md:py-20'>
          <p className='text-white text-3xl md:text-[40px] font-semibold'>
            Artifi<span className='text-[#fdffba]'>cial intelligence</span>{' '}
            <span className='text-white'>-Driven Convenience, Now in Your Business. Meet Billie,</span>
          </p>
          <p className='text-[#ababab] text-lg md:text-2xl font-medium md:w-[64%] my-6 md:my-8'>
            Let Billie take the hassle out of your day with instant support, seamless service, and effortless booking, all in one.
          </p>
        </div>
      </div>

      {/* Image Section */}
      <div className="md:col-span-5">
        <div className='lg:py-12 flex justify-center relative lg:mt-8'>
          <img className='h-[300px] w-[250px] md:h-[527px] md:w-[453px] relative mt-1' src={image2} alt="Billie Image 1" />
          <img className='h-[250px] w-[340px] md:h-[466px] md:w-[632px] absolute mt-8 md:mt-16 overflow-hidden' src={image3} alt="Billie Image 2" />
        </div>
      </div>
    </div>

    </div>

    <div
    className="w-full lg:h-[513px] overflow-hidden"
    style={{
      backgroundImage: `url(${bg})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
    }}
    >

<div className="grid grid-cols-1 md:grid-cols-12">
      {/* Text Content */}
      <div className="md:col-span-7 flex items-center">
        <div className="px-6 md:px-20 lg:py-10 py-20 lg:-mt-72">
          <p className="text-[#035353] text-3xl md:text-[40px] font-semibold leading-snug">
            OCR Technology <span className="text-[#014444]">for Effortless Text Extraction</span>
          </p>
          <p className="text-[#002222] text-lg md:text-[22px] w-full md:w-[98%] font-normal my-4">
            Our system offers seamless text extraction with a streamlined process for easy data retrieval. With over 95% accuracy in text recognition, it ensures reliable results. Capable of processing up to 10,000 pages per hour, it provides fast and efficient performance.
          </p>
        </div>
      </div>

      {/* Image Content */}
      <div className="md:col-span-5 flex justify-center items-center py-10 md:py-20">
        <img
          className="w-full max-w-[474px] h-auto md:h-[590px] ms-0 md:ms-10"
          src={image}
          alt="OCR Technology"
        />
      </div>
    </div>

    </div>
    </>
  );
}

export default ServiceDelivey;
