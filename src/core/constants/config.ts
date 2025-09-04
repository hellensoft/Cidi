/**
 * Application configuration constants
 */
export const APP_CONFIG = {
  // Animation settings
  ANIMATION: {
    DURATION: 300,
    SCROLL_OFFSET: 100,
  },
  
  // Breakpoints (matching Tailwind CSS)
  BREAKPOINTS: {
    SM: 640,
    MD: 768,
    LG: 1024,
    XL: 1280,
    '2XL': 1536,
  },
  
  // API endpoints (when needed)
  API: {
    BASE_URL: process.env.REACT_APP_API_URL || '',
  },
  
  // Social media links
  SOCIAL: {
    FACEBOOK: 'https://facebook.com/cidi',
    TWITTER: 'https://twitter.com/cidi',
    INSTAGRAM: 'https://instagram.com/cidi',
  },
} as const;
