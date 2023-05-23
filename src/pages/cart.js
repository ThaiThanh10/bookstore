import "../styles/global.css";

import MasterPage from "@/components/master";
import dynamic from "next/dynamic";

const UICart = dynamic(() => import("@/components/website/pages/UICart"));

const cart = () => {
  return (
    <MasterPage title="Shop Cart">
      <UICart />
    </MasterPage>
  );
};

export default cart;
