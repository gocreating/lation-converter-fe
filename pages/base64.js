import { useState } from 'react'
import Form from 'react-bootstrap/Form'
import { encode, decode } from 'js-base64'
import AppLayout from '../components/AppLayout'
import { withTranslation } from '../i18n'

const Base64Page = ({ t }) => {
  const [text, setText] = useState('')
  const [base64, setBase64] = useState('')
  return (
    <AppLayout title={t('base64.title')}>
      <h3>{t('base64.title')}</h3>
      <Form>
        <Form.Group controlId="rawContent">
          <Form.Label>{t('base64.decoded')}</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            onChange={(e) => {
              setText(e.target.value)
              try {
                setBase64(encode(e.target.value))
              } catch {
                setBase64('')
              }
            }}
            value={text}
          />
        </Form.Group>
        <Form.Group controlId="base64Content">
          <Form.Label>{t('base64.encoded')}</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            onChange={(e) => {
              setBase64(e.target.value)
              try {
                setText(decode(e.target.value))
              } catch {
                setText('')
              }
            }}
            value={base64}
          />
        </Form.Group>
      </Form>
    </AppLayout>
  )
}


Base64Page.getInitialProps = async () => ({
  namespacesRequired: ['common'],
})

export default withTranslation('common')(Base64Page)