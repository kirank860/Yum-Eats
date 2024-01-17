import React, { useState } from "react";
import { mealdata } from "../Data/Data";
import { ArrowSmRightIcon } from "@heroicons/react/solid";
const Meals = () => {
  const [foods, setFoods] = useState(mealdata);
  const FilterCat = (category) => {
    setFoods(
      mealdata.filter((item) => {
        return item.category === category;
      })
    );
  };
  return (
    <div className="max-w[1520px] m-auto px-4 py-12">
      <h1 className="text-orange-500 font-bold text-2xl text-center py-1">
        our Meals{" "}
      </h1>
      <div className="flex flex-col lg:flex-row justify-center py-6">
        <div className="flex-col lg:flex-row md:justify-center justify-center space-y-3 flex-nowrap">
          <button onClick={() => setFoods(mealdata)} className="btn-tab">
            All
          </button>
          <button onClick={() => FilterCat("pizza")} className="btn-tab">
            Pizza
          </button>
          <button
            onClick={() => FilterCat("salad")}
            class="btn-tab"
          >
            Salad
          </button>
          <button onClick={() => FilterCat("chicken")} className="btn-tab">
            Chicken
          </button>
          <button onClick={() => FilterCat("vegetarian")} className="btn-tab">
            Vegetarian
          </button>
         
        </div>
      </div>
      <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-6 py-4">
        {foods.map((item) => (
          <div
            key={item.id}
            className="border-none hover:scal-105 duration-300"
          >
            <img
              className="w-full h-[200px] object-cover rounded-lg"
              src={item.image}
              alt={item.name}
            />
            <div className="flex justify-between py-4 px-4">
              <p className="font-bold">{item.name}</p>
              <p className="bg-orange-500 h-12 w-15 rounded-full -mt-10 text-white py-2 px-2 border-2 font-bold">
                {item.price}
              </p>
            </div>
            <div className="pl-5 py-2">
              <p className="text-indigo-600 flex items-center">
                view more
                <ArrowSmRightIcon className="w-6  ml-2" />
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Meals;
