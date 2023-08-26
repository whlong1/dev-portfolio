import { CSSProperties } from "react"
import { Project } from "@/types/models"

// Components
import DetailContainer from "./DetailContainer"
import PreviewContainer from "./PreviewContainer"

interface ProjectCardProps {
  cardIdx: number,
  project: Project,
}

const ProjectCard = ({ project, cardIdx }: ProjectCardProps) => {
  const isCardEven: boolean = cardIdx % 2 === 0

  const projectStyle: CSSProperties = isCardEven
    ? { flexDirection: "row-reverse" } : {}

  const previewContainerStyle: CSSProperties = isCardEven
    ? { alignItems: "flex-start", justifyContent: "flex-start" }
    : { alignItems: "flex-end", justifyContent: "flex-start" }

  return (
    <article className={"card split-layout"} style={projectStyle}>
      <DetailContainer project={project} />
      <PreviewContainer
        images={project.images}
        isCardEven={isCardEven}
        previewContainerStyle={previewContainerStyle}
      />
    </article>
  )
}

export default ProjectCard