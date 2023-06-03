import Head from "next/head"

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
        <section id="projects"></section>
        <section id="skills"></section>
        <section id="contact"></section>
      </main>
    </>
  )
}

export default Home