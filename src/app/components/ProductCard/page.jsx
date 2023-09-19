"use client";
import useProductStore from "@/store/productStore";
import React from "react";

const ProductCard = ({ products }) => {
  const addItems = useProductStore((state) => state.addItem);
  return (
    <div className="w-full flex gap-6 justify-center items-center flex-wrap">
      {products.map((item) => (
        <div
          className="w-[320px] border overflow-hidden rounded-xl"
          key={item.id}
        >
          <div className="img-box w-full flex justify-center items-center border-b">
            <img src={item.Img} alt={item.Cat} />
          </div>

          <div className="desc w-full flex flex-col gap-2 p-4">
            <div className="row1 w-full flex justify-between items-center">
              <h1 className="text-lg font-semibold text-[#222]">{item.Cat}</h1>
              <span className="text-lg text-red-400">{item.Price} $</span>
            </div>
            <div className="row2 w-full">
              <h2 className="text-sm font-normal text-[#888]">{item.Title}</h2>
            </div>
          </div>

          <div className="btn w-full text-center ">
            <button
              onClick={() => {
                addItems(item);
              }}
              className="w-full p-4 bg-indigo-500 text-white hover:bg-indigo-400"
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
