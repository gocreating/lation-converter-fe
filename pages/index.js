import AppLayout from '../components/AppLayout'
import { withTranslation } from '../i18n'

const HomePage = ({ t }) => {
  return (
    <AppLayout>
      <p>{t('home.description')}</p>
      <img src="https://media.giphy.com/media/gtoONZQegPnPy/giphy.gif" />
    </AppLayout>
  )
}

HomePage.getInitialProps = async () => ({
  namespacesRequired: ['common'],
})

export default withTranslation('common')(HomePage)