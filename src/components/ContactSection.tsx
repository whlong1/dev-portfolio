import ContactHeader from "./ContactHeader"
import ContactForm from "./ContactForm"

const ContactSection = () => {
  return (
    <section className="split-layout" id="contact">
      <ContactHeader />
      <ContactForm />
    </section>
  )
}

export default ContactSection