import Link from 'next/link'

const Nav = () => {
  return (
    <nav>
      <Link href="/">LOGO</Link>
      <ul>
        <li><Link href="#about">ABOUT</Link></li>
        <li><Link href="#projects">PROJECTS</Link></li>
        <li><Link href="#skills">SKILLS</Link></li>
        <li><Link href="#contact">CONTACT</Link></li>
      </ul>
    </nav>
  )
}

export default Nav