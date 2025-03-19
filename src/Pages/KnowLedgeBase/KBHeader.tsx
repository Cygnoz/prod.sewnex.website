import Rectangle from "../../assets/icons/Rectangle"
import UnionIcon from "../../assets/icons/UnionIcon"
import bg from '../../assets/images/knowledgeBg.png'

type Props = {}

const KBHeader = ({}: Props) => {
  return (
    <div>
        <div className="bg-[#004040] rounded-b-[30px] h-[637px]">
            <div>
                <UnionIcon size={40}/>
            </div>
        <div className="flex items-center gap-4 px-12">
          <div className="flex -space-x-2">
          <div className="rounded-full bg-[#32B271] w-11 h-11"></div>
          <div className="rounded-full bg-[#0BA158] w-11 h-11"></div>
          </div>
          <p className="text-[#FFFFFF] text-3xl font-medium">Sewnex</p>
        </div>

       <div className="py-6 px-8">
       <div className="bg-[#00000033] rounded-2xl">
            <div className="flex justify-between px-10 py-12">
            <div>
            <div className="text-[#FFFFFF] p-10 space-y-4">
            <p className="text-lg flex items-center">
              <Rectangle /> <span className="ms-3"> FIND ANSWERS, FASTER.</span>
            </p>
            <p className="font-bold text-[34px]">Empower Your Support with Knowledge Base</p>
            <div className="flex ">
              <input
              value='text'
                type="text"
                placeholder="Serach your queries here"
                className=" opacity-25 h-[50px] rounded-l-[50px] text-white p-5 border-collapse w-80 "
              />{" "}
              <button className="bg-[#FFFFFF] h-[50px] px-7 rounded-r-[50px] text-[#003636] ">
                Search
              </button>
            </div>
          </div>
            </div>
            <div>
                <img className="w-[680px] h-[360px]" src={bg} alt="" />
            </div>
            </div>

        </div>
        <div className="-mt-6 ms-2">
            <UnionIcon size={40} color="#003636"/>
        </div>
       </div>
        </div>
    </div>
  )
}

export default KBHeader