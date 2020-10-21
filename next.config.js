const withPWA = require("next-pwa");
const isProd = process.env.NODE_ENV === 'production'

module.exports = withPWA({
  devIndicators: {
    autoPrerender: false,
  },
  target: "serverless",
  pwa: {
    disable: process.env.NODE_ENV === "development",
    dest: "public",
  },
});