export interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  demoUrl: string;
  githubUrl: string;
}

export interface Skill {
  category: string;
  skills: string[];
}

export interface Service {
  icon: string;
  title: string;
  description: string;
}

export interface Experience {
  year: string;
  title: string;
  company: string;
  description: string;
}