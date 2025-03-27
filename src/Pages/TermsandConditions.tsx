import { useEffect, useState } from "react";
import { endPoints } from "../service/apiEndpoints";
import useApi from "../Hooks/useApi";

type Props = {}

const TermsandConditions = ({ }: Props) => {

  const [terms, setTerms] = useState([]);
  const { request: getTerms } = useApi("get", 3001);
  const [loading, setLoading] = useState<boolean>(true);
  const handleGetData = async () => {
    try {
      setLoading(true);
      const url = `${endPoints.GET_TERMS}?type=TermsAndConditions&project=SewNex`;
      const { response, error } = await getTerms(url);
      console.log('url', url);
      console.log('res', response);
      console.log('err', error);

      if (!error && response) {
        setTerms(response.data.terms);
      }
    } catch (error) {
      console.log("Error", error);
    }
    finally {
      setLoading(false);
  }
  };

  console.log("Blog Data", terms);

  useEffect(() => {
    handleGetData();
  }, []);


  return (
    <div>
      <div className="m-8 space-y-8 text-[18px] text-[#353d44] poppins-medium">
        <p className="text-2xl font-semibold text-black poppins-semibold">
          Terms And Conditions
        </p>

        <p className="mt-9 text-[#646464]">
          Your use of the Bill Bizz platform is governed by the following terms
          and conditions (“Terms of Use”), as well as the Bill Bizz Privacy Policy
          and other operational guidelines provided within the platform
          (collectively, the “Terms”). Bill Bizz reserves the right to update or
          modify these Terms at any time without prior notice. You are responsible
          for reviewing these Terms periodically, as your continued use of the
          platform signifies your acceptance of any changes. If you do not agree
          with these Terms, you should discontinue using the platform immediately.
        </p>

        {terms.length > 0 ? (
          loading?<p>Loading...</p>:
          terms.map((item: any) => (
            <div key={item._id} className="my-4">
              <p className="mb-3 text-[#393939] text-2xl font-semibold">{item.termTitle}</p>
              <p className="text-[#393939] text-xl font-normal">{item.termDescription}</p>
            </div>
          ))
        )
          : (
            <div className="flex items-center justify-center py-5">
              <p className="text-center text-red-500">No terms and conditions are available</p>
            </div>
          )}


      </div>
    </div>
  )
}

export default TermsandConditions