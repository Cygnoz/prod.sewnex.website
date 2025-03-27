import { useState } from "react";
import Rectangle from "../../assets/icons/Rectangle"
import UnionIcon from "../../assets/icons/UnionIcon"
import bg from '../../assets/images/knowledgeBg.png'

type Props = {
  data?: { category: string; subCategory: string; article: string }[];
  setData?:any
}

const KBHeader = ({data,setData}: Props) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (data) {
      const results = data.filter(
        (item:any) =>
          item.categoryName?.toLowerCase().includes(query.toLowerCase()) ||
          item.subCategoryName?.toLowerCase().includes(query.toLowerCase()) ||
          item.article?.toLowerCase().includes(query.toLowerCase())
      );
      setData(results);
    }
  };

  console.log(data)
  return (
    <div>
        <div className="bg-[#004040] rounded-b-[30px] h-auto sm:h-[637px]">
  <div>
    <UnionIcon size={40} />
  </div>

  <div className="flex items-center gap-4 px-6 sm:px-12">
    <div className="flex -space-x-2">
      <div className="rounded-full bg-[#32B271] w-9 h-9 sm:w-11 sm:h-11"></div>
      <div className="rounded-full bg-[#0BA158] w-9 h-9 sm:w-11 sm:h-11"></div>
    </div>
    <p className="text-[#FFFFFF] text-2xl sm:text-3xl font-medium">Sewnex</p>
  </div>

  <div className="py-6 px-4 sm:px-8">
    <div className="bg-[#00000033] rounded-2xl">
      <div className="flex flex-col sm:flex-row justify-between px-6 sm:px-10 py-8 sm:py-12">
        <div className="text-[#FFFFFF] p-5 sm:p-10 space-y-4">
          <p className="text-base sm:text-lg flex items-center">
            <Rectangle /> <span className="ms-3"> FIND ANSWERS, FASTER.</span>
          </p>
          <p className="font-bold text-[24px] sm:text-[34px]">
            Empower Your Support with Knowledge Base
          </p>
          {data && (
            <div className="flex w-full max-w-xl">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                type="text"
                placeholder="Search your queries here"
                className="opacity-25 h-[45px] sm:h-[50px] rounded-l-[50px] text-[#003636] p-4 sm:p-5 border-collapse w-full sm:w-80"
              />
              <button
                className="bg-[#FFFFFF] h-[45px] sm:h-[50px] px-5 sm:px-7 rounded-r-[50px] text-[#003636]"
                onClick={handleSearch}
              >
                Search
              </button>
            </div>
          )}
        </div>

        {/* Image Responsive */}
        <div className="mt-5 sm:mt-0 flex justify-center">
          <img className="w-full h-auto sm:w-[680px] sm:h-[360px]" loading="lazy" src={bg} alt="" />
        </div>
      </div>
    </div>

    <div className="-mt-6 ms-2">
      <UnionIcon size={40} color="#003636" />
    </div>
  </div>
</div>

    </div>
  )
}

export default KBHeader