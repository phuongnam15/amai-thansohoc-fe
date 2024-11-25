import { useEffect, useRef, useState } from "react";
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
import bgPackage from "../../assets/images/backgrounds/bg-package.svg";
import arrowDown2 from "../../assets/images/icons/arrow-down-2.svg";
import introduce from "../../assets/images/backgrounds/introduce.webp";
import useCheckMobileScreen from "../../utils/hooks/useCheckMobileScreen";
import moon from "../../assets/images/backgrounds/moon.webp";
import tired1 from "../../assets/images/tired-1.webp";
import tired2 from "../../assets/images/tired-2.webp";
import tired3 from "../../assets/images/tired-3.webp";
import zodiacLeft from "../../assets/images/backgrounds/zodiac-left.svg";
import zodiacRight from "../../assets/images/backgrounds/zodiac-right.svg";
import oldMan from "../../assets/images/backgrounds/old-man.webp";
import oldMan2 from "../../assets/images/backgrounds/old-man-2.webp";
import stars1 from "../../assets/images/backgrounds/stars-1.svg";
import stars2 from "../../assets/images/backgrounds/stars-2.svg";
import stars3 from "../../assets/images/backgrounds/stars-3.svg";
import feedback from "../../assets/images/backgrounds/feedback.svg";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import customer from "../../assets/images/customer.webp";
import eye1 from "../../assets/images/backgrounds/eye-1.svg";
import eye2 from "../../assets/images/backgrounds/eye-2.svg";
import Footer from "../../components/Footer";

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

const packages = [
  {
    name: "Gói cơ bản",
    info: [
      "Dành cho học sinh, sinh viên",
      "45' Coaching và tư vấn",
      "Nắm bắt 3 chỉ số Tam giác vàng giúp định hướng và chọn ngành, chọn nghề",
    ],
    price: 499000,
    priceDisplay: 990000,
    expiredTime: "12:30:30",
  },
  {
    name: "Gói VIP",
    info: [
      "Dành cho người đi làm",
      "Bản đồ Vip 21 chỉ số giúp định hướng sự nghiệp, phát triển bản thân, cải thiện kỹ năng",
      "Dự báo thách thức, cơ hội trong tương lai",
      "Lên mục tiêu lộ trình, kế hoạch cụ thể",
      "Bộ tài liệu “4 bước phát triển bản thân”",
      "Khóa học phát triển bản thân và tư duy “Change For Success”",
      "2h Coaching",
    ],
    price: 2990000,
    priceDisplay: 6000000,
    expiredTime: "12:30:30",
  },
  {
    name: "Gói Super VIP",
    info: [
      "Dành cho người đi làm cấp quản lý, lãnh đạo, chủ doanh nghiệp",
      "Bản đồ Vip 21 chỉ số giúp định hướng sự nghiệp, phát triển bản thân, tổ chức",
      "Dự báo thách thức, cơ hội trong tương lai",
      "Lên mục tiêu lộ trình, kế hoạch cụ thể cho cá nhân và tổ chức",
      "Bộ tài liệu “4 bước phát triển bản thân”",
      "Khóa học phát triển bản thân và tư duy “Change For Success”",
      "3h Coaching + 90 ngày đồng hành",
    ],
    price: 4990000,
    priceDisplay: 10000000,
    expiredTime: "12:30:30",
  },
];

const feedbacks = [
  {
    image: customer,
    text: "Lorem ipsum dolor sit amet consectetur. Est condimentum felis enim ac. Sapien nunc vulputate dolor viverra. Eget habitasse egestas condimentum sagittis accumsan at. Sagittis at venenatis sagittis urna.",
    name: "Mr. Tony Dzung",
  },
  {
    image: customer,
    text: "Lorem ipsum dolor sit amet consectetur. Est condimentum felis enim ac. Sapien nunc vulputate dolor viverra. Eget habitasse egestas condimentum sagittis accumsan at. Sagittis at venenatis sagittis urna.",
    name: "Mr. Tony Dza",
  },
  {
    image: customer,
    text: "Lorem ipsum dolor sit amet consectetur. Est condimentum felis enim ac. Sapien nunc vulputate dolor viverra. Eget habitasse egestas condimentum sagittis accumsan at. Sagittis at venenatis sagittis urna.",
    name: "Mr. Tony Dza",
  },
  {
    image: customer,
    text: "Lorem ipsum dolor sit amet consectetur. Est condimentum felis enim ac. Sapien nunc vulputate dolor viverra. Eget habitasse egestas condimentum sagittis accumsan at. Sagittis at venenatis sagittis urna.",
    name: "Mr. Tony Dza",
  },
  {
    image: customer,
    text: "Lorem ipsum dolor sit amet consectetur. Est condimentum felis enim ac. Sapien nunc vulputate dolor viverra. Eget habitasse egestas condimentum sagittis accumsan at. Sagittis at venenatis sagittis urna.",
    name: "Mr. Tony Dza",
  },
];

const questions = [
  {
    title: "Bản đồ Map For Success là gì?",
    answer: `Công cụ Bản đồ thành công-Map For Success được dựa trên những nghiên cứu khoa học về năng lượng các con số của ông tổ Toán học, Triết học là Pytago (Người khai sinh ra Định lý Pytago). Ông có niềm tin sâu sắc rằng “Tất cả mọi thứ trong vũ trụ đều mang năng lượng và có mối liên hệ mật thiết với các con số"Vì vậy, ông đã nghiên cứu và phát triển một bộ môn khoa học có tên "Numerology" - Dựa vào ngày tháng năm sinh và họ tên của một người, để mã hoá thành 1 bản đồ nhân số học dành riêng cho người đó.`,
  },
  {
    title: "Tại sao thần số học lại quan trọng?",
    answer: `Công cụ Bản đồ thành công-Map For Success được dựa trên những nghiên cứu khoa học về năng lượng các con số của ông tổ Toán học, Triết học là Pytago (Người khai sinh ra Định lý Pytago). Ông có niềm tin sâu sắc rằng “Tất cả mọi thứ trong vũ trụ đều mang năng lượng và có mối liên hệ mật thiết với các con số"Vì vậy, ông đã nghiên cứu và phát triển một bộ môn khoa học có tên "Numerology" - Dựa vào ngày tháng năm sinh và họ tên của một người, để mã hoá thành 1 bản đồ nhân số học dành riêng cho người đó.`,
  },
  {
    title: "Chỉ số đường đời là gì?",
    answer: `Công cụ Bản đồ thành công-Map For Success được dựa trên những nghiên cứu khoa học về năng lượng các con số của ông tổ Toán học, Triết học là Pytago (Người khai sinh ra Định lý Pytago). Ông có niềm tin sâu sắc rằng “Tất cả mọi thứ trong vũ trụ đều mang năng lượng và có mối liên hệ mật thiết với các con số"Vì vậy, ông đã nghiên cứu và phát triển một bộ môn khoa học có tên "Numerology" - Dựa vào ngày tháng năm sinh và họ tên của một người, để mã hoá thành 1 bản đồ nhân số học dành riêng cho người đó.`,
  },
  {
    title: "Chỉ số sứ mệnh là gì?",
    answer: `Công cụ Bản đồ thành công-Map For Success được dựa trên những nghiên cứu khoa học về năng lượng các con số của ông tổ Toán học, Triết học là Pytago (Người khai sinh ra Định lý Pytago). Ông có niềm tin sâu sắc rằng “Tất cả mọi thứ trong vũ trụ đều mang năng lượng và có mối liên hệ mật thiết với các con số"Vì vậy, ông đã nghiên cứu và phát triển một bộ môn khoa học có tên "Numerology" - Dựa vào ngày tháng năm sinh và họ tên của một người, để mã hoá thành 1 bản đồ nhân số học dành riêng cho người đó.`,
  },
  {
    title: "Chỉ số linh hồn là gì?",
    answer: `Công cụ Bản đồ thành công-Map For Success được dựa trên những nghiên cứu khoa học về năng lượng các con số của ông tổ Toán học, Triết học là Pytago (Người khai sinh ra Định lý Pytago). Ông có niềm tin sâu sắc rằng “Tất cả mọi thứ trong vũ trụ đều mang năng lượng và có mối liên hệ mật thiết với các con số"Vì vậy, ông đã nghiên cứu và phát triển một bộ môn khoa học có tên "Numerology" - Dựa vào ngày tháng năm sinh và họ tên của một người, để mã hoá thành 1 bản đồ nhân số học dành riêng cho người đó.`,
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
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const isMobileScreen = useCheckMobileScreen();
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [startPosition, setStartPosition] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const months = Array.from({ length: 12 }, (_, i) => `Tháng ${i + 1}`);

  const moveSlide = (direction) => {
    setCurrentSlideIndex((prevIndex) => {
      const newIndex = prevIndex + direction;
      if (newIndex < 0) return 0;
      if (newIndex >= feedbacks.length) return feedbacks.length - 1;
      return newIndex;
    });
  };
  const handleMouseDown = (e) => {
    setStartPosition(e.clientX);
    setIsDragging(true);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const diff = startPosition - e.clientX;
    if (Math.abs(diff) > 50) {
      // Nếu kéo đủ xa
      moveSlide(diff > 0 ? 1 : -1);
      setIsDragging(false);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e) => {
    setStartPosition(e.touches[0].clientX);
    setIsDragging(true);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const diff = startPosition - e.touches[0].clientX;
    if (Math.abs(diff) > 50) {
      moveSlide(diff > 0 ? 1 : -1);
      setIsDragging(false);
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

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
                    <h2 className=" text-primary-3 font-bold xl:text-[2rem]">
                      MAP FOR SUCCESS
                    </h2>
                  </div>
                  <h2 className="text-[28px] font-prata-regular text-transparent bg-gradient-to-r from-white to-primary-5 bg-clip-text">
                    Cùng
                  </h2>
                  <h2 className=" text-primary-3 font-bold xl:text-[2rem]">
                    Ms. Nguyễn Bảo Thoa
                  </h2>
                </div>
                <div className="w-full flex justify-center relative">
                  <img src={star3} alt="" className="absolute -left-10" />
                  <div className="h-10 w-[1.5px] bg-gradient-to-b from-white to-primary-4 xl:my-3"></div>
                </div>
                <div className="xl:mb-12 flex flex-col items-center xl:text-base text-white  font-medium xl:gap-[10px]">
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
                  <button className="shadow-shadow-1 xl:w-72 text-white xl:text-xl  font-medium bg-linear-1 xl:h-12 rounded-[100px] border-[0.5px] border-white backdrop-blur-lg">
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
            <h2 className=" text-primary-3 font-semibold tracking-wide text-xl">
              MAP FOR SUCCESS
            </h2>
          </div>
          <h2 className="text-base font-prata-regular text-transparent bg-gradient-to-r from-white to-primary-5 bg-clip-text">
            Cùng
          </h2>
          <h2 className=" text-primary-3 font-semibold tracking-wide text-xl">
            Ms. Nguyễn Bảo Thoa
          </h2>
        </div>
        <div className="w-full flex justify-center relative">
          <div className="h-[1px] w-20 bg-gradient-to-r from-white to-primary-4 xl:my-3"></div>
        </div>
        <div className="flex flex-col items-center text-sm text-white  font-medium gap-1">
          <span>Nhà đào tạo, chuyên gia Coaching</span>
          <span>GĐCC tại Gein Academy - Học viện Lifecoach Quốc tế</span>
        </div>
        <div className="relative">
          <img
            src={star4}
            alt=""
            className="absolute -right-0 z-10 -top-[27.43%]"
          />
          <button className="py-2 px-9 text-white text-base font-medium  bg-linear-1 rounded-[100px] border-[0.5px] border-white backdrop-blur-lg">
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
                <p className=" font-bold text-xl xl:text-4xl xl:ml-[9px]">
                  {item.slat}
                </p>
              </div>
              <p className=" text-sm xl:text-base text-white text-center px-3 xl:px-0">
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
          <div className="absolute inset-0 xl:py-16 xl:mix-blend-plus-lighter">
            <div className="container flex flex-col items-center justify-center gap-3 xl:gap-11 h-full">
              <div className="flex flex-col items-center gap-1 xl:gap-2">
                <h1 className="text-xl leading-10 xl:text-[2rem] font-prata-regular text-transparent bg-gradient-to-r from-white to-primary-6 bg-clip-text">
                  Tra cứu thần số học online
                </h1>
                <div className="w-[45%] bg-gradient-to-r from-white to-primary-6 h-[1px]"></div>
              </div>
              <div className="relative w-full h-[360px] xl:h-[444px]">
                <div
                  className="relative w-full h-full"
                  style={{ filter: "blur(3px)" }}
                >
                  <div className="absolute z-10 inset-0 p-5 xl:px-24 xl:pt-16 xl:pb-12 border-gradient-radius-3"></div>
                  <div className="absolute inset-[2px] rounded-[32px] bg-gradient-to-b from-[rgba(217,217,217,0.20)] to-[rgba(115,115,115,0.20)]"></div>
                </div>
                <div className="absolute z-10 inset-0 p-5 xl:px-24 xl:pt-16 xl:pb-12">
                  <div className="flex flex-col gap-5 xl:gap-7 h-full">
                    <div className="flex flex-col xl:flex-row gap-5 xl:gap-6">
                      <div className="flex flex-col w-full gap-1 xl:gap-3">
                        <label
                          htmlFor=""
                          className="text-sm xl:text-xl  font-medium text-white"
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
                          className="text-sm xl:text-xl  font-medium text-white"
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
                          className="xl:text-xl  font-medium text-white"
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
                        <span className=" text-sm xl:text-base text-white">
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
                        <span className=" text-sm xl:text-base text-white">
                          Xem số điện thoại hợp
                        </span>
                      </div>
                    </div>
                    <div className="xl:flex hidden w-full justify-center">
                      <button className="xl:w-72 text-white xl:text-xl  font-medium bg-linear-1 xl:h-12 rounded-[100px] border-[0.5px] border-white backdrop-blur-lg">
                        Tra cứu
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex xl:hidden w-full justify-center relative z-10">
                <button className="text-white px-12 py-2 text-base  font-medium bg-linear-1 rounded-[100px] border-[0.5px] border-white backdrop-blur-lg">
                  Tra cứu
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative bg-primary">
        <div className="absolute inset-0 bg-[#233269] mix-blend-overlay z-10 hidden xl:block"></div>
        <div className="absolute inset-0 bg-[#3C6E74] mix-blend-overlay z-10 xl:hidden"></div>
        <div
          className={`absolute inset-0 z-20 xl:z-0 mix-blend-hard-light xl:mix-blend-normal filter xl:brightness-75 ${
            isMobileScreen ? "bg-galaxy-2 bg-no-repeat bg-cover" : "bg-galaxy"
          }`}
        ></div>
        <div className="w-full relative z-20 xl:z-10">
          <div className="container flex flex-col gap-5 xl:gap-16 py-10 xl:py-16">
            <div className="hidden w-full xl:flex justify-center absolute top-1/2 -translate-y-1/2 -translate-x-[10%]">
              <div className="xl:w-[736px] xl:h-[736px]">
                <img src={moon} alt="" />
              </div>
            </div>

            <div className="flex flex-col-reverse xl:flex-row relative gap-5 xl:gap-0">
              <div className="flex flex-col flex-1 justify-end xl:pr-[100px] gap-2 xl:gap-10">
                <div className="flex flex-col items-center gap-1 xl:gap-2">
                  <h1 className="xl:leading-10 text-base xl:text-[28px] font-prata-regular text-transparent bg-gradient-to-r from-white to-primary-6 bg-clip-text">
                    Bạn có từng cảm thấy
                  </h1>
                  <div className="w-[20%] xl:w-[45%] bg-gradient-to-r from-white to-primary-6 h-[1px]"></div>
                </div>
                <div className="pl-6 pr-5 xl:px-0">
                  <ul className="text-sm xl:text-base text-white list-disc">
                    <li>
                      Mông lung, mất định hướng trong công việc, sự nghiệp không
                      phát triển.
                    </li>
                    <li>
                      Công việc hiện tại nhàm chán, muốn chuyển sang 1 công việc
                      mới, nhưng không biết bắt đầu từ đâu.
                    </li>
                    <li>
                      Khao khát bứt phá bản thân, vượt ra khỏi vùng an toàn,
                      nhưng sợ đi nhầm hướng, sợ không làm được.
                    </li>
                    <li>
                      Chưa thực sự biết mình là ai, muốn thấu hiểu chính mình,
                      khám phá tiềm năng bản thân, phát huy điểm mạnh, hạn chế
                      điểm yếu.
                    </li>
                    <li>
                      Làm việc không có kế hoạch, không có mục tiêu, làm 1 thời
                      gian lại bỏ, công việc trì trệ, bản thân trì hoãn, thiếu
                      kỷ luật.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="relative xl:flex-[1.3] h-[233px] xl:h-[400px] rounded-[20px] overflow-hidden">
                <img
                  src={tired1}
                  alt=""
                  className="absolute w-full h-full object-cover"
                />
                <div className="border-gradient-radius-2 absolute inset-0 hidden xl:block"></div>
              </div>
            </div>
            <div className="flex flex-col xl:flex-row relative gap-5 xl:gap-0">
              <div className="relative xl:flex-[1.3] h-[233px] xl:h-[400px] rounded-[20px] overflow-hidden">
                <img
                  src={tired2}
                  alt=""
                  className="absolute w-full h-full object-cover"
                />
                <div className="border-gradient-radius-2 absolute inset-0 hidden xl:block"></div>
              </div>
              <div className="flex flex-col flex-1 justify-center xl:pl-[100px] gap-2 xl:gap-10">
                <div className="flex flex-col items-center gap-1 xl:gap-2">
                  <h1 className="text-base text-center xl:px-16 xl:leading-10 xl:text-[28px] font-prata-regular text-transparent bg-gradient-to-r from-white to-primary-6 bg-clip-text">
                    Hoặc đang làm quản lý, lãnh đạo nhưng
                  </h1>
                  <div className="w-[20%] xl:w-[45%] bg-gradient-to-r from-white to-primary-6 h-[1px]"></div>
                </div>
                <div className="pl-6 pr-5 xl:px-0">
                  <ul className="text-sm xl:text-base text-white list-disc">
                    <li>
                      Gặp vấn đề về nhân sự, không thấu hiểu nhân viên, không
                      biết sắp xếp nhân sự đúng sở trường, đúng năng lực, đúng
                      vị trí.
                    </li>
                    <li>
                      Bạn muốn kinh doanh nhưng không biết liệu mình có phù hợp,
                      không có định hướng, không lựa chọn được sản phẩm, ngành
                      nghề, lĩnh vực, thiếu kiến thức, thiếu kỹ năng.
                    </li>
                    <li>
                      Luẩn quẩn trong vấn đề về tài chính, kinh tế bấp bênh, thu
                      nhập chỉ đủ duy trì cuộc sống.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex flex-col-reverse xl:flex-row relative gap-5 xl:gap-0">
              <div className="flex flex-col flex-1 justify-end xl:pr-[100px] gap-2 xl:gap-10">
                <div className="flex flex-col items-center gap-1 xl:gap-2">
                  <h1 className="text-base text-center xl:px-6 xl:leading-10 xl:text-[28px] font-prata-regular text-transparent bg-gradient-to-r from-white to-primary-6 bg-clip-text">
                    Gặp trục trặc trong cuộc sống hôn nhân
                  </h1>
                  <div className="w-[20%] xl:w-[45%] bg-gradient-to-r from-white to-primary-6 h-[1px]"></div>
                </div>
                <div className="pl-6 pr-5 xl:px-0">
                  <ul className="text-sm xl:text-base text-white list-disc">
                    <li>
                      Không hiểu nhau, lắng nghe không đúng cách hoặc né tránh
                      các cuộc trò chuyện quan trọng.
                    </li>
                    <li>
                      Bất đồng về cách chi tiêu, tiết kiệm, hoặc áp lực kinh tế.
                    </li>
                    <li>
                      Một hoặc cả hai cảm thấy không còn được yêu thương, ít
                      quan tâm hoặc ít thời gian cho nhau.
                    </li>
                    <li>
                      Không rõ ràng trong việc phân chia công việc nhà và trách
                      nhiệm nuôi dạy con cái.
                    </li>
                    <li>
                      Công việc căng thẳng khiến một trong hai hoặc cả hai trở
                      nên mệt mỏi, ít quan tâm đến hôn nhân.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="relative xl:flex-[1.3] h-[233px] xl:h-[400px] rounded-[20px] overflow-hidden">
                <img
                  src={tired3}
                  alt=""
                  className="absolute w-full h-full object-cover"
                />
                <div className="border-gradient-radius-2 absolute inset-0 hidden xl:block"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative xl:flex flex-col gap-6 z-20 xl:z-10 hidden">
          <div className="w-full flex justify-between items-center">
            <img src={zodiacLeft} alt="" />
            <img src={oldMan} alt="" />
            <img src={zodiacRight} alt="" />
          </div>
          <div className="flex flex-col gap-3 justify-center text-center mt-6">
            <h1 className="text-xl xl:text-[28px] font-prata-regular text-transparent bg-gradient-to-r from-white to-primary-6 bg-clip-text">
              Nếu bạn đang gặp các vấn đề trên mà chưa tìm được cách giải quyết
            </h1>
            <h1 className="text-xl xl:text-[24px] font-prata-regular text-transparent bg-gradient-to-r from-white to-primary-6 bg-clip-text">
              Tấm bản đồ thành công MAP FOR SUCCESS là dành cho bạn
            </h1>
          </div>
        </div>
        <div className="flex flex-col gap-5 relative z-20 xl:z-10 xl:hidden container">
          <div className="flex items-center">
            <div className="flex-1 pr-7 pb-14">
              <h1 className="flex-1 text-base font-prata-regular text-transparent bg-gradient-to-r from-white to-primary-6 bg-clip-text">
                Nếu bạn đang gặp các vấn đề trên mà chưa tìm được cách giải
                quyết
              </h1>
            </div>
            <div className="flex-1">
              <img src={oldMan2} alt="" className="object-cover w-full" />
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="px-14">
              <h1 className="text-base w-full text-center font-prata-regular text-transparent bg-gradient-to-r from-white to-primary-6 bg-clip-text">
                Thì giải pháp cho bạn chính là tấm bản đồ thành công
              </h1>
            </div>
            <div className="flex gap-1.5 items-center">
              <div className="h-[1px] bg-gradient-to-r from-white to-primary-6 flex-1"></div>
              <h1 className="font-semibold text-base text-transparent bg-gradient-to-r from-white to-primary-6 bg-clip-text">
                MAP FOR SUCCESS
              </h1>
              <div className="h-[1px] bg-gradient-to-r from-white to-primary-6 flex-1"></div>
            </div>
          </div>
        </div>

        <div className="relative z-20 xl:z-10 py-10 xl:py-16">
          <div className="container flex flex-col gap-10 xl:gap-12">
            <div className="flex flex-col items-center xl:gap-2">
              <h1 className="text-xl xl:text-[2rem] leading-10 font-prata-regular text-transparent bg-gradient-to-r from-white to-primary-6 bg-clip-text">
                Thông tin các gói Coaching
              </h1>
              <div className="w-[25%] xl:w-[15%] bg-gradient-to-r from-white to-primary-6 h-[1px]"></div>
            </div>
            <div className="flex flex-col xl:flex-row gap-5 xl:gap-6">
              {packages.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="relative w-[350px] xl:w-[376px] h-auto xl:h-[518px]"
                  >
                    <div
                      className="absolute xl:relative w-full h-full"
                      style={{ filter: "blur(3px)" }}
                    >
                      <div className="absolute z-10 inset-0 p-5 xl:px-24 xl:pt-16 xl:pb-12 border-gradient-radius-3"></div>
                    </div>
                    <div className="w-full absolute bottom-0 xl:flex justify-center z-10 hidden">
                      <button className="py-2 px-12 text-white text-base font-medium translate-y-1/2 bg-linear-1 rounded-[100px] backdrop-blur-lg">
                        Đăng kí ngay
                      </button>
                    </div>
                    <div className="absolute inset-0 rounded-[32px] bg-gradient-to-b from-[rgba(255,255,255,0.3)] to-[rgba(115,203,213,0.3)]"></div>
                    <div className="absolute inset-x-0 top-0 h-[48px] xl:h-[68px] rounded-t-[32px] bg-gradient-to-r from-[rgba(255,255,255,0.11)] to-[rgba(115,203,213,0.11)]"></div>
                    <div className="flex flex-col inset-[2px] relative xl:absolute">
                      <div className="flex items-center justify-center h-[48px] xl:h-[68px] w-full relative overflow-hidden flex-shrink-0">
                        <h1 className="font-prata-regular text-base xl:text-2xl text-white">
                          {item.name}
                        </h1>
                      </div>
                      <div className="flex flex-col gap-7 py-5 xl:gap-0 xl:py-0 xl:h-full">
                        <div className="xl:pt-8 pl-12 pr-6 w-full xl:flex-1">
                          <ul className="list-disc text-white  font-medium text-sm xl:text-base">
                            {item.info.map((childItem, childIndex) => {
                              return <li key={childIndex}>{childItem}</li>;
                            })}
                          </ul>
                        </div>
                        <div className="flex-col flex w-full items-center gap-1 xl:gap-2 xl:pb-16">
                          <div className="space-x-1">
                            <span className="text-[#D9D9D9] text-sm xl:text-base font-prata-regular line-through">
                              {item.priceDisplay.toLocaleString("vi-VN") + "đ"}
                            </span>
                            <span className="text-base xl:text-2xl font-prata-regular text-transparent bg-gradient-to-r from-white to-primary-6 bg-clip-text">
                              {item.price.toLocaleString("vi-VN") + "đ"}
                            </span>
                          </div>
                          <span className="text-sm xl:text-base text-white font-medium">
                            Ưu đãi sẽ hết sau 12:30:30{" "}
                          </span>
                        </div>
                        <div className="w-full flex justify-center z-10 xl:hidden">
                          <button className="py-2 px-12 text-white xl:-translate-y-1 2xl:translate-y-2 text-base font-medium  bg-linear-1 rounded-[100px] backdrop-blur-lg">
                            Đăng kí ngay
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="absolute inset-0 bg-linear-3 hidden xl:block z-10"></div>
        <img src={stars1} alt="" className="absolute top-0 left-0 z-10" />
        <div className="flex relative z-10 container">
          <div className="flex flex-col xl:flex-row gap-5 xl:gap-24 w-full">
            <div className="flex flex-col xl:gap-10 pt-10 xl:pt-16 xl:flex-1">
              <div className="flex flex-col gap-1 xl:gap-2">
                <h1 className="text-xl xl:leading-10 xl:text-[2rem] font-prata-regular text-transparent bg-gradient-to-r from-white to-primary-6 bg-clip-text">
                  Khách hàng nói gì về
                </h1>
                <h1 className="text-xl xl:leading-10 xl:text-[2rem] font-prata-regular text-transparent bg-gradient-to-r from-white to-primary-6 bg-clip-text">
                  Map For Success
                </h1>
                <div className="w-[42%] bg-gradient-to-r from-white to-primary-6 h-[1px]"></div>
              </div>
              <div className="w-full flex justify-end xl:justify-normal">
                <img src={feedback} alt="" className="w-64 xl:w-auto" />
              </div>
            </div>
            <div
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              className="xl:flex-[1.5] xl:h-full relative h-[300px] cursor-pointer select-none"
            >
              <div className="absolute top-1/2 hidden -translate-y-1/2 w-[120%] left-1/2 -translate-x-1/2 xl:flex justify-between">
                <div
                  onClick={() => moveSlide(-1)}
                  className="w-6 h-6 bg-gray-400 rounded-full flex justify-center items-center"
                >
                  <MdKeyboardArrowLeft className="text-white text-xl" />
                </div>
                <div
                  onClick={() => moveSlide(1)}
                  className="w-6 h-6 bg-gray-400 rounded-full flex justify-center items-center"
                >
                  <MdKeyboardArrowRight className="text-white text-xl" />
                </div>
              </div>
              <div className="relative flex w-full h-full overflow-hidden">
                <div
                  className="flex absolute left-0 h-full transition-transform duration-300"
                  style={{
                    transform: `translateX(-${
                      currentSlideIndex * (isMobileScreen ? 259 : 376)
                    }px)`,
                  }}
                >
                  {feedbacks.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="w-[259px] xl:w-[376px] flex-shrink-0 flex items-center"
                      >
                        <div className="flex flex-col gap-3 xl:gap-8 pr-6">
                          <div className="flex gap-3 xl:gap-8 items-center">
                            <div className="relative w-[60px] h-[60px] xl:w-[120px] xl:h-[120px] rounded-full overflow-hidden">
                              <img
                                src={item.image}
                                alt="customer"
                                className="absolute inset-0"
                              />
                            </div>
                            <span className="font-prata-regular text-base xl:text-xl text-transparent bg-gradient-to-r from-white to-[#73CBD5] bg-clip-text">
                              {item.name}
                            </span>
                          </div>
                          <p className="text-sm xl:text-base leading-6 text-white">
                            {item.text}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative pb-16 xl:pb-32">
          <img src={stars2} alt="" className="absolute top-0 left-0 z-10" />
          <img src={stars3} alt="" className="absolute top-0 right-0 z-10" />
          <img
            src={eye1}
            alt=""
            className="absolute top-[80%] xl:top-1/2 xl:-translate-y-1/3 left-0 z-10 mix-blend-color-dodge w-[80px] xl:w-auto"
          />
          <img
            src={eye2}
            alt=""
            className="absolute -top-5 -right-5 xl:top-[15%] xl:right-0 z-10 mix-blend-color-dodge w-[80px] xl:w-auto"
          />
          <div className="container relative z-10 py-5 xl:py-12">
            <div className="xl:px-[76px] flex flex-col gap-5 xl:gap-16">
              <div className="flex flex-col items-center gap-1 xl:gap-2">
                <h1 className="text-xl xl:leading-10 xl:text-[2rem] font-prata-regular text-transparent bg-gradient-to-r from-white to-primary-6 bg-clip-text">
                  Giải đáp thắc mắc
                </h1>
                <div className="w-[18%] bg-gradient-to-r from-white to-primary-6 h-[1px]"></div>
              </div>
              <div className="relative">
                <div className="w-full flex flex-col gap-4">
                  {questions.map((item, index) => {
                    return (
                      <div className="flex flex-col">
                        <div className="px-6 flex flex-col gap-3 xl:gap-5">
                          <div
                            onClick={() =>
                              setSelectedQuestion(
                                selectedQuestion === index ? null : index
                              )
                            }
                            className="cursor-pointer transition-all duration-500 flex gap-3 xl:gap-5 items-center relative"
                          >
                            <span className="text-base xl:text-xl text-white font-medium">
                              {item.title}
                            </span>
                            <img
                              src={arrowDown2}
                              alt=""
                              className={`text-2xl flex-shrink-0 ${
                                selectedQuestion === index ? "rotate-180" : ""
                              }`}
                            />
                          </div>
                          <div
                            className={`overflow-hidden transition-all duration-500 ${
                              selectedQuestion === index
                                ? "max-h-[200px] mb-2"
                                : "max-h-0"
                            }`}
                          >
                            <p className=" text-sm xl:text-base text-white">
                              {item.answer}
                            </p>
                          </div>
                        </div>
                        {index !== questions.length - 1 && (
                          <div className="w-full bg-gradient-to-r from-white to-primary-6 h-[1px]"></div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
