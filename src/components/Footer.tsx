import SocialLinks from "./SocialLinks"

const Footer = () => {
  const today = new Date()
  const year = today.getFullYear()
  return (
    <footer>
      <div className="details">
        <h6>HUNTER LONG</h6>
        <SocialLinks />
      </div>
      <div className="copyright">
        <p>© Copyright {year}</p>
      </div>
    </footer>
  )
}

export default Footer