import { useRouter } from "next/router";
import React from "react";

const UIErrorPage = () => {
  const router = useRouter();
  const handleBack = () => {
    router.push("/");
  };


  return (
    <div className="container flex justify-center items-center flex-col pt-[110px] pb-[200px] ">
      <h1 className=" text-[200px] text-[#161619] text-bold leading-[240px] ">
        404
      </h1>
      <h1 className="text mb-[10px]">
        Woops, looks like this page does not exist
      </h1>
      <h1 className=" text-[16px] text-[#161619]  leading-[21px] mb-[20px] ">
        You could either go back or go to homepage
      </h1>
      <button
        onClick={handleBack}
        className="bg-[#000] rounded-0 btn-wide py-4 px-10 text-white text-[20px] button "
      >
        Go Back
      </button>
    </div>
  );
};

export default UIErrorPage;
