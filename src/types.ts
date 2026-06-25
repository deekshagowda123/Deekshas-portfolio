export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string[];
  period: string;
  category: 'AI / ML' | 'IoT' | 'Fullstack' | 'Healthcare';
  tags: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  metrics?: { label: string; value: string }[];
}

export interface SkillGroup {
  category: string;
  skills: { name: string; level: number; iconName?: string }[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  score: string;
  location: string;
  highlights?: string[];
}

export interface Achievement {
  title: string;
  organization: string;
  year: string;
  description: string;
  icon: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp: string;
}
