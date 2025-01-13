import './App.css'
import BoutiqueManagement from './botique management/BotiqueManagement'
import BillieAi from './components/BillieAi'
import LatestNews from './components/LatestNews'
import Testimonial from './components/Testimonial'
import Footer from './footer/Footer'
import Header from './header/Header'
import ServicesDelivey from './service delivery/ServiceDelivey'
function App() {


  return (
    <>
     <Header/>
    <BoutiqueManagement/>
    <ServicesDelivey/>
    <BillieAi/>
    <Testimonial/>
    <LatestNews/>
    <Footer/>
    </>
  )
}

export default App
