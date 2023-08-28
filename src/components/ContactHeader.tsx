import SocialLinks from "./SocialLinks"

const ContactHeader = () => {
  return (
    <header>
      <h2>CONTACT</h2>
      <p className="section-blurb">
        Want to connect? Feel free to contact me through LinkedIn, GitHub, or email. For your convenience, you can also use this form to send a message. Looking forward to hearing from you!
      </p>
      <SocialLinks />
    </header>
  )
}

export default ContactHeader