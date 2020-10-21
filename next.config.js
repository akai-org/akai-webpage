const withPWA = require("next-pwa");
const isProd = process.env.NODE_ENV === 'production'

module.exports = withPWA({
  distDir: 'build-node',
  // reactStrictMode: true,
  devIndicators: {
    autoPrerender: false,
  },
  target: "serverless",
  // webpack: (config, { isServer }) => {
  //   if (isServer) {
  //     require("./scripts/generate-sitemap");
  //     require("./scripts/build-manifest");
  //   }
  //   return config;
  // },
  pwa: {
    disable: process.env.NODE_ENV === "development",
    dest: "public",
  },
});