// import gridimg from "../assets/images/6c15ac78-3117-4e87-9ec8-4b4427f3a6ce 4.png"; // Update the path based on your directory
// import card1 from '../assets/images/Frame 1153(order) (1).png'
// import card2 from '../assets/images/Frame 1188(inventory) (1).png'
// import card3 from '../assets/images//Frame 1188(staff).png'
// import card4 from '../assets/images/Frame 1187(accounts).png'
import LaptopIcon from "../assets/icons/LaptopIcon";
import RectangleBgIcon from "../assets/icons/RectangleBgIcon";
import DotIcon from "../assets/icons/DotIcon";
import image from "../assets/images/homeBg4.png"
import cardImage1 from '../assets/images/homeCardBg4.png'
import cardImage2 from '../assets/images/homeCardBg3.png'
import cardImage3 from '../assets/images/homeCardBg2.png'
import cardImage4 from '../assets/images/homeCardBg1.png'
import CardListIcon from "../assets/icons/CardListIcon";
import UsersRound from "../assets/icons/UsersRound";

//  import header from "../assets/images/header/Frame 99.png";

function BoutiqueManagement() {

  return (
    <>
    {/* <div className="flex flex-col lg:flex-row justify-between items-center px-5 lg:px-10 h-auto lg:h-[700px]">
          <div className="mt-5 lg:mt-[10px]">
            <img
              src={header}
              loading="lazy"
              alt="Header"
              className="max-w-[90%] sm:max-w-[70%] md:max-w-[60%] lg:w-[618px] h-auto"
            />
          </div>
          <div className="flex flex-row justify-center items-center gap-3 sm:gap-5 mt-5 lg:mt-[280px] mx-2 lg:mx-10 ">
            <button className="bg-white px-[30px] sm:w-[200px] md:w-[220px] lg:w-[250px] h-[54px] rounded-full font-bold no">
              Get a free demo
            </button>
            <button className="bg-[#90DDAF] px-[30px] sm:w-[200px] md:w-[20px] lg:w-[250px] h-[54px] rounded-full font-bold">
              Watch Video
            </button>
          </div>
        </div> */}

<div>
<div>
      <div className="px-4 sm:px-8 md:px-16 py-8 sm:py-10">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start text-center md:text-left">
          <p className="text-[#003B3B] lg:text-4xl sm:text-[32px] md:text-[36px] font-medium whitespace-nowrap">
            Explore our latest dashboard
          </p>
        </div>

        <p className="text-[#5B5B5B] lg:text-2xl sm:text-sm md:text-base py-4 font-normal">
          Sewnex provides a seamless experience for managing your tailoring business—from tracking <br/>
          orders and inventory to handling customer requests and finances.
        </p>
      </div>

      <div className="relative -mt-24 sm:-mt-32 md:-mt-48 overflow-hidden">
        <img
          src={image}
          className="w-full rounded-lg"
          loading="lazy"
          alt="News & Insights"
        />
      </div>
    </div>

   <div className="min-h-screen bg-[#CDEBD9] relative">
    {/* Background Image */}
    <div
      className="absolute inset-0"
      style={{
        // backgroundImage: `url(${gridimg})`,
        backgroundSize: "contain",
        backgroundRepeat: "repeat",
        backgroundPosition: "center",
        zIndex: -1,
      }}
    ></div>
  
    {/* Content Section */}
    <div className="relative p-4 md:p-8">
      {/* Title Section - Responsive */}
      <div className="flex flex-col sm:flex-row items-center justify-between mb-8 sm:mb-12 text-center sm:text-left">
        <h1 className="lg:text-[36px] font-medium text-[#002222]">
        Streamlined Boutique Management
        </h1>
      </div>
  
      {/* Card Grid Section - Responsive */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        <div
        className="overflow-hidden"
        style={{
          backgroundImage: `url(${cardImage1})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          borderRadius: "10px",
        }}>

<div className="p-4">
            <LaptopIcon/>
            <p className="text-[#013030] text-xl font-medium my-3">Order Management</p>
            <p className="text-[#606060] text-sm font-normal mb-4">Easily track orders and efficiently <br />manage client preferences.</p>
          </div>

          <div className="bg-[#FDFFFC] rounded-tl-lg rounded-br-2xl w-[260px] h-[220px] mt-[90px] ms-auto">
          <div className="p-3">
            <RectangleBgIcon/>
          </div>
          <div className="border border-[#E5E5E5]"></div>


          <div className="flex gap-2 py-6 px-6">
         <div className="mt-2">
         <DotIcon size={4}/>
         </div>
          <p className="text-[#5B5B5B] text-sm font-normal">Effortless order tracking and tailored management for every client.</p>
         
          </div> 
          <div className="flex gap-2 px-6">
         <div className="mt-2">
         <DotIcon size={4}/>
         </div>
          <p className="text-[#5B5B5B] text-sm font-normal">Effortless order tracking and tailored management for every client.</p>
          </div>
          
          </div>

        </div>

        <div
        className="overflow-hidden"
        style={{
          backgroundImage: `url(${cardImage2})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          borderRadius: "10px",
        }}>

<div className="p-4">
            <LaptopIcon/>
            <p className="text-[#013030] text-xl font-medium my-3">Inventory Management</p>
            <p className="text-[#606060] text-sm font-normal mb-4">Practice of effectively overseeing and <br />controlling a company's stock of goods.</p>
          </div>

          <div className="bg-[#FDFFFC] rounded-tl-lg rounded-br-2xl w-[260px] h-[220px] mt-[90px] ms-auto">
          <div className="p-3">
            <RectangleBgIcon color="#91634A"/>
          </div>
          <div className="border border-[#E5E5E5]"></div>


          <div className="flex gap-2 py-6 px-6">
         <div className="mt-2">
         <DotIcon size={4}/>
         </div>
          <p className="text-[#5B5B5B] text-sm font-normal">Efficiently storing inventory to minimize costs and prevent damage.</p>
         
          </div> 
          <div className="flex gap-2 px-6">
         <div className="mt-2">
         <DotIcon size={4}/>
         </div>
          <p className="text-[#5B5B5B] text-sm font-normal">More efficient use of resources and streamlined processes.</p>
          </div>
          
          </div>

        </div>

        <div
        className="overflow-hidden"
        style={{
          backgroundImage: `url(${cardImage3})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          borderRadius: "10px",
        }}>

<div className="p-4">
            <CardListIcon/>
            <p className="text-[#013030] text-xl font-medium my-3">POS Management</p>
            <p className="text-[#606060] text-sm font-normal mb-4">Manages sales, transactions, inventory, <br />and provides real-time insights for POS operations.</p>
          </div>

          <div className="bg-[#FDFFFC] rounded-tl-lg rounded-br-2xl w-[260px] h-[220px] mt-[90px] ms-auto">
          <div className="p-3">
            <RectangleBgIcon color="#71AC1F"/>
          </div>
          <div className="border border-[#E5E5E5]"></div>


          <div className="flex gap-2 py-6 px-6">
         <div className="mt-2">
         <DotIcon size={4}/>
         </div>
          <p className="text-[#5B5B5B] text-sm font-normal">Enhances customer experience with quick and efficient checkout processes.</p>
         
          </div> 
          <div className="flex gap-2 px-6">
         <div className="mt-2">
         <DotIcon size={4}/>
         </div>
          <p className="text-[#5B5B5B] text-sm font-normal">Streamlines inventory tracking and stock updates directly through the POS system.</p>
          </div>
          
          </div>

        </div>

        <div
        className="overflow-hidden"
        style={{
          backgroundImage: `url(${cardImage4})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          borderRadius: "10px",
        }}>

<div className="p-4">
            <UsersRound/>
            <p className="text-[#013030] text-xl font-medium my-3">Staff Management</p>
            <p className="text-[#606060] text-sm font-normal mb-4">Optimize staff assignments and track <br />productivity effortlessly.</p>
          </div>

          <div className="bg-[#FDFFFC] rounded-tl-lg rounded-br-2xl w-[260px] h-[220px] mt-[90px] ms-auto">
          <div className="p-3">
            <RectangleBgIcon color="#C57883"/>
          </div>
          <div className="border border-[#E5E5E5]"></div>


          <div className="flex gap-2 py-6 px-6">
         <div className="mt-2">
         <DotIcon size={4}/>
         </div>
          <p className="text-[#5B5B5B] text-sm font-normal">Effortlessly handle staff profiles, work status, salaries.</p>
         
          </div> 
          <div className="flex gap-2 px-6">
         <div className="mt-2">
         <DotIcon size={4}/>
         </div>
          <p className="text-[#5B5B5B] text-sm font-normal">Simplify the management of salaries, commissions, and performance for better staff oversight.</p>
          </div>
          
          </div>

        </div>
      </div>
    </div>
  </div> 
  </div>   
    </>

  
  );
}

export default BoutiqueManagement;