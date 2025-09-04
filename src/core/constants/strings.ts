/**
 * Application string constants
 * Centralized text content for easy localization and maintenance
 */
export const APP_STRINGS = {
  APP_NAME: 'CIDI',
  APP_DESCRIPTION: 'Children In Distress Initiative',
  
  // Navigation
  NAV: {
    HOME: 'Home',
    ABOUT: 'About',
    CONTACT: 'Contact',
    DONATION: 'Donation',
    VOLUNTEER: 'Volunteer',
    MEDIA_GALLERY: 'Media & Gallery',
    PROJECTS: 'Projects',
  },
  
  // Projects
  PROJECTS: {
    EDUCATION: 'Education',
    AGRICULTURE: 'Agriculture',
    CHILD_RIGHTS: 'Child Rights',
    HEALTH_NUTRITION: 'Health & Nutrition',
    WATER_SANITATION: 'Water & Sanitation',
  },
  
  // Common actions
  ACTIONS: {
    LEARN_MORE: 'Learn More',
    GET_INVOLVED: 'Get Involved',
    DONATE_NOW: 'Donate Now',
    CONTACT_US: 'Contact Us',
  },
  
  // Error messages
  ERRORS: {
    GENERIC: 'Something went wrong. Please try again.',
    NETWORK: 'Network error. Please check your connection.',
    NOT_FOUND: 'Page not found.',
  },
} as const;
