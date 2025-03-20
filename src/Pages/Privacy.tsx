import { useEffect, useState } from "react"
import useApi from "../Hooks/useApi"
import { endPoints } from "../service/apiEndpoints"

type Props = {}

const Privacy = ({ }: Props) => {

    const {request : getPrivacy}=useApi('get',3001)
    const [privacy, setPrivacy]=useState([])

    const handleGetPrivacy = async()=>{
        try{
            const url = `${endPoints.GET_TERMS}?type=LegalAndPrivacy&project=SewNex`
            const {response, error}= await getPrivacy(url)
            console.log('res',response);
            console.log('err',error);
            console.log('url',url);
            if(response && !error){
                console.log(response.data);
                setPrivacy(response.data?.terms)
            }
            else{
                console.log(error.response.data.message);
                
            }
        }
        catch(err){
            console.log('Un expected error',err);
            
        }
    }

    useEffect(()=>{
        handleGetPrivacy()
    },[])

    console.log('pri',privacy);
    
    return (
        <div>
            {privacy.length>0 ? (
                privacy.map((item:any, index:number)=>(
                    <div className="my-10 mx-8 space-y-4">
                    <p className="text-2xl font-bold">Privacy Policy</p>
                    <p className="text-lg font-semibold py-3">Effective Date: [{new Date(item.updatedAt).toLocaleDateString('en-GB')}]</p>
    
                    <div className="text-2xl text-[#6d6d6d] space-y-6">
        
                        <div key={item._id} className="my-2">
                            <p className="mb-3 text-[#393939] text-2xl font-semibold">{index + 1}. {item.termTitle}</p>
                            <p className="text-[#393939] text-xl font-normal">{item.termDescription}</p>
                        </div>
                        
                    </div>
                </div> 
                ))
            )
        :(
            <div className="flex items-center justify-center h-52">
            <p className="text-center">No Privacy Policies available</p>
          </div>
        )}
        </div>
    )
}

export default Privacy