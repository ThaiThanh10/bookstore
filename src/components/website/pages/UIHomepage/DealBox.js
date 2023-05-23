import { Progress } from "antd";
import React from "react";

const DealBox = () => {
  return (
    <div className="w-1/2 flex items-start p-[40px] bg-[#fff] border-solid border-[1px] border-[#eae8e4] transition-all duration-[0.2s] ease-[ease-in-out] hover:shadow-[0_0_40px_0_rgba(22,22,25,0.1)] ">
      <img src="https://picsum.photos/200/320" alt="" />
      <div className="ml-[35px] flex flex-col gap-y-[15px]">
        <h1 className="text-[16px] text-red-500 ">Kindle Edition</h1>
        <h1 className="title">
          Dark in Death: An Eve Dallas Novel (In Death, Book 46)
        </h1>
        <h1 className="text-[#7c6e65] text-[18px]  " >Nora Roberts</h1>
        <h1 className="text-[#000] text-[20px] text-bold " >79,99$</h1>
        <p className="text-[18px]"  >
          Hurry Up! Offer ends in:
        </p>
        <h1 className="text-[18px]">Already sold: 14</h1>
        <Progress percent={60} status="active"  showInfo={false} />
      </div>
    </div>
  );
};

export default DealBox;
