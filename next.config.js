/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  
};
// const withCSS = require("@zeit/next-css");
// module.exports = withCSS;
module.exports = nextConfig;
// module.exports = {
//   async redirects() {
//     return [
//       {
//         source: "/about",
//         destination: "/",
//         permanent: false,
//       },
//     ];
//   },
// };
