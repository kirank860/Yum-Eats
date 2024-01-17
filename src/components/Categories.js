import React from "react";
import { categories } from "../Data/Data";
const Categories = () => {
  console.log(categories);
  return (
    <div className="max-w[1520px] m-auto px-4 py-12">
      <h1 className="text-orange-500 font-bold text-2xl text-center py-2">
        Trending Categories
        <div className="grid grid-cols-2 md:grid-cols-6 gap-5 py-5 px-2">
          {categories.map((item) => (
            <div
              key={item.id}
              className="p-4 flex justify-center items-center hover:scale-x-0 duration-300"
            >
              <img                              
                className="object-cover rounded-xl w-40 h-13 cursor-pointer shadow-md"
                src={item.image}
                alt={item.name} // Don't forget to add an alt attribute for accessibility
              />
            </div>
          ))}
        </div>
      </h1>
    </div>
  );
};

export default Categories;
