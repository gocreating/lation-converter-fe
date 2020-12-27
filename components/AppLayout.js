import Head from 'next/head'
import Link from 'next/link'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { GoogleAdSenseHeader, GoogleAdSenseAdUnit, adUnitIdMap } from '../components/GoogleAdSense'
import 'bootstrap/dist/css/bootstrap.min.css'

const AppLayout = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{`${title} | Lation`}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GoogleAdSenseHeader />
      <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
        <Container>
          <Link href="/" passHref>
            <Navbar.Brand>全台最大的線上成人轉換服務平台</Navbar.Brand>
          </Link>
        </Container>
      </Navbar>
      <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Link href="/base64" passHref>
                <Nav.Link>Base64服務</Nav.Link>
              </Link>
              <Link href="/pricing" passHref>
                <Nav.Link disabled>訂價</Nav.Link>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
        {children}
        <GoogleAdSenseAdUnit adUnitId={adUnitIdMap.adunit_converter_index_banner} />
      </Container>
    </>
  )
}

AppLayout.defaultProps = {
  title: '全台最大的線上成人轉換服務平台',
}

export default AppLayout