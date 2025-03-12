import BoutiqueManagement from "../../botique management/BotiqueManagement"
import BillieAi from '../../components/BillieAi'
import LatestNews from '../../components/LatestNews'
import Testimonial from '../../components/Testimonial'
import ServiceDelivey from "../../service delivery/ServiceDelivey"

type Props = {}

const Home = ({}: Props) => {
  return (
    <>
    <BoutiqueManagement/>
    <ServiceDelivey />
    <BillieAi/>
    <Testimonial/>
    <LatestNews/>
  
    </>
    
  )
}

export default Home