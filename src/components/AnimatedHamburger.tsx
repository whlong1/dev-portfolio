import { useRive, Layout, Fit, Alignment } from '@rive-app/react-canvas'

const AnimatedHamburger = () => {
  const { RiveComponent } = useRive({
    autoplay: true,
    stateMachines: "State Machine 1",
    src: "assets/animations/hamburger.riv",
    layout: new Layout({
      fit: Fit.Fill,
      alignment: Alignment.Center,
    }),
  })

  return <RiveComponent />
}

export default AnimatedHamburger