import Link from 'next/link'

const NavLinks = () => {
  return (
    <ul className="nav-links">
      <li id="nav-logo">
        <Link href="/">
          <img
            src="/assets/branding/logo.svg"
            alt="An illustration of Hunter Long"
          />
        </Link>
      </li>
      <li><Link href="#about">ABOUT</Link></li>
      <li><Link href="#projects">PROJECTS</Link></li>
      <li><Link href="#skills">SKILLS</Link></li>
      <li><Link href="#contact">CONTACT</Link></li>
    </ul>
  )
}

export default NavLinks