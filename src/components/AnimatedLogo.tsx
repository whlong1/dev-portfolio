import Rive from "@rive-app/react-canvas"

//TODO Try out solution on optimizing Rive:
// https://pixelpoint.io/blog/rive-react-optimizations/
const AnimatedLogo = () => {
  return (
    <>
      <div className="static-logo-container">
        <img
          className="logo-static"
          src="assets/branding/logo.svg"
          alt="An illustration of Hunter Long"
        />
      </div>
      <div className="rive-container">
        <Rive src="assets/animations/bounce.riv" stateMachines={"State Machine 1"} />
      </div>
    </>
  )
}

export default AnimatedLogo