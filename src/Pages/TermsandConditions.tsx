import { useEffect, useState } from "react";
import { endPoints } from "../service/apiEndpoints";
import useApi from "../Hooks/useApi";

type Props = {}

const TermsandConditions = ({}: Props) => {

  const [terms, setTerms] = useState([]);
  const { request: getTerms } = useApi("get", 3001);

  const handleGetData = async () => {
    try {
      const url = `${endPoints.TERMS}?type=TermsAndConditions&project=Sewnex`;
      const { response, error } = await getTerms(url);
      console.log('url',url);
      console.log('res',response);
      console.log('err',error);
      
      if (!error && response) {
        setTerms(response.data.terms);
      }
    } catch (error) {
      console.log("Error", error);
    }
  };

  console.log("Blog Data", terms);

  useEffect(() => {
    handleGetData();
  }, []);


  return (
    <div>
          <div className="m-8 space-y-8 text-[18px] text-[#353d44] poppins-medium">
      <p className="text-2xl   font-semibold text-black poppins-semibold">
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

   {/* {  data.map((item: any) => (
     <div className="" key={item.id}>
        <p className="text-2xl   font-semibold  poppins-semibold">
         {item.termTitle}
        </p>
  
        <p className="text-[#646464]">
        {item.termDescription}
        </p>
     </div>
   ))} */}
   <div className="my-4">
    <p className="mb-3 text-[#393939] text-2xl font-semibold">Intended Use of Website</p>
    <p className="text-[#393939] text-xl font-normal">Sewnex is a billing and invoicing software designed to help businesses manage their sales, purchases, expenses, and inventory efficiently. Bill Bizz does not act as a financial institution, broker, or accounting service provider. The platform facilitates record-keeping and automation but does not offer financial, legal, or tax advice. Users are responsible for ensuring compliance with all applicable financial regulations and tax laws.</p>
   </div>
   
    </div>
    </div>
  )
}

export default TermsandConditions