import { Project } from "@/types/models"

interface DetailContainerProps {
  project: Project
}

const DetailContainer = ({ project }: DetailContainerProps) => {

  return (
    <section className="detail-container">
      <header>
        <h3>{project.title}</h3>
        <a href={project.github} target="_blank" rel="noopener noreferrer">
          <img
            className="card-header-icon"
            src="/assets/tech/github.svg"
            alt="GitHub Logo"
          />
        </a>
      </header>
      <p>{project.description}</p>
      <ul>
        {project.technologies.map((tech, idx) => (
          <li key={idx}>{tech}</li>
        ))}
      </ul>
    </section>
  )
}

export default DetailContainer