//  import { lazy } from 'react'
import { Suspense } from 'react'
import './App.css'
 import AppRoutes from './Routes/Routes'
// import Footer from './footer/Footer'
// import Header from './header/Header'
// import { Route, Routes } from 'react-router-dom'

// const Home = lazy(()=>import('./components/Home/Home'))
// const AboutUs = lazy(()=>import('./components/AboutUs/AboutUs'))
// const Features =lazy(()=>import('./components/Features/Features'))
// const ContactUs = lazy(()=>import('./components/ContactUs/ContactUs'))

function App() {

  return (
    <>
    {/* <Suspense fallback={<div>Loading...</div>}>
      <Header/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      
      <Route path='/aboutus' element={<AboutUs/>}/>
      <Route path='/features' element={<Features/>}/>
      <Route path='/contactus' element={<ContactUs/>}/>
    </Routes>
    <Footer/> 
    </Suspense> */}
     <Suspense fallback={<div>Loading...</div>}>
          <AppRoutes/>
        </Suspense>
    </>
  )
}

export default App
