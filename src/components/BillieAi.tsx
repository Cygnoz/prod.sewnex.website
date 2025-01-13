import image from "../assets/images/BillieAIBg.png"

type Props = {}
function BillieAi({ }: Props) {
    return (
        <div>
            <>
                <div className="w-full ">
                    <img
                        className="w-full h-full sm:h-auto md:h-full object-cover"
                        src={image}
                        loading="lazy"
                        alt="Responsive Image Section"
                    />
                </div>

            </>
        </div>
    )
}

export default BillieAi