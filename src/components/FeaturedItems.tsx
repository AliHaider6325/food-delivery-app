import Image from "next/image";
import React from "react";
import { featuredProducts } from "../data";

const FeaturedItems = () => {
  return (
    <div className="w-screen overflow-x-scroll text-red-500">
      <div className="w-max flex">
        {featuredProducts.map((items) => (
          <div
            key={items.id}
            className="w-screen h-[60vh] flex flex-col items-center justify-around p-4 hover: bg-fuchsia-50 transition-all duration-300 md:w-[50vw] xl:w-[33vw] xl:h-[90vh]"
          >
            {items.img && (
              <div className="relative flex-1 w-full hover:rotate-[60deg] transition-all duration-500">
                <Image
                  className="object-contain"
                  src={items.img}
                  alt={""}
                  fill
                ></Image>
              </div>
            )}
            <div className="flex-1 flex flex-col items-center justify-center text-center gap-4">
              <h1 className="text-xl font-bold uppercase xl:2xl 2xl:3xl">
                {items.title}
              </h1>
              <p className="p-4 2xl:p-8">{items.desc}</p>
              <span className="text-xl font-bold">{items.price}</span>
              <button className="bg-red-500 text-white p-2 rounded-md">
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedItems;
