import "../styles/global.css";

import MasterPage from "@/components/master";
import dynamic from "next/dynamic";

const UIShopList = dynamic(() => import("@/components/website/pages/UIShopList/UIShopList"));

const shoplist = () => {
  return (
    <MasterPage title='Shop' >
      <UIShopList />
    </MasterPage>
  );
};

export default shoplist;
