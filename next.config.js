const basePath = process.env.BASE_PATH || "";

module.exports = {
  devIndicators: {
    autoPrerender: false,
  },
  target: "server",
  assetPrefix: basePath,
};
