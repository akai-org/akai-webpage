import React from "react";
import Head from "next/head";
import meta from "../../config";
const SEO = () => {
  return (
    <Head>
      <title>{meta.title}</title>
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content={meta.title} />
      <meta property="og:url" content={meta.url} />
      <meta property="og:description" content={meta.descr} />
      <meta property="og:image" content={meta.url + meta.img} />
      <meta property="og:site_name" content={meta.name} />
      <meta property="og:type" content="website" />

      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.descr} />
      <meta name="twitter:image" content={meta.url + meta.img} />
      <meta name="twitter:site" content={meta.url} />
      <meta name="twitter:card" content="summary" />

      <meta name="description" content={meta.descr} />
      <meta name="keywords" content={meta.keywords.join(",")} />
      <meta name="theme-color" content="#f9a11b" />
      <link rel="image_src" href={meta.img} />
      <link rel="shortcut icon" href="/favicon.ico" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/favicon.ico" />
      <link rel="robots" href="/robots.txt" />
      <link rel="manifest" href="/manifest.json" />
      <link rel="sitemap" type="application/xml" href="/sitemap.xml" />

      {meta.preconnect.map((v) => (
        <link key={v} rel="preconnect dns-prefetch" href={v} />
      ))}
      {meta.fonts.map((v) => (
        <React.Fragment key={v}>
          <link rel="preload" as="style" href={v} />
          <link rel="stylesheet" href={v} />
        </React.Fragment>
      ))}
    </Head>
  );
};
export default SEO;
