import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  ssrender() {
    return (
      <Html>
        <Head>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="description" content="Awesome text-based calculator." />
          <script
            async
            defer
            data-website-id="ca6ebc81-33c3-4e00-8239-90b662fab77e"
            src="https://umami-cc.vercel.app/umami.js"
          />
          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6149850985266004"
            crossorigin="anonymous"
          ></script>
        </Head>

        <body className="h-full">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
