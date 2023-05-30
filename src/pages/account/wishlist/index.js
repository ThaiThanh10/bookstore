import "@/styles/global.css";

import MasterPage from "@/components/master";
import dynamic from "next/dynamic";
const UIWishlist = dynamic(() =>
  import("@/components/website/pages/UIAccount/UIWishlist")
);
const UIAccount = dynamic(() =>
  import("@/components/website/pages/UIAccount/UIAccount")
);

const wishlist = () => {
  return (
    <MasterPage title="wishlist ">
      <div className="container flex items-start ">
        <UIAccount />
        <UIWishlist />
      </div>
    </MasterPage>
  );
};

export default wishlist;
