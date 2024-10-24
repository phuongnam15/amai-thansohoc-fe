import { useState } from "react";
import { FiChevronDown, FiChevronUp, FiMenu, FiX } from "react-icons/fi";
import Language from "./Language";
import logo from "../../../assets/images/logos/Ellipse 25.svg";

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
    name: "Các chương trình từ thiện",
    href: "#",
    childs: [
      { name: "item1", href: "" },
      { name: "item2", href: "" },
    ],
  },
  {
    name: "Tin tức sự kiện",
    href: "#",
  },
  {
    name: "Liên hệ",
    href: "#",
  },
  {
    name: "Đi chùa online",
    href: "#",
    childs: [
      { name: "item1", href: "" },
      { name: "item2", href: "" },
    ],
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
    <header className="w-full p-4 bg-linear-1 sticky top-0">
      <div className="container flex justify-between items-center">
        <div className="flex items-center gap-[7.5px] xl:gap-4">
          <img
            src={logo}
            alt="Logo"
            className="w-[45px] h-[45px] xl:w-[60px] xl:h-[60px]"
          />
          <h1 className="text-xl text-primary font-lora-regular">
            Tôi đi từ thiện
          </h1>
        </div>

        {/* Mobile Menu Icon */}
        <button className="text-3xl lg:hidden" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FiX className="text-[#7D7D7D]" /> : <FiMenu className="text-[#343434]" />}
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
                <div className="absolute top-full left-0 right-0 mt-2 bg-white shadow-lg py-2 z-10">
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
          <Language />
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
                <Language />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
