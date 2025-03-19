import { useNavigate } from 'react-router-dom'
import Calendar from '../../assets/icons/Calendar'
import Clock from '../../assets/icons/Clock'
import blog1 from '../../assets/images/Blogs1.png'
import profile from '../../assets/images/blogProfile.png'
import recentBlog1 from '../../assets/images/recentBlog1.png'
import recentBlog2 from '../../assets/images/recentBlog2.png'
import Categories from './Categories'

type Props = {}

const Blog = ({ }: Props) => {
  const navigate =useNavigate()
  return (
    <div>
      <div className="p-6">
        <p className="text-[#7F5303] text-2xl font-medium">Featured This Month</p>
        <div className="flex gap-4 my-4 overflow-x-auto">
          <div onClick={()=>navigate(`/blog/view`)} className="w-[400px] mt-6 mb-4 flex-shrink-0 cursor-pointer">
            <div className="bg-gradient-to-b from-[#925E00] to-[#D28600] w-fit h-fit py-1 px-3 rounded-md">
              <p className="text-[#FFFFFF] text-sm font-normal">CRM</p>
            </div>
            <p className="text-[#222222] text-[26px] font-semibold my-3">The importance of automating Repetitive tasks</p>
            <div>
              <img src={blog1} alt="" />
            </div>
            <div className='flex gap-2 items-center my-2'>
              <img className='w-5 h-5 rounded-full' src={profile} alt="" />
              <p className='text-[#777777] text-xs font-normal'>Jenny Kiaa</p>
              <div className="bg-[#999999] w-[1px] h-3 items-center"></div>
              <div>
                <Calendar />
              </div>
              <p className='text-[#777777] text-xs font-normal'>02 december 2022</p>
              <div className="bg-[#999999] w-[1px] h-3 items-center"></div>
              <div>
                <Clock />
              </div>
              <p className='text-[#777777] text-xs font-normal'>3 min. to read</p>
            </div>
            <p className='text-[#555555] text-base font-normal'>Expense tracking isn't just about recording numbers; it's about making informed financial decisions.</p>
          </div>

          <div className="w-[400px] mt-6 mb-4 flex-shrink-0">
            <div className="bg-gradient-to-b from-[#004D4D] to-[#0CA65B] w-fit h-fit py-1 px-3 rounded-md">
              <p className="text-[#FFFFFF] text-sm font-normal">Expense Track</p>
            </div>
            <p className="text-[#222222] text-[26px] font-semibold my-3">The importance of automating Repetitive tasks</p>
            <div>
              <img src={blog1} alt="" />
            </div>
            <div className='flex gap-2 items-center my-2'>
              <img className='w-5 h-5 rounded-full' src={profile} alt="" />
              <p className='text-[#777777] text-xs font-normal'>Jenny Kiaa</p>
              <div className="bg-[#999999] w-[1px] h-3 items-center"></div>
              <div>
                <Calendar />
              </div>
              <p className='text-[#777777] text-xs font-normal'>02 december 2022</p>
              <div className="bg-[#999999] w-[1px] h-3 items-center"></div>
              <div>
                <Clock />
              </div>
              <p className='text-[#777777] text-xs font-normal'>3 min. to read</p>
            </div>
            <p className='text-[#555555] text-base font-normal'>Expense tracking isn't just about recording numbers; it's about making informed financial decisions.</p>
          </div>

          <div className="w-[400px] mt-6 mb-4 flex-shrink-0">
            <div className="bg-gradient-to-b from-[#925E00] to-[#D28600] w-fit h-fit py-1 px-3 rounded-md">
              <p className="text-[#FFFFFF] text-sm font-normal">CRM</p>
            </div>
            <p className="text-[#222222] text-[26px] font-semibold my-3">The importance of automating Repetitive tasks</p>
            <div>
              <img src={blog1} alt="" />
            </div>
            <div className='flex gap-2 items-center my-2'>
              <img className='w-5 h-5 rounded-full' src={profile} alt="" />
              <p className='text-[#777777] text-xs font-normal'>Jenny Kiaa</p>
              <div className="bg-[#999999] w-[1px] h-3 items-center"></div>
              <div>
                <Calendar />
              </div>
              <p className='text-[#777777] text-xs font-normal'>02 december 2022</p>
              <div className="bg-[#999999] w-[1px] h-3 items-center"></div>
              <div>
                <Clock />
              </div>
              <p className='text-[#777777] text-xs font-normal'>3 min. to read</p>
            </div>
            <p className='text-[#555555] text-base font-normal'>Expense tracking isn't just about recording numbers; it's about making informed financial decisions.</p>
          </div>

          <div className="w-[400px] mt-6 mb-4 flex-shrink-0">
            <div className="bg-gradient-to-b from-[#925E00] to-[#D28600] w-fit h-fit py-1 px-3 rounded-md">
              <p className="text-[#FFFFFF] text-sm font-normal">CRM</p>
            </div>
            <p className="text-[#222222] text-[26px] font-semibold my-3">The importance of automating Repetitive tasks</p>
            <div>
              <img src={blog1} alt="" />
            </div>
            <div className='flex gap-2 items-center my-2'>
              <img className='w-5 h-5 rounded-full' src={profile} alt="" />
              <p className='text-[#777777] text-xs font-normal'>Jenny Kiaa</p>
              <div className="bg-[#999999] w-[1px] h-3 items-center"></div>
              <div>
                <Calendar />
              </div>
              <p className='text-[#777777] text-xs font-normal'>02 december 2022</p>
              <div className="bg-[#999999] w-[1px] h-3 items-center"></div>
              <div>
                <Clock />
              </div>
              <p className='text-[#777777] text-xs font-normal'>3 min. to read</p>
            </div>
            <p className='text-[#555555] text-base font-normal'>Expense tracking isn't just about recording numbers; it's about making informed financial decisions.</p>
          </div>

        </div>

        <div className='bg-[#D9D9D9] grid grid-cols-12'>
          <div className="col-span-8">
            <div className='px-6 py-4'>
              <p className='text-[#088A8A] text-xl font-medium'>Recently <span className='text-[#222222]'>Posted</span></p>
              <div className='flex justify-between gap-5 my-4'>
                <div>
                  <img className='w-64 h-44 rounded-md' src={recentBlog1} alt="" />
                </div>
                <div>
                  <div className="bg-[#F3E6E6] w-fit h-fit py-1 px-2 rounded-md">
                    <p className="text-[#666666] text-sm font-normal">CRM</p>
                  </div>
                  <p className='text-[#222222] text-3xl font-semibold mt-3'>How Sewnex Simplifies Inventory Management</p>
                  <div className='flex gap-2 items-center my-4'>
                    <img className='w-5 h-5 rounded-full' src={profile} alt="" />
                    <p className='text-[#777777] text-xs font-normal'>Jenny Kiaa</p>
                    <div className="bg-[#999999] w-[1px] h-3 items-center"></div>
                    <div>
                      <Calendar />
                    </div>
                    <p className='text-[#777777] text-xs font-normal'>02 december 2022</p>
                    <div className="bg-[#999999] w-[1px] h-3 items-center"></div>
                    <div>
                      <Clock />
                    </div>
                    <p className='text-[#777777] text-xs font-normal'>3 min. to read</p>
                  </div>
                  <p className='text-[#555555] text-base font-normal'>Expense tracking isn't just about recording numbers; it's about making informed financial decisions.</p>
                </div>
              </div>

              <div className='flex justify-between gap-5 my-4'>
                <div>
                  <img className='w-64 h-44 rounded-md' src={recentBlog2} alt="" />
                </div>
                <div>
                  <div className="bg-[#F3E6E6] w-fit h-fit py-1 px-2 rounded-md">
                    <p className="text-[#666666] text-sm font-normal">CRM</p>
                  </div>
                  <p className='text-[#222222] text-3xl font-semibold mt-3'>The Role of AI in Modern Business Billing</p>
                  <div className='flex gap-2 items-center my-4'>
                    <img className='w-5 h-5 rounded-full' src={profile} alt="" />
                    <p className='text-[#777777] text-xs font-normal'>Jenny Kiaa</p>
                    <div className="bg-[#999999] w-[1px] h-3 items-center"></div>
                    <div>
                      <Calendar />
                    </div>
                    <p className='text-[#777777] text-xs font-normal'>02 december 2022</p>
                    <div className="bg-[#999999] w-[1px] h-3 items-center"></div>
                    <div>
                      <Clock />
                    </div>
                    <p className='text-[#777777] text-xs font-normal'>3 min. to read</p>
                  </div>
                  <p className='text-[#555555] text-base font-normal'>Expense tracking isn't just about recording numbers; it's about making informed financial decisions.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-4">
            <Categories/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog