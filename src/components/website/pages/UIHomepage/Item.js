import { MainContext } from "@/components/context/MainProvider";
import asset from "@/plugins/assets";
import { HeartFilled, HeartOutlined } from "@ant-design/icons";
import React, { useContext, useState } from "react";

const Item = ({
  title,
  id,
  authors,
  price,
  onClick,
  handleWishlist,
  iconWishlist,
}) => {
  return (
    <div className="border-[1px] aspect-[0.67] item min-w-[200px] relative z-9 item  border-[#eae8e4] p-[25px] bg-[#fff] flex flex-col justify-between items-start hover:border-[#000] hover:shadow-[0_0_40px_0_rgba(22,22,25,0.1)] ">
      <div className="mx-auto">
        <img
          className="mb-3 px-4 mx-auto"
          src={`https://picsum.photos/seed/${id}/120/180`}
          /* src={asset(`${img}`)} */ alt=""
        />
      </div>
      <div className="pt-[10px] w-4/5 z-1 bg-[#fff] absolute bottom-[25px] left-[25px] ">
        <div className="relative">
          <div className="content absolute bottom-0 left-0 pt-[10px] w-full transition-all ease-in-out duration-300 bg-[#fff] z-10  ">
            <h1 className="w-max ">PAPERBACK</h1>
            <h1 className="text-[22px] max-w-[150px] line-clamp-1 ">{title}</h1>
            <h1 className="text my-3 w-max ">{authors}</h1>
            <h1 className="text w-max">{price}</h1>
          </div>
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
            <button
              onClick={handleWishlist}
              className="mt-[7px] text-rose-600 duration-200 transition-all "
            >
              {iconWishlist ? (
                <HeartFilled style={{ display: "block" }} />
              ) : (
                <HeartOutlined style={{ display: "block" }} />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
