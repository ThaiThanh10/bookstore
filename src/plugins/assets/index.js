import CONFIG from "web.config";

const asset = (src) => {
  let isEnabledCDN = false;

  let isEnableBasePath = false;
  // if (isEnabledCDN == false && CONFIG.NEXT_PUBLIC_BASE_PATH) {
  //   isEnableBasePath = true;
  // }

  function getSrc() {
    if (isEnabledCDN) {
      src = src.replace(CONFIG.NEXT_PUBLIC_CDN_BASE_PATH + "/public", "");
      return `${CONFIG.NEXT_PUBLIC_CDN_BASE_PATH}/public${CONFIG.NEXT_PUBLIC_VERSION_CDN}${src}`;
    } else {
      if (isEnableBasePath) {
        src = src.replace("/" + CONFIG.NEXT_PUBLIC_BASE_PATH, "");
        return CONFIG.NEXT_PUBLIC_BASE_PATH + src;
        // console.log("🚀src---->", src);
        // return "https://bookstore-i3yw.vercel.app" + "/" + src;
      } else {
        return "https://bookstore-i3yw.vercel.app" + "/" + src;
      }
    }
  }

  return getSrc();
};

export default asset;
