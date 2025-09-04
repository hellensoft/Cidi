/**
 * Application route constants
 * Centralized route definitions for type safety and maintainability
 */
export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  CONTACT: '/contact',
  DONATION: '/donation',
  VOLUNTEER: '/volunteer',
  MEDIA_GALLERY: '/media&gallery',
  PROJECTS: {
    ROOT: '/projects',
    EDUCATION: '/projects/education',
    AGRICULTURE: '/projects/agriculture',
    CHILD_RIGHTS: '/projects/child-rights',
    HEALTH_NUTRITION: '/projects/health-nutrition',
    WATER_SANITATION: '/projects/water-sanitation',
  },
} as const;

export type AppRoutes = typeof ROUTES;
