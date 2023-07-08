import projectData from "@/data/projects.json"
import { Project } from "@/types/models"
import ProjectCard from "./ProjectCard"

const ProjectSection = () => {
  const projects: Project[] = projectData

  return (
    <section className="content" id="projects">
      <header>
        <h2>RECENT PROJECTS</h2>
        <p className="section-blurb">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
        </p>
      </header>
      {projects.map((project: Project, cardIdx: number) => (
        <ProjectCard key={project.id} project={project} cardIdx={cardIdx} />
      ))}
    </section>
  )
}

export default ProjectSection