import Head from 'next/head'
import Container from 'react-bootstrap/Container'
import { GoogleAdSenseHeader, GoogleAdSenseAdUnit, adUnitIdMap } from '../components/GoogleAdSense'
import { GoogleAnalyticsHeader } from './GoogleAnalytics'
import Navigation from './Navigation'
import 'bootstrap/dist/css/bootstrap.min.css'

const AppLayout = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{`${title} | Converter`}</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <GoogleAdSenseHeader />
      <GoogleAnalyticsHeader />
      <Navigation />
      <Container>
        {children}
        <GoogleAdSenseAdUnit adUnitId={adUnitIdMap.adunit_converter_index_banner} />
      </Container>
    </>
  )
}

export default AppLayout