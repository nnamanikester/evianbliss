import { Head, Html, Main, NextScript } from "next/document";
import Script from "next/script";

const Document = () => {
  return (
    <Html lang="en-US">
      <Head>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-ZKNLHHRRQH"
        />
        <Script strategy="afterInteractive" id="google-analytics">
          {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-ZKNLHHRRQH');
          `}
        </Script>
        <link
          href="https://cdn.lineicons.com/3.0/lineicons.css"
          rel="stylesheet"
        />
        <link
          href="https://unpkg.com/ionicons@4.5.10-0/dist/css/ionicons.min.css"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
