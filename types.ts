export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
  type: 'education' | 'work';
  logoUrl?: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Project {
  id: string;
  title: string;
  role: string;
  description: string;
  techStack: string[];
  link?: string;
  imageUrl?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}