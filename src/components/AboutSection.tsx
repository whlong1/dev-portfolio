// Components
import AnimatedLogo from "./AnimatedLogo"

const AboutSection = () => {
  return (
    <section className="content split-layout" id="about">
      <div>
        <h6>FULL-STACK DEVELOPER</h6>
        <h1>HUNTER LONG</h1>
        <p>
          As a full-stack software engineer with an extensive background in design, I bring a unique blend of creativity and technical expertise to the table. In my role as a Senior Instructional Associate at General Assembly, I develop new content in the software engineering curriculum and provide mentorship to aspiring developers. My focus is on crafting innovative digital products that balance aesthetic appeal with user-centric functionality.
        </p>
        <div className="cta-container">
          <a className="button" href="#contact">
            GET IN TOUCH
          </a>
          <a className="button" href="/assets/documents/hunterlong-resume-v8.pdf" target="_blank" rel="noopener noreferrer">
            RESUME
          </a>
        </div>
      </div>
      <div>
        <AnimatedLogo />
      </div>
    </section>
  )
}

export default AboutSection