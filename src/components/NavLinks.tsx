import Link from 'next/link'

interface NavLinksProps { handleResize?: () => void; }
const NavLinks = ({ handleResize }: NavLinksProps) => {
  return (
    <ul className="nav-links">

      <li id="nav-logo-li">
        <Link href="/">
          <img
            src="/assets/branding/logo.svg"
            alt="An illustration of Hunter Long"
          />
        </Link>
      </li>

      <li><Link onClick={() => handleResize && handleResize()} href="#about">ABOUT</Link></li>
      <li><Link onClick={() => handleResize && handleResize()} href="#projects">PROJECTS</Link></li>
      <li><Link onClick={() => handleResize && handleResize()} href="#skills">SKILLS</Link></li>
      <li><Link onClick={() => handleResize && handleResize()} href="#contact">CONTACT</Link></li>
    </ul>
  )
}

export default NavLinks