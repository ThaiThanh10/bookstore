import React, { useContext, useEffect, useState } from "react";
import { Collapse, Input, Radio, Space, message } from "antd";
import { MainContext } from "@/components/context/MainProvider";
import { useRouter } from "next/router";
import { api } from "@/config/api";
import asset from "@/plugins/assets";
import { CloseOutlined } from "@ant-design/icons";
const { Panel } = Collapse;
const { TextArea } = Input;
const inputStyle = {
  border: "1px solid #eae8e4",
  padding: "7px",
  fontSize: "16px",
  ":focus": {
    border: "1px solid #000",
  },
};

const UICart = () => {
  const {
    listCart,
    setListCart,
    formTotal,
    setFormTotal,
    count,
    setCount,
    handleDelete,
    total,
    setTotal,
    handleAmount,
    handleTotal,
    isLogin,
  } = useContext(MainContext);
  const router = useRouter();

  const handleCheckout = () => {
    if (!isLogin) {
      message.warning("Please Log In First");
      return;
    }
    setCount(listCart.length);
    localStorage.setItem("total", total);
    localStorage.setItem("listCart", JSON.stringify(listCart));
    localStorage.setItem("count", count);
    router.push("/checkout");
  };

  useEffect(() => {
    handleTotal();
  }, [total]);

  return (
    <div>
      <div className="container mt-[90px]   flex justify-between items-center py-[30px] ">
        <h1 className=" text-[30px] font-medium tracking-wide leading-[48px] text-left ">
          Shop
        </h1>
        <h1 className="text-[18px]">Home / Shop / Cart</h1>
      </div>
      <div className="py-[45px] bg-[#fff6f6] ">
        <div className="container">
          <h1 className=" text-[30px] font-medium tracking-wide leading-[48px] mb-[30px] text-center ">
            Your cart
          </h1>
          <div>
            <div className="flex justify-between items-center border border-solid bg-[#fff] border-[#eae8e4]">
              <span className="py-[10px] px-[20px] text text-left w-1/2 ">
                Product
              </span>
              <span className="py-[10px] px-[20px] text text-center w-[12.5%] ">
                Price
              </span>
              <span className="py-[10px] px-[20px] text text-center w-[12.5%]">
                Quantity
              </span>
              <span className="py-[10px] px-[20px] text text-center w-[12.5%] ">
                Total
              </span>
              <span className="py-[10px] px-[20px] text text-center w-[12.5%]">
                Remove
              </span>
            </div>
            {listCart &&
              listCart.map((it, i) => (
                <div
                  className="flex justify-between items-center border border-solid bg-[#fff] border-[#eae8e4]"
                  key={i}
                >
                  <div className=" px-[20px] text-left h-full  w-1/2 flex justify-start items-center   ">
                    <img
                      className=" mr-[20px] scale-75  "
                      src={asset(`${it.img}`)}
                      alt=""
                    />
                    <h1 className="title">{it.title}</h1>
                  </div>
                  <div className="p-[8px] w-[12.5%] text-center   ">
                    <h1 className="text">{it.price}</h1>
                  </div>
                  <div className="p-[8px] w-[12.5%]  flexCenter gap-x-[25px] text-center  ">
                    <button
                      onClick={() => handleAmount(it.authors.id)}
                      className="text-[24px]"
                    >
                      -
                    </button>
                    <p className="text"> {it.quantity}</p>
                    <button
                      className="text-[24px]"
                      onClick={() => handleAmount(it.authors.id, true)}
                    >
                      +
                    </button>
                  </div>
                  <div className="p-[8px] w-[12.5%] text-center  ">
                    <h1 className="text">
                      {it.quantity && (it.price * it.quantity).toFixed(2)}
                    </h1>
                  </div>
                  <div className="p-[8px] w-[12.5%] text-center  ">
                    <button
                      className="mb-[5px]"
                      onClick={() => handleDelete(it)}
                    >
                      <CloseOutlined />
                    </button>
                  </div>
                </div>
              ))}
            <div className="flex justify-between items-center mt-[20px] ">
              <div className="flex justify-between items-center w-[60%] gap-x-[40px] bg-[#fff]  py-[13px] px-[25px] ">
                <h1 className="title    ">Total</h1>
                <h1 className="title">{total}</h1>
              </div>
              <button
                onClick={handleCheckout}
                className="bg-[#000] w-[20%] rounded-0 py-3 px-10 text-white text-[20px] button "
              >
                Proceed to checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UICart;
