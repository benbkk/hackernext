import Document, { Head, Main, NextScript } from 'next/document'
import { Global} from '@emotion/core'
import { Styles } from 'css/Styles'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <html>
        <Head>     
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="application-name" content="hacker-next" />
          <meta name="apple-mobile-web-app-title" content="hacker-next" />
          <meta name="theme-color" content="#FF6600" />
          <meta name="msapplication-navbutton-color" content="#FF6600" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
          <meta name="msapplication-starturl" content="/" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <link rel="manifest" href="/static/manifest.json" />     
          <link rel="icon" type="image/png" sizes="512x512" href="/static/icons/icon-512x512.png" />
          <link rel="apple-touch-icon" type="image/png" sizes="512x512" href="/static/icons/icon-512x512.png" />
          <link rel="icon" type="image/png" sizes="384x384" href="/static/icons/icon-384x384.png" />
          <link rel="apple-touch-icon" type="image/png" sizes="384x384" href="/static/icons/icon-384x384.png" />
          <link rel="icon" type="image/png" sizes="193x192" href="/static/icons/icon-192x192.png" />
          <link rel="apple-touch-icon" type="image/png" sizes="193x192" href="/static/icons/icon-192x192.png" />
          <link rel="icon" type="image/png" sizes="152x152" href="/static/icons/icon-152x152.png" />
          <link rel="apple-touch-icon" type="image/png" sizes="152x152" href="/static/icons/icon-152x152.png" />
          <link rel="icon" type="image.png" sizes="144x144" href="/static/icons/icon-144x144.png" />
          <link rel="apple-touch-icon" type="image.png" sizes="144x144" href="/static/icons/icon-144x144.png" />
          <link rel="icon" type="image/png" sizes="128x128" href="/static/icons/icon-128x128.png" />
          <link rel="apple-touch-icon" type="image/png" sizes="128x128" href="/static/icons/icon-128x128.png" />
          <link rel="icon" type="image/png" sizes="96x96" href="/static/icons/icon-96x96.png" />
          <link rel="apple-touch-icon" type="image/png" sizes="96x96" href="/static/icons/icon-96x96.png" />
          <link rel="icon" type="image/png" sizes="72x72" href="/static/icons/icon-72x72.png" />
          <link rel="apple-touch-icon" type="image/png" sizes="72x72" href="/static/icons/icon-72x72.png" />
          <link href="https://fonts.googleapis.com/css?family=Abril+Fatface|Merriweather:700|Quicksand:400,500,700" rel="stylesheet" />
        </Head>
        <Global styles={Styles} /> 
        
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
