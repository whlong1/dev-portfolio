import { useRive, Layout, Fit, Alignment } from '@rive-app/react-canvas'

const AnimatedLogo = () => {
  const { RiveComponent } = useRive({
    autoplay: true,
    stateMachines: "State Machine 1",
    src: "assets/branding/bounce.riv",
    layout: new Layout({
      fit: Fit.Contain,
      alignment: Alignment.Center,
    }),
  })

  const logoImg = (
    <img
      className="logo"
      src="assets/branding/logo.svg"
      alt="An illustration of Hunter Long"
    />
  )

  return (
    <RiveComponent />
  )
}

export default AnimatedLogo