import { useEffect, useState } from "react";
import useApi from "../Hooks/useApi";
import { endPoints } from "../service/apiEndpoints";

type Props = {}

const Security = ({ }: Props) => {
  const [security, setSecurity] = useState([]);
  const { request: getSecurity } = useApi("get", 3001);
  const [loading, setLoading] = useState<boolean>(true);
  const handleGetData = async () => {
    try {
      setLoading(true);
      const url = `${endPoints.GET_TERMS}?type=Security&project=SewNex`;
      const { response, error } = await getSecurity(url);
      console.log('url', url);
      console.log('response', response);
      console.log('err', error);

      if (!error && response) {
        console.log(response.data);
        setSecurity(response.data.terms);
      }
      else {
        console.log(error.response.data.message);

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

  console.log('sec', security);

  return (
    <div>

      <div className="my-10 mx-4 sm:mx-8 space-y-6">
        <p className="text-[#3b3b3b] text-2xl font-bold">Security Terms</p>
        {security.length > 0 ? (
          loading?<p>Loading...</p>:
          security.map((item: any, index: number) => (
            <div>
              {/* <p className="text-xl font-semibold text-[#383838]">
                Last Update : [{new Date(item.updatedAt).toLocaleDateString('en-GB')}]
              </p> */}
              <div className="text-2xl text-[#6d6d6d] space-y-6">

                <div key={item._id} className="my-2">
                  <p className="mb-3 text-[#393939] text-2xl font-semibold">{index + 1}. {item.termTitle}</p>
                  <p className="text-[#393939] text-xl font-normal">{item.termDescription}</p>
                </div>
              </div>



            </div>
          ))
        ) : (
          <div className="flex items-center justify-center py-5">
            <p className="text-center text-red-500">No Security terms are available</p>
          </div>
        )}

      </div>


    </div>
  )
}

export default Security