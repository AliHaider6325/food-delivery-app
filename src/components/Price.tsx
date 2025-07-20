"use client";
import React, { useEffect, useState } from "react";

interface Props {
  p: number;
  id: number;
  options?: { title: string; additionalPrice: number }[];
}

const Price = ({ p, id, options }: Props) => {
  const [total, setTotal] = useState(p);
  const [quantity, setQuantity] = useState(1);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    setTotal(quantity * (options ? p + options[selected].additionalPrice : p));
  });
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">{total.toFixed(2)}</h2>
      <div className="flex gap-4">
        {options?.map((option, index) => (
          <button
            key={option.title}
            className="hover:bg-red-500 hover:text-white min-w-[6rem] p-2 ring-1 ring-red-400 rounded-md"
            style={{
              background: selected === index ? "rgb(248 113 113)" : "white",
              color: selected === index ? "white" : "red",
            }}
            onClick={() => setSelected(index)}
          >
            {option.title}
          </button>
        ))}
      </div>
      <div className="flex justify-between items-center">
        <div className="flex justify-between w-full p-3 ring-1 ring-red-500">
          <span>{quantity}</span>
          <div className="flex gap-4 items-center">
            <button
              onClick={() =>
                setQuantity(() => (quantity > 1 ? quantity - 1 : 1))
              }
            >
              {"<"}
            </button>
            <span>1</span>
            <button
              onClick={() =>
                setQuantity(() => (quantity > 8 ? 9 : quantity + 1))
              }
            >
              {">"}
            </button>
          </div>
        </div>
        <button className="uppercase w-56 bg-red-500 text-white p-3 ring-1 ring-red-500">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Price;
