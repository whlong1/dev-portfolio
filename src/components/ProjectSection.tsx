import projectData from "@/data/projects.json"
import { Project } from "@/types/models"
import ProjectCard from "./ProjectCard"

const ProjectSection = () => {
  const projects: Project[] = projectData.slice(0)

  return (
    <section className="content" id="projects">
      <header>
        <h2>RECENT PROJECTS</h2>
        <p className="section-blurb">
          A collection of my recent work in software development.
        </p>
      </header>
      {projects.map((project: Project, cardIdx: number) => (
        <ProjectCard key={project.id} project={project} cardIdx={cardIdx} />
      ))}
    </section>
  )
}

export default ProjectSection