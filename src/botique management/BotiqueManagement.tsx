import gridimg from "../assets/images/6c15ac78-3117-4e87-9ec8-4b4427f3a6ce 4.png"; // Update the path based on your directory
import card1 from '../assets/images/Frame 1153(order) (1).png'
import card2 from '../assets/images/Frame 1188(inventory) (1).png'
import card3 from '../assets/images//Frame 1188(staff).png'
import card4 from '../assets/images/Frame 1187(accounts).png'

function BoutiqueManagement() {
  return (
    <div className="min-h-screen bg-[#E1E1D9] relative">
    {/* Background Image */}
    <div
      className="absolute inset-0"
      style={{
        backgroundImage: `url(${gridimg})`,
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
        <h1 className="text-3xl font-bold text-[#7F5303]">
          <span className="whitespace-nowrap">Streamlined Boutique</span> <br />
          Management
        </h1>
      </div>
  
      {/* Card Grid Section - Responsive */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        <img src={card1} loading="lazy" alt="" className="w-full h-auto" />
        <img src={card2} loading="lazy" alt="" className="w-full h-auto" />
        <img src={card3} loading="lazy" alt="" className="w-full h-auto" />
        <img src={card4} loading="lazy" alt="" className="w-full h-auto" />
      </div>
    </div>
  </div>
  
  );
}

export default BoutiqueManagement;