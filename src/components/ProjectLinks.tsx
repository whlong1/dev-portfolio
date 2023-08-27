// Types
import { Project } from "@/types/models"

const ProjectLinks = ({ project }: { project: Project }) => {
  const deploymentLink = {
    url: project.deployment,
    alt: "World Wide Web symbol",
    src: "/assets/project-icons/web.svg",
  }

  const videoLink = {
    url: project.video,
    alt: "Play symbol",
    src: "/assets/project-icons/play.svg",
  }

  const featuredLinkObject = project.deployment ? deploymentLink : videoLink

  return (
    <div className="project-links-container">
      <a href={featuredLinkObject.url} target="_blank" rel="noopener noreferrer">
        <img
          className="card-header-icon"
          src={featuredLinkObject.src}
          alt={featuredLinkObject.alt}
        />
      </a>
      <a href={project.github} target="_blank" rel="noopener noreferrer">
        <img
          className="card-header-icon"
          src="/assets/project-icons/github.svg"
          alt="GitHub Logo"
        />
      </a>
    </div>
  )
}

export default ProjectLinks