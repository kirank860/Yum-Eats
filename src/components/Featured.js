import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
const Featured = () => {
  const sliders = [
    {
      URL: "https://img.freepik.com/free-photo/burger-hamburger-cheeseburger_505751-3690.jpg?size=626&ext=jpg&ga=GA1.1.790742631.1691391131&semt=sph",
    },
    {
      URL: "https://img.freepik.com/free-photo/mixed-pizza-with-various-ingridients_140725-3790.jpg?size=626&ext=jpg&ga=GA1.1.790742631.1691391131&semt=sph",
    },
    {
      URL: "https://img.freepik.com/free-photo/fresh-pasta-with-hearty-bolognese-parmesan-cheese-generated-by-ai_188544-9469.jpg?size=626&ext=jpg&ga=GA1.1.790742631.1691391131&semt=sph",
    },
    {
      URL: "https://img.freepik.com/free-photo/view-delicious-dumplings_23-2150777769.jpg?size=626&ext=jpg&ga=GA1.1.790742631.1691391131&semt=sph",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(3);
  const prevslider = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? sliders.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlider = () => {
    const isLastSlide = currentIndex === sliders.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const moveToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="max-w-[1520px] h-[500px] w-full py-4 px-4 relative group">
      <div
        className="w-full h-full rounded-2xl bg-center bg-cover bg-no-repeat duration-500"
        style={{ backgroundImage: `url(${sliders[currentIndex].URL})` }}
      >
        {" "}
      </div>
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-orange-700 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevslider} />
      </div>
      <div className="hidden group-hover:block  absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-orange-700 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlider} />
      </div>
      <div className="flex top-4 justify-center py-2">
        {sliders.map((sliderItems, slideIndex) => (
          <div key={slideIndex} onClick={()=> moveToSlide (slideIndex)} className="text-2xl cursor-pointer">
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
