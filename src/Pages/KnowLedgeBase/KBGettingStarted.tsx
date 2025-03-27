import { useLocation, useNavigate, useParams } from "react-router-dom"
import ChevronRight from "../../assets/icons/ChevronRight"
import KBHeader from "./KBHeader"
import CopyIcon from "../../assets/icons/CopyIcon"
import Footer from "../../footer/Footer"
import { useEffect, useState } from "react"
import useApi from "../../Hooks/useApi"
import { endPoints } from "../../service/apiEndpoints"

type Props = {}

const KBGettingStarted = ({ }: Props) => {
    const navigate = useNavigate()
    const [data, setData] = useState<any>([]);
    const { request: getData } = useApi("get", 3001);
    const location = useLocation()
    console.log(location.state)
    const { id } = useParams()
    const [loading, setLoading] = useState<boolean>(true);
    const handleGetData = async () => {
        try {
            setLoading(true);
            const url = `${endPoints.GET_ARTICLE}?subCategoryId=${id}&project=SewNex`;
            const { response, error } = await getData(url);

            if (!error && response) {
                setData(response.data.data);
            }
        } catch (error) {
            console.log("Error", error);
        }
        finally {
            setLoading(false);
          }
    };


    useEffect(() => {
        handleGetData();
    }, []);

    return (
        <div>
            <KBHeader data={data} setData={setData} />
            <div className="p-6 sm:p-8 lg:p-10 bg-[#f5f5f5ff]">
                <div className="flex flex-wrap gap-2 items-center text-lg sm:text-xl font-bold">
                    <p
                        onClick={() => navigate('/knowledge-base')}
                        className="text-[#022424] cursor-pointer"
                    >
                        Knowledge Base
                    </p>
                    <ChevronRight color="#002222" size={12} />
                    <p
                        onClick={() => navigate(`/knowledge-base/${data[0]?.category?._id}`)}
                        className="text-[#022424] cursor-pointer"
                    >
                        {data[0]?.category?.categoryName}
                    </p>
                    <ChevronRight size={12} />
                    <p className="text-[#515C5C]">{data[0]?.subCategory?.subCategoryName}</p>
                </div>

                {data.length > 0 ? (
                    loading?<p>Loading...</p>:
                    data.map((item: any, index: number) => (
                        <div
                            key={index}
                            className="bg-[#FFFFFF] cursor-pointer p-3 sm:p-4 my-4 sm:my-6 flex flex-col sm:flex-row gap-3 sm:gap-4 rounded-md"
                            onClick={() =>
                                navigate(`/knowledge-base/${data[0]?.category?.categoryName}/${data[0]?.subCategory?.subCategoryName}/${item._id}`)
                            }
                        >
                            <div className="rounded-full bg-[#CCCCCC] flex items-center justify-center w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] cursor-pointer">
                                <CopyIcon />
                            </div>
                            <div className="flex items-center">
                                <div>
                                    <p className="font-bold text-black cursor-pointer text-sm sm:text-base">{item?.title}</p>
                                    <p className="text-[#4B5C79] text-xs sm:text-sm font-normal">
                                        {item?.content}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="text-red-700 flex items-center justify-center my-5">
                        No Articles Available!
                    </div>
                )}
            </div>

            <Footer />
        </div>
    )
}

export default KBGettingStarted