import "../styles/global.css";

import MasterPage from "@/components/master";
import dynamic from "next/dynamic";

const UIFaq = dynamic(() => import("@/components/website/pages/UIfaq/UIFaq"));

const faq = () => {
  return (
    <MasterPage title='FAQ' >
      <UIFaq />
    </MasterPage>
  );
};

export default faq;
