import "../styles/global.css";

import MasterPage from "@/components/master";
import dynamic from "next/dynamic";

const UICheckout = dynamic(() => import("@/components/website/pages/UICheckout"));

const checkout = () => {
  return (
    <MasterPage title='Checkout Information' >
      <UICheckout />
    </MasterPage>
  );
};

export default checkout;
