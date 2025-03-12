import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Header from "../header/Header";
import Layout from "../Layout/Layout";
import Privacy from "../Pages/Privacy";
import Security from "../Pages/Security";
import TermsandConditions from "../Pages/TermsandConditions";

const BoutiqueManagement = lazy(()=>import('../botique management/BotiqueManagement'))
const ServiceDelivery = lazy(()=>import('../service delivery/ServiceDelivey'))
const Billie = lazy(()=>import('../components/BillieAi'))
const Testimonial = lazy(()=>import('../components/Testimonial'))
const LatestNews = lazy(()=>import('../components/LatestNews'))
const AboutUs = lazy(()=>import('../components/AboutUs/AboutUs'))
const Features = lazy(()=>import('../components/Features/Features'))
const ContactUs = lazy(()=>import('../components/ContactUs/ContactUs'))

const AppRoutes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route
          path="/"
          element={
            <>
            <Layout>
            <Header />
              <BoutiqueManagement/>
              <ServiceDelivery/>
              <Billie/>
              <Testimonial/>
              <LatestNews/>
            </Layout>
            </>
          }
        />

        <Route
        path="/aboutus"
        element={
            <Layout>
                <AboutUs/>
            </Layout>
        }
        />
        <Route
        path="/features"
        element={
            <Layout>
                <Features/>
            </Layout>
        }
        />
        <Route
        path="/contactus"
        element={
            <Layout>
                <ContactUs/>
            </Layout>
        }
        />
        <Route
        path="/privacy-policy"
        element={
            <Layout>
                <Privacy/>
            </Layout>
        }
        />
        <Route
        path="/security"
        element={
            <Layout>
                <Security/>
            </Layout>
        }
        />
        <Route
        path="/terms-and-conditions"
        element={
            <Layout>
                <TermsandConditions/>
            </Layout>
        }
        />

      </Routes>
    </Suspense>
  );
};

export default AppRoutes;