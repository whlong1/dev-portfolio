import { useState } from 'react'
import Link from 'next/link'
import MobileNav from './MobileNav'

const Nav = () => {
  const [open, setOpen] = useState(true)

  return (
    <nav>
      <ul>
        <li><Link href="/">LOGO</Link></li>
        <li><Link href="#about">ABOUT</Link></li>
        <li><Link href="#projects">PROJECTS</Link></li>
        <li><Link href="#skills">SKILLS</Link></li>
        <li><Link href="#contact">CONTACT</Link></li>
      </ul>

      <button onClick={() => setOpen((prev) => !prev)}>
        <img src="assets/icons/hamburger.svg" alt="Open Menu" />
      </button>
      {open && <MobileNav />}

    </nav>
  )
}

export default Nav