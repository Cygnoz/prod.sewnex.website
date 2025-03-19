import { useNavigate } from "react-router-dom"
import RightArrow from "../../assets/icons/RightArrow"
import Footer from "../../footer/Footer"
import KBHeader from "./KBHeader"

type Props = {}

const KnowledgeBase = ({}: Props) => {

    const navigate =useNavigate()
  return (
    <div>
        <KBHeader/>
        <div className="p-10 bg-[#f5f5f5ff]">
        <p className="text-[#022424] text-xl font-bold">Knowledge Base</p>
        <div className="grid grid-cols-3 gap-6 mt-4">
        <div className="bg-[#FFFFFF] rounded-2xl p-8 h-48 w-fit">
        <div className="flex gap-3 items-center">
        <div className="w-3 h-3 rounded-full bg-[#45A7DE]"></div>
        <p className="text-[#010205] text-base font-bold">CRM</p>
        </div>
        <p className="text-[#4B5C79] text-sm font-normal">CRM that helps you sell smarter, better, faster</p>
        <div className="border border-[#CECECE] my-4"></div>
        <div className="flex justify-between">
        <div>
            <p className="text-[#4B5C79] text-sm font-normal">28 section</p>
            <p className="text-[#010205] text-base font-bold">912 Article</p>
        </div>
        <div onClick={()=>navigate('/knowledge-base/view')} className="rounded-full cursor-pointer w-10 h-10 bg-[#010205] flex items-center justify-center">
        <RightArrow/>
        </div>
        </div>
        </div>
        <div className="bg-[#FFFFFF] rounded-2xl p-8 h-48 w-fit">
        <div className="flex gap-3 items-center">
        <div className="w-3 h-3 rounded-full bg-[#45A7DE]"></div>
        <p className="text-[#010205] text-base font-bold">CRM</p>
        </div>
        <p className="text-[#4B5C79] text-sm font-normal">CRM that helps you sell smarter, better, faster</p>
        <div className="border border-[#CECECE] my-4"></div>
        <div className="flex justify-between">
        <div>
            <p className="text-[#4B5C79] text-sm font-normal">28 section</p>
            <p className="text-[#010205] text-base font-bold">912 Article</p>
        </div>
        <div onClick={()=>navigate('/knowledge-base/view')} className="rounded-full cursor-pointer w-10 h-10 bg-[#010205] flex items-center justify-center">
        <RightArrow/>
        </div>
        </div>
        </div>
        <div className="bg-[#FFFFFF] rounded-2xl p-8 h-48 w-fit">
        <div className="flex gap-3 items-center">
        <div className="w-3 h-3 rounded-full bg-[#45A7DE]"></div>
        <p className="text-[#010205] text-base font-bold">CRM</p>
        </div>
        <p className="text-[#4B5C79] text-sm font-normal">CRM that helps you sell smarter, better, faster</p>
        <div className="border border-[#CECECE] my-4"></div>
        <div className="flex justify-between">
        <div>
            <p className="text-[#4B5C79] text-sm font-normal">28 section</p>
            <p className="text-[#010205] text-base font-bold">912 Article</p>
        </div>
        <div className="rounded-full w-10 h-10 bg-[#010205] flex items-center justify-center">
        <RightArrow/>
        </div>
        </div>
        </div>
        <div className="bg-[#FFFFFF] rounded-2xl p-8 h-48 w-fit">
        <div className="flex gap-3 items-center">
        <div className="w-3 h-3 rounded-full bg-[#45A7DE]"></div>
        <p className="text-[#010205] text-base font-bold">CRM</p>
        </div>
        <p className="text-[#4B5C79] text-sm font-normal">CRM that helps you sell smarter, better, faster</p>
        <div className="border border-[#CECECE] my-4"></div>
        <div className="flex justify-between">
        <div>
            <p className="text-[#4B5C79] text-sm font-normal">28 section</p>
            <p className="text-[#010205] text-base font-bold">912 Article</p>
        </div>
        <div className="rounded-full w-10 h-10 bg-[#010205] flex items-center justify-center">
        <RightArrow/>
        </div>
        </div>
        </div>
        </div>
        </div>
        <Footer/>
    </div>
  )
}

export default KnowledgeBase