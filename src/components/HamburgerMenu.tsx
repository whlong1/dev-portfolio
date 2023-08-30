// React
import { useState, useEffect } from "react"

// Components
import NavLinks from "./NavLinks"
import SocialLinks from "./SocialLinks"
import StaticHamburger from "./StaticHamburger"

const HamburgerMenu = () => {
  const [open, setOpen] = useState(false)
  const toggleStyle = `${open ? "open" : ""}`

  const handleResize = () => setOpen(false)
  const handleMenu = () => setOpen((prev) => !prev)

  useEffect(() => {
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <>
      <div className={`menu-wrapper ${toggleStyle}`}>
        <div className={`menu ${toggleStyle}`}>
          <NavLinks handleResize={handleResize} />
          <SocialLinks />
        </div>
      </div>
      <StaticHamburger handleMenu={handleMenu} />
    </>
  )
}

export default HamburgerMenu