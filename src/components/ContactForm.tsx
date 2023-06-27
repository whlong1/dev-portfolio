import { useState } from 'react'
import { EmailFormData } from "@/types/forms"
import { handleErrorMsg } from '@/types/validators'
import { sendEmailService } from '@/services/emailService'

import FormRow from './FormRow'
import FormColumn from './FormColumn'

const initialState = {
  email: '',
  message: '',
  lastName: '',
  firstName: '',
}

const ContactForm = () => {
  const [message, setMessage] = useState('')
  const [pending, setPending] = useState(false)
  const [formData, setFormData] = useState<EmailFormData>(initialState)
  const formClassNames = `${pending ? "pending-state" : ""} ${message ? "message-state" : ""}`

  const handleChange = (
    { target }: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [target.name]: target.value })
  }

  const handleSubmit = async (evt: React.FormEvent): Promise<void> => {
    evt.preventDefault()
    try {
      setPending(true)
      const emailData = await sendEmailService(formData)
      setTimeout(() => {
        setMessage(emailData.message)
      }, 3000)
      setFormData(initialState)
    } catch (error) {
      handleErrorMsg(error, setMessage)
    } finally {
      setTimeout(() => {
        setMessage("")
        setPending(false)
      }, 8000)
    }
  }

  return (
    <form onSubmit={handleSubmit} className={formClassNames}>
      <FormRow>
        <FormColumn
          type="text"
          name="firstName"
          label="FIRST NAME"
          value={formData.firstName}
          handleChange={handleChange}
        />
        <FormColumn
          type="text"
          name="lastName"
          label="LAST NAME"
          value={formData.lastName}
          handleChange={handleChange}
        />
      </FormRow>
      <FormRow>
        <FormColumn
          type="email"
          name="email"
          label="EMAIL"
          value={formData.email}
          handleChange={handleChange}
        />
      </FormRow>
      <FormRow>
        <FormColumn
          type="textarea"
          name="message"
          label="MESSAGE"
          value={formData.message}
          handleChange={handleChange}
        />
      </FormRow>


      <section className="status-container">
        <button type="submit">
          <p id="btn-inner-text">
            SEND
          </p>
          <img
            id="pending-icon"
            src="assets/tech/spinner.svg"
            alt={pending ? "Loading" : ""}
          />
        </button>

        <div id="status-sent">
          <img src="assets/tech/check.svg" alt="Success" />
          <h3>SUCCESS</h3>
          <p>A confirmation email has been sent to whunterlong@gmail.com</p>
        </div>
      </section>

    </form>
  )
}

export default ContactForm