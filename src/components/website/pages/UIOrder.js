import { MainContext } from "@/components/context/MainProvider";
import { useRouter } from "next/router";
import React, { useContext, useEffect } from "react";

const UIOrder = () => {
  const { orderInfo, setOrderInfo, listCart } = useContext(MainContext);
  const router = useRouter();
  useEffect(() => {
    const _orderInfo = localStorage.getItem("orderInfo");
    const orderInfo = JSON.parse(_orderInfo);
    setOrderInfo(orderInfo);
  }, []);

  return (
    <div className="py-[65px] bg-[#fff6f6] ">
      <div className="max-w-[1280px] mx-auto px-[25px]  ">
        <div>
          <h1 className=" text-[30px] font-medium tracking-wide leading-[48px] mb-[30px] text-center ">
            Order
          </h1>
        </div>
        <div className="bg-[#fff] p-[40px_25px] ">
          <h1 className=" text-[26px] font-medium tracking-wide leading-[48px] mb-[30px] text-center ">
            Your orders are in progress. Thank you for shopping
          </h1>
          <div className="flex justify-center items-start border-b border-b-[#eae8e4] border-solid pb-[30px] ">
            <div className="w-[22%] text-left  ">
              <h1 className="text">Order Number</h1>
              <p className="text"> 1779</p>
            </div>
            <div className="w-[22%] text-left  ">
              <h1 className="text">Date</h1>
              <p className="text">May 24,2023 </p>
            </div>
            <div className="w-[22%] text-left  ">
              <h1 className="text">Total</h1>
              <p className="text"> ${orderInfo.total}</p>
            </div>
            <div className="w-[22%] text-left  ">
              <h1 className="text">Payment Method</h1>
              <p className="text">Online</p>
            </div>
          </div>
          <div className="mt-[30px] border-b border-b-[#eae8e4] border-solid pb-[30px] ">
            <h1 className=" text-[22px] font-medium tracking-wide  mb-[30px] text-left ">
              Information
            </h1>
            <div>
              <div className="grid grid-cols-3 gap-x-[80px] mb-[25px] ">
                <h1 className="text">
                  Name: {`${orderInfo.firstName} ${orderInfo.lastName}`}
                </h1>
                <p className="text ml-[50px] ">Phone: {orderInfo.phone} </p>
                <h1 className="text">Email</h1>
              </div>
              <div className="grid grid-cols-3 gap-x-[80px] mb-[25px] ">
                <h1 className="text">Country: {orderInfo.country}</h1>
                <p className="text ml-[50px] ">City: {orderInfo.country} </p>
                <h1 className="text">Address: {orderInfo.address}</h1>
              </div>
            </div>
          </div>
          <div className="mt-[30px] border-b border-b-[#eae8e4] border-solid pb-[30px] ">
            <h1 className=" text-[22px] font-medium tracking-wide  mb-[30px] text-left ">
              Order Details
            </h1>
            <div>
              {listCart.map((it, i) => (
                <div
                  key={i}
                  className="flex justify-between items-start mb-[25px] "
                >
                  <div className="flex">
                    <div>
                      <h1 className="text">{it.title}</h1>
                      <p className="text">(Paperback, English)</p>
                    </div>
                    <p className="text ml-[50px] "> {it.quantity}</p>
                  </div>
                  <h1 className="text">
                    {(it.quantity * it.price).toFixed(2)}
                  </h1>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-[30px] border-b border-b-[#eae8e4] border-solid pb-[30px] ">
            <div className="flex justify-between items-center my-[20px] ">
              <h1 className="text">Subtotal</h1>
              <p className="text">${orderInfo.total}</p>
            </div>
            <div className="flex justify-between items-center my-[20px] ">
              <h1 className="text">Shipping</h1>
              <p className="text">Free Ship</p>
            </div>
            <div className="flex justify-between items-center ">
              <h1 className="text">Payment Method</h1>
              <p className="text">Online</p>
            </div>
          </div>
          <div className="mt-[30px] border-b border-b-[#eae8e4] border-solid pb-[30px] ">
            <div className="flex justify-between items-center ">
              <h1 className="text">Total</h1>
              <p className="text">${orderInfo.total}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center gap-x-[30px] ">
        <button
          onClick={() => router.push("/")}
          className="bg-[#000] mt-[30px]  rounded-0 py-4 px-10 text-white text-[20px] button "
        >
          Back to homepage
        </button>
        <button
          onClick={() => router.push("/shoplist")}
          className="bg-[#000] mt-[30px]  rounded-0 py-4 px-10 text-white text-[20px] button "
        >
          Continue Shoppping
        </button>
      </div>
    </div>
  );
};

export default UIOrder;
