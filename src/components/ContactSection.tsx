import SocialLinks from "./SocialLinks"
import ContactForm from "./ContactForm"

const ContactSection = () => {
  return (
    <section className="split-layout" id="contact">
      <div>
        <h2>CONTACT</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Quis ipsum suspendisse ultrices gravida.
        </p>
        <SocialLinks />
      </div>
      <ContactForm />
    </section>
  )
}

export default ContactSection