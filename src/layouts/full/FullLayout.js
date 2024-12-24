import Background from "../../components/Background";
import Footer from "../../components/Footer";
import Header from "./header/Header";
import SearchPage from "../../views/search/SearchPage";
import { Outlet, useLocation } from "react-router-dom";

const FullLayout = () => {
  const pathname = useLocation().pathname;

  return (
    <div className="w-full min-h-screen relative flex flex-col items-center bg-primary">
      <Background />
      <Header />
      <div className="flex-1 w-full relative overflow-hidden">
        <Outlet />
      </div>
      {(pathname !== "/" && pathname !== "/trang-chu") && <Footer />}
    </div>
  );
};

export default FullLayout;
