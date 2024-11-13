import Header from "./header/Header";
import Footer from "./footer/Footer";
import { Outlet } from "react-router-dom";

const FullLayout = () => {
  return (
    <div className="w-full min-h-screen relative flex flex-col items-center bg-primary">
      <Header />
      <div className="flex-1 w-full">
        <Outlet />
      </div>
      <Footer />    
    </div>
  );
};

export default FullLayout;
