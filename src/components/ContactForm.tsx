import { useState } from 'react'

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

const ContactForm = () => {
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
      console.log('Data', formData)

      // setPending(true)

      const res = await fetch('/api/email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      // setPending(false)

      console.log('Res', await res.json())
      setFormData(initialState)
    } catch (err) {
      setPending(false)
      console.log(err)
    }
  }

  // if (pending) return (
  //   <div className="pending">
  //     <h6>Pending</h6>
  //   </div>
  // )

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
      <button type="submit" onClick={() => setPending(!pending)}>
        SEND
      </button>
      <h6>PENDING</h6>
    </form>
  )
}

export default ContactForm