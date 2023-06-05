import Head from "next/head"
import AboutSection from "@/components/AboutSection"
import ProjectSection from "@/components/ProjectSection"
import SkillsSection from "@/components/SkillsSection"
import ContactSection from "@/components/ContactSection"

const Home = () => {
  return (
    <>
      <Head>
        <title>Hunter Long Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <AboutSection />
        <ProjectSection />
        <SkillsSection />
        <ContactSection />
      </main>
    </>
  )
}

export default Home