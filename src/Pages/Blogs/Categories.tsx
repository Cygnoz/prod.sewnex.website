
type Props = {}

const Categories = ({}: Props) => {
  return (
    <div>
        <div className='px-6 py-4'>
              <p className='text-xl font-medium bg-gradient-to-l from-[#004141] to-[#088A8A] text-transparent bg-clip-text my-4'>Categories</p>
              <div className='flex justify-between'>
                <p className='text-[#1C1C1C] text-base font-normal'>Billing & Invoicing</p>
                <p className='text-[#1C1C1C] text-base font-normal'>09</p>
              </div>
              <div className='border border-dashed border-[#D1E7E5] my-3'></div>
              <div className='flex justify-between'>
                <p className='text-[#1C1C1C] text-base font-normal'>Expense Management</p>
                <p className='text-[#1C1C1C] text-base font-normal'>05</p>
              </div>
              <div className='border border-dashed border-[#D1E7E5] my-3'></div>
              <div className='flex justify-between'>
                <p className='text-[#1C1C1C] text-base font-normal'>CRM & Customer Relations</p>
                <p className='text-[#1C1C1C] text-base font-normal'>09</p>
              </div>
              <div className='border border-dashed border-[#D1E7E5] my-3'></div>
              <div className='flex justify-between'>
                <p className='text-[#1C1C1C] text-base font-normal'>Business Growth & Finance</p>
                <p className='text-[#1C1C1C] text-base font-normal'>10</p>
              </div>
              <div className='border border-dashed border-[#D1E7E5] my-3'></div>
              <div className='flex justify-between'>
                <p className='text-[#1C1C1C] text-base font-normal'>Technology & Automation</p>
                <p className='text-[#1C1C1C] text-base font-normal'>03</p>
              </div>
            </div>
    </div>
  )
}

export default Categories