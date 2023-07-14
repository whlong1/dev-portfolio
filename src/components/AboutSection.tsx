const AboutSection = () => {

  return (
    <section className="content split-layout" id="about">
      <div>
        <h6>FULL-STACK DEVELOPER</h6>
        <h1>HUNTER LONG</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="cta-container">
          <button>GET IN TOUCH</button>
          <button>RESUME</button>
        </div>
      </div>
      <div>
        <img
          className="logo"
          src="assets/branding/logo.svg"
          alt="An illustration of Hunter Long"
        />
      </div>
    </section>
  )
}

export default AboutSection