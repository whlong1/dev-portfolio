import SocialLinks from "./SocialLinks"
import ContactForm from "./ContactForm"

const ContactSection = () => {
  return (
    <section className="split-layout" id="contact">
      <div>
        <h2>CONTACT</h2>
        <p>
          Want to connect? Feel free to contact me through LinkedIn, GitHub, or email. For your convenience, you can also use this form to send a message. I can't wait to hear from you.
        </p>
        <SocialLinks />
      </div>
      <ContactForm />
    </section>
  )
}

export default ContactSection