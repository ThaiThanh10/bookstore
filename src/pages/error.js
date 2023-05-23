import "../styles/global.css";

import MasterPage from "@/components/master";
// import UIErrorPage from "@/components/website/pages/UIErrorPage";
import dynamic from "next/dynamic";

const UIErrorPage = dynamic(() => import("@/components/website/pages/UIErrorPage"));

const login = () => {
  return (
    <MasterPage title='Error' >
      <UIErrorPage />
    </MasterPage>
  );
};

export default login;
