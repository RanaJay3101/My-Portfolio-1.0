export interface Skill {
  name: string;
  icon?: React.ReactNode;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  companyUrl?: string;
  date: string;
  location: string;
  description: (string | React.ReactNode)[];
  tech: string[];
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface EducationItem {
    institution: string;
    degree: string;
    date: string;
    location: string;
    details: string[];
}

export interface AchievementItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  url?: string;
}

export interface CodingStat {
  platform: string;
  stats: { label: string; value: string }[];
  url: string;
  icon: React.ReactNode;
}
