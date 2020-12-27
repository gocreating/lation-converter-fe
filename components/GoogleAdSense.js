import { useEffect } from 'react'
import Head from 'next/head'

const CLIENT_ID = 'ca-pub-3783614920655833'

export const adUnitIdMap = {
  adunit_converter_index_banner: '1922322690',
}

export const GoogleAdSenseHeader = () => {
  return (
    <Head>
      <script
        data-ad-client={CLIENT_ID}
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" />
    </Head>
  )
}

export const GoogleAdSenseAdUnit = ({ adUnitId }) => {
  useEffect(() => {
    (window.adsbygoogle = window.adsbygoogle || []).push({})
  }, [])
  return (
    <ins
      className="adsbygoogle"
      style={{ display: 'block' }}
      data-ad-client={CLIENT_ID}
      data-ad-slot={adUnitId}
      data-ad-format="auto"
      data-full-width-responsive="true"
      data-adtest={process.env.NODE_ENV === 'development' ? 'on' : 'off'}
    />
  )
}

GoogleAdSenseAdUnit.defaultProps = {
  adUnitId: adUnitIdMap.adunit_converter_index_banner,
}