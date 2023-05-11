import asset from "@/plugins/assets";
import React from "react";

const Item = ({ title, authors, price, onClick }) => {
  return (
    <div className="border-[1px] w-1/3 border-[#eae8e4] p-[25px] bg-[#fff] flex flex-col justify-between items-start hover:border-[#000] ">
      <img
        className="mb-3 px-4 mx-auto"
        src="https://picsum.photos/180/220"
        alt=""
      />
      <div className="">
        <h1 className="title ">{title}</h1>
        <h1 className="text my-3">{authors}</h1>
        <h1 className="text">{price}</h1>
      </div>
      <button
        onClick={onClick}
        className="flex justify-around items-center w-full mt-3 border-[1px] border-[#000] py-2 text-[16px] hover:bg-slate-200 "
      >
        Add to cart
        <img src={asset("/images/shopping-bag.png")} alt="" />
      </button>
    </div>
  );
};

export default Item;
