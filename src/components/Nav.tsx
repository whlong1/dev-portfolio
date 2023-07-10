import { useState } from 'react'
// import Link from 'next/link'

import NavLinks from './NavLinks'
import MobileNav from './MobileNav'

const Nav = () => {
  const [open, setOpen] = useState(true)

  return (
    <nav>
      <NavLinks />
      <button onClick={() => setOpen((prev) => !prev)}>
        <img src="assets/icons/hamburger.svg" alt="Open Menu" />
      </button>
      {open && <MobileNav />}

    </nav>
  )
}

export default Nav