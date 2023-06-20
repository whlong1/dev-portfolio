import { useState } from 'react'
import { EmailFormData } from "@/types/forms"
import { handleErrorMsg } from '@/types/validators'
import { sendEmailService } from '@/services/emailService'

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  message: '',
}

const ContactForm = () => {
  const [message, setMessage] = useState('')
  const [pending, setPending] = useState(false)
  const [formData, setFormData] = useState<EmailFormData>(initialState)

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
      }, 2000)
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
    <form onSubmit={handleSubmit} className={pending ? "pending" : ""}>
      <div className="form-row">
        <div className="form-column">
          <label htmlFor="firstName">
            FIRST NAME
          </label>
          <input
            // required
            type="text"
            id="firstName"
            name="firstName"
            onChange={handleChange}
            value={formData.firstName}
          />
        </div>
        <div className="form-column">
          <label htmlFor="lastName">
            LAST NAME
          </label>
          <input
            // required
            type="text"
            id="lastName"
            name="lastName"
            onChange={handleChange}
            value={formData.lastName}
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-column">
          <label htmlFor="email">
            EMAIL
          </label>
          <input
            // required
            type="email"
            id="email"
            name="email"
            onChange={handleChange}
            value={formData.email}
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-column">
          <label htmlFor="message">
            MESSAGE
          </label>
          <textarea
            // required
            id="message"
            name="message"
            onChange={handleChange}
            value={formData.message}
          />
        </div>
      </div>


      <div className={`status-container ${message ? "show-message" : ""}`}>
        <button type="submit">
          <p>SEND</p>
          <img id="pending-icon" src="assets/tech/react.svg" alt="" />
          <img id="sent-icon" src="assets/tech/node.svg" alt="" />
        </button>

        <h6 id="status-pending">
          PENDING
        </h6>

        <h6 id="status-sent">
          {message}
        </h6>

      </div>

    </form>
  )
}

export default ContactForm