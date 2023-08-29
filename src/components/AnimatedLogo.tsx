import { useRive, Layout, Fit, Alignment } from '@rive-app/react-canvas'

const AnimatedLogo = () => {
  const { RiveComponent } = useRive({
    autoplay: true,
    stateMachines: "State Machine 1",
    src: "assets/animations/bounce.riv",
    layout: new Layout({
      fit: Fit.Contain,
      alignment: Alignment.Center,
    }),
  })

  const staticLogo = (
    <img
      className="logo-static"
      src="assets/branding/logo.svg"
      alt="An illustration of Hunter Long"
    />
  )

  return (
    <>
      {staticLogo}
      <div className="rive-container">
        <RiveComponent />
      </div>

    </>
  )
}

export default AnimatedLogo