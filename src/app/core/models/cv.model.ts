export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
}

export interface Education {
  course: string;
  institution: string;
  period: string;
}

export interface Project {
  name: string;
  url: string;
  description: string;
}

export interface Skills {
  languagesAndFrameworks: string[];
  architecture: string[];
  devopsAndCloud: string[];
  methodologies: string[];
}

export interface Resume {
  name: string;
  title: string;
  location: string;
  email: string;
  linkedin: string;
  github: string;
  summary: string;
  skills: Skills;
  experience: Experience[];
  education: Education[];
  projects: Project[];
}
