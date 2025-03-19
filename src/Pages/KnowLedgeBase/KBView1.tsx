import { useNavigate } from "react-router-dom"
import ChevronRight from "../../assets/icons/ChevronRight"
import KBHeader from "./KBHeader"
import image1 from '../../assets/images/CRM1.png'
import Footer from "../../footer/Footer"

type Props = {}

const KBView1 = ({ }: Props) => {

    const navigate = useNavigate()
    return (
        <div>
            <KBHeader />
            <div className="p-10 bg-[#f5f5f5ff]">
                <div className="flex gap-2 items-center">
                    <p onClick={() => navigate('/knowledge-base')} className="text-[#022424] text-xl font-bold cursor-pointer">Knowledge Base</p>
                    <ChevronRight size={12} />
                    <p className="text-[#515C5C] text-xl font-bold">CRM</p>
                </div>

                <div className="grid grid-cols-2 gap-8 my-4">

                    <div className="flex bg-white p-2 gap-5 rounded-2xl" >
                        <img src={image1} alt="" className="rounded-2xl h-24 w-28" />
                        <div className="space-y-2 px-2">
                            <p className="text-base font-bold">Getting Started</p>
                            <div className="flex gap-5">

                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-[#4B5C79]"></div>
                                    <p className="text-[#4B5C79] text-sm font-medium">Section</p>
                                    <div className="w-2 h-2 rounded-full bg-[#4B5C79]"></div>
                                    <p className="text-[#4B5C79] text-sm font-medium">Article</p>
                                </div>
                            </div>
                            <button
                                className="text-xs font-normal text-[#565148] bg-[#FEFDFA] cursor-pointer border border-[#565148] flex items-center justify-center rounded-lg py-1 px-2"
                                onClick={() =>
                                    navigate(`/knowledge-base/gettingStarted`)
                                }
                            >
                                View More
                            </button>
                        </div>
                    </div>

                    <div className="flex bg-white p-2 gap-5 rounded-2xl" >
                        <img src={image1} alt="" className="rounded-2xl h-24 w-28" />
                        <div className="space-y-2 px-2">
                            <p className="text-base font-bold">Getting Started</p>
                            <div className="flex gap-5">

                            <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-[#4B5C79]"></div>
                                    <p className="text-[#4B5C79] text-sm font-medium">Section</p>
                                    <div className="w-2 h-2 rounded-full bg-[#4B5C79]"></div>
                                    <p className="text-[#4B5C79] text-sm font-medium">Article</p>
                                </div>
                            </div>
                            <button
                                className="text-xs font-normal text-[#565148] bg-[#FEFDFA] border border-[#565148] flex items-center justify-center rounded-lg p-1"
                                onClick={() =>
                                    navigate(`/knowledge-base/gettingStarted`)
                                }
                            >
                                View More
                            </button>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default KBView1