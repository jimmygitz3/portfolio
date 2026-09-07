export interface AnnotationTechnique {
  id: string;
  name: string;
  category: 'Computer Vision' | 'Natural Language Processing' | 'Sensor & Audio';
  description: string;
  useCase: string;
  toleranceStandard: string;
  iconName: string;
}

export interface AnnotationTool {
  id: string;
  name: string;
  category: 'Web Platform' | 'Open Source' | 'Enterprise Suite';
  proficiency: 'Expert' | 'Advanced' | 'Proficient';
  yearsExperience: number;
  highlight: string;
  supportedFormats: string[];
}

export interface ProjectDataset {
  id: string;
  title: string;
  category: 'Autonomous Driving' | 'Medical AI' | 'NLP & LLMs' | 'Geospatial';
  domain: string;
  description: string;
  contributions: string[];
  volume: string;
  accuracyRate: string;
  toolsUsed: string[];
  taxonomySample: string[];
  visualType: 'bboxes' | 'segmentation' | 'ner' | 'keypoints';
}

export interface ToolWorkflowItem {
  name: string;
  category: 'Scripting & Automation' | 'Data Formats' | 'Cloud & Storage' | 'Quality Assurance';
  proficiency: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  organization: string;
  projectFocus: string;
  avatarInitials: string;
}

export interface NavItem {
  label: string;
  href: string;
  id: string;
}
