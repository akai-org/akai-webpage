import Document, { Html, Head, Main, NextScript } from "next/document";
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="pl">
        <Head>
          {/* <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{__html: `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);};gtag('js', new Date());gtag('config', '${process.env.GOOGLE_TRACKING_ID}');`}}
          /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;