module.exports = {
  lang: "pl",
  siteUrl: "https://akai.org.pl",
  website: "akai.org.pl",
  title: "AKAI",
  description: "AKAI Homepage",
  keywords: [],
  manifest: {
    name: "manifest.json",
    options: {
      title: "AKAI",
      short_name: `AKAI`,
      name: "AKAI",
      description: "AKAI Homepage",
      start_url: `/`,
      background_color: `#f9a11b`,
      theme_color: `#f9a11b`,
      display: `standalone`,
      manifest_version: 2,
      icons: [
        {
          src: "/favicon.ico",
          sizes: "48x48",
          type: "image/x-icon",
        },
      ],
    },
  },
  preconnect: [
    "https://www.googletagmanager.com",
    "https://fonts.googleapis.com",
    "https://fonts.gstatic.com",
  ],
  fonts: ["https://fonts.googleapis.com/css?family=Quicksand:400,600,700"],
};
