import gate from "../../assets/images/backgrounds/gate.svg";
import nguyenbaothoa from "../../assets/images/backgrounds/nguyenbaothoa.webp";
import nguyenbaothoa2 from "../../assets/images/backgrounds/nguyenbaothoa-2.webp";
import star from "../../assets/images/icons/star-3.svg";
import solarSystem from "../../assets/images/backgrounds/solar-system.webp";
import moonSign from "../../assets/images/backgrounds/moon-sign.webp";
import service1 from "../../assets/images/icons/service-1.svg";
import service2 from "../../assets/images/icons/service-2.svg";
import service3 from "../../assets/images/icons/service-3.svg";
import { useState } from "react";
import arrowDown2 from "../../assets/images/icons/arrow-down-2.svg";
import sun from "../../assets/images/backgrounds/sun.webp";
import symbol1 from "../../assets/images/backgrounds/symbol-1.webp";
import symbol2 from "../../assets/images/backgrounds/symbol-2.webp";
import symbol3 from "../../assets/images/backgrounds/symbol-3.webp";
import moonSocial from "../../assets/images/backgrounds/moon-social.webp";
import BookingForm from "../../components/BookingForm";
import AutoSlideWidthFull from "../../components/auto-slide/WidthFull";
import useCheckMobileScreen from "../../utils/hooks/useCheckMobileScreen";
import Service from "../../components/Service";
import Social from "../../components/Social";

const services = [
  {
    image: service1,
    title: "Tra cứu thần số học",
    description:
      "Lorem ipsum dolor sit amet consectetur. Massa vel eu pulvinar non auctor. Donec.",
  },
  {
    image: service2,
    title: "Đặt tên khai sinh",
    description:
      "Lorem ipsum dolor sit amet consectetur. Massa vel eu pulvinar non auctor. Donec.",
  },
  {
    image: service3,
    title: "Đặt tên nghệ danh",
    description:
      "Lorem ipsum dolor sit amet consectetur. Massa vel eu pulvinar non auctor. Donec.",
  },
];

const aboutMs = [
  {
    title: "Câu chuyện khởi duyên với thần số học",
    description:
      "Lorem ipsum dolor sit amet consectetur. Neque felis proin eget lacus nulla dictumst tempor. Est tortor laoreet nisi tincidunt. Nisl placerat lectus et netus pretium. Adipiscing enim vel neque ac quisque nisi.",
  },
  {
    title: "Lý do sáng lập website tra cứu về thần số học",
    description:
      "Lorem ipsum dolor sit amet consectetur. Neque felis proin eget lacus nulla dictumst tempor. Est tortor laoreet nisi tincidunt. Nisl placerat lectus et netus pretium. Adipiscing enim vel neque ac quisque nisi.",
  },
  {
    title: "Sứ mệnh của website tra cứu về thần số học",
    description:
      "Lorem ipsum dolor sit amet consectetur. Neque felis proin eget lacus nulla dictumst tempor. Est tortor laoreet nisi tincidunt. Nisl placerat lectus et netus pretium. Adipiscing enim vel neque ac quisque nisi.",
  },
];

const socials = [
  { name: "Facebook", amount: "200k+" },
  { name: "Youtube", amount: "200k+" },
  { name: "Tiktok", amount: "200k+" },
  { name: "Instagram", amount: "200k+" },
];

const IntroducePage = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const isMobileScreen = useCheckMobileScreen();

  return (
    <>
      <div className="relative w-full">
        <div className="absolute inset-0 bg-[#233269] opacity-70 filter brightness-75 block mix-blend-overlay z-10"></div>
        <img
          src={solarSystem}
          alt=""
          className="absolute h-[261px] xl:hidden bottom-12 w-auto left-1/2 -translate-x-1/2 opacity-50"
        />
        <div className="w-full py-6 xl:pb-14 xl:pt-40 container relative z-10">
          <div className="relative w-full">
            <div className="w-full text-white font-prata-regular -mb-[22px] z-10 relative flex flex-col items-center text-[32px] xl:hidden">
              <h1>Giới thiệu về</h1>
              <h1>Map for success</h1>
            </div>
            <div className="relative w-full flex justify-center">
              <img src={gate} alt="" className="w-[234px] xl:w-auto" />
              <img
                src={nguyenbaothoa}
                alt=""
                className="w-[203px] xl:hidden absolute left-1/2 -translate-x-1/2 bottom-0"
              />
            </div>
            <div className="absolute bottom-0 z-10 w-full hidden xl:flex justify-center">
              <img src={nguyenbaothoa} alt="" />
            </div>
            <div className="flex flex-col xl:hidden w-full gap-[30px] px-5 my-4 relative z-10">
              <div className="w-full text-white font-prata-regular flex flex-col items-center text-[32px]">
                <h1>Ms. Nguyễn</h1>
                <h1>Bảo Thoa là ai?</h1>
              </div>
              <div className="flex-col flex gap-10 items-center">
                <div className="flex flex-col gap-2">
                  <h1 className="text-xl font-prata-regular text-white space-y-2">
                    Lorem ipsum dolor sit
                  </h1>
                  <p className="text-white text-sm">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea
                    mollitia ut sint error ex quibusdam recusandae quis,
                    voluptatem
                  </p>
                </div>
                <button className="relative self-start mx-auto z-10 w-[167px] text-white text-base font-medium bg-linear-1 h-10 rounded-[100px] border-[0.5px] border-white backdrop-blur-lg">
                  Xem ngay
                </button>
              </div>
            </div>
            <div className="absolute inset-0 hidden xl:block -translate-y-11">
              <div className="flex flex-col font-prata-regular xl:text-[80px] text-white leading-[7rem]">
                <h1>Giới thiệu về</h1>
                <h1>Map for success</h1>
              </div>
              <div className="w-full flex justify-between">
                <div className="flex flex-col w-[270px] xl:gap-8 xl:pt-[60px] relative">
                  <img
                    src={star}
                    alt=""
                    className="absolute bottom-0 xl:w-[54px] -translate-x-1/2"
                  />
                  <img
                    src={star}
                    alt=""
                    className="absolute right-0 bottom-[15%] translate-x-1/2"
                  />
                  <img
                    src={star}
                    alt=""
                    className="absolute right-0 xl:w-[54px] translate-x-full -translate-y-full"
                  />
                  <div className="flex-col flex xl:gap-2">
                    <div className="text-4xl font-prata-regular text-white space-y-2">
                      <h1>Lorem ipsum</h1>
                      <h1>dolor sit</h1>
                    </div>
                    <p className="text-white text-base">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Ea mollitia ut sint error ex quibusdam recusandae quis,
                      voluptatem
                    </p>
                  </div>
                  <button className="relative z-10 shadow-shadow-1 xl:w-[178px] text-white xl:text-xl  font-medium bg-linear-1 xl:h-12 rounded-[100px] border-[0.5px] border-white backdrop-blur-lg">
                    Xem ngay
                  </button>
                </div>
                <div className="flex flex-col xl:gap-3">
                  <div className="flex flex-col font-prata-regular xl:text-[80px] text-white xl:translate-x-20 leading-[7rem]">
                    <h1>Ms. Nguyễn</h1>
                    <h1>Bảo Thoa là ai?</h1>
                  </div>
                  <div className="w-full flex justify-end relative">
                    <img
                      src={star}
                      alt=""
                      className="absolute right-0 xl:w-[104px] translate-x-full -translate-y-[20%]"
                    />
                    <div className="flex flex-col w-[315px] xl:gap-4">
                      <div className="flex-col flex xl:gap-2">
                        <div className="text-4xl font-prata-regular text-white space-y-2">
                          <h1>Lorem ipsum</h1>
                          <h1>dolor sit</h1>
                        </div>
                        <p className="text-white text-base">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Beatae unde nihil magnam doloribus nisi pariatur
                          iure! Explicabo distinctio deserunt voluptas ipsa
                          molestiae laborum nisi!
                        </p>
                      </div>
                      <div className="w-full flex justify-end">
                        <button className="relative z-10 shadow-shadow-1 xl:w-[178px] text-white xl:text-xl  font-medium bg-linear-1 xl:h-12 rounded-[100px] border-[0.5px] border-white backdrop-blur-lg">
                          Xem ngay
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[450px] xl:h-[726px] relative z-10 flex items-center">
        <div className="container flex items-center">
          <div className="flex-[1.5] relative hidden xl:block">
            <img src={moonSign} alt="" className="" />
            <img src={solarSystem} alt="" className="absolute w-[75%] top-0" />
          </div>
          <div className="flex-1 flex flex-col gap-2">
            <h1 className="font-prata-regular text-white text-center xl:text-left text-xl xl:text-4xl">
              Giới thiệu về thần số học
            </h1>
            <div className="text-white text-sm xl:text-base leading-5 xl:leading-6 opacity-90 tracking-wide">
              <p>
                Thần số học Không Phải Là Bói Toán! Đây là một môn huyền học với
                cách tính khoa học. Các nhà thần học theo trường phái Py-ta-go
                đã nói rằng: “Mỗi một con số là 1 tần sóng rung tương ứng với số
                vòng quay trong 1 giây”.
              </p>
              <p>
                Như vậy, mỗi một con số sẽ có vòng rung riêng, trong đó một cành
                cây, ngọn cỏ, một cơ thể con người, một cảm xúc, một ý nghĩ,…
                đều có những tần số rung nhất định tương ứng với những con số
                nhất định. Tracuuthansohoc.com tự tin nói rằng cuộc sống của
                chúng ta luôn luôn liên quan mật thiết đến với các con số. Chúng
                tôi tạo ra công cụ tính toán để giúp bạn hiểu và làm chủ các con
                số của cuộc đời bạn!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full relative pt-7 xl:py-0 xl:h-[730px] flex items-center">
        <div className="absolute z-10 inset-0 bg-[#D9D9D9] opacity-20 xl:opacity-100 mix-blend-soft-light"></div>
        <div className="container flex flex-col gap-7 xl:gap-[74px] relative z-10">
          <div className="text-center flex flex-col gap-2 items-center relative z-10">
            <h1 className="text-white text-xl xl:text-4xl font-prata-regular">
              Dịch vụ
            </h1>
            <p className="text-white text-sm xl:text-base xl:leading-6 xl:w-[500px]">
              Lorem ipsum dolor sit amet consectetur. Neque felis proin eget
              lacus nulla dictumst tempor. Est tortor laoreet nisi tincidunt.
              Nisl placerat lectus et netus pretium. Adipiscing enim vel neque
              ac quisque nisi.
            </p>
          </div>
          <div className="xl:flex gap-6 relative z-10 hidden">
            {services.map((item, index) => {
              return <Service item={item} index={index} />;
            })}
          </div>
          {isMobileScreen && (
            <AutoSlideWidthFull type={"service"}>
              {services.map((item, index) => {
                return <Service item={item} index={index} />;
              })}
            </AutoSlideWidthFull>
          )}
        </div>
      </div>
      <div className="w-full relative py-10 xl:py-0 xl:h-[745px] flex items-center">
        <div className="relative container">
          <div className="w-full relative">
            <div className="absolute w-full h-full z-10 mix-blend-overlay">
              <img
                src={sun}
                alt=""
                className="absolute right-0 hidden xl:block"
              />
              <img
                src={symbol1}
                alt=""
                className="absolute left-0 w-full xl:w-[42%] bottom-0"
              />
              <div className="absolute top-0 flex">
                <img src={symbol3} alt="" className="-translate-y-1/2" />
                <img src={symbol2} alt="" className="self-start" />
              </div>
            </div>
            <div className="w-full flex relative z-10">
              <div className="xl:flex-1 inset-0 absolute xl:relative z-10">
                <img
                  src={nguyenbaothoa2}
                  alt=""
                  className="absolute bottom-5 opacity-70 xl:opacity-100 xl:bottom-0 w-[250px] xl:w-auto left-4 xl:left-auto"
                />
              </div>
              <div className="xl:flex-[1.2] flex flex-col relative z-10 text-white gap-2 xl:gap-6">
                <h1 className="text-xl xl:text-4xl font-prata-regular">
                  Về Ms. Nguyễn Bảo Thoa
                </h1>
                <div className="flex flex-col gap-4">
                  <h1 className="text-sm xl:text-2xl font-semibold">
                    Thông tin cá nhân
                  </h1>
                  <div className="flex flex-col text-sm xl:text-base gap-4">
                    <div>
                      <span className="font-semibold">Danh xưng:</span>
                    </div>
                    <div>
                      <span className="font-semibold">Quê quán:</span>
                    </div>
                    <div>
                      <span className="font-semibold">Công việc hiện tại:</span>
                    </div>
                    <div>
                      <span className="font-semibold">Quá trình làm việc:</span>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="w-full flex flex-col gap-2 xl:gap-4">
                      {aboutMs.map((item, index) => {
                        return (
                          <div className="flex flex-col">
                            <div className="flex flex-col gap-2 xl:gap-5">
                              <div
                                onClick={() =>
                                  setSelectedQuestion(
                                    selectedQuestion === index ? null : index
                                  )
                                }
                                className="cursor-pointer transition-all duration-500 flex gap-3 xl:gap-5 items-center relative"
                              >
                                <span className="text-sm xl:text-base text-white font-medium">
                                  {item.title}
                                </span>
                                <img
                                  src={arrowDown2}
                                  alt=""
                                  className={`text-2xl flex-shrink-0 ${
                                    selectedQuestion === index
                                      ? "rotate-180"
                                      : ""
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
                                <p className=" text-xs xl:text-sm text-white">
                                  {item.description}
                                </p>
                              </div>
                            </div>
                            <div className="w-full bg-gradient-to-r from-white to-primary-6 h-[1px] opacity-60"></div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <button className="relative z-10 w-[167px] xl:w-[178px] text-white text-base xl:text-xl font-medium bg-linear-1 h-10 xl:h-12 rounded-[100px] border-[0.5px] border-white backdrop-blur-lg">
                    Liên hệ tư vấn
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full pt-10 xl:py-0 xl:h-[450px] relative flex items-center">
        <div className="absolute bg-white inset-0 mix-blend-overlay z-10"></div>
        <div className="container relative flex flex-col gap-8 xl:gap-[76px] items-center z-10">
          <h1 className="px-5 xl:px-0 text-xl xl:text-4xl font-prata-regular text-center text-white">
            Xem Thêm Nguyễn Bảo Thoa Trên Các Mạng Xã Hội
          </h1>
          <div className="xl:flex xl:gap-[80px] hidden">
            {socials.map((item, index) => {
              return <Social item={item} index={index} />;
            })}
          </div>
          {isMobileScreen && (
            <AutoSlideWidthFull>
              {socials.map((item, index) => {
                return <Social item={item} index={index} />;
              })}
            </AutoSlideWidthFull>
          )}
        </div>
      </div>
      <div className="pt-10 xl:pt-0 xl:h-[623px] flex items-center relative z-10">
        <div className="xl:px-[400px] w-full">
          <BookingForm />
        </div> 
      </div>
    </>
  );
};

export default IntroducePage;
