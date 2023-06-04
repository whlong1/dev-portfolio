import { Project } from "@/types/models"

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <article>
      <h3>{project.title}</h3>
    </article>
  )
}

export default ProjectCard