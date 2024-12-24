import { useState } from "react";
import HeaderSearch from "../../assets/images/logos/HeaderSearch.webp";
import gradientBlurRadiusBorder from "../../assets/images/backgrounds/gradient-blur-radius-border.svg";
import gradientBlurRadiusBorderMb from "../../assets/images/backgrounds/gradient-blur-radius-border-mb.svg";
import arrowDown2 from "../../assets/images/icons/arrow-down-2.svg";
import useCheckMobileScreen from "../../utils/hooks/useCheckMobileScreen";
import logoSearch from "../../assets/images/logos/logoSearch.svg";
import bgHeaderSearch from "../../assets/images/backgrounds/bgHeaderSearch.webp";
import bgFooterSearch from "../../assets/images/backgrounds/BG-2.svg";
import earth from "../../assets/images/logos/earth.webp";
import PythagoFooterSearch from "../../assets/images/logos/PythagoFooterSearch.webp";
import stoneFooter from "../../assets/images/backgrounds/stoneFooter.webp";
import halfPlanetFooter from "../../assets/images/backgrounds/halfPlanetFooter.webp";
import bgHeaderSearchMobile from "../../assets/images/backgrounds/bgHeaderSearchMobile.webp";

const SearchPage = () => {
    const [isCheckLove, setIsCheckLove] = useState(false);
    const [isCheckAppropriatePhone, setIsCheckAppropriatePhone] = useState(false);
    const isMobileScreen = useCheckMobileScreen();
    const [gender, setGender] = useState(0);
    const [selectedDrop, setSelectedDrop] = useState(null);
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [monthOfBirth, setMonthOfBirth] = useState("");
    const [yearOfBirth, setYearOfBirth] = useState("");

    const days = Array.from({ length: 31 }, (_, i) => i + 1);
    const months = Array.from({ length: 12 }, (_, i) => `Tháng ${i + 1}`);

    return (
        <>
            <div className="relative z-30 h-full w-full">
                <div className="">
                    <img src={bgHeaderSearch} alt="" className="absolute xl:h-auto xl:w-full object-cover" />
                    {/* <img src={bgHeaderSearchMobile} alt="" className="absolute inset-0 object-cover xl:hidden block" /> */}
                    <div className="items-center justify-center flex ">
                        <img src={logoSearch} alt="" className="hidden xl:block pt-[120px] z-40" />
                    </div>

                    <div className="flex justify-center items-center overflow-hidden pt-8 xl:pt-0 w-full">
                        <div className="relative w-full">
                            <div className="relative w-full xl:py-16 z-10">
                                <div className="container flex flex-col items-center justify-center mt-[50px] gap-3 xl:gap-11 h-full">
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
                                            <div className="absolute z-10 inset-0 p-5 xl:px-24 xl:pt-16 xl:pb-12 border-2 border-gradient-radius-3 rounded-[32px]"></div>
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
                                                                className={`${selectedDrop === 0 ? "rotate-180" : ""
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
                                                                    className={`${selectedDrop === 1 ? "rotate-180" : ""
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
                                                                    className={`${selectedDrop === 2 ? "rotate-180" : ""
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
                                                            className={`${isCheckLove && "bg-[#d9d9d9]"
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
                                                            className={`${isCheckAppropriatePhone && "bg-[#d9d9d9]"
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

                    <div className="container relative">
                        <div className="text-white absolute inset-0">
                            <h2 className=" xl:text-[24px] text-[16px] text-left font-prata-regular">Chú thích</h2>
                            <ul className="xl:text-[16px] text-[14px] font-ibmplexsans-regular list-disc list-inside">
                                <li>Nếu ngày sinh trên giấy tờ (căn cước, chứng minh thư, bằng lái xe, khai sinh,..) và ngày sinh dương lịch thật của bạn khác nhau thì cuộc đời các bạn sẽ có xáo trộn<br />của cả 2 ngày sinh này. Bạn nên tra cứu cả hai ngày sinh để biết thêm, tuy nhiên kết quả sẽ thiên về ngày sinh dương lịch!</li>
                                <li>Số chủ đạo rất quan trọng nhưng không thể hiện hết toàn bộ thông tin thần số của bạn. Để xem kết quả tra cứu chính xác nhất, hãy kết hợp tất cả các chỉ số<br />mà chúng tôi tính toán cho bạn! </li>
                                <li>Bạn có thể tải lại các file báo cáo thần số học đã tra cứu tại Lịch sử tra cứu.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="relative h-[1400px] pt-[195px] z-10">

                    <div className="absolute">
                        <img src={bgFooterSearch} alt="" className=" w-[1440px] h-[1204px]" />
                    </div>

                    <div className=" mt-[200px] grid grid-cols-3 ">
                        <div className="flex xl:col-span-1 col-span-3 relative">
                            <p className="text-xl xl:text-[2rem] font-prata-regular xl:mt-[66px] xl:ml-[132px] mt-[60px] ml-[112px] text-transparent bg-gradient-to-r from-white to-primary-6 bg-clip-text z-20 hidden xl:block">Vì sao thần số học lại quan trọng và cần thiết?</p>
                            <p className="text-xl font-prata-regular text-transparent bg-gradient-to-r from-white to-primary-6 bg-clip-text z-20 xl:hidden">Vì sao thần số học lại quan trọng và cần thiết?</p>
                            <img src={PythagoFooterSearch} alt="" className="absolute xl:w-[276px] xl:h-[400px] w-[146px] h-[211px] content-start xl:mt-[148px] xl:ml-[132px] mt-[40px] ml-[20px] z-10" />
                            <img src={earth} alt="" className="absolute xl:w-[396.48px] xl:h-[396.48px] w-[164.186px] h-[164.475px] xl:mt-[485.07px] xl:ml-[86.77px] ml-[11.76px] mt-[221.61px] z-10 mix-blend-soft-light" />
                        </div>

                        <div className="mr-[100px] flex flex-col col-span-3 xl:col-span-2 text-[14px] xl:text-[16px] font-ibmplexsans-regular text-white z-20 mt-[198px]">
                            <div>
                                <p> <b>1. Hiểu rõ bản thân và tiềm năng cá nhân </b></p><br />
                                <ul className="list-disc list-inside">
                                    <li>Thần số học giúp khám phá điểm mạnh, điểm yếu, tính cách, và sở trường của mỗi người thông qua các con số liên quan đến ngày sinh và tên gọi.</li>
                                    <li>Biết được số chủ đạo (Life Path Number) sẽ giúp bạn hiểu rõ mục tiêu sâu xa và sứ mệnh của mình trong cuộc đời.</li><br />
                                </ul>
                            </div>

                            <div>
                                <p> <b>2. Định hướng nghề nghiệp và cuộc sống </b></p><br />
                                <ul className="list-disc list-inside">
                                    <li>Dựa vào thần số học, bạn có thể tìm ra công việc hoặc lĩnh vực phù hợp với mình.</li>
                                    <li>Các con số chỉ ra khuynh hướng tự nhiên của bạn trong công việc và cuộc sống, giúp tránh chọn những nghề không phù hợp với năng lực và tính cách.</li><br />
                                </ul>
                            </div>

                            <div>
                                <p> <b>3. Cân bằng cảm xúc và cải thiện các mối quan hệ </b></p><br />
                                <ul className="list-disc list-inside">
                                    <li>Thần số học giúp hiểu về tính cách của người khác, từ đó cải thiện cách bạn giao tiếp và xử lý các tình huống trong mối quan hệ cá nhân hoặc công việc.</li>
                                    <li>Nếu biết được số chủ đạo của đối tác, bạn có thể tìm ra cách hỗ trợ và đồng hành hiệu quả hơn.</li><br />
                                </ul>
                            </div>

                            <div>
                                <p> <b>4. Hiểu về chu kỳ cuộc đời và dự đoán xu hướng tương lai </b></p><br />
                                <ul className="list-disc list-inside">
                                    <li>Thần số học phân tích chu kỳ 9 năm và các năm cá nhân của bạn để nhận biết giai đoạn nào là thuận lợi và thời điểm nào cần thận trọng.</li>
                                    <li>Biết trước xu hướng giúp bạn lên kế hoạch phù hợp cho các dự định lớn trong tương lai.</li><br />
                                </ul>
                            </div>

                            <div>
                                <p> <b>5. Giúp đưa ra quyết định chính xác hơn </b></p><br />
                                <ul className="list-disc list-inside">
                                    <li>Thần số học có thể giúp bạn chọn tên phù hợp, ngày cưới, ngày khai trương, hay số nhà để tạo ra năng lượng tích cực.</li>
                                    <li>Nhiều người còn dùng thần số học để đặt tên con hoặc chọn số liên quan đến các sự kiện quan trọng trong đời.</li><br />
                                </ul>
                            </div>

                            <div>
                                <p> <b>6. Phát triển cá nhân và tâm linh </b></p><br />
                                <ul className="list-disc list-inside">
                                    <li>Thần số học không chỉ là công cụ khám phá bản thân mà còn giúp bạn hiểu rõ hành trình phát triển tâm linh của mình.</li>
                                    <li>Nó khuyến khích sự tự nhận thức và kết nối sâu hơn với mục đích sống.</li><br />
                                </ul>
                            </div>

                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}

export default SearchPage;