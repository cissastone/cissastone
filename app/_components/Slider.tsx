"use client";
import { SliderData } from "@/constant/sliderData";
import Image from "next/image";
import { useState } from "react";
import { useSwipeable } from "react-swipeable";

const Slider = () => {
  const [activeImage, setActiveImage] = useState(1);

  const handlePrev = () => {
    setActiveImage((currentIndex) =>
      currentIndex === 1 ? SliderData.length : currentIndex - 1
    );
  };
  const handleNext = () => {
    setActiveImage((currentIndex) =>
      currentIndex === SliderData.length ? 1 : currentIndex + 1
    );
  };
  
  // Swipe handlers for mobile
  const handlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    trackMouse: true, // Optionally track mouse swipes as well
  }); 
  return (
    <section {...handlers} className="h-[450px] xl:w-[1200px] mx-auto max-sm:mx-0    relative bg-black  flex">
      <div className="flex items-center justify-center w-full absolute bottom-1 gap-2 z-30  ">
        <button
          className="px-3 py-1 flex items-center justify-center bg-background text-black text-md font-bold rounded-full hover:brightness-105"
          onClick={handlePrev}
        >
          {"<"}
        </button>

        {[...new Array(5)].map((_c, index) => (
          <span key={index}
            className={`inline-block w-[20px] h-[20px] transition-all ease-in duration-500  rounded-full  z-30 ${
              index === activeImage - 1 ? "bg-white scale-110" : "bg-black"
            }`}
          ></span>
        ))}
        <button
          className="px-3 py-1 flex items-center justify-center bg-background text-black text-md font-bold rounded-full hover:brightness-105"
          onClick={handleNext}
        >
          {">"}
        </button>
      </div>
      <div className="w-full h-full overflow-hidden flex">
        {SliderData.map((item, index) => (
          <div
            className="w-full h-full relative  transition-transform duration-500 ease-in-out flex-shrink-0"
            key={index}
            style={{ transform: `translateX(-${(activeImage - 1) * 100}%)` }} // Here, negative value for left translation
          >
            <Image
              src={item.imageUrl}
              alt="item"
              fill
              className="object-cover absolute z-0 "
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Slider;
