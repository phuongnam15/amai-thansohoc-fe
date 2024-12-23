const Service = ({ item, index }) => {
  return (
    <>
      <div
        key={index}
        className="flex flex-col gap-11 xl:gap-8 max-w-[190px] xl:max-w-none mx-auto xl:mx-0"
      >
        <div className="relative flex-1 rounded xl:rounded-lg">
          <div className="absolute inset-0 z-10 border-[1px] border-solid border-transparent border-gradient-radius-3-1 !rounded !xl:rounded-lg"></div>
          <div className="bg-white h-full relative flex-1 rounded xl:rounded-lg flex flex-col items-center pt-4 pb-2 px-[19px] xl:px-9 xl:py-4">
            <img src={item.image} alt="" className="mb-5 xl:mb-10 " />
            <h1 className="text-xs xl:text-2xl font-prata-regular text-[#101010] mb-[3.77px] xl:mb-[6px]">
              {item.title}
            </h1>
            <p className="text-[#686868] leading-3 xl:leading-6 text-[8px] xl:text-base text-center">
              {item.description}
            </p>
          </div>
        </div>
        <div className="relative flex justify-center items-center w-fit h-fit mx-auto">
          <div className="border-gradient-radius-2 !rounded-[100px] absolute inset-0"></div>
          <span className="text-white px-4 py-2 xl:py-3 xl:px-7 relative text-sm xl:text-xl font-medium">
            Xem thêm
          </span>
        </div>
      </div>
    </>
  );
};

export default Service;
