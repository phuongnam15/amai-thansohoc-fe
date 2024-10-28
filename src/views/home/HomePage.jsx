import banner from "../../assets/images/backgrounds/banner.png";
import bode from "../../assets//images/backgrounds/bode.webp";
import tay from "../../assets/images/backgrounds/tay.webp";
import thap from "../../assets/images/backgrounds/thap.webp";
import light from "../../assets/images/backgrounds/light.webp";
import nen from "../../assets/images/backgrounds/nen.svg";
import cloud1 from "../../assets/images/backgrounds/cloud-11.webp";
import cloud2 from "../../assets/images/backgrounds/cloud-21.webp";
import cloud3 from "../../assets/images/backgrounds/cloud-31.webp";
import TopImage from "../../components/top-image/TopImage";
import useCheckMobileScreen from "../../utils/hooks/useCheckMobileScreen";
import handHeart from "../../assets/images/icons/hand-heart.svg";
import handHeart2 from "../../assets/images/icons/hand-heart-2.svg";
import box from "../../assets/images/icons/box.svg";
import thap2 from "../../assets/images/backgrounds/thap-2.svg";
import trungthu from "../../assets/images/backgrounds/trungthu.svg";
import lachualanh from "../../assets/images/backgrounds/lachualanh.svg";
import cacbannho from "../../assets/images/backgrounds/cacbannho.webp";
import image from "../../assets/images/backgrounds/image.png";

const slats = [
  {
    slat: "100",
    content: "Dự án đã được gây quỹ thành công",
  },
  {
    slat: "5 tỷ đồng",
    content: "Đã được quyên góp",
  },
  {
    slat: "10+ triệu",
    content: "Lượt quyên góp",
  },
];

const otherWays = [
  {
    text: "Doanh nghiệp từ thiện",
    icon: handHeart,
  },
  {
    text: "Đăng ký tình nguyện",
    icon: handHeart2,
  },
  {
    text: "Cá nhân từ thiện",
    icon: box,
  },
];

const mainEvents = [
  {
    text: "Tâm bồ đề",
    icon: thap2,
  },
  {
    text: "Trung thu cho em",
    icon: trungthu,
  },
  {
    text: "Mầm non từ bi",
    icon: lachualanh,
  },
];

const HomePage = () => {
  const isMobileScreen = useCheckMobileScreen();
  return (
    <div className="w-full h-auto">
      {isMobileScreen ? (
        <TopImage cloud={cloud3} image={banner} />
      ) : (
        <TopImage cloud={cloud1} image={banner} />
      )}
      <div className="w-full h-fit xl:pt-10 pb-20 relative bg-white sm:bg-primary-2 overflow-hidden">
        <div className="absolute w-full top-[85%]">
          <img src={cloud2} alt="" className="w-full rotate-180" />
        </div>
        <div className="flex py-10 container">
          <div className="flex flex-col flex-1 justify-center relative">
            <h1 className="text-xl xl:text-[40px] font-lora-regular text-primary mb-2">
              Tôi đi từ thiện
            </h1>
            <h4 className="font-segoeui-bold text-xs xl:text-xl text-primary mb-3 xl:mb-8">
              Nền tảng quyên góp từ thiện - Cùng nhau xây đắp phước lành
            </h4>
            <p className="text-sm xl:text-base font-segoeui mb-2 xl:mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, magni
              quidem! Modi, nostrum? Recusandae commodi iusto ab culpa rem enim?
              Quia totam alias optio ducimus aperiam, odit earum? Voluptatibus,
              tempore.
            </p>
            <div className="flex justify-between xl:justify-normal xl:gap-[52px] mb-8 px-6 xl:px-0">
              {slats.map((item, index) => {
                return (
                  <div className="flex flex-col xl:gap-3">
                    <div className="relative flex items-center mb-[-7px] xl:mb-0">
                      <img
                        src={bode}
                        alt=""
                        className="left-0 h-[65%] xl:h-auto"
                      />
                      <span className="absolute translate-y-1 translate-x-2 font-segoeui font-semibold text-[14.4px] xl:text-2xl text-primary">
                        {item.slat}
                      </span>
                    </div>
                    <p className="font-segoeui text-[8.4px] xl:text-sm max-w-20 xl:max-w-32">
                      {item.content}
                    </p>
                  </div>
                );
              })}
            </div>
            <button className="py-[7px] px-9 xl:py-[10px] xl:px-11 text-white font-segoeui font-semibold text-sm xl:text-base rounded-[32px] bg-primary self-start">
              Quyên góp
            </button>
          </div>
          <div className="relative hidden sm:flex justify-center items-center flex-1">
            <div className="relative xl:h-[500px] xl:w-[392px] bg-[#B26040] rounded-[232.5px] shadow-inset-1">
              <img
                src={tay}
                alt=""
                className="absolute bottom-0 left-1/2 -translate-x-1/2 z-[1]"
              />
              <img
                src={nen}
                alt=""
                className="absolute bottom-0 left-1/2 -translate-x-1/2 z-[2] top-1/2 -translate-y-3/4"
              />
              <img
                src={light}
                alt=""
                className="absolute bottom-0 left-1/2 -translate-x-1/2 z-[1] top-0"
              />
              <img
                src={light}
                alt=""
                className="absolute bottom-0 left-1/2 -translate-x-1/2 z-[1] top-0"
              />
              <div className="absolute bottom-0 left-0 right-0 -top-7 overflow-hidden rounded-b-[232.5px]">
                <img
                  src={thap}
                  alt=""
                  className="absolute bottom-2 left-1/2 -translate-x-1/2 z-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-primary-3 xl:pt-14 pb-10 xl:pb-36 relative overflow-hidden">
        <div className="absolute w-full top-[80%]">
          <img src={cloud3} alt="" className="w-full" />
        </div>
        <h1 className="text-xl xl:text-[36px] text-primary font-lora-regular text-center">
          Cùng Tìm Hiểu Cách Đóng Góp Khác
        </h1>
        <div className="flex justify-center gap-8 xl:gap-40 mt-[18px] xl:mt-24">
          {otherWays.map((item, index) => {
            return (
              <div className="flex flex-col gap-4 items-center">
                <img
                  src={item.icon}
                  alt=""
                  className="w-[65px] h-[65px] xl:w-[160px] xl:h-[160px]"
                />
                <span className="text-[9px] xl:text-2xl text-[#1E1E1E] font-segoeui font-semibold">
                  {item.text}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="bg-white xl:pt-20 xl:pb-36 relative overflow-hidden">
        <div className="absolute w-full top-[80%]">
          <img src={cloud1} alt="" className="w-full" />
        </div>
        <div className="container flex">
          <div className="flex flex-col flex-[1.3]">
            <h1 className="text-primary xl:text-4xl font-lora-regular xl:mb-4">
              Các Chương Trình Chính
            </h1>
            <p className="font-segoeui xl:text-base text-[#3D3D3D] xl:mb-[51px]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos
              accusamus consectetur sunt, obcaecati distinctio culpa cum,
              nostrum facilis dolores atque commodi nesciunt quasi aspernatur
              cumque! Velit reprehenderit ut sunt inventore!
            </p>
            <div className="flex gap-6">
              {mainEvents.map((item, index) => {
                return (
                  <div className="flex flex-col gap-3">
                    <div className="w-[180px] h-[320px] rounded-[200px] bg-linear-2 relative">
                      <div className="w-[47px] h-[47px] bg-[#fde694] rounded-full opacity-70 top-[16%] right-[15%] absolute"></div>
                      <img
                        src={item.icon}
                        alt="thap"
                        className="absolute bottom-0 left-1/2 -translate-x-1/2"
                      />
                    </div>
                    <span className="font-segoeui font-semibold xl:text-xl text-center">
                      {item.text}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex-1 flex justify-center items-center">
            <img src={cacbannho} alt="" />
          </div>
        </div>
      </div>

      <div className="bg-primary-2 xl:pb-32 relative overflow-hidden">
        <div className="absolute w-full top-[80%]">
          <img src={cloud1} alt="" className="w-full" />
        </div>
        <div className="container">
          <h1 className="text-center text-primary text-4xl font-lora-regular xl:mb-10">
            Các Chương Trình Từ Thiện
          </h1>
          <div className="grid grid-cols-3 gap-6">
            <div className="border border-[#D9D9D9] rounded-[20px] bg-white p-6 flex flex-col gap-3 hover:shadow-gray-200 hover:shadow-inset-1 transition-all duration-200">
              <img src={image} alt="" />
              <div className="flex flex-col gap-3">
                <span className="font-segoeui-bold text-lg leading-6">
                  Gây quỹ hỗ trợ xấy dụng chừa Ba Vàng-Uông Bí, Quảng Ninh
                </span>
                <div className="flex flex-col gap-2">
                    <div className="flex gap-1">
                        <span className="font-segoeui-bold text-base">100.000.000đ</span>
                        <span>|</span>
                        <span className="font-segoeui text-base text-[#7D7D7D]">200.000.000đ</span>
                    </div>
                    <div className="w-full relative h-[8px] rounded-[20px] bg-[#D9D9D9]">
                        <div className="absolute bg-primary inset-y-0 w-1/2 rounded-[20px]"></div>
                    </div>
                </div>
                <div className="flex gap-5 justify-between">
                  <div className="flex gap-6">
                    <div className="flex flex-col">
                      <span className="font-segoeui text-[#7D7D7D]">Lượt quyên góp</span>
                      <span className="font-segoeui-bold">50</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-segoeui text-[#7D7D7D]">Đạt được</span>
                      <span className="font-segoeui-bold">50%</span>
                    </div>
                  </div>
                  <div className="bg-primary-3 py-1 px-3 flex flex-col text-[#DD8124] justify-center items-center rounded-lg">
                    <span className="font-segoeui">Còn lại</span>
                    <span className="font-segoeui-bold">20 ngày</span>
                  </div>
                </div>
                <div className="flex gap-5 mt-4">
                  <button className="flex-1 border border-[#FFE7BA] rounded-[32px] text-[#DD8124] py-2">
                    Chia sẻ
                  </button>
                  <button className="flex-1 rounded-[32px] bg-primary text-white py-2">
                    Quyên góp
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
