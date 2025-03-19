import { useNavigate } from "react-router-dom"
import ChevronRight from "../../assets/icons/ChevronRight"
import KBHeader from "./KBHeader"
import CopyIcon from "../../assets/icons/CopyIcon"
import Footer from "../../footer/Footer"

type Props = {}

const KBGettingStarted = ({ }: Props) => {
    const navigate = useNavigate()
    // /knowledge-base/view
    return (
        <div>
            <KBHeader />
            <div className="p-10 bg-[#f5f5f5ff]">
                <div className="flex gap-2 items-center">
                    <p onClick={() => navigate('/knowledge-base')} className="text-[#022424] text-xl font-bold cursor-pointer">Knowledge Base</p>
                    <ChevronRight color="#002222" size={12} />
                    <p onClick={() => navigate('/knowledge-base/view')} className="text-[#022424] text-xl font-bold cursor-pointer">CRM</p>
                    <ChevronRight size={12} />
                    <p className="text-[#515C5C] text-xl font-bold">Getting Started</p>
                </div>

                <div className="bg-[#FFFFFF] cursor-pointer p-4 my-6 flex gap-4 rounded-md" onClick={() => (navigate(`/knowledge-base/intro`))}>
                    <div className="rounded-full  bg-[#CCCCCC] flex items-center justify-center w-[60px] h-[60px] cursor-pointer">
                        <CopyIcon />
                    </div>
                    <div className="flex items-center">
                        <div>
                            <p className="font-bold text-[black] cursor-pointer">Introduction to CRM</p>
                            <p className="text-[#4B5C79] text-xs font-normal">Lorem ipsum agna topert enirk page agna</p>
                        </div>
                    </div>
                </div>

                <div className="bg-[#FFFFFF] cursor-pointer p-4 my-6 flex  gap-4 rounded-md" onClick={() => (navigate(`/knowledge-base/intro`))}>
                    <div className="rounded-full  bg-[#F0AF81] flex items-center justify-center w-[60px] h-[60px] cursor-pointer">
                        <CopyIcon color="#FF8C45" />
                    </div>
                    <div className="flex items-center">
                        <div>
                            <p className="font-bold text-[black] cursor-pointer">Introduction to CRM</p>
                            <p className="text-[#4B5C79] text-xs font-normal">Lorem ipsum agna topert enirk page agna</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default KBGettingStarted