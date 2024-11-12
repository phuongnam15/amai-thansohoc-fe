import { useState } from "react";
import logo2 from "../../assets/images/logos/logo2.webp";
import FormSearch from "../../assets/images/backgrounds/FormSearch.webp";
import bannerHomepage from "../../assets/images/backgrounds/bannerHomepage.webp";
import icon1 from "../../assets/images/icons/icon1.webp";
import icon2 from "../../assets/images/icons/icon2.webp";
import icon3 from "../../assets/images/icons/icon3.webp";
import Group2 from "../../assets/images/backgrounds/Group2.webp";

const slats = [
  {
    slat: "200+",
    content: "Lượt tra cứu mỗi ngày",
    icon: icon1,
  },
  {
    slat: "1000+",
    content: "Người sử dụng bản đồ",
    icon: icon2,
  },
  {
    slat: "100%",
    content: "Khách hàng hài lòng với dịch vụ",
    icon: icon3,
  },
];

const HomePage = () => {
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');

  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const months = [
    'Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6',
    'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'
  ];
  const years = Array.from({ length: 100 }, (_, i) => 2024 - i);

  // const isMobileScreen = useCheckMobileScreen();
  return (
    <>
      <div className="relative w-full h-[806px] px-[66px] flex items-end">
        <img
          src={bannerHomepage}
          alt=""
          className="object-cover absolute inset-0"
        />
        <div className="w-full h-[680px] flex bg-black bg-opacity-20 relative rounded-[40px]">

          <div className="h-full flex-1">
            <img
              src={Group2}
              alt=""
              className="absolute top-[35px] left-[169.87px] w-[399.836px] h-[399.836px] z-9"
            />
            <img
              src={logo2}
              alt=""
              className="absolute top-[83px] left-[187px] w-[330px] h-[597px] object-cover z-10"
            />
          </div>

          <div className="relative h-full flex-[1.5] flex justify-center items-center text-center">
            <div className="">
              <p className="text-white text-[32px] font-prata-regular mt-[149px] mb-[32px]">
                Thấu hiểu bản thân, làm chủ cuộc đời với
              </p>
              <p className=" font-ibmplexsans-bold text-[32px] text-[#FDFCCD] mb-[24px]">
                Map for success
              </p>
              <p className="text-[28px] text-white font-prata-regular mb-[22px]">
                Cùng
              </p>
              <p className="text-[32px] font-ibmplexsans-bold text-[#FDFCCD] mb-[61px]">
                Ms. Nguyễn Bảo Thoa
              </p>
              <p className="text-[16px] text-[#fff] font-ibmplexsans-medium mb-[51px]">Nhà đào tạo, chuyên gia Coaching<br />
                GĐCC tại Gein Academy - Học viện Lifecoach Quốc tế
              </p>
              <button className="w-[280px] h-[48px] text-white font-ibmplexsans-medium text-sm xl:text-base rounded-[100px] bg-linear-register ">
                Đăng ký ngay
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-x-[214px] mt-[67px] items-center justify-center bg-[#233269]">
        <div className="">
          <div className="flex text-white">
            <img src={icon1} alt="" className="w-[60px] h-[60px]" />
            <p className="font-ibmplexsans-bold text-[36px] ml-[9px]">200+</p>
          </div>
          <p className="font-ibmplexsans-regular mt-[26.5px] text-white">Lượt tra cứu mỗi ngày</p>
        </div>
        <div className="">
          <div className="flex text-white">
            <img src={icon2} alt="" className="w-[60px] h-[60px]" />
            <p className="font-ibmplexsans-bold text-[36px] ml-[9px]">1000+</p>
          </div>
          <p className="font-ibmplexsans-regular mt-[26.5px] text-white">Người sử dụng bản đồ</p>
        </div>
        <div className="">
          <div className="flex text-white">
            <img src={icon3} alt="" className="w-[60px] h-[60px]" />
            <p className="font-ibmplexsans-bold text-[36px] ml-[9px]">100%</p>
          </div>
          <p className="font-ibmplexsans-regular mt-[26.5px] text-white">Khách hàng hài lòng với dịch vụ</p>
        </div>
      </div>


      <div className="flex justify-center items-center">


        <div className="relative">
          <img src={FormSearch} alt="" className="" />
          <div className="relative">
            <p className="text-[32px] flex items-center justify-center font-prata-regular border-b-[1px] border-b-yellow-300">Tra cứu thần số học online</p>
          </div>

          <div className="flex gap-[24px]">
            <div className="block">
              <p className="mb-[12px] font-ibmplexsans-medium text-[20px]">Họ và tên khai sinh</p>
              <input type="text" placeholder="Nhập họ và tên" className="px-[16px] py-[14px] w-[444px] h-[48px] rounded-[100px]" />
            </div>

            <div className="block">
              <p className="mb-[12px] font-ibmplexsans-medium text-[20px]">Chọn giới tính</p>
              <select name="gender" className="px-[16px] py-[12px] w-[444px] h-[48px] rounded-[100px]">
                <option value="male">Nam</option>
                <option value="female">Nữ</option>
                <option value="other">Khác</option>
              </select>
            </div>
          </div>

          <div className="mt-[29px]">
            <p className="font-ibmplexsans-medium text-[20px]">Ngày, tháng, năm sinh dương lịch</p>
            <div className="flex space-x-2">
              {/* Select Day */}
              <select
                value={day}
                onChange={(e) => setDay(e.target.value)}
                className="block w-[276px] h-[48px] px-[16px] py-[12px] rounded-[100px] border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Ngày</option>
                {days.map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </select>

              {/* Select Month */}
              <select
                value={month}
                onChange={(e) => setMonth(e.target.value)}
                className="block w-[276px] h-[48px] px-[16px] py-[12px] rounded-[100px] border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Tháng</option>
                {months.map((m, index) => (
                  <option key={index} value={index + 1}>
                    {m}
                  </option>
                ))}
              </select>

              {/* Select Year */}
              <select
                value={year}
                onChange={(e) => setYear(e.target.value)}
                className="block w-[276px] h-[48px] px-[16px] py-[12px] rounded-[100px] border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Năm</option>
                {years.map((y) => (
                  <option key={y} value={y}>
                    {y}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex gap-x-[66px] mt-[24px]">
              <div>
                <input type="radio" name="option1" value="option1" />
                <label for="option1" className=" font-ibmplexsans-regular text-[16px]">Xem cả đường tình duyên, hôn nhân</label>
              </div>

              <div>
                <input type="radio" name="option2" value="option2" />
                <label for="option2" className=" font-ibmplexsans-regular text-[16px]">Xem số điện thoại hợp</label>
              </div>
            </div>

          </div>

          <button className="w-[276px] h-[48px] px-[49px] py-[1px] mt-[32px] text-white text-[20px] font-ibmplexsans-medium bg-linear-register rounded-[100px]">Tra cứu</button>

        </div>

      </div>
    </>






    //             <div className="flex justify-between xl:justify-normal xl:gap-[52px] mb-8 px-6 xl:px-0">
    //               {slats.map((item, index) => {
    //                 return (
    //                   <div className="flex flex-col xl:gap-3">
    //                     <div className="relative flex items-center mb-[-7px] xl:mb-0">
    //                       <img
    //                         src={bode}
    //                         alt=""
    //                         className="left-0 h-[65%] xl:h-auto"
    //                       />
    //                       <span className="absolute translate-y-1 translate-x-2 font-segoeui font-semibold text-[14.4px] xl:text-2xl text-primary">
    //                         {item.slat}
    //                       </span>
    //                     </div>
    //                     <p className="font-segoeui text-[8.4px] xl:text-sm max-w-20 xl:max-w-32">
    //                       {item.content}
    //                     </p>
    //                   </div>
    //                 );
    //               })}
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div> 

    //  </div >

  );
};

export default HomePage;
