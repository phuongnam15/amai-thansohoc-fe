import { useEffect, useState } from "react";
import introduceWomen from "../../assets/images/backgrounds/introduce-women.webp";
import ancientCharacters from "../../assets/images/backgrounds/ancient-characters.webp";
import solarSystem from "../../assets/images/backgrounds/solar-system.webp";
import star from "../../assets/images/icons/star.svg";
import star2 from "../../assets/images/icons/star-2.svg";
import star3 from "../../assets/images/icons/star-3.svg";
import star4 from "../../assets/images/icons/star-4.svg";
import eyeStar from "../../assets/images/icons/eye-star.svg";
import book from "../../assets/images/icons/book.svg";
import hand from "../../assets/images/icons/hand.svg";
import gradientBlurRadiusBorder from "../../assets/images/backgrounds/gradient-blur-radius-border.svg";
import gradientBlurRadiusBorderMb from "../../assets/images/backgrounds/gradient-blur-radius-border-mb.svg";
import arrowDown2 from "../../assets/images/icons/arrow-down-2.svg";
import introduce from "../../assets/images/backgrounds/introduce.webp";
import useCheckMobileScreen from "../../utils/hooks/useCheckMobileScreen";

const slats = [
  {
    slat: "200+",
    content: "Lượt tra cứu mỗi ngày",
    icon: eyeStar,
  },
  {
    slat: "100%",
    content: "Khách hàng hài lòng với dịch vụ",
    icon: hand,
  },
  {
    slat: "1000+",
    content: "Người sử dụng bản đồ",
    icon: book,
  },
];

const HomePage = () => {
  const [isCheckLove, setIsCheckLove] = useState(false);
  const [isCheckAppropriatePhone, setIsCheckAppropriatePhone] = useState(false);
  const [selectedDrop, setSelectedDrop] = useState(null);
  const [gender, setGender] = useState(0);
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [monthOfBirth, setMonthOfBirth] = useState("");
  const [yearOfBirth, setYearOfBirth] = useState("");
  const isMobileScreen = useCheckMobileScreen();

  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const months = Array.from({ length: 12 }, (_, i) => `Tháng ${i + 1}`);

  return (
    <>
      <div className="relative w-full bg-primary">
        <div className="h-[406px] xl:h-auto xl:-mt-8">
          <img
            src={introduce}
            alt=""
            style={
              isMobileScreen
                ? {
                    objectPosition: "55% center",
                  }
                : undefined
            }
            className="mix-blend-color-dodge relative z-10 filter brightness-95 h-full xl:h-auto object-cover xl:object-fill"
          />
        </div>
        <div className="absolute inset-0 flex items-end">
          <div className="w-full px-5 xl:px-16">
            <div className="relative flex xl:px-10 rounded-[40px] overflow-hidden pt-20">
              <div className="bg-content-introduce absolute inset-0"></div>
              <div className="absolute inset-0 bg-stars bg-cover bg-center mix-blend-hard-light"></div>
              <div className="flex-1 relative justify-center flex">
                <img
                  src={introduceWomen}
                  alt=""
                  className="relative z-10 h-[300px] xl:h-auto"
                />
                <img
                  src={solarSystem}
                  alt=""
                  className="absolute -top-[10%] left-[52%] -translate-x-1/2 h-[60%] xl:h-2/3"
                />
              </div>
              <div className="flex-[1.5] hidden xl:flex flex-col items-center z-10 relative justify-center">
                <div className="wrapper xl:mb-8 relative">
                  <img
                    src={star}
                    alt=""
                    className="absolute xl:-top-[130%] xl:-left-6"
                  />
                  <h1 className="typing-demo font-prata-regular xl:text-[2rem] text-transparent bg-gradient-to-r from-white to-[#73CBD5] bg-clip-text">
                    Thấu hiểu bản thân, làm chủ cuộc đời với
                  </h1>
                </div>
                <div className="flex flex-col w-full xl:gap-6 items-center">
                  <div className="w-full flex justify-center relative">
                    <img src={star} alt="" className="absolute right-10" />
                    <h2 className="font-ibmplexsans-regular text-primary-3 font-bold xl:text-[2rem]">
                      MAP FOR SUCCESS
                    </h2>
                  </div>
                  <h2 className="text-[28px] font-prata-regular text-transparent bg-gradient-to-r from-white to-primary-5 bg-clip-text">
                    Cùng
                  </h2>
                  <h2 className="font-ibmplexsans-regular text-primary-3 font-bold xl:text-[2rem]">
                    Ms. Nguyễn Bảo Thoa
                  </h2>
                </div>
                <div className="w-full flex justify-center relative">
                  <img src={star3} alt="" className="absolute -left-10" />
                  <div className="h-10 w-[1.5px] bg-gradient-to-b from-white to-primary-4 xl:my-3"></div>
                </div>
                <div className="xl:mb-12 flex flex-col items-center xl:text-base text-white font-ibmplexsans-regular font-medium xl:gap-[10px]">
                  <span>Nhà đào tạo, chuyên gia Coaching</span>
                  <span>
                    GĐCC tại Gein Academy - Học viện Lifecoach Quốc tế
                  </span>
                </div>
                <div className="relative">
                  <img
                    src={star2}
                    alt=""
                    className="absolute right-0 z-10 -top-[35%]"
                  />
                  <button className="shadow-shadow-1 xl:w-72 text-white xl:text-xl font-ibmplexsans-regular font-medium bg-linear-1 xl:h-12 rounded-[100px] border-[0.5px] border-white backdrop-blur-lg">
                    Đăng kí ngay
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-[1.5] flex xl:hidden flex-col items-center z-10 relative justify-center py-5 gap-3">
        <div className="wrapper xl:mb-8 relative">
          <h1 className="typing-demo font-prata-regular text-base text-transparent bg-gradient-to-r from-white to-[#73CBD5] bg-clip-text">
            Thấu hiểu bản thân, làm chủ cuộc đời với
          </h1>
        </div>
        <div className="flex flex-col w-full gap-3 items-center">
          <div className="w-full flex justify-center relative">
            <h2 className="font-ibmplexsans-regular text-primary-3 font-semibold tracking-wide text-xl">
              MAP FOR SUCCESS
            </h2>
          </div>
          <h2 className="text-base font-prata-regular text-transparent bg-gradient-to-r from-white to-primary-5 bg-clip-text">
            Cùng
          </h2>
          <h2 className="font-ibmplexsans-regular text-primary-3 font-semibold tracking-wide text-xl">
            Ms. Nguyễn Bảo Thoa
          </h2>
        </div>
        <div className="w-full flex justify-center relative">
          <div className="h-[1px] w-20 bg-gradient-to-r from-white to-primary-4 xl:my-3"></div>
        </div>
        <div className="flex flex-col items-center text-sm text-white font-ibmplexsans-regular font-medium gap-1">
          <span>Nhà đào tạo, chuyên gia Coaching</span>
          <span>GĐCC tại Gein Academy - Học viện Lifecoach Quốc tế</span>
        </div>
        <div className="relative">
          <img
            src={star4}
            alt=""
            className="absolute -right-0 z-10 -top-[27.43%]"
          />
          <button className="py-2 px-9 text-white text-base font-medium font-ibmplexsans-regular bg-linear-1 rounded-[100px] border-[0.5px] border-white backdrop-blur-lg">
            Đăng kí ngay
          </button>
        </div>
      </div>

      <div className="flex xl:gap-x-48 justify-center items-center py-6 xl:py-14 relative z-10 container">
        {slats.map((item, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center gap-2 xl:gap-6"
            >
              <div className="flex flex-col xl:flex-row items-center text-transparent bg-gradient-to-r from-white to-primary-5 bg-clip-text">
                <img
                  src={item.icon}
                  alt=""
                  className="w-8 h-8 xl:w-[60px] xl:h-[60px]"
                />
                <p className="font-ibmplexsans-regular font-bold text-xl xl:text-4xl xl:ml-[9px]">
                  {item.slat}
                </p>
              </div>
              <p className="font-ibmplexsans-regular text-sm xl:text-base text-white text-center px-3 xl:px-0">
                {item.content}
              </p>
            </div>
          );
        })}
      </div>

      <div className="flex justify-center items-center overflow-hidden pt-8 xl:pt-0">
        <div className="relative">
          <div className="h-[500px] xl:h-auto">
            <img
              src={ancientCharacters}
              alt=""
              style={
                isMobileScreen ? { objectPosition: "53% center" } : undefined
              }
              className="mix-blend-soft-light relative z-10 filter brightness-95 h-full xl:h-auto object-cover xl:object-fill"
            />
          </div>
          <div className="absolute inset-0 xl:py-16">
            <div className="container flex flex-col items-center justify-center gap-3 xl:gap-11 h-full">
              <div className="flex flex-col items-center gap-1 xl:gap-2">
                <h1 className="text-xl xl:text-[2rem] font-prata-regular text-transparent bg-gradient-to-r from-white to-primary-6 bg-clip-text">
                  Tra cứu thần số học online
                </h1>
                <div className="w-[45%] bg-gradient-to-r from-white to-primary-6 h-[1px]"></div>
              </div>
              <div className="relative w-full max-h-[444px]">
                {isMobileScreen ? (
                  <div className="absolute -inset-y-5 -inset-x-2">
                    <img
                      src={gradientBlurRadiusBorderMb}
                      alt=""
                      className="w-full h-full absolute"
                    />
                  </div>
                ) : (
                  <img
                    src={gradientBlurRadiusBorder}
                    alt=""
                    className="w-full h-full absolute"
                  />
                )}
                <div className="relative z-10 w-full h-full p-5 xl:px-24 xl:pt-16 xl:pb-12">
                  <div className="flex flex-col gap-5 xl:gap-7 h-full">
                    <div className="flex flex-col xl:flex-row gap-5 xl:gap-6">
                      <div className="flex flex-col w-full gap-1 xl:gap-3">
                        <label
                          htmlFor=""
                          className="text-sm xl:text-xl font-ibmplexsans-regular font-medium text-white"
                        >
                          Họ và tên khai sinh
                        </label>
                        <input
                          type="text"
                          placeholder="Nhập họ và tên"
                          className="form-input"
                        />
                      </div>
                      <div className="flex flex-col w-full gap-1 xl:gap-3">
                        <label
                          htmlFor=""
                          className="text-sm xl:text-xl font-ibmplexsans-regular font-medium text-white"
                        >
                          Chọn giới tính
                        </label>
                        <div
                          onClick={() =>
                            setSelectedDrop(selectedDrop === 0 ? null : 0)
                          }
                          className="form-input flex justify-between items-center bg-white relative"
                        >
                          <span className="">
                            {gender === 0 ? "Nam" : "Nữ"}
                          </span>
                          <img
                            src={arrowDown2}
                            alt=""
                            className={`${
                              selectedDrop === 0 ? "rotate-180" : ""
                            } transition-transform duration-100 w-4 h-4 xl:w-auto xl:h-auto`}
                          />
                          {selectedDrop === 0 && (
                            <div className="form-option z-10">
                              {["Nam", "Nữ"].map((item, index) => {
                                return (
                                  <span
                                    onClick={() => setGender(index)}
                                    className="px-4 cursor-pointer w-full py-2 hover:bg-primary hover:text-white xl:text-base text-sm"
                                  >
                                    {item}
                                  </span>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-6">
                      <div className="flex flex-col w-full gap-1 xl:gap-3">
                        <label
                          htmlFor=""
                          className="xl:text-xl font-ibmplexsans-regular font-medium text-white"
                        >
                          Ngày, tháng, năm sinh dương lịch
                        </label>
                        <div className="flex w-full gap-3 xl:gap-16">
                          <div
                            onClick={() =>
                              setSelectedDrop(selectedDrop === 1 ? null : 1)
                            }
                            className="form-input flex flex-1 justify-between items-center bg-white relative"
                          >
                            <span className="">
                              {dateOfBirth === "" ? "Ngày" : dateOfBirth}
                            </span>
                            <img
                              src={arrowDown2}
                              alt=""
                              className={`${
                                selectedDrop === 1 ? "rotate-180" : ""
                              } transition-transform duration-100 w-4 h-4 xl:w-auto xl:h-auto`}
                            />
                            {selectedDrop === 1 && (
                              <div className="form-option overflow-hidden h-52 z-10">
                                <div className="overflow-y-scroll flex flex-col">
                                  {days.map((item, index) => {
                                    return (
                                      <span
                                        onClick={() => setDateOfBirth(item)}
                                        className="px-4 cursor-pointer w-full py-2 hover:bg-primary hover:text-white xl:text-base text-sm"
                                      >
                                        {item}
                                      </span>
                                    );
                                  })}
                                </div>
                              </div>
                            )}
                          </div>
                          <div
                            onClick={() =>
                              setSelectedDrop(selectedDrop === 2 ? null : 2)
                            }
                            className="form-input flex flex-1 justify-between bg-white relative items-center"
                          >
                            <span className="">
                              {monthOfBirth === "" ? "Tháng" : monthOfBirth}
                            </span>
                            <img
                              src={arrowDown2}
                              alt=""
                              className={`${
                                selectedDrop === 2 ? "rotate-180" : ""
                              } transition-transform duration-100 w-4 h-4 xl:w-auto xl:h-auto`}
                            />
                            {selectedDrop === 2 && (
                              <div className="form-option overflow-hidden h-52 z-10">
                                <div className="overflow-y-scroll flex flex-col">
                                  {months.map((item, index) => {
                                    return (
                                      <span
                                        onClick={() => setMonthOfBirth(item)}
                                        className="px-4 cursor-pointer w-full py-2 hover:bg-primary hover:text-white xl:text-base text-sm"
                                      >
                                        {item}
                                      </span>
                                    );
                                  })}
                                </div>
                              </div>
                            )}
                          </div>
                          <input
                            type="text"
                            placeholder="Năm"
                            className="form-input flex-1 min-w-0"
                            onChange={(e) => setYearOfBirth(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col xl:flex-row gap-3 xl:gap-16">
                      <div className="flex gap-3 items-center">
                        <div
                          onClick={() => setIsCheckLove(!isCheckLove)}
                          className={`${
                            isCheckLove && "bg-[#d9d9d9]"
                          } rounded-full`}
                        >
                          <div className="w-4 h-4 border-gradient-radius relative"></div>
                        </div>
                        <span className="font-ibmplexsans-regular text-sm xl:text-base text-white">
                          Xem cả đường tình duyên, hôn nhân
                        </span>
                      </div>
                      <div className="flex gap-3 items-center">
                        <div
                          onClick={() =>
                            setIsCheckAppropriatePhone(!isCheckAppropriatePhone)
                          }
                          className={`${
                            isCheckAppropriatePhone && "bg-[#d9d9d9]"
                          } rounded-full`}
                        >
                          <div className="w-4 h-4 border-gradient-radius relative"></div>
                        </div>
                        <span className="font-ibmplexsans-regular text-sm xl:text-base text-white">
                          Xem số điện thoại hợp
                        </span>
                      </div>
                    </div>
                    <div className="xl:flex hidden w-full justify-center">
                      <button className="xl:w-72 text-white xl:text-xl font-ibmplexsans-regular font-medium bg-linear-1 xl:h-12 rounded-[100px] border-[0.5px] border-white backdrop-blur-lg">
                        Tra cứu
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex xl:hidden w-full justify-center">
                <button className="text-white px-12 py-2 text-base font-ibmplexsans-regular font-medium bg-linear-1 rounded-[100px] border-[0.5px] border-white backdrop-blur-lg">
                  Tra cứu
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
