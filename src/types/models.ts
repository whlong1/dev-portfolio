interface Image {
  src: string,
  alt: string
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