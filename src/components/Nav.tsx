import Link from 'next/link'


const Nav = () => {
  return (
    <nav>
      <ul>
        <li><Link href="/">LOGO</Link></li>
        <li><Link href="#about">ABOUT</Link></li>
        <li><Link href="#projects">PROJECTS</Link></li>
        <li><Link href="#skills">SKILLS</Link></li>
        <li><Link href="#contact">CONTACT</Link></li>
      </ul>
      <button>
        <img src="assets/icons/hamburger.svg" alt="Open Menu" />
      </button>
    </nav>
  )
}

export default Nav