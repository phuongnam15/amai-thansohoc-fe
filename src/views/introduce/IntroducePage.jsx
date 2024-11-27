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

  return (
    <>
      <div className="relative w-full">
        <div className="absolute inset-0 bg-[#233269] hidden opacity-70 filter brightness-75 xl:block mix-blend-overlay z-10"></div>
        <div className="w-full xl:pb-14 xl:pt-40 container relative z-10">
          <div className="relative w-full">
            <div className="relative w-full flex justify-center">
              <img src={gate} alt="" />
            </div>
            <div className="absolute bottom-0 z-10 w-full flex justify-center">
              <img src={nguyenbaothoa} alt="" />
            </div>
            <div className="absolute inset-0 -translate-y-11">
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
      <div className="w-full xl:h-[726px] relative z-10 flex items-center">
        <div className="container flex items-center">
          <div className="flex-[1.5] relative">
            <img src={moonSign} alt="" className="" />
            <img src={solarSystem} alt="" className="absolute w-[75%] top-0" />
          </div>
          <div className="flex-1 flex flex-col gap-2">
            <h1 className="font-prata-regular text-white text-4xl">
              Giới thiệu về thần số học
            </h1>
            <div className="text-white text-base leading-6 opacity-90 tracking-wide">
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
      <div className="w-full relative xl:h-[730px] flex items-center">
        <div className="absolute z-10 inset-0 bg-[#D9D9D9] mix-blend-soft-light"></div>
        <div className="container flex flex-col xl:gap-[74px]">
          <div className="text-center flex flex-col gap-2 items-center relative z-10">
            <h1 className="text-white text-4xl font-prata-regular">Dịch vụ</h1>
            <p className="text-white text-base leading-6 xl:w-[500px]">
              Lorem ipsum dolor sit amet consectetur. Neque felis proin eget
              lacus nulla dictumst tempor. Est tortor laoreet nisi tincidunt.
              Nisl placerat lectus et netus pretium. Adipiscing enim vel neque
              ac quisque nisi.
            </p>
          </div>
          <div className="flex gap-6 relative z-10">
            {services.map((item, index) => {
              return (
                <div className="flex flex-col gap-8">
                  <div className="relative flex-1 rounded-lg">
                    <div className="absolute inset-0 z-10 border-[1px] border-solid border-transparent border-gradient-radius-3-1 rounded-lg"></div>
                    <div className="bg-white relative flex-1 rounded-lg flex flex-col items-center xl:px-9 xl:py-4">
                      <img src={item.image} alt="" className="xl:mb-10" />
                      <h1 className="text-2xl font-prata-regular text-[#101010] xl:mb-[6px]">
                        {item.title}
                      </h1>
                      <p className="text-[#686868] leading-6 text-base text-center">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <div className="relative flex justify-center items-center w-fit h-fit mx-auto">
                    <div className="border-gradient-radius-2 !rounded-[100px] absolute inset-0"></div>
                    <span className="text-white xl:py-3 xl:px-7 relative text-xl font-medium">
                      Xem thêm
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="w-full relative xl:h-[745px] flex items-center">
        <div className="relative container flex">
          <img
            src={sun}
            alt=""
            className="absolute right-0 z-10 mix-blend-overlay"
          />
          <img
            src={symbol1}
            alt=""
            className="absolute left-0 w-[42%] z-10 bottom-0 mix-blend-overlay"
          />
          <div className="absolute top-0 left-0 mix-blend-overlay flex">
            <img src={symbol3} alt="" className="-translate-y-[50%]" />
            <img src={symbol2} alt="" className="self-start" />
          </div>
          <div className="flex-1 relative z-10">
            <img src={nguyenbaothoa2} alt="" />
          </div>
          <div className="flex-[1.2] flex flex-col relative z-10 text-white gap-6">
            <h1 className="xl:text-4xl font-prata-regular">
              Về Ms. Nguyễn Bảo Thoa
            </h1>
            <div className="flex flex-col gap-4">
              <h1 className="text-2xl font-semibold">Thông tin cá nhân</h1>
              <div className="flex flex-col text-base gap-4">
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
                <div className="w-full flex flex-col gap-4">
                  {aboutMs.map((item, index) => {
                    return (
                      <div className="flex flex-col">
                        <div className="flex flex-col gap-3 xl:gap-5">
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
                            <p className=" text-xs xl:text-sm text-white">
                              {item.description}
                            </p>
                          </div>
                        </div>
                        {index !== aboutMs.length - 1 && (
                          <div className="w-full bg-gradient-to-r from-white to-primary-6 h-[1px]"></div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
              <button className="relative z-10 xl:w-[178px] text-white xl:text-xl  font-medium bg-linear-1 xl:h-12 rounded-[100px] border-[0.5px] border-white backdrop-blur-lg">
                Liên hệ tư vấn
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[450px] relative flex items-center">
        <div className="absolute bg-white inset-0 mix-blend-overlay z-10"></div>
        <div className="container relative flex flex-col xl:gap-[76px] items-center z-10">
          <h1 className="xl:text-4xl font-prata-regular text-white">
            Xem Thêm Nguyễn Bảo Thoa Trên Các Mạng Xã Hội
          </h1>
          <div className="flex xl:gap-[80px]">
            {socials.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col items-center xl:gap-8"
                >
                  <div className="relative">
                    <img src={moonSocial} alt="" className="relative" />
                    <span className="left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-white absolute text-xl font-prata-regular">
                      {item.amount}
                    </span>
                  </div>
                  <span className="text-[2rem] font-prata-regular text-white">
                    {item.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="h-[623px] flex items-center relative z-10">
        <div className="xl:px-[432px] w-full">
          <BookingForm />
        </div> 
      </div>
    </>
  );
};

export default IntroducePage;
