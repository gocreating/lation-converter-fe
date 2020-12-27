import { useState } from 'react'
import Form from 'react-bootstrap/Form'
import { encode, decode } from 'js-base64'
import AppLayout from '../components/AppLayout'

const Base64Page = () => {
  const [text, setText] = useState('')
  const [base64, setBase64] = useState('')
  return (
    <AppLayout title="Base64">
      <h3>Base64轉換服務</h3>
      <Form>
        <Form.Group controlId="rawContent">
          <Form.Label>明文</Form.Label>
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
          <Form.Label>Base64編碼</Form.Label>
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

export default Base64Page