import card1img from '../assets/images/Frame 629498.png'
import card2img from '../assets/images/Rectangle 47.png'
import card3img from '../assets/images/Frame 629499.png'

function BoutiqueManagement() {
  return (
    <div className="min-h-screen bg-white relative">
    {/* Content Section */}
    <div className="relative p-4 sm:p-8">
      {/* Title Section - Responsive */}
      <div className="flex flex-col sm:flex-row items-center justify-between mb-6 sm:mb-12 text-center sm:text-left">
        <h1 className="text-xl sm:text-3xl font-bold text-[#087B44]">
          Superior Service Delivery for <br className="sm:hidden" />
          Premium Boutiques
        </h1>
      </div>
  
      {/* Card Grid Section - Responsive */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        {/* Card 1 */}
        <img src={card2img} loading="lazy" alt="" className="w-full h-auto rounded-lg" />
        <img src={card1img} loading="lazy" alt="" className="w-full h-auto rounded-lg" />
  
        {/* Card 3 - Spanning 2 Columns on Medium and Large Screens */}
        <img src={card3img} loading="lazy" alt="" className="w-full h-auto rounded-lg sm:col-span-2" />
      </div>
    </div>
  </div>
  
  );
}

export default BoutiqueManagement;
