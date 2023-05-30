import React, { useContext, useEffect, useState } from "react";
import { Collapse, Input, Radio, Space, message } from "antd";
import { MainContext } from "@/components/context/MainProvider";
import { useRouter } from "next/router";
import { api } from "@/config/api";
import asset from "@/plugins/assets";
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
    handleTotal, isLogin
  } = useContext(MainContext);
  const router = useRouter();

  const handleCheckout = () => {
    if(!isLogin){
      message.warning('Please Log In First')
      return
    }
    setCount(listCart.length);
    localStorage.setItem('total',total)
    localStorage.setItem("listCart", JSON.stringify(listCart));
    localStorage.setItem("count", count);
    router.push("/checkout");
  };

  useEffect(() => {
    handleTotal();
  }, [total]);

  return (
    <div>
      <div className="container pt-[60px]  flex justify-between items-center pb-[30px] ">
        <h1 className=" text-[30px] font-medium tracking-wide leading-[48px] text-left ">
          Shop
        </h1>
        <h1 className="text-[18px]">Home / Shop / Cart</h1>
      </div>
      <div className="py-[65px] bg-[#fff6f6] ">
        <div className="container">
          <h1 className=" text-[30px] font-medium tracking-wide leading-[48px] mb-[30px] text-center ">
            Your cart
          </h1>
          <div>
            <div>
              <table className="w-full border-collapse bg-[#fff]  ">
                <thead>
                  <tr>
                    <th className="p-[10px] text text-left border border-b-solid border-b-[#eae8e4] w-1/2 ">
                      Product
                    </th>
                    <th className="p-[10px] text text-left border border-b-solid border-b-[#eae8e4] w-1/10 ">
                      Price
                    </th>
                    <th className="p-[10px] text text-left border border-b-solid border-b-[#eae8e4] w-1/5">
                      Quantity
                    </th>
                    <th className="p-[10px] text text-left border border-b-solid border-b-[#eae8e4] w-1/10  ">
                      Total
                    </th>
                    <th className="p-[10px] text text-left border border-b-solid border-b-[#eae8e4] w-1/10">
                      Remove
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {listCart &&
                    listCart.map((it, i) => (
                      <tr key={i}>
                        <td className="p-[8px] text-left h-full border border-b-solid border-b-[#eae8e4] w-full   ">
                          {/* <img
                            className="mb-3 px-4 w-1/3 mr-[20px]  "
                            src={asset(`${it.img}`)}
                            alt=""
                          /> */}
                          {it.title}
                        </td>
                        <td className="p-[8px] text-left border border-b-solid border-b-[#eae8e4] w-1/10 ">
                          {it.price}
                        </td>
                        <td className="p-[8px] w-full flexCenter gap-x-[15px] text-left border border-b-solid border-b-[#eae8e4] ">
                          <button
                            onClick={() => handleAmount(it.authors.id)}
                            className="text"
                          >
                            -
                          </button>
                          <p className="text"> {it.quantity}</p>
                          <button
                            className="text"
                            onClick={() => handleAmount(it.authors.id, true)}
                          >
                            +
                          </button>
                        </td>
                        <td className="p-[8px] text-left border border-b-solid border-b-[#eae8e4] w-1/10 ">
                          {it.quantity && (it.price * it.quantity).toFixed(2)}
                        </td>
                        <td className="p-[8px] text-left border border-b-solid border-b-[#eae8e4] w-1/10 ">
                          <button onClick={() => handleDelete(it.authors.id)}>
                            Remove
                          </button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
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
    </div>
  );
};

export default UICart;
