import "../styles/global.css";

import MasterPage from "@/components/master";
import dynamic from "next/dynamic";

const UIAbout = dynamic(() => import("@/components/website/pages/UIAbout"));

const about = () => {
  return (
    <MasterPage title='About Us' >
      <UIAbout />
    </MasterPage>
  );
};

export default about;
