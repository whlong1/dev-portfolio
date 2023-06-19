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
      setMessage(emailData.message)
      setFormData(initialState)
    } catch (error) {
      handleErrorMsg(error, setMessage)
    } finally {
      setPending(false)
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
            required
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
            required
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
            required
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
            required
            id="message"
            name="message"
            onChange={handleChange}
            value={formData.message}
          />
        </div>
      </div>

      {message && message}

      <div className="submit--status-container">
        <button type="submit">
          SEND
        </button>
        <h6>PENDING</h6>
      </div>

    </form>
  )
}

export default ContactForm