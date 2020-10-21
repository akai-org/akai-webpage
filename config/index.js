module.exports = {
    lang: "pl",
    siteUrl: "https://akai.org.pl",
    website: "akai.org.pl",
    title: "AKAI ORG",
    description:
      "description",
    keywords: [    ],
    image_src: "/img/img_src.png",
    manifest: {
      name: "manifest.json",
      options: {
        title: "AKAI app",
        short_name: `akai app`,
        name: "akai app",
        description: "Front-end",
        start_url: `/`,
        background_color: `#0059b2`,
        theme_color: `#0059b2`,
        display: `standalone`,
        manifest_version: 2,
        icons: [
          {
            src: "/favicon.ico",
            sizes: "48x48",
            type: "image/x-icon",
          }
        ],
      },
    },
    author: {
      name: "",
      officialName: "",
      photo: "/img/author.jpg",
      bio: "Something informations",
      contacts: {
        email: "",
        webEmail: "",
        facebook: "",
        twitter: "",
        github: "",
        linkedin: "",
        instagram: "",
        youtube: "",
      },
    },
    preconnect:[
      "https://www.googletagmanager.com",
      "https://fonts.googleapis.com",
      "https://fonts.gstatic.com",
      // process.env.NEXT_PUBLIC_CDN_URL,
      // process.env.NEXT_PUBLIC_API_URL,
    ],
    fonts: [
      "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap",
      "https://fonts.googleapis.com/css?family=Montserrat&subset=latin-ext&display=swap",
    ],
    // scripts :[
    //   `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_TRACKING_ID}`,
    // ],
  };
  