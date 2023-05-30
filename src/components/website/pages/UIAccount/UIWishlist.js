import { MainContext } from "@/components/context/MainProvider";
import React, { useContext } from "react";
import Item from "../UIHomepage/Item";

const UIWishlist = () => {
  const { wishlist,handleWishlist } = useContext(MainContext);
  return (
    <div className="w-3/4 pl-[65px] py-[65px] border-l border-solid border-[#eae8e4]  ">
      <h1 className=" text-[34px] font-semibold tracking-wide leading-[48px] text-left mb-[30px] ">
        Wishlist
      </h1>
      <div className="grid grid-cols-4">
        {wishlist.map((it, i) => (
          <Item
            img={it.img}
            onClick={() => handleAdd(it)}
            iconWishlist={it.isLike}
            handleWishlist={() => handleWishlist(it)}
            key={i }
            title={it.title}
            authors={it.authors.name}
            price={it.price}
          />
        ))}
      </div>
    </div>
  );
};

export default UIWishlist;
