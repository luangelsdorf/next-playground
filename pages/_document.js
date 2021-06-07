import Document, {Html, Head, Main, NextScript} from 'next/document'
import React from "react";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name="author" content="Luan Miguel Ferreira Gelsdorf"/>
          <meta charSet="utf-8" />
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css"/>
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
        </Head>
        <body>
        <Main/>
        <NextScript/>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js" />
        <script src="/js/external/web-animations.min.js" />
        </body>
      </Html>
    )
  }
}

export default MyDocument