import { useState } from 'react'
import { EmailFormData } from "@/types/forms"
import { handleErrorMsg } from '@/types/validators'
import { sendEmailService } from '@/services/emailService'

import FormRow from "./FormRow"
import FormColumn from "./FormColumn"
import AnimatedButton from "./AnimatedButton"

const initialState = {
  email: "",
  message: "",
  lastName: "",
  firstName: "",
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
          type=""
          name="message"
          label="MESSAGE"
          value={formData.message}
          handleChange={handleChange}
        />
      </FormRow>
      <AnimatedButton pending={pending} />
    </form>
  )
}

export default ContactForm