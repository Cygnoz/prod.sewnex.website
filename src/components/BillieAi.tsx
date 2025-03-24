
import image1 from '../assets/images/HomeBg1.png'
// import image2 from '../assets/images/homeBg2.png'

type Props = {}
function BillieAi({ }: Props) {
    return (
        <div>
        
                {/* <div className="w-full ">
                    <img
                        className="w-full h-full sm:h-auto md:h-full object-cover"
                        src={image}
                        loading="lazy"
                        alt="Responsive Image Section"
                    />
                </div> */}

<div className="bg-[#F9E6B9] w-full min-h-[500px]">
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-20  lg:pt-[72px] items-center">
        <img
          className="w-full max-w-[594px]  h-auto"
          src={image1}
          alt="E-commerce Integration"
        />

        <div className="w-full lg:w-[40%] px-4 lg:px-0">
          <p className="text-[#A06600] text-2xl lg:text-[36px] font-semibold">
            Unlock New Potential with Dynamic <br />
            E-commerce Integration Solutions
          </p>

          <p className="text-[#462D00] text-base lg:text-xl font-normal mt-4 lg:mt-8">
            Our system offers seamless connectivity across all sales channels,
            ensuring real-time synchronization of inventory and orders. With
            flexible payment options, it integrates multiple payment gateways
            for a smooth checkout process.
          </p>
        </div>
      </div>
    </div>
           
        </div>
    )
}

export default BillieAi