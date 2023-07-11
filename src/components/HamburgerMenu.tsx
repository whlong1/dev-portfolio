import { useState } from 'react'
import NavLinks from "./NavLinks"

const HamburgerMenu = () => {
  const [open, setOpen] = useState(true)
  return (
    <>
      {open &&
        <div className="menu-wrapper">
          <NavLinks />
        </div>
      }
      <button onClick={() => setOpen((prev) => !prev)}>
        <img src="assets/icons/hamburger.svg" alt="Open Menu" />
      </button>
    </>
  )
}

export default HamburgerMenu