import AnimatedLogo from "./AnimatedLogo"
const AboutSection = () => {
  return (
    <section className="content split-layout" id="about">
      <div>
        <h6>FULL-STACK DEVELOPER</h6>
        <h1>HUNTER LONG</h1>
        <p>
          As a full-stack software engineer with an extensive background in design, I bring a unique blend of creativity and technical expertise to the table. In my role as a Senior Instructional Associate at General Assembly, I teach and mentor aspiring developers. My focus is on creating digital products that balance aesthetic appeal with user-centric functionality.
        </p>
        <div className="cta-container">
          <button>GET IN TOUCH</button>
          <button>RESUME</button>
        </div>
      </div>
      <div>
        <AnimatedLogo />
      </div>
    </section>
  )
}

export default AboutSection