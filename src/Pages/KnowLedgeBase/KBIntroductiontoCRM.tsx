import { useNavigate } from "react-router-dom"
import ChevronRight from "../../assets/icons/ChevronRight"
import KBHeader from "./KBHeader"
import PrinterIcon from "../../assets/icons/PrinterIcon"
import FileDown from "../../assets/icons/FileDown"
import ReverseArrows from "../../assets/icons/ReverseArrows"
import bg from '../../assets/images/BGCRM.png'
import Clock from "../../assets/icons/Clock"
import UturnArrow from "../../assets/icons/UturnArrow"
import DirectionIcon from "../../assets/icons/DirectionIcon"
import Footer from "../../footer/Footer"

type Props = {}

const KBIntroductiontoCRM = ({ }: Props) => {

    const navigate = useNavigate()
    return (
        <div>
            <KBHeader />
            <div className="p-10 bg-[#f5f5f5ff]">
                <div className="flex gap-2 items-center">
                    <p onClick={() => navigate('/knowledge-base')} className="text-[#022424] text-xl font-bold cursor-pointer">Knowledge Base</p>
                    <ChevronRight color="#002222" size={12} />
                    <p onClick={() => navigate('/knowledge-base/view')} className="text-[#022424] text-xl font-bold cursor-pointer">CRM</p>
                    <ChevronRight color="#002222" size={12} />
                    <p onClick={() => navigate('/knowledge-base/gettingStarted')} className="text-[#022424] text-xl font-bold cursor-pointer">Getting Started</p>
                    <ChevronRight size={12} />
                    <p className="text-[#515C5C] text-xl font-bold">Introduction to CRM</p>
                </div>

                <div className="flex">
                    <div className="flex px-5 py-8 mt-5 w-full">
                        <p className="text-[#303F58] text-[20px] font-bold">
                            Introduction to Bill Bizz CRM
                        </p>
                        <div className="ml-auto flex items-center gap-3">
                            <button className="border py-2 px-3 bg-[#DBF8EA] border-[#097D44] text-[#097D44] text-xs rounded-[40px] flex items-center justify-center gap-1" >
                                <FileDown />
                                PDF
                            </button>
                            <button className="border py-2 px-3 bg-[#097D44] text-white text-xs rounded-[40px]  flex items-center justify-center gap-1">
                                <PrinterIcon />
                                Print
                            </button>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="px-5 grid grid-cols-12 my-4 gap-4 prinding-div">
                    <div className="col-span-5">
                        <p className="text-[#4B5C79B5] text-2xl font-semibold">What is CRM ?</p>
                        <p className="text-[#303F58] text-sm font-medium my-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos saepe quam sunt exercitationem aperiam doloremque, quae facilis, soluta sit unde iste reiciendis officiis eius sapiente recusandae veritatis excepturi temporibus praesentium.
                        </p>
                        <div className="grid grid-cols-2 gap-6 mt-4">
                            <div>
                                <div className="flex gap-1 items-center">
                                    <ReverseArrows size={12} color="#1A2B3B" />
                                    <p className="text-[#303F58] text-sm font-medium">Seamless access</p>
                                </div>
                                <p className="text-[#303F58] text-sm font-medium">Secure cloud storage enables real-time customer connections for lasting relationships.</p>
                            </div>
                            <div>
                                <div className="flex gap-1 items-center">
                                    <Clock color="#1A2B3B" />
                                    <p className="text-[#303F58] text-sm font-medium">Optimize workflows</p>
                                </div>
                                <p className="text-[#303F58] text-sm font-medium">Secure cloud storage enables real-time customer connections for lasting relationships.</p>
                            </div>
                            <div>
                                <div className="flex gap-1 items-center">
                                    <DirectionIcon color="#1A2B3B" size={12} />
                                    <p className="text-[#303F58] text-sm font-medium">Engage proactively</p>
                                </div>
                                <p className="text-[#303F58] text-sm font-medium">Secure cloud storage enables real-time customer connections for lasting relationships.</p>
                            </div>
                            <div>
                                <div className="flex gap-1 items-center">
                                    <UturnArrow size={12} color="#1A2B3B"/>
                                    <p className="text-[#303F58] text-sm font-medium">Simplify operations</p>
                                </div>
                                <p className="text-[#303F58] text-sm font-medium">Secure cloud storage enables real-time customer connections for lasting relationships.</p>
                            </div>

                        </div>
                    </div>
                    <div className="col-span-7 flex items-center justify-center">
                        <img className="w-[620px] h-[370px] mt-10" src={bg} alt="" />
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default KBIntroductiontoCRM