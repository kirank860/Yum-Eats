import React from "react";
import { TopPicks } from "../Data/Data";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const TopPick = () => {
  return (
    <div>
      <h1 className="text-orange-500 font-bold text-2xl text-center py-2">
        Top Picks
      </h1>
      <div className="lg:flex max-w-[1520px] m-auto py-2 px-2">
        <Splide
          options={{
            perPage: 4,
            gap: "0.5rem",
            drag: "free",
            arrows: false,
            breakpoints: {
              640: {
                perPage: 1, // Display one item per page in mobile view (screen width less than 640 pixels)
              },
            },
          }}
        >
          {TopPicks.map((item) => (
            <SplideSlide key={item.id}>
              <div className="rounded-3xl relative">
                <div className="absolute w-full h-full bg-black/50 rounded-3xl text-white">
                  <p className="px-2 pt-3 font-bold text-2xl">{item.title}</p>
                  <p className="px-2">{item.price}</p>
                  <div className="relative">
                    <button className="border-dotted border-green-500 text-center text-white mx-2 absolute border-2 top-[80px] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      Add To Cart
                    </button>
                  </div>
                </div>
                <img
                  className="h-[200px] w-full object-cover rounded-3xl cursor-pointer hover:scale-105 ease-out duration-300"
                  src={item.img}
                  alt={item.title}
                />
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
};

export default TopPick;
