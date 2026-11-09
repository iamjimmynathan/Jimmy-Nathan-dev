export type ProjectCategory = 'all' | 'fullstack' | 'mobile' | 'frontend';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'fullstack' | 'mobile' | 'frontend';
  categoryLabel: string;
  problem: string;
  solution: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl: string;
  featured: boolean;
  architectureHighlights: string[];
  metrics?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: {
    name: string;
    level: number; // 0 - 100
    highlight: string;
    years: string;
  }[];
}

export interface Service {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  deliverables: string[];
  techStack: string[];
}

export interface StatItem {
  value: string;
  label: string;
  detail: string;
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location: string;
  description: string[];
}
