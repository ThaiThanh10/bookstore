import "../styles/global.css";

import MasterPage from "@/components/master";
import dynamic from "next/dynamic";

const UIOrder = dynamic(() => import("@/components/website/pages/UIOrder"));

const order = () => {
  return (
    <MasterPage title='Order' >
      <UIOrder />
    </MasterPage>
  );
};

export default order;
