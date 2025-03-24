
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

                <div className="bg-[#F9E6B9] w-full h-[500px]">
                    <div className="flex gap-20 pt-[72px]">
                    <img className="w-[594px] h-[428px]" src={image1} alt="" />
                    <div className="w-[40%]">
                        <p className="text-[#A06600] text-[36px] font-semibold flex">Unlock New Potential with Dynamic <br />
                        E-commerce Integration Solutions</p>
                        <p className="text-[#462D00] text-xl font-normal mt-8">Our system offers seamless connectivity across all sales channels, ensuring real-time synchronization of inventory and orders. With flexible payment options, it integrates multiple payment gateways for a smooth checkout process. 
                        </p>
                    </div>
                    </div>
                </div>

           
        </div>
    )
}

export default BillieAi