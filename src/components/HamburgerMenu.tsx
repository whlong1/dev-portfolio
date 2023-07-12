import { useState } from 'react'

import NavLinks from "./NavLinks"
import SocialLinks from './SocialLinks'

const HamburgerMenu = () => {
  const [open, setOpen] = useState(true)
  const toggleStyle = `${open ? 'open' : ''}`
  return (
    <>
      <div className={`menu-wrapper ${toggleStyle}`}>
        <div className={`menu ${toggleStyle}`}>
          <NavLinks />
          <SocialLinks />
        </div>
      </div>
      <button onClick={() => setOpen((prev) => !prev)}>
        <img src="assets/icons/hamburger.svg" alt="Open Menu" />
      </button>
    </>
  )
}

export default HamburgerMenu