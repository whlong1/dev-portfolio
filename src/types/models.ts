interface Image {
  src: string,
  alt: string,
  id: string | undefined,
}

export interface Project {
  id: number,
  title: string,
  description: string,
  technologies: string[],
  deployment: string,
  github: string,
  images: Image[],
}


export interface Skill {
  id: number,
  name: string,
  image: Image
}