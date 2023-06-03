import Link from 'next/link'

const Nav = () => {
  return (
    <nav>
      <ul>
        <li><Link href="#about">About</Link></li>
        <li><Link href="#projects">Projects</Link></li>
        <li><Link href="#skills">skills</Link></li>
        <li><Link href="#contact">Contact</Link></li>
      </ul>
    </nav>
  )
}

export default Nav
