import * as React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

interface MainLayoutProps {
  children: React.ReactElement;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <div>
        <Header />
        <main className="container">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
