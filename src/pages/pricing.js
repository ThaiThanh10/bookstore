import "../styles/global.css";

import MasterPage from "@/components/master";
import dynamic from "next/dynamic";

const UIPricingTable = dynamic(() => import("@/components/website/pages/UIPricingTable"));

const pricing = () => {
  return (
    <MasterPage title='Pricing Table' >
      <UIPricingTable />
    </MasterPage>
  );
};

export default pricing;
