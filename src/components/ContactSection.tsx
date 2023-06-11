const ContactSection = () => {

  return (
    <section className="split-layout" id="contact">
      <div>
        <h2>CONTACT</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
        </p>
        <ul>
          <li>
            <a href="">
              <img src="/assets/tech/linkedin.svg" alt="LinkedIn" />
              LinkedIn
            </a>
          </li>
          <li>
            <a href="">
              <img src="/assets/tech/github.svg" alt="GitHub" />
              GitHub
            </a>
          </li>
          <li>
            <a href="">
              <img src="/assets/tech/email.svg" alt="Email" />
              Email
            </a>
          </li>
        </ul>
      </div>

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

    </section>
  )
}

export default ContactSection