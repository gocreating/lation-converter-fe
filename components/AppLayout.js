import Head from 'next/head'
import Container from 'react-bootstrap/Container'
import { GoogleAdSenseHeader, GoogleAdSenseAdUnit } from '../components/GoogleAdSense'
import { GoogleAnalyticsHeader } from './GoogleAnalytics'
import Navigation from './Navigation'
import { withTranslation } from '../i18n'
import { adUnitIdMap } from '../utils/config'
import 'bootstrap/dist/css/bootstrap.min.css'

const AppLayout = ({ t, title, titleSuffix, children }) => {
  titleSuffix = titleSuffix === false ? '' : t('site.titleSuffix')
  return (
    <>
      <Head>
        <title>{`${title}${titleSuffix}`}</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <GoogleAdSenseHeader />
      <GoogleAnalyticsHeader />
      <Navigation />
      <Container>
        {children}
      </Container>
      <Container style={{ marginTop: '2rem' }}>
        <GoogleAdSenseAdUnit adUnitId={adUnitIdMap.adunit_converter_banner} />
      </Container>
    </>
  )
}

AppLayout.getInitialProps = async () => ({
  namespacesRequired: ['common'],
})

export default withTranslation('common')(AppLayout)
