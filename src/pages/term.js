import "../styles/global.css";

import MasterPage from "@/components/master";
import dynamic from "next/dynamic";

const UITerm = dynamic(() => import("@/components/website/pages/UITerm"));

const pricing = () => {
  return (
    <MasterPage title='Term & Conditions' >
      <UITerm />
    </MasterPage>
  );
};

export default pricing;
