import { useEffect, useState } from "react";
import useApi from "../Hooks/useApi";
import { endPoints } from "../service/apiEndpoints";

type Props = {}

const Security = ({ }: Props) => {
    const [security, setSecurity] = useState([]);
    const { request: getSecurity } = useApi("get", 3001);
  
    const handleGetData = async () => {
      try {
        const url = `${endPoints.GET_TERMS}?type=Security&project=SewNex`;
        const { response, error } = await getSecurity(url);
        console.log('url',url);
        console.log('response',response);
        console.log('err',error);
        
        if (!error && response) {
          console.log(response.data);
          setSecurity(response.data.terms);
        }
        else{
          console.log(error.response.data.message);
          
        }
      } catch (error) {
        console.log("Error", error);
      }
    };
  
  
    useEffect(() => {
      handleGetData();
    }, []);

    console.log('sec',security);
    
    return (
        <div>
          {security.length> 0 ?(
            security.map((item:any, index:number)=>(
              <div className="m-6 space-y-4">
                <p className="text-[#3b3b3b] text-2xl font-bold">Security Terms</p>

                <p className="text-xl font-semibold text-[#383838]">
                    Last Update : [{new Date(item.updatedAt).toLocaleDateString('en-GB')}]
                </p>
                <div className="text-2xl text-[#6d6d6d] space-y-6">
                   
                    <div key={item._id} className="my-2">
                        <p className="mb-3 text-[#393939] text-2xl font-semibold">{index + 1}. {item.termTitle}</p>
                        <p className="text-[#393939] text-xl font-normal">{item.termDescription}</p>
                    </div>
                </div>
            </div>
            ))
          ):(
            <div className="flex items-center justify-center h-52">
            <p className="text-center">No Security terms are available</p>
          </div>
          )}

        </div>
    )
}

export default Security