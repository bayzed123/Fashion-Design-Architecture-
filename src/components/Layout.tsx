import React from "react";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {/* Added padding-top to account for fixed header */}
      <main className="flex-grow pt-[80px]">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
