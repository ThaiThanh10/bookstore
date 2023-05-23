import "../styles/global.css";

import MasterPage from "@/components/master";
import dynamic from "next/dynamic";

const UIContact = dynamic(() => import("@/components/website/pages/UIContact"));

const contact = () => {
  return (
    <MasterPage title='Contact Information' >
      <UIContact />
    </MasterPage>
  );
};

export default contact;
