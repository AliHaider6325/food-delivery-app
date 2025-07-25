"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const data = [
  {
    id: 1,
    title: "Always fresh & crispy & always hot",
    image: "/hotel_65.jpg",
  },
  {
    id: 2,
    title: "We deliver your order wherever you are in NY",
    image: "/pizza1.jpg",
  },
  {
    id: 3,
    title: "The best pizza to share with your family",
    image: "/pizza2.jpg",
  },
];
const Slider = () => {
  const [slide, setSlide] = useState(0);
  useEffect(() => {
    const interval = setInterval(
      () => setSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1)),
      2000
    );
    return () => clearInterval(interval);
  });
  return (
    <div className="flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row bg-fuchsia-50">
      <div className="h-1/2 flex items-center justify-center flex-col gap-8 text-red-500 font-bold lg:h-full lg:w-1/2">
        <h1 className="uppercase text-center p-4 md:p-10 sm:text-2xl md:text-6xl xl:text-7xl">
          {data[slide].title}
        </h1>
        <button className="bg-red-500 text-white py-4 px-8">Order Now</button>
      </div>
      <div className="w-full h-1/2 relative lg:h-full lg:w-1/2">
        <Image src={data[slide].image} alt="pizza width" fill></Image>
      </div>
    </div>
  );
};

export default Slider;
