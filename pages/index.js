import Head from 'next/head'
import GoogleAdSenseAdUnit, { adUnitIdMap } from '../components/GoogleAdSenseAdUnit'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Converter | Lation</title>
        <link rel="icon" href="/favicon.ico" />
        <script
          data-ad-client="ca-pub-3783614920655833"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" />
      </Head>
      <h1>Welcome to lation converter!</h1>
      <GoogleAdSenseAdUnit adUnitId={adUnitIdMap.adunit_converter_index_banner} />
    </div>
  )
}
