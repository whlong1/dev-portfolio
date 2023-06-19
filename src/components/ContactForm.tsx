import { useState } from 'react'

import {
  ErrorResponse,
  SuccessResponse,
} from "@/types/email"

interface FormData {
  firstName: string,
  lastName: string,
  email: string,
  message: string,
}

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  message: '',
}

const sendEmailService = async (formData: FormData) => {
  try {
    return await fetch('/api/email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
  } catch (error) {
    console.error('Error in sendEmailService:', error)
    throw error
  }
}

const ContactForm = () => {
  const [msg, setMsg] = useState('')
  const [pending, setPending] = useState(false)
  const [formData, setFormData] = useState<FormData>(initialState)

  const handleChange = (
    { target }: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [target.name]: target.value })
  }

  const handleSubmit = async (evt: React.FormEvent): Promise<void> => {
    evt.preventDefault()
    try {
      setPending(true)
      const res = await sendEmailService(formData)

      if (!res.ok) {
        const data: ErrorResponse = await res.json()
        throw new Error(data.error)
      }

      const data: SuccessResponse = await res.json()

      setMsg(data.msg)
      setFormData(initialState)

    } catch (error) {
      console.log(error)
      setMsg("An error occurred while sending your message.")
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

      {msg && msg}

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