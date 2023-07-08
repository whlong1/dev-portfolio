import ContactHeader from "./ContactHeader"
import ContactForm from "./ContactForm"

const ContactSection = () => {
  return (
    <div className="background-wrapper">
      <section className="content split-layout" id="contact">
        <ContactHeader />
        <ContactForm />
      </section>
    </div>
  )
}

export default ContactSection