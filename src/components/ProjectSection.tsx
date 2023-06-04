import projectDataArray from "@/data/data.json"

interface SingleProject {
  id: number,
  title: string,
  description: string,
  technologies: string[],
  deployment: string,
  github: string,
  images: string[]
}

const ProjectSection = () => {
  const projects: SingleProject[] = projectDataArray

  return (
    <section id="projects">
      <h2>Recent Projects</h2>
      <p>Lorem</p>

      {projects.map((project) => (
        <article key={project.id}>
          <h3>{project.title}</h3>
        </article>
      ))}

    </section>
  )
}

export default ProjectSection