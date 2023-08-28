// React
import { useState, useEffect } from 'react'

// Components
import NavLinks from "./NavLinks"
import SocialLinks from './SocialLinks'
import AnimatedHamburger from './AnimatedHamburger'

const HamburgerMenu = () => {
  const [open, setOpen] = useState(false)
  const [key, setKey] = useState(Math.random())
  const [transitionComplete, setTransitionComplete] = useState(true)
  const toggleStyle = `${open ? 'open' : ''}`

  const handleMenu = () => {
    if (!transitionComplete) return
    setTransitionComplete(false)
    setOpen((prev) => !prev)
    setTimeout(() => setTransitionComplete(true), 1000)
  }

  useEffect(() => {
    const handleResize = () => {
      setOpen(false)
      setKey(Math.random())
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

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
        <AnimatedHamburger key={key} />
      </div>
    </>
  )
}

export default HamburgerMenu