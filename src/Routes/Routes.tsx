// import { Routes, Route } from "react-router-dom";
// import { lazy, Suspense } from "react";
// import Header from "../header/Header";
// import Footer from "../footer/Footer";
// import Layout from "../Layout/Layout";

// const BoutiqueManagement = lazy(()=>import('../botique management/BotiqueManagement'))
// const ServiceDelivery = lazy(()=>import('../service delivery/ServiceDelivey'))
// const Billie = lazy(()=>import('../components/BillieAi'))
// const Testimonial = lazy(()=>import('../components/Testimonial'))
// const LatestNews = lazy(()=>import('../components/LatestNews'))
// const AboutUs = lazy(()=>import('../components/AboutUs/AboutUs'))
// const Features = lazy(()=>import('../components/Features/Features'))
// const ContactUs = lazy(()=>import('../components/ContactUs/ContactUs'))

// const AppRoutes = () => {
//   return (
//     <Suspense fallback={<div>Loading...</div>}>
//       <Routes>
//         <Route
//           path="/"
//           element={
//             <>
//               <Header />
//               <BoutiqueManagement/>
//               <ServiceDelivery/>
//               <Billie/>
//               <Testimonial/>
//               <LatestNews/>
//               <Footer />
//             </>
//           }
//         />

//         <Route
//         path="/aboutus"
//         element={
//             <Layout>
//                 <AboutUs/>
//             </Layout>
//         }
//         />
//         <Route
//         path="/features"
//         element={
//             <Layout>
//                 <Features/>
//             </Layout>
//         }
//         />
//         <Route
//         path="/contactus"
//         element={
//             <Layout>
//                 <ContactUs/>
//             </Layout>
//         }
//         />

//       </Routes>
//     </Suspense>
//   );
// };

// export default AppRoutes;