import { useEffect, useState } from "react"
import useApi from "../Hooks/useApi"
import { endPoints } from "../service/apiEndpoints"

type Props = {}

const Privacy = ({ }: Props) => {

    const { request: getPrivacy } = useApi('get', 3001)
    const [privacy, setPrivacy] = useState([])
    const [loading, setLoading] = useState<boolean>(true);
    const handleGetPrivacy = async () => {
        try {
            setLoading(true);
            const url = `${endPoints.GET_TERMS}?type=LegalPrivacy&project=SewNex`
            const { response, error } = await getPrivacy(url)
            console.log('res', response);
            console.log('err', error);
            console.log('url', url);
            if (response && !error) {
                console.log(response.data);
                setPrivacy(response.data.terms)
            }
            else {
                console.log(error.response.data.message);

            }
        }
        catch (err) {
            console.log('Un expected error', err);

        }
        finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        handleGetPrivacy()
    }, [])

    console.log('pri', privacy);

    return (
        <div>
            
            <div className="my-10 mx-4 sm:mx-8 space-y-6">
                <p className="text-3xl sm:text-4xl font-bold">Privacy Policy</p>
                {privacy.length>0?(
                    loading?<p>Loading...</p>:
                    privacy.map((item:any, index:number)=>(
                        <div>
                        {/* <p className="text-lg sm:text-xl font-semibold py-3">Effective Date: [{new Date(item.updatedAt).toLocaleDateString('en-GB')}]</p> */}
    
                        <div className="text-lg sm:text-xl text-[#6d6d6d] space-y-8">
    
                            <div key={item._id} className="p-4 rounded-lg shadow-sm">
                                <p className="mb-3 text-[#393939] text-2xl font-semibold">{index + 1}. {item.termTitle}</p>
                                <p className="text-[#393939] text-xl font-normal leading-relaxed">{item.termDescription}</p>
                            </div>
    
                        </div>
                    </div>
                    ))
                ):(
                    <div className="flex items-center justify-center py-5">
            <p className="text-center text-red-500">No Privacy Policies available</p>
          </div>
                )}
               
            </div>

        </div>
    )
}

export default Privacy