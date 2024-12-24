import { useLocation } from "react-router-dom";

const Background = () => {
  const pathname = useLocation().pathname;

  return (
    <>
      <div
        className={`absolute inset-0 z-10 ${(pathname === "/" || pathname === "/trang-chu") &&
          "mix-blend-plus-lighter"
          }`}
      >
        <div
          className={`absolute inset-0 ${pathname === "/" || pathname === "/trang-chu"
            ? "bg-blur-mobile"
            : "bg-blur-mobile-about"
            }  ${pathname === "/" || pathname === "/trang-chu"
              ? "xl:bg-blur-desktop"
              : "xl:bg-blur-desktop-2"
            } bg-repeat-y bg-cover`}
        ></div>
        {(pathname === "/" || pathname === "/trang-chu") && (
          <div className="absolute inset-0 bg-black opacity-50 xl:opacity-40 hidden xl:block"></div>
        )}
      </div>

      {/* <div
        className={`absolute inset-0 z-10 ${(pathname === "/" || pathname === "/tra-cuu") &&
          "mix-blend-plus-lighter"
          }`}
      >
        <div
          className={`absolute inset-0 ${pathname === "/" || pathname === "/tra-cuu"
            ? "bg-blur-mobile"
            : "bg-blur-mobile-about"
            }  ${pathname === "/" || pathname === "/tra-cuu"
              ? "xl:bg-blur-desktop"
              : "xl:bg-blur-desktop-2"
            } bg-repeat-y bg-cover`}
        ></div>
        {(pathname === "/" || pathname === "/tra-cuu") && (
          <div className="absolute inset-0 bg-black opacity-50 xl:opacity-40 hidden xl:block"></div>
        )}
      </div> */}
    </>
  );
};

export default Background;
