import projectDataArray from "@/data/data.json"
import { Project } from "@/types/models"
import ProjectCard from "./ProjectCard"

const ProjectSection = () => {
  const projects: Project[] = projectDataArray

  return (
    <section id="projects">
      <h2>Recent Projects</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
      {projects.map((project: Project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </section>
  )
}

export default ProjectSection