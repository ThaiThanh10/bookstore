import "@/styles/global.css";

import MasterPage from "@/components/master";
import dynamic from "next/dynamic";
const UIDashboard = dynamic(() =>
  import("@/components/website/pages/UIAccount/UIDashboard")
);
const UIAccount = dynamic(() =>
  import("@/components/website/pages/UIAccount/UIAccount")
);

const account = () => {
  return (
    <MasterPage title="My Account ">
      <div className="container flex items-start mt-[90px] ">
        <UIAccount />
        <UIDashboard />
      </div>
    </MasterPage>
  );
};

export default account;
