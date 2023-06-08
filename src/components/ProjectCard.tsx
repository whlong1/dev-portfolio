import { Project } from "@/types/models"

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <article className="card split-layout">
      <section className="detail-container">
        <header>
          <h3>{project.title}</h3>
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            <img className="card-header-icon" src="/vercel.svg" alt="GitHub Logo" />
          </a>
        </header>
        <p>{project.description}</p>
        <ul>
          {project.technologies.map((tech, idx) => (
            <li key={idx}>{tech}</li>
          ))}
        </ul>
      </section>
      <section className="preview-container">
        {project.images.map((image, idx) => (
          <img key={idx} src={image.src} alt={image.alt} />
        ))}
      </section>
    </article>
  )
}

export default ProjectCard