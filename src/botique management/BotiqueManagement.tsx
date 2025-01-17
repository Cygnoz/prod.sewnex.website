import gridimg from "../assets/images/6c15ac78-3117-4e87-9ec8-4b4427f3a6ce 4.png"; // Update the path based on your directory
import card1 from '../assets/images/Frame 1153.png'
import card2 from '../assets/images/Frame 1188 (1).png'
import card3 from '../assets/images/Frame 1188.png'
import card4 from '../assets/images/Frame 1187.png'

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
          // opacity: 0.2,
          zIndex: -1,
        }}
      ></div>

      {/* Content Section */}
      <div className="relative p-8">
        {/* Title Section - Updated styling */}
        <div className="flex items-center justify-between mb-12">
          <h1 className="text-3xl font-bold text-[#7F5303]">
            Streamlined Boutique Management
          </h1>
          <p className="text-[#7F5303] ml-8 text-sm">Key Features</p>
        </div>

        {/* Card Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Card 1 */}
        <img src={card1} loading="lazy" alt="" />
        <img src={card2} loading="lazy" alt="" />
        <img src={card3} loading="lazy" alt="" />
        <img src={card4} loading="lazy" alt="" />
        </div>
      </div>
    </div>
  );
}

export default BoutiqueManagement;