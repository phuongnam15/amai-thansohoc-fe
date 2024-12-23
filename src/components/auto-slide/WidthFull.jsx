import React, { useState, useEffect } from "react";

const AutoSlideWidthFull = ({ children, type = null }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === React.Children.count(children) - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [children]);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  }

  return (
    <div className={`w-full relative overflow-hidden ${type === "service" ? "pb-5" : "pb-12"}`}>
      <div
        className={`flex transition-transform duration-500 ease-in-out`}
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {React.Children.map(children, (child, index) => (
          <div key={index} className={`min-w-full px-2`}>
            {child}
          </div>
        ))}
      </div>

      {/* dots */}
      <div className={`absolute z-10 left-1/2 transform -translate-x-1/2 flex gap-2 ${type === "service" ? "bottom-[70px]" : "bottom-5"}`}>
        {React.Children.map(children, (_, index) => (
          <div
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-[10px] h-[10px] rounded-full border border-gray-300 ${
              index === currentIndex ? "bg-gray-300" : "bg-transparent"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default AutoSlideWidthFull;
