"use client";
import Image from "next/image";
import React from "react";

const CartPage = () => {
  return (
    <div
      className="
        h-[calc(100vh-6rem)]
        flex flex-col
        text-red-500
        lg:flex-row
      "
    >
      {" "}
      <div className="flex-1 overflow-auto p-4 lg:h-full lg:w-2/3 2xl:w-1/2 lg:px-20 xl:px-40">
        <div className="flex items-center justify-between mb-4">
          <Image
            width={100}
            height={100}
            src="/temporary/p1.png"
            alt="cartProduct"
          />
          <div>
            <h1 className="uppercase text-xl font-bold">Sicilian</h1>
            <span>Large</span>
          </div>
          <h2 className="font-bold">$79.90</h2>
          <span className="cursor-pointer">X</span>
        </div>
        <div className="flex items-center justify-between mb-4">
          <Image
            width={100}
            height={100}
            src="/temporary/p1.png"
            alt="cartProduct"
          />
          <div>
            <h1 className="uppercase text-xl font-bold">Sicilian</h1>
            <span>Large</span>
          </div>
          <h2 className="font-bold">$79.90</h2>
          <span className="cursor-pointer">X</span>
        </div>
        <div className="flex items-center justify-between mb-4">
          <Image
            width={100}
            height={100}
            src="/temporary/p1.png"
            alt="cartProduct"
          />
          <div>
            <h1 className="uppercase text-xl font-bold">Sicilian</h1>
            <span>Large</span>
          </div>
          <h2 className="font-bold">$79.90</h2>
          <span className="cursor-pointer">X</span>
        </div>
        {/* …more rows */}
      </div>
      {/* Footer / Checkout */}
      <div className="h-1/2 p-4 bg-fuchsia-50 flex flex-col gap-4 justify-center lg:h-full lg:w-1/3  2xl:w-1/2 2xl:h-full">
        <div className="flex justify-between">
          <span>SubTotal 3 items</span>
          <span>$81.70</span>
        </div>
        <div className="flex justify-between">
          <span>Service Cost</span>
          <span>$0.70</span>
        </div>
        <div className="flex justify-between">
          <span>Delivery Cost</span>
          <span className="text-green-500">FREE!</span>
        </div>
        <hr className="my-2" />
        <div className="flex justify-between">
          <span>Total(INCL. VAT)</span>
          <span className="font-bold">$82.40</span>
        </div>
        <button className="bg-red-500 text-white p-3 rounded-md w-1/2 self-end">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartPage;
