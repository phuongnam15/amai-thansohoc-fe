import moonSocial from "../assets/images/backgrounds/moon-social.webp";

const Social = ({ item, index }) => {
  return (
    <div key={index} className="flex flex-col items-center gap-5 xl:gap-8">
      <div className="relative">
        <img src={moonSocial} alt="" className="relative" />
        <span className="left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-white absolute text-2xl xl:text-xl font-prata-regular">
          {item.amount}
        </span>
      </div>
      <span className="text-[2rem] font-prata-regular text-white">
        {item.name}
      </span>
    </div>
  );
};

export default Social;
