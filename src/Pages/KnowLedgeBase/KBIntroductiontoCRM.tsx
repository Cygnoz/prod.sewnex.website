import { useNavigate, useParams } from "react-router-dom"
import ChevronRight from "../../assets/icons/ChevronRight"
import KBHeader from "./KBHeader"
import PrinterIcon from "../../assets/icons/PrinterIcon"
import FileDown from "../../assets/icons/FileDown"
// import ReverseArrows from "../../assets/icons/ReverseArrows"
// import bg from '../../assets/images/BGCRM.png'
// import Clock from "../../assets/icons/Clock"
// import UturnArrow from "../../assets/icons/UturnArrow"
// import DirectionIcon from "../../assets/icons/DirectionIcon"
import Footer from "../../footer/Footer"
import { useEffect, useState } from "react"
import { endPoints } from "../../service/apiEndpoints"
import useApi from "../../Hooks/useApi"
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import noImage from '../../assets/images/noImage.png'

type Props = {}

const KBIntroductiontoCRM = ({ }: Props) => {

    const [data, setData] = useState<any>([]);
    const { request: getData } = useApi("get", 3001);
    const { id } = useParams();

    const handleGetData = async () => {
        try {
            const url = `${endPoints.GET_ARTICLE}/${id}`;
            const { response, error } = await getData(url);

            if (!error && response) {
                setData(response.data.data);
            }
        } catch (error) {
            console.log("Error", error);
        }
    };

    useEffect(() => {
        handleGetData();
    }, []);
    console.log('data', data);

    const handlePrint = () => {
        const printContents = document.querySelector('.prinding-div')?.innerHTML;
        if (!printContents) return;

        const originalContents = document.body.innerHTML;
        document.body.innerHTML = printContents;

        window.print();

        document.body.innerHTML = originalContents;
        window.location.reload();
    };

    const handlePDF = () => {
        const element = document.querySelector('.prinding-div') as HTMLElement;
        if (!element) return;

        html2canvas(element, { scale: 2 }).then((canvas: HTMLCanvasElement) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'mm', 'a4');

            const imgWidth = 200;
            const imgHeight = (canvas.height * imgWidth) / canvas.width;

            pdf.addImage(imgData, 'PNG', 0, 10, imgWidth, imgHeight);
            pdf.save('document.pdf');
        }).catch((error) => {
            console.error("Error generating PDF:", error);
        });
    };

    const navigate = useNavigate();
    return (
        <div>
            <KBHeader />
            <div className="p-10 bg-[#f5f5f5ff]">
                <div className="flex flex-wrap gap-2 items-center">
                    <p onClick={() => navigate('/knowledge-base')} className="text-[#022424] text-lg sm:text-xl font-bold cursor-pointer">
                        Knowledge Base
                    </p>
                    <ChevronRight color="#002222" size={12} />
                    <p onClick={() => navigate(`/knowledge-base/${data?.category?._id}`)} className="text-[#022424] text-lg sm:text-xl font-bold cursor-pointer">
                        {data?.category?.categoryName}
                    </p>
                    <ChevronRight color="#002222" size={12} />
                    <p onClick={() => navigate(`/knowledge-base/${data?.category?.categoryName}/${data?.subCategory?._id}`)} className="text-[#022424] text-lg sm:text-xl font-bold cursor-pointer">
                        {data?.subCategory?.subCategoryName}
                    </p>
                    <ChevronRight size={12} />
                    <p className="text-[#515C5C] text-lg sm:text-xl font-bold">{data.title}</p>
                </div>

                <div className="flex flex-col sm:flex-row px-3 sm:px-5 py-5 sm:py-8 mt-5 w-full">
                    <p className="text-[#303F58] text-[18px] sm:text-[20px] font-bold">{data.title}</p>

                    <div className="mt-4 sm:mt-0 sm:ml-auto flex flex-col sm:flex-row items-center gap-3">
                        <button onClick={handlePDF} className="border py-2 px-3 bg-[#DBF8EA] border-[#097D44] text-[#097D44] text-xs rounded-[40px] flex items-center justify-center gap-1">
                            <FileDown />
                            PDF
                        </button>
                        <button onClick={handlePrint} className="border py-2 px-3 bg-[#097D44] text-white text-xs rounded-[40px] flex items-center justify-center gap-1">
                            <PrinterIcon />
                            Print
                        </button>
                    </div>
                </div>

                <hr />
                <div className="px-5 grid grid-cols-1 sm:grid-cols-12 my-4 gap-4 prinding-div">
                    <div className="sm:col-span-5">
                        <p className="text-[#4B5C79B5] text-xl sm:text-2xl font-semibold">What is {data.title} ?</p>
                        <p className="text-[#303F58] text-sm font-medium my-2">{data?.content}</p>

                        {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6 mt-4">
                            <div>
                                <div className="flex gap-1 items-center">
                                    <ReverseArrows size={12} color="#1A2B3B" />
                                    <p className="text-[#303F58] text-sm font-medium">Seamless access</p>
                                </div>
                                <p className="text-[#303F58] text-sm font-medium">
                                    Secure cloud storage enables real-time customer connections for lasting relationships.
                                </p>
                            </div>
                            <div>
                                <div className="flex gap-1 items-center">
                                    <Clock color="#1A2B3B" />
                                    <p className="text-[#303F58] text-sm font-medium">Optimize workflows</p>
                                </div>
                                <p className="text-[#303F58] text-sm font-medium">
                                    Secure cloud storage enables real-time customer connections for lasting relationships.
                                </p>
                            </div>
                            <div>
                                <div className="flex gap-1 items-center">
                                    <DirectionIcon color="#1A2B3B" size={12} />
                                    <p className="text-[#303F58] text-sm font-medium">Engage proactively</p>
                                </div>
                                <p className="text-[#303F58] text-sm font-medium">
                                    Secure cloud storage enables real-time customer connections for lasting relationships.
                                </p>
                            </div>
                            <div>
                                <div className="flex gap-1 items-center">
                                    <UturnArrow size={12} color="#1A2B3B" />
                                    <p className="text-[#303F58] text-sm font-medium">Simplify operations</p>
                                </div>
                                <p className="text-[#303F58] text-sm font-medium">
                                    Secure cloud storage enables real-time customer connections for lasting relationships.
                                </p>
                            </div>
                        </div> */}
                    </div>

                    <div className="sm:col-span-7 flex items-center justify-center">
                        <img className="w-full sm:w-[620px] h-auto sm:h-[370px] mt-5 sm:mt-10" loading="lazy" src={data?.image || noImage} alt="" />
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default KBIntroductiontoCRM