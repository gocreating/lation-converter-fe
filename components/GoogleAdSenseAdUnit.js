import { useEffect } from 'react'
import Head from 'next/head'

export const adUnitIdMap = {
  adunit_converter_index_banner: '1922322690',
}

const GoogleAdSenseAdUnit = ({ adUnitId }) => {
  useEffect(() => {
    (window.adsbygoogle = window.adsbygoogle || []).push({})
  }, [])
  return (
    <>
      <Head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" />
      </Head>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-3783614920655833"
        data-ad-slot={adUnitId}
        data-ad-format="auto"
        data-full-width-responsive="true"
        data-adtest={process.env.NODE_ENV === 'development' ? 'on' : 'off'}
      />
    </>
  )
}

GoogleAdSenseAdUnit.defaultProps = {
  adUnitId: adUnitIdMap.adunit_converter_index_banner,
}

export default GoogleAdSenseAdUnit
