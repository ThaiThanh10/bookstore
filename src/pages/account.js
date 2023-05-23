import "../styles/global.css";

import MasterPage from "@/components/master";
import dynamic from "next/dynamic";

const UIAccount = dynamic(() => import("@/components/website/pages/UIAccount"));

const account = () => {
  return (
    <MasterPage title='My Account ' >
      <UIAccount />
    </MasterPage>
  );
};

export default account;
