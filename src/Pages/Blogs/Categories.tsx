import { useEffect, useState } from "react";
import { endPoints } from "../../service/apiEndpoints";
import useApi from "../../Hooks/useApi";

type Props = {}

const Categories = ({ }: Props) => {

  const [categories, setCategories] = useState([]);
  const { request: getCategories } = useApi("get", 3001);

  const handleGetData = async () => {
    try {
      const url = `${endPoints.GET_CATEGORIES}?categoryType=Blogs&project=SewNex`;
      const { response, error } = await getCategories(url);
      console.log('url', url);
      console.log('res', response);
      console.log('err', error);

      if (!error && response) {
        setCategories(response.data.data);
      }
      else {
        console.log('else error', error.response.data.message);

      }
    } catch (error) {
      console.log("Error", error);
    }
  };

  console.log("Blog Data", categories);

  useEffect(() => {
    handleGetData();
  }, []);

  return (
    <div>
      <div className='px-6 py-4'>
        <p className='text-xl font-medium bg-gradient-to-l from-[#004141] to-[#088A8A] text-transparent bg-clip-text my-4'>Categories</p>
        {categories.length > 0 ? (
          categories.map((item: any) => (
            <div>
              <div className='flex justify-between'>
                <p className='text-[#1C1C1C] text-base font-normal'>{item.categoryName}</p>
                <p className='text-[#1C1C1C] text-base font-normal'>{item.postCount}</p>
              </div>
              <div className='border border-dashed border-[#D1E7E5] my-3'></div>
            </div>
          ))
        ) : (
          <div className="text-[red] flex items-center justify-center p-10">
            <p>No Categories Found</p>
          </div>
        )
        }
        {/* <div className='flex justify-between'>
          <p className='text-[#1C1C1C] text-base font-normal'>Billing & Invoicing</p>
          <p className='text-[#1C1C1C] text-base font-normal'>09</p>
        </div>
        <div className='border border-dashed border-[#D1E7E5] my-3'></div> */}
      </div>
    </div>
  )
}

export default Categories