import { lazy, Suspense } from "react";

// const Header = lazy(() => import("../header/Header"));
const Navbar = lazy(()=>import('../header/Navbar'))
const Footer = lazy(() => import("../footer/Footer"));

import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </Suspense>
  );
};

export default Layout;