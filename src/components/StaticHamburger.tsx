import Image from "next/image"

interface StaticHamburgerProps { handleMenu: () => void; }
const StaticHamburger = ({ handleMenu }: StaticHamburgerProps) => {
  return (
    <div className="hamburger-container">
      <Image
        width={36}
        height={28}
        alt="Hamburger icon"
        onClick={handleMenu}
        src="/assets/icons/hamburger.svg"
      />
    </div>
  )
}

export default StaticHamburger