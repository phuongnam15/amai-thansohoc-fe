import Header from "./header/Header";
import Footer from "./footer/Footer";
import { Outlet } from "react-router-dom";

const FullLayout = () => {
  return (
    <div className="w-full min-h-screen relative flex flex-col items-center bg-primary">
      <div className="absolute inset-0 z-10 mix-blend-plus-lighter">
        <div className="absolute inset-0 bg-blur-mobile xl:bg-blur-desktop bg-repeat-y bg-cover"></div>
        <div className="absolute inset-0 bg-black opacity-50 xl:opacity-40"></div>
      </div>
      <Header />
      <div className="flex-1 w-full relative">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default FullLayout;
