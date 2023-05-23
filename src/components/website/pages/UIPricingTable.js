import React from "react";

export const PricingBox = () => {
  return (
    <div className="border border-solid border-[#eae8e4] transition-all duration-[0.2s] ease-[ease-in-out] w-max p-[80px_34px_40px] hover:translate-y-[-3px] hover:shadow-[0_0_40px_0_rgba(22,22,25,0.1)] hover:border-[#161619] ">
      <div className="text-center pb-[70px]">
        <h1 className="text-[30px] font-semibold leading-[36px] mb-[10px] ">Starter</h1>
        <h1 className="text-[26px] leading-[26px] font-semibold  mb-[10px] ">$25.99</h1>
        <p>Per Month</p>
      </div>
      <div className="flex flex-col justify-center items-center gap-y-[15px] mb-[45px]">
        <h1 className="text-[20px]">400+ Pages</h1>
        <h1 className="text-[20px]">Quality & Customer Experience</h1>
        <h1 className="text-[20px]">Power And Predictive Dialing</h1>
        <h1 className="text-[20px]">24/7 phone and email support</h1>
      </div>
      <button className="bg-[#000] rounded-0 py-[20px] px-[48px] mx-auto text-white text-[20px] button ">
        Submit Message
      </button>
    </div>
  );
};

const UIPricingTable = () => {
  return (
    <div className="container mb-[90px]">
      <h1 className=" text-[40px] font-medium tracking-wide leading-[48px] text-center mb-[60px] ">
        Pricing Table
      </h1>
      <div className="flex justify-start items-start ">
        <PricingBox />
        <PricingBox />
        <PricingBox />
        <PricingBox />
      </div>
    </div>
  );
};

export default UIPricingTable;
