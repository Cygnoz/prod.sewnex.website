import { useNavigate, useParams } from "react-router-dom"
import ChevronRight from "../../assets/icons/ChevronRight"
import KBHeader from "./KBHeader"
import image1 from '../../assets/images/CRM1.png'
import Footer from "../../footer/Footer"
import { useEffect, useState } from "react"
import { endPoints } from "../../service/apiEndpoints"
import useApi from "../../Hooks/useApi"

type Props = {}

const KBView1 = ({ }: Props) => {

    const [data, setData] = useState<any>([]);
  const { request: getData } = useApi("get", 3001);
  const { id } = useParams();

  const handleGetData = async () => {
    try {
      const url = `${endPoints.GET_SUBCATEGORY}?categoryName=${id}&project=SewNex`;
      const { response, error } = await getData(url);
      console.log('url',url);
      console.log('res',response);
      console.log('err',error);
      
      if (!error && response) {
        console.log(response.data);      
        setData(response.data.data);
      }
    } catch (error) {
      console.log("Error", error);
    }
  };

  console.log(data[0]?.categoryName?.categoryName,"wertyu");

  useEffect(() => {
    handleGetData();
  }, []);

  const navigate = useNavigate();
    return (
        <div>
            <KBHeader />
            <div className="p-10 bg-[#f5f5f5ff]">
                <div className="flex gap-2 items-center">
                    <p onClick={() => navigate('/knowledge-base')} className="text-[#022424] text-xl font-bold cursor-pointer">Knowledge Base</p>
                    <ChevronRight size={12} />
                    <p className="text-[#515C5C] text-xl font-bold">{data[0]?.categoryName?.categoryName}</p>
                </div>

                <div className="grid grid-cols-2 gap-8 my-4">

                    {data.length>0 ?(
                        data.map((item:any, index:number)=>(
                            <div key={index} className="flex bg-white p-2 gap-5 rounded-2xl" >
                            <img src={item.categoryName.image || image1} alt="" className="rounded-2xl h-24 w-28" />
                            <div className="space-y-2 px-2">
                                <p className="text-base font-bold">{item?.subCategoryName}</p>
                                <div className="flex gap-5">
    
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-[#4B5C79]"></div>
                                        <p className="text-[#4B5C79] text-sm font-medium">Section</p>
                                        <div className="w-2 h-2 rounded-full bg-[#4B5C79]"></div>
                                        <p className="text-[#4B5C79] text-sm font-medium">{item.articleCount}{" "}Article</p>
                                    </div>
                                </div>
                                <button
                                    className="text-xs font-normal text-[#565148] bg-[#FEFDFA] cursor-pointer border border-[#565148] flex items-center justify-center rounded-lg py-1 px-2"
                                    onClick={() =>
                                        navigate(`/knowledge-base/${item?.categoryName?.categoryName}/${item._id}`)
                                    }
                                >
                                    View More
                                </button>
                            </div>
                        </div>  
                        ))
                    ):(
                        <div className="flex items-center justify-center text-rose-400 w-full my-10">No Sub Categories Available !</div>
                    )}

                </div>

            </div>
            <Footer />
        </div>
    )
}

export default KBView1