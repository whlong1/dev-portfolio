import Head from "next/head"
import ProjectSection from "@/components/ProjectSection"

const Home = () => {
  return (
    <>
      <Head>
        <title>Hunter Long Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <section id="about">
          <h1>Hunter Long</h1>
        </section>
        <ProjectSection />
        <section id="skills"></section>
        <section id="contact"></section>
      </main>
    </>
  )
}

export default Home