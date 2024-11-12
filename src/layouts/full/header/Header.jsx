import { useState } from "react";
import { FiChevronDown, FiChevronUp, FiMenu, FiX } from "react-icons/fi";
// import Language from "./Language";
// import logo1 from "../../../assets/images/logos/logo1.webp";
import logoheader from "../../../assets/images/logos/logoheader.svg";
import profile from "../../../assets/images/icons/profile.svg";

const menuItems = [
  {
    name: "Trang chủ",
    href: "#",
  },
  {
    name: "Giới thiệu",
    href: "#",
  },
  {
    name: "Tra cứu",
    href: "#",
  },
  {
    name: "Dịch vụ",
    href: "#",
    childs: [
      { name: "Đặt tên khai sinh", href: "", },
      { name: "Đặt tên nghệ danh", href: "" },
      { name: "Đặt tên thương hiệu", href: "" },
      { name: "Định hướng nghề nghiệp", href: "" },
      { name: "Thấu hiểu con cái", href: "" },
      { name: "Coaching 1:1 với chuyên gia", href: "" },
      { name: "Đào tạo thần số học", href: "" },
    ],
  },
  {
    name: "Gói vip",
    href: "#",
  },
  {
    name: "Blog",
    href: "#",
  },
  {
    name: "Liên hệ",
    href: "#",
  },

];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  const handleMenuClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="w-full py-4 fixed z-50 top-0">
      <div className="container flex justify-center items-center">
        <div className="flex items-center content-center gap-[7.5px] xl:gap-4 flex-col">
          <img
            src={logoheader}
            alt="Logo"
            className="w-[45px] h-[45px] mr-[178px]"
          />
          <div className="text-[12px] mr-[178px] font-prata-regular text-white text-linear-3">
            Map for success
          </div>
        </div>

        {/* Mobile Menu Icon */}
        <button className="text-3xl lg:hidden" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FiX className="text-[#fff]" /> : <FiMenu className="text-[#fff]" />}
        </button>

        {/* Desktop Menu */}
        <div className="hidden lg:flex xl:gap-5 2xl:gap-7 items-center">
          {menuItems.map((item, index) => (
            <div key={index} className="relative">
              <div
                className="flex items-center gap-1 cursor-pointer"
                onClick={() => handleMenuClick(index)}
              >
                <a
                  href={item.href}
                  className="text-[#fff] hover:text-yellow font-segoeui font-semibold text-lg tracking-wide"
                >
                  {item.name}
                </a>
                {/* {item.childs && (
                  <span>
                    {activeIndex === index ? (
                      <FiChevronUp className="text-[#fff] text-2xl" />
                    ) : (
                      <FiChevronDown className="text-[#fff] text-2xl" />
                    )}
                  </span> 
                )} */}
              </div>

              {item.childs && activeIndex === index && (
                <div className="absolute top-full left-0 -right-[215px] text-[14px] mt-2 bg-linear-menu shadow-lg p-[20px] z-10 rounded-xl items-center">
                  {item.childs.map((child, childIndex) => (
                    <a
                      key={childIndex}
                      href={child.href}
                      className={`block px-[20px] font-ibmplexsans-regular items-center py-[6px] text-white hover:bg-slate-500 ${childIndex === 0 ? '' : 'border-t-[0.5px] border-white border-opacity-50]'}`}
                    >
                      {child.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
          {/* <Language /> */}
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-75 z-20 flex justify-end">
            <div className="w-80 bg-white h-full p-6 shadow-lg">
              <button className="text-3xl mb-4" onClick={toggleMobileMenu}>
                <FiX className="text-[#343434]" />
              </button>
              <div className="flex flex-col gap-4">
                {menuItems.map((item, index) => (
                  <div key={index} className="relative">
                    <div
                      className="flex items-center gap-1 cursor-pointer"
                      onClick={() => handleMenuClick(index)}
                    >
                      <a
                        href={item.href}
                        className="text-[#7D7D7D] hover:text-primary-1 font-segoeui font-semibold text-lg tracking-wide"
                      >
                        {item.name}
                      </a>
                      {item.childs && (
                        <span>
                          {activeIndex === index ? (
                            <FiChevronUp className="text-[#7D7D7D] text-2xl" />
                          ) : (
                            <FiChevronDown className="text-[#7D7D7D] text-2xl" />
                          )}
                        </span>
                      )}
                    </div>

                    {item.childs && activeIndex === index && (
                      <div className="mt-2 bg-gray-100 shadow-lg py-2">
                        {item.childs.map((child, childIndex) => (
                          <a
                            key={childIndex}
                            href={child.href}
                            className="block px-4 py-2 text-black hover:bg-gray-200"
                          >
                            {child.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                {/* <Language /> */}
              </div>
            </div>
          </div>
        )}
        <div className="flex items-center ml-[185px] cursor-pointer">
          <img src={profile} alt="" className="w-[24px] h-[24px]" />
          <span className=" font-prata-regular text-[16px] text-white">Tài khoản</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
