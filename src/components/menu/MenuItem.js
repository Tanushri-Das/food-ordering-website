import React from "react";

const MenuItem = () => {
  return (
    <div className="bg-gray-200 p-4 rounded-lg text-center group hover:bg-white hover:shadow-md hover:shadow-black/25 transition-all cursor-pointer">
      <div>
        <img
          className="max-h-auto max-h-24 block mx-auto"
          src={"/pizza.png"}
          alt="pizza"
        />
      </div>
      <h4 className="font-semibold text-xl my-2">Pepperoni Pizza</h4>
      <p className="text-gray-500 text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
        facere odit quia praesentium nesciunt cupiditate.
      </p>
      <button className="mt-4 bg-primary text-white px-8 py-2 rounded-full">
        Add to cart $12
      </button>
    </div>
  );
};

export default MenuItem;
