// React
import { useState } from 'react'

// Components
import NavLinks from "./NavLinks"
import SocialLinks from './SocialLinks'
import AnimatedHamburger from './AnimatedHamburger'

const HamburgerMenu = () => {
  const [open, setOpen] = useState(false)
  const [transitionComplete, setTransitionComplete] = useState(true)
  const toggleStyle = `${open ? 'open' : ''}`

  const handleMenu = () => {
    if (!transitionComplete) return
    setTransitionComplete(false)
    setOpen((prev) => !prev)
    setTimeout(() => setTransitionComplete(true), 1000)
  }

  return (
    <>
      <div className={`menu-wrapper ${toggleStyle}`}>
        <div className={`menu ${toggleStyle}`}>
          <NavLinks />
          <SocialLinks />
        </div>
      </div>
      <div
        onClick={handleMenu}
        className="hamburger-container"
        style={!transitionComplete ? { pointerEvents: "none" } : {}}
      >
        <AnimatedHamburger />
      </div>
    </>
  )
}

export default HamburgerMenu