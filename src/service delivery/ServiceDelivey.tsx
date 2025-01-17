import card1img from '../assets/images/Frame 629498.png'
import card2img from '../assets/images/Rectangle 47.png'
import card3img from '../assets/images/Frame 629499.png'

function BoutiqueManagement() {
  return (
    <div className="min-h-screen bg-white relative">
      {/* Content Section */}
      <div className="relative p-8">
        {/* Title Section */}
        <div className="flex items-center justify-between mb-12">
          <h1 className="text-3xl font-bold text-[#087B44]">
            Superior Service Delivery for Premium Boutiques
          </h1>
          <p className="text-[#09AB5C] ml-8 text-sm">About</p>
        </div>

        {/* Card Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {/* Card 1 */}
          <img src={card2img} loading='lazy' alt="" />
          <img src={card1img} loading='lazy' alt="" />

          {/* Card 3 that spans 2 columns */}
          <img src={card3img} loading='lazy' alt="" className="col-span-2" />
        </div>
      </div>
    </div>
  );
}

export default BoutiqueManagement;
