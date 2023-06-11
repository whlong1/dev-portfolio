const ContactForm = () => {
  return (
    <form action="">
      <div className="form-row">
        <div className="form-column">
          <label htmlFor="firstName">FIRST NAME</label>
          <input type="text" id="firstName" name="firstName" />
        </div>
        <div className="form-column">
          <label htmlFor="lastName">LAST NAME</label>
          <input type="text" id="lastName" name="lastName" />
        </div>
      </div>

      <div className="form-row">
        <div className="form-column">
          <label htmlFor="email">EMAIL</label>
          <input type="text" id="email" name="email" />
        </div>
      </div>

      <div className="form-row">
        <div className="form-column">
          <label htmlFor="message">MESSAGE</label>
          <input type="text" id="message" name="message" />
        </div>
      </div>

      <button type="submit">SEND</button>
    </form>
  )
}

export default ContactForm