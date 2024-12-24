import { useState } from "react";
import logo from "../../../assets/images/logos/logo.svg";
import profile from "../../../assets/images/icons/profile.svg";
import menu from "../../../assets/images/icons/menu.svg";
import arrowDown from "../../../assets/images/icons/arrow-down.svg";

const menuItems = [
  {
    name: "Trang chủ",
    href: "/",
  },
  {
    name: "Giới thiệu",
    href: "/gioi-thieu",
  },
  {
    name: "Tra cứu",
    href: "/tra-cuu",
  },
  {
    name: "Dịch vụ",
    href: "#",
    childs: [
      { name: "Đặt tên khai sinh", href: "" },
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
  {
    name: "Tài khoản",
    href: "#",
    childs: [
      { name: "Thông tin tài khoản", href: "" },
      { name: "Quên mật khẩu", href: "" },
      { name: "Lịch sử tra cứu", href: "" },
      { name: "Đăng xuất", href: "" },

    ],
  },
];

const accoutArray = [
  {
    name: "Thông tin tài khoản",
  },
  {
    name: "Quên mật khẩu",
  },
  {
    name: "Lịch sử tra cứu",
  },
  {
    name: "Đăng xuất",
  },
];

const Header = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isAccoutDrop, setIsAccountDrop] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMenuClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="w-full sticky xl:absolute top-0 z-50">
      <div className="w-full bg-gradient-to-b from-[#D9D9D933] to-[#73737333] backdrop-blur-lg xl:backdrop-blur-none xl:bg-none">
        <div className="container flex justify-between items-center py-4">
          <div className="flex flex-row xl:flex-col items-center content-center gap-2 xl:gap-1">
            <img src={logo} alt="logo" className="w-8 h-8 xl:w-11 xl:h-11" />
            <h1 class="text-sm xl:text-xs bg-clip-text text-transparent bg-gradient-to-r from-white to-[#F9F89B] font-prata-regular">
              Map for success
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="xl:gap-10 hidden xl:flex">
            {menuItems.slice(0, menuItems.length - 1).map((item, index) => (
              <div key={index} className="relative">
                <div
                  className="flex items-center cursor-pointer"
                  onClick={() => handleMenuClick(index)}
                >
                  <a
                    href={item.href}
                    className="text-[#fff] font-prata-regular text-base"
                  >
                    {item.name}
                  </a>
                </div>

                {item.childs && activeIndex === index && (
                  <div className="backdrop-blur-2xl flex flex-col absolute top-full left-0 -right-[200px] xl:text-sm mt-2 bg-gradient-to-r from-[#FFFFFF4D] to-[#73CBD54D] shadow-lg p-5 z-10 rounded-xl">
                    {item.childs.map((child, childIndex) => (
                      <a
                        key={childIndex}
                        href={child.href}
                        className={`items-center py-[6px] text-white tracking-wide font-ibmplexsans-regular ${childIndex === 0
<<<<<<< HEAD
                          ? ""
                          : "border-t-[0.5px] border-white border-opacity-25"
=======
                            ? ""
                            : "border-t-[0.5px] border-white border-opacity-25"
>>>>>>> 9c0e0fe078945427b4fd0ebad478536a78b4ffd9
                          }`}
                      >
                        {child.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div
            className="relative hidden xl:flex flex-col cursor-pointer"
            onClick={() => setIsAccountDrop(!isAccoutDrop)}
          >
            <div className="flex items-center gap-1">
              <div className="w-6 h-6">
                <img
                  src={profile}
                  alt=""
                  className="ư-full h-full object-cover"
                />
              </div>
              <span className="font-prata-regular text-base text-white translate-y-[2px]">
                Tài khoản
              </span>
            </div>
            <div
              className={`backdrop-blur-sm flex flex-col absolute top-6 -left-24 right-0 text-sm mt-2 bg-gradient-to-r from-[#FFFFFF4D] to-[#73CBD54D] shadow-lg p-5 z-10 rounded-xl ${!isAccoutDrop && "hidden"
                }`}
            >
              {accoutArray.map((child, childIndex) => (
                <a
                  key={childIndex}
                  href={child.href}
                  className={`items-center py-[6px] text-white tracking-wide font-ibmplexsans-regular ${childIndex === 0
<<<<<<< HEAD
                    ? ""
                    : "border-t-[0.5px] border-white border-opacity-25"
=======
                      ? ""
                      : "border-t-[0.5px] border-white border-opacity-25"
>>>>>>> 9c0e0fe078945427b4fd0ebad478536a78b4ffd9
                    }`}
                >
                  {child.name}
                </a>
              ))}
            </div>
          </div>

          {/* mobile menu */}
          <div className="h-8 w-8 xl:hidden" onClick={toggleMobileMenu}>
            <img src={menu} alt="w-full h-full" />
          </div>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="bg-[#0E0D21] bg-opacity-75 z-0 flex justify-end absolute inset-x-0">
          <div className="w-3/4 h-full px-5 py-2 shadow-lg bg-gradient-to-t from-[#D9D9D966] to-[#73737366] backdrop-blur-lg">
            <div className="flex flex-col">
              {menuItems.map((item, index) => (
                <div key={index} className={`relative py-4`}>
                  {index !== 0 && (
                    <div className="h-[0.5px] absolute top-0 w-full bg-gradient-to-r from-[#ffffff66] to-[#F9F89B66]"></div>
                  )}
                  <div
                    className="flex items-center justify-between gap-1 cursor-pointer"
                    onClick={() => handleMenuClick(index)}
                  >
                    <a
                      href={item.href}
                      className="text-white font-prata-regular text-base leading-normal"
                    >
                      {item.name}
                    </a>
                    {item.childs && <img src={arrowDown} alt="drop-icon" />}
                  </div>

                  {item.childs && activeIndex === index && (
                    <div className="mt-1 py-2">
                      {item.childs.map((child, childIndex) => (
                        <a
                          key={childIndex}
                          href={child.href}
                          className="block px-4 py-1 text-white font-ibmplexsans-regular text-base tracking-wide"
                        >
                          {child.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
