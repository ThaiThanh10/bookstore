import "@/styles/global.css";

import MasterPage from "@/components/master";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { DATA_PAGE_1 } from "@/components/website/pages/UIHomepage/DATA_PAGE_1";

const UIProduct = dynamic(() => import("@/components/website/pages/UIProduct"));

const productDetail = () => {
  const router = useRouter();
  const slug = router.query.slug;

  return (
    <MasterPage>
      {DATA_PAGE_1.map(
        (it, i) =>
          it.slug == slug && <UIProduct key={i} title={it.title} img={it.img} />
      )}
    </MasterPage>
  );
};

export default productDetail;
