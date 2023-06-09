import { CSSProperties } from "react"
import { Project } from "@/types/models"

interface SnapshotStyle {
  zIndex: number,
  marginTop?: string,
  marginRight?: string,
  marginBottom?: string,
  marginLeft?: string,
  position: "absolute",
}

interface ProjectCardProps {
  cardIdx: number,
  project: Project,
}

const ProjectCard = ({ project, cardIdx }: ProjectCardProps) => {
  const isCardEven: boolean = cardIdx % 2 === 0

  const projectStyle: CSSProperties = isCardEven ? {
    flexDirection: "row-reverse"
  } : {}

  const snapshotContainerStyle: CSSProperties = isCardEven ? {
    alignItems: "flex-start", justifyContent: "flex-start"
  } : {}

  const getSnapshotStyle = (imgIdx: number): SnapshotStyle => {
    const offset = imgIdx * 36
    return {
      zIndex: imgIdx + 1,
      position: "absolute",
      ...isCardEven
        ? { marginTop: `${offset}px`, marginLeft: `${offset}px` }
        : { marginRight: `${offset}px`, marginBottom: `${offset}px` }
    }
  }

  return (
    <article className={"card split-layout"} style={projectStyle}>
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
      <section className="snapshot-container" style={snapshotContainerStyle}>
        {project.images.map((image, imgIdx) => (
          <img
            key={imgIdx}
            src={image.src}
            alt={image.alt}
            style={getSnapshotStyle(imgIdx)}
          />
        ))}
      </section>
    </article>
  )
}

export default ProjectCard