/**
 * Common TypeScript type definitions used across the application
 */

// Base component props
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

// Navigation item type
export interface NavItem {
  label: string;
  path: string;
  isExternal?: boolean;
}

// Project types
export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  path: string;
  category: ProjectCategory;
}

export type ProjectCategory = 
  | 'education' 
  | 'agriculture' 
  | 'child-rights' 
  | 'health-nutrition' 
  | 'water-sanitation';

// Team member type
export interface TeamMember {
  id: string;
  name: string;
  position: string;
  image: string;
  bio?: string;
}

// Event type
export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  image?: string;
}

// Testimony type
export interface Testimony {
  id: string;
  name: string;
  message: string;
  image?: string;
  location?: string;
}

// FAQ type
export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category?: string;
}
