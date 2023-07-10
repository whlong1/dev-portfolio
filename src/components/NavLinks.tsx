import Link from 'next/link'

const NavLinks = () => {
  return (
    <ul>
      <li><Link href="/">LOGO</Link></li>
      <li><Link href="#about">ABOUT</Link></li>
      <li><Link href="#projects">PROJECTS</Link></li>
      <li><Link href="#skills">SKILLS</Link></li>
      <li><Link href="#contact">CONTACT</Link></li>
    </ul>
  )
}

export default NavLinks