import { useNavigate } from "react-router-dom"
import RightArrow from "../../assets/icons/RightArrow"
import Footer from "../../footer/Footer"
import KBHeader from "./KBHeader"
import { useEffect, useState } from "react"
import useApi from "../../Hooks/useApi"
import { endPoints } from "../../service/apiEndpoints"

type Props = {}

const KnowledgeBase = ({ }: Props) => {

    const [kbData, setKBData] = useState([]);
    const { request: getKBData } = useApi("get", 3001);

    const handleGetData = async () => {
        try {
            const url = `${endPoints.GET_CATEGORIES}?categoryType=KnowledgeBase&project=SewNex`;
            const { response, error } = await getKBData(url);
            console.log('uu',url);
            console.log('rr',response);
            console.log('ee',error);
            

            if (!error && response) {
                setKBData(response.data.data);
            }
        } catch (error) {
            console.log("Error", error);
        }
    };

    useEffect(() => {
        handleGetData();
    }, []);

    console.log('kb',kbData);
    

    const navigate = useNavigate();
    return (
        <div>
            <KBHeader />
            <div className="p-10 bg-[#f5f5f5ff]">
                <p className="text-[#022424] text-xl font-bold">Knowledge Base</p>
                <div className="grid grid-cols-3 gap-6 mt-4">
                    {kbData.length>0 ? (
                        kbData.map((item:any, index:number)=>(
                            <div key={index} className="bg-[#FFFFFF] rounded-2xl p-8 h-auto w-fit">
                            <div className="flex gap-3 items-center">
                                <div className="w-3 h-3 rounded-full bg-[#45A7DE]"></div>
                                <p className="text-[#010205] text-base font-bold">{item?.categoryName}</p>
                            </div>
                            <p className="text-[#4B5C79] text-sm font-normal">{item?.description|| 'N/A'}</p>
                            <div className="border border-[#CECECE] my-4"></div>
                            <div className="flex justify-between">
                                <div>
                                    <p className="text-[#4B5C79] text-sm font-normal">28 section</p>
                                    <p className="text-[#010205] text-base font-bold">{item?.articleCount} Article</p>
                                </div>
                                <div onClick={() => navigate(`/knowledge-base/${item._id}`)} className="rounded-full cursor-pointer w-10 h-10 bg-[#010205] flex items-center justify-center">
                                    <RightArrow />
                                </div>
                            </div>
                        </div> 
                        ))
                    ):(
                        <div className="text-red-700 flex items-center justify-center my-5">No Categories Avilable !</div>
                    )}
                   
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default KnowledgeBase