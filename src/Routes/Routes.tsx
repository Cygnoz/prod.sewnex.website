import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Header from "../header/Header";
import Layout from "../Layout/Layout";
import Privacy from "../Pages/Privacy";
import Security from "../Pages/Security";
import TermsandConditions from "../Pages/TermsandConditions";
import Blog from "../Pages/Blogs/Blog";
import NewsandEvent from "../Pages/NewsAndEvents/NewsandEvent";
import ViewAllEvents from "../Pages/NewsAndEvents/ViewAllEvents";
import ViewAEvent from "../Pages/NewsAndEvents/ViewAEvent";
import ViewAllNews from "../Pages/NewsAndEvents/ViewAllNews";
import ViewANews from "../Pages/NewsAndEvents/ViewANews";
import BlogView from "../Pages/Blogs/BlogView";
import KnowledgeBase from "../Pages/KnowLedgeBase/KnowledgeBase";
import KBView1 from "../Pages/KnowLedgeBase/KBView1";
import KBGettingStarted from "../Pages/KnowLedgeBase/KBGettingStarted";
import KBIntroductiontoCRM from "../Pages/KnowLedgeBase/KBIntroductiontoCRM";
import CustomerStories from "../components/CustomerStories/CustomerStories";

const BoutiqueManagement = lazy(() => import('../botique management/BotiqueManagement'))
const ServiceDelivery = lazy(() => import('../service delivery/ServiceDelivey'))
const Billie = lazy(() => import('../components/BillieAi'))
const Testimonial = lazy(() => import('../components/Testimonial'))
const LatestNews = lazy(() => import('../components/LatestNews'))
const AboutUs = lazy(() => import('../components/AboutUs/AboutUs'))
const ContactUs = lazy(() => import('../components/ContactUs/ContactUs'))

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
                <BoutiqueManagement />
                <ServiceDelivery />
                <Billie />
                <Testimonial />
                <LatestNews />
              </Layout>
            </>
          }
        />

        <Route
          path="/aboutus"
          element={
            <Layout>
              <AboutUs />
            </Layout>
          }
        />
       
        <Route
          path="/contactus"
          element={
            <Layout>
              <ContactUs />
            </Layout>
          }
        />
        <Route
          path="/customerStories"
          element={
            <Layout>
              <CustomerStories />
            </Layout>
          }
        />
        <Route
          path="/privacy-policy"
          element={
            <Layout>
              <Privacy />
            </Layout>
          }
        />
        <Route
          path="/security"
          element={
            <Layout>
              <Security />
            </Layout>
          }
        />
        <Route
          path="/terms-and-conditions"
          element={
            <Layout>
              <TermsandConditions />
            </Layout>
          }
        />
        <Route
          path="/blogs"
          element={
            <Layout>
              <Blog />
            </Layout>
          }
        />
        <Route
          path="/blog/view/:id"
          element={
            <Layout>
              <BlogView />
            </Layout>
          }
        />
        <Route
          path="/news-and-events"
          element={
            <Layout>
              <NewsandEvent />
            </Layout>
          }
        />
        <Route
          path="/news-and-events/view-all-events"
          element={
            <Layout>
              <ViewAllEvents />
            </Layout>
          }
        />
        <Route
          path="/news-and-events/view-all-events/view-event/:id"
          element={
            <Layout>
              <ViewAEvent />
            </Layout>
          }
        />
        <Route
          path="/news-and-events/view-all-news"
          element={
            <Layout>
              <ViewAllNews />
            </Layout>
          }
        />
        <Route
          path="/news-and-events/view-all-news/view-news/:id"
          element={
            <Layout>
              <ViewANews />
            </Layout>
          }
        />
        <Route
          path="/knowledge-base"
          element={
              <KnowledgeBase />
          }
        />
         <Route
          path="/knowledge-base/:id"
          element={
              <KBView1 />
          }
        />
         <Route
          path="/knowledge-base/:categoryName/:id"
          element={
              <KBGettingStarted />
          }
        />
        <Route
          path="/knowledge-base/:categoryName/:subcategory/:id"
          element={
              <KBIntroductiontoCRM />
          }
        />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;