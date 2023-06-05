import { Project } from "@/types/models"

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <article>
      <section>
        <header>
          <h3>{project.title}</h3>
          <a href={project.github}>
            <img src="/vercel.svg" alt="GitHub Logo" />
          </a>
        </header>
        <p>{project.description}</p>
        <ul>
          {project.technologies.map((tech, idx) => (
            <li key={idx}>{tech}</li>
          ))}
        </ul>
      </section>
      <section>
        {project.images.map((image, idx) => (
          <img key={idx} src={image.src} alt={image.alt} />
        ))}
      </section>
    </article>
  )
}

export default ProjectCard