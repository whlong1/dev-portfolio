import { useRive, Layout, Fit, Alignment } from '@rive-app/react-canvas'

interface AnimatedHamburgerProps {
  handleMenu: () => void;
  transitionComplete: boolean;
}
const AnimatedHamburger = ({ handleMenu, transitionComplete }: AnimatedHamburgerProps) => {
  const { RiveComponent } = useRive({
    autoplay: true,
    stateMachines: "State Machine 1",
    src: "assets/animations/hamburger.riv",
    layout: new Layout({
      fit: Fit.Fill,
      alignment: Alignment.Center,
    }),
  })

  return (
    <div
      onClick={handleMenu}
      className="hamburger-container animated"
      style={!transitionComplete ? { pointerEvents: "none" } : {}}
    >
      <RiveComponent />
    </div>

  )
}

export default AnimatedHamburger