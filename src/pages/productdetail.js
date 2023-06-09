import "../styles/global.css";

import MasterPage from "@/components/master";
import dynamic from "next/dynamic";

const UIProduct = dynamic(() => import("@/components/website/pages/UIProduct"));

const productdetail = () => {
  return (
    <MasterPage >
      <UIProduct  />
    </MasterPage>
  );
};

export default productdetail;
