import star from "../assets/images/icons/star-3.svg";
import galaxyCloud from "../assets/images/backgrounds/galaxy-cloud.webp";

const BookingForm = ({ endow }) => {
  return (
    <>
      <div className="w-full relative">
        <img src={galaxyCloud} alt="" className="absolute inset-0 xl:hidden" />
        <div className="flex flex-col w-full gap-10 xl:gap-8 container">
          <div className="relative w-full">
            <img
              src={star}
              alt=""
              className="absolute top-0 -translate-y-1/2 w-12"
            />
            <img
              src={star}
              alt=""
              className="absolute bottom-0 right-0 translate-y-1/2 w-12"
            />
            <div className="w-full relative py-4 px-3 xl:py-[18px] xl:px-[29px] bg-custom-gradient flex justify-center rounded-[200px]">
              <span className="text-xl xl:leading-10 xl:text-[2rem] font-prata-regular text-transparent bg-gradient-to-r from-white to-primary-6 bg-clip-text ">
                Đăng kí đặt lịch với Ms. Bảo Thoa
              </span>
            </div>
            <div className="absolute inset-0 border-gradient-radius-2-1"></div>
          </div>
          {endow && (
            <div className="flex-col flex w-full items-center gap-1 xl:gap-2 xl:pt-6">
              <div className="space-x-3">
                <span
                  className="text-[#777] text-sm xl:text-[2rem] font-prata-regular line-through"
                  style={{ textDecorationThickness: "1px" }}
                >
                  {endow.priceDisplay.toLocaleString("vi-VN") + "đ"}
                </span>
                <span className="text-base xl:text-4xl font-prata-regular text-transparent bg-gradient-to-r from-white to-primary-6 bg-clip-text">
                  {endow.price.toLocaleString("vi-VN") + "đ"}
                </span>
              </div>
              <span className="text-lg xl:text-2xl text-white font-medium">
                Ưu đãi sẽ hết sau 12:30:30{" "}
              </span>
            </div>
          )}
          <div className="flex flex-col w-full px-5 xl:px-[50px] gap-5 xl:gap-6">
            <div className="flex flex-col w-full gap-1 xl:gap-3">
              <label
                htmlFor=""
                className="text-sm xl:text-xl  font-medium text-white"
              >
                Họ và tên
              </label>
              <input
                type="text"
                placeholder="Nhập họ và tên"
                className="form-input w-full"
              />
            </div>
            <div className="flex flex-col w-full gap-1 xl:gap-3">
              <label
                htmlFor=""
                className="text-sm xl:text-xl  font-medium text-white"
              >
                Số điện thoại
              </label>
              <input
                type="text"
                placeholder="Nhập số điện thoại"
                className="form-input w-full"
              />
            </div>
          </div>
          <div className="w-full flex justify-center">
            <button className="relative z-10 w-[167px] xl:w-[178px] text-white xl:text-xl  font-medium bg-linear-1 h-10 xl:h-12 rounded-[100px] border-[0.5px] border-white backdrop-blur-lg">
              Đăng kí
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingForm;
