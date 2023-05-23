import asset from "@/plugins/assets";
import { HeartOutlined } from "@ant-design/icons";
import React from "react";

const Item = ({ title, img, authors, price, onClick }) => {
  return (
    <div className="border-[1px] aspect-[0.6] min-w-[200px] relative z-9 item  border-[#eae8e4] p-[25px] bg-[#fff] flex flex-col justify-between items-start hover:border-[#000] ">
      <div className="mx-auto">
        <img className="mb-3 px-4 mx-auto" src={asset(`${img}`)} alt="" />
      </div>
      <div className="overflow-hidden pt-[10px] content w-4/5 z-1 bg-[#fff] absolute bottom-[25px] left-[25px] ">
        <h1 className="w-max">PAPERBACK</h1>
        <h1 className="text-[22px] max-w-[150px] line-clamp-1 ">{title}</h1>
        <h1 className="text my-3 w-max ">{authors}</h1>
        <h1 className="text w-max">{price}</h1>
        <div className="flex justify-between items-center">
          <button
            onClick={onClick}
            className="flex relative justify-start items-center w-max mt-3  py-2 text-[16px] hover-underline-animation "
          >
            Add to cart
            <img
              className="ml-[15px] mb-[3px] "
              src={asset("/images/shopping-bag.png")}
              alt=""
            />
          </button>
          <button className="mt-[7px]">
            <HeartOutlined />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item;
