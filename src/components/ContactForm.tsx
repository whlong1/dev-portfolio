import { useState } from "react"
import { Status } from "@/types/status"
import { EmailFormData } from "@/types/forms"
import { handleErrorMsg } from '@/types/validators'
import { sendEmailService } from '@/services/emailService'

import FormColumn from "./FormColumn"
import AnimatedButton from "./AnimatedButton"

const initialState = {
  email: "",
  message: "",
  lastName: "",
  firstName: "",
}

const ContactForm = () => {
  const [message, setMessage] = useState("")
  const [status, setStatus] = useState<Status>("")
  const [formData, setFormData] = useState<EmailFormData>(initialState)
  const formClassNames = `${status ? "pending-state" : ""} ${message ? "message-state" : ""}`

  const handleChange = (
    { target }: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [target.name]: target.value })
  }

  const handleSubmit = async (evt: React.FormEvent): Promise<void> => {
    evt.preventDefault()
    try {
      setStatus("pending")
      const emailData = await sendEmailService(formData)
      setTimeout(() => {
        setStatus("success")
        setFormData(initialState)
        setMessage(emailData.message)
      }, 3000)
    } catch (error) {
      setTimeout(() => {
        setStatus("error")
        handleErrorMsg(error, setMessage)
      }, 3000)
    } finally {
      setTimeout(() => { setStatus(""); setMessage("") }, 8000)
    }
  }

  return (
    <form onSubmit={handleSubmit} className={formClassNames}>
      <div className="form-row two-column">
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
      </div>
      <div className="form-row">
        <FormColumn
          type="email"
          name="email"
          label="EMAIL"
          value={formData.email}
          handleChange={handleChange}
        />
      </div>
      <div className="form-row">
        <FormColumn
          type=""
          name="message"
          label="MESSAGE"
          value={formData.message}
          handleChange={handleChange}
        />
      </div>
      <AnimatedButton message={message} status={status} />
    </form>
  )
}

export default ContactForm