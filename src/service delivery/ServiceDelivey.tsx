import bg from '../assets/images/homeBg8.png'
import bg2 from '../assets/images/homeBg7.png'
import image from '../assets/images/homeBg5.png'
import image2 from '../assets/images/homeBg9.png'
import image3 from '../assets/images/girlImage.png'

function ServiceDelivey() {
  return (
   
    <>
 <div
    className="w-full h-[610px] overflow-hidden"
    style={{
      backgroundImage: `url(${bg2})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      // borderRadius: "10px",
    }}
    >

      <div className='grid grid-cols-12'>
      <div className="col-span-7">
        <div className='px-20 py-20'>
          <p className='text-[#FFFFFF] text-[40px] font-semibold'>Artifi<span className='text-[#fdffbaff]'>cial intelligence</span> <span className='text-[#FFFFFF]'>-Driven Convenience, Now in Your Business.
          Meet Billie,</span></p>
          <p className='text-[#abababff] text-2xl font-medium w-[64%] my-8'>Let Billie take the hassle out of your day with Instant support, seamless service, and effortless booking, all in one.
          </p>
        </div>
      </div>
      <div className="col-span-5">
        <div className='py-20 flex'>
          <img className='h-[527px] w-[453px] relative mt-1' src={image2} alt="" />
          <img className='h-[466px] w-[632px] absolute mt-16 overflow-hidden' src={image3} alt="" />
        </div>
      </div>
      </div>

    </div>

    <div
    className="w-full h-[513px] overflow-hidden"
    style={{
      backgroundImage: `url(${bg})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
    }}
    >

      <div className='grid grid-cols-12'>
      <div className="col-span-7">
        <div className='px-20 py-20'>
          <p className='text-[#035353] text-[40px] font-semibold'>OCR Technology <span className='text-[#014444]'>for Effortless Text Extraction</span></p>
          <p className='text-[#002222] text-[22px] w-[98%] font-normal my-4'>Our system offers seamless text extraction with a streamlined process for easy data retrieval. With over 95% accuracy in text recognition, it ensures reliable results. Capable of processing up to 10,000 pages per hour, it provides fast and efficient performance. 
          </p>
        </div>
      </div>
      <div className="col-span-5">
        <div className='py-20'>
          <img className='w-[474px] h-[590px] ms-10' src={image} alt="" />
        </div>
      </div>
      </div>

    </div>
    </>
  );
}

export default ServiceDelivey;
