import Document, { Html, Head, Main, NextScript } from 'next/document'
import { FacebookMessengerHeader } from '../components/FacebookMessenger'
import { GoogleAdSenseHeader } from '../components/GoogleAdSense'
import { GoogleAnalyticsHeader } from '../components/GoogleAnalytics'

class LationDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <GoogleAdSenseHeader />
          <GoogleAnalyticsHeader />
        </Head>
        <body>
          <FacebookMessengerHeader />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default LationDocument
