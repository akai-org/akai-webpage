const basePath = process.env.BASE_PATH || "";

const withOptimizedImages = require("next-optimized-images");

module.exports = withOptimizedImages({
  devIndicators: {
    autoPrerender: false,
  },
  target: "server",
  basePath,
  assetPrefix: basePath,
  dynamicAssetPrefix: true,
});
