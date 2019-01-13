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
        <link rel="icon" type="image/x-icon" href="/static/favicon.ico" />
        <link href="https://fonts.googleapis.com/css?family=Abril+Fatface|Merriweather:700|Quicksand:400,500,700" rel="stylesheet" />
            <Global styles={Styles} />
           
        </Head>
        
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}