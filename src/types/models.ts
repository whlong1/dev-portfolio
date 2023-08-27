export interface Image {
  src: string;
  alt: string;
  id?: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  deployment?: string;
  video?: string;
  github: string;
  images: Image[];
}

export interface Skill {
  id: string;
  name: string;
  image: Image;
}