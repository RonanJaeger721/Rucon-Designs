export interface Service {
  id: string;
  title: string;
  iconName: string;
  shortDescription: string;
  longDescription: string;
  materials: string[];
  typicalProjects: string[];
  category: 'signage' | 'branding' | 'exhibition' | 'management';
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'Shop Branding' | 'Vehicle Branding' | 'Exhibition Stands' | 'Sign Writing' | 'Corporate Branding';
  imageUrl: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
  location: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  details: string[];
}
