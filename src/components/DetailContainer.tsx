// Types
import { Project } from "@/types/models"

// Components
import ProjectLinks from "./ProjectLinks"

const DetailContainer = ({ project }: { project: Project }) => {

  return (
    <section className="detail-container">
      <header>
        <h3>{project.title}</h3>
        <ProjectLinks project={project} />
      </header>
      <p>{project.description}</p>
      <ul>
        {project.technologies.map((tech, idx) => (
          <li key={idx}>
            <span>{tech}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default DetailContainer