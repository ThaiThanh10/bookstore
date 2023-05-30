import { MainContext } from "@/components/context/MainProvider";
import Link from "next/link";
import React, { useContext } from "react";

const UIAccount = () => {
  const { handleLogout } = useContext(MainContext);

  return (
    <div className="w-1/4 py-[65px]  border-r border-solid border-[#eae8e4] ">
      <h1 className=" text-[34px] font-semibold tracking-wide leading-[48px] text-left mb-[30px] ">
        My Account
      </h1>
      <div>
        <Link href="/account">
          <p className="text-[22px] text-[#7f7f83] transition-all duration-[0.3s] ease-[ease] my-[15px] hover:translate-x-[20px] ">
            Dashboard
          </p>
        </Link>
        <Link href='/order' className="text-[22px] text-[#7f7f83] transition-all duration-[0.3s] ease-[ease] my-[15px] hover:translate-x-[20px] ">
          Orders
        </Link>
        <Link href="/account/wishlist">
          <p className="text-[22px] text-[#7f7f83] transition-all duration-[0.3s] ease-[ease] my-[15px] hover:translate-x-[20px] ">
            Wishlists
          </p>
        </Link>
        <h1 className="text-[22px] text-[#7f7f83] transition-all duration-[0.3s] ease-[ease] my-[15px] hover:translate-x-[20px] ">
          Addresses
        </h1>
        <h1
          onClick={handleLogout}
          className="text-[22px] text-[#7f7f83] cursor-pointer   transition-all duration-[0.3s] ease-[ease] my-[15px] hover:translate-x-[20px] "
        >
          Log Out
        </h1>
      </div>
    </div>
  );
};

export default UIAccount;
