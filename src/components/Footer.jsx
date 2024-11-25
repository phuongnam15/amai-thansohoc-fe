import halfMoon from "../assets/images/backgrounds/half-moon.webp";
import stone from "../assets/images/backgrounds/stone.webp";
import facebook from "../assets/images/icons/facebook.webp";
import calling from "../assets/images/icons/call-calling.webp";
import solarSystem from "../assets/images/backgrounds/solar-system.webp";

const Footer = () => {
  return (
    <>
      <div className="relative w-full">
        <img
          src={halfMoon}
          alt=""
          className="relative z-10 mix-blend-color-dodge"
        />
        <img
          src={stone}
          alt=""
          className="absolute bottom-0 z-10 mix-blend-multiply"
        />
        <div className="absolute z-10 inset-0 flex flex-col items-center justify-center mix-blend-plus-lighter">
          <img src={solarSystem} alt="" className="w-36 -translate-y-7" />
        </div>
        <div className="absolute bottom-0 z-10 flex flex-col inset-x-0 items-center">
          <div className="flex-col flex gap-4 items-center mb-8">
            <h1 className="text-xl leading-10 xl:text-[2rem] font-prata-regular text-transparent bg-gradient-to-r from-white to-primary-6 bg-clip-text">
              Map For Success
            </h1>
            <h1 className="text-white font-bold text-[2rem]">
              Ms. Nguyễn Bảo Thoa
            </h1>
          </div>
          <div className="flex flex-col gap-4 items-center mb-[60px]">
            <div className="flex gap-1">
              <img src={calling} alt="" />
              <span className="text-white text-base font-medium">
                Hotline: 0964484172
              </span>
            </div>
            <div className="flex gap-1">
              <img src={facebook} alt="" />
              <span className="text-white text-base font-medium">
                Facebook: @BaoThoaNuce
              </span>
            </div>
          </div>
          <span className="text-white text-base mb-5">
            Copyright © 2024 ·BaoThoaMapForSuccess · All Rights Reserved ·
            Design by AMAI agency
          </span>
        </div>
      </div>
    </>
  );
};

export default Footer;
