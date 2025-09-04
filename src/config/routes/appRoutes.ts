import { lazy } from 'react';
import { ROUTES } from '../../core/constants/routes';
import type { NavItem } from '../../core/types';

// Lazy load pages for better performance
const Home = lazy(() => import('../../pages/Home'));
const About = lazy(() => import('../../pages/About'));
const Contact = lazy(() => import('../../pages/Contact'));
const Donation = lazy(() => import('../../pages/Donation'));
const Volunteer = lazy(() => import('../../pages/Volunteer'));
const MediaGallery = lazy(() => import('../../pages/MediaGallery'));
const Projects = lazy(() => import('../../pages/Projects'));
const Education = lazy(() => import('../../pages/projects/Education'));
const Agriculture = lazy(() => import('../../pages/projects/Agriculture'));
const ChildRights = lazy(() => import('../../pages/projects/ChildRights'));
const HealthAndNutrition = lazy(() => import('../../pages/projects/HealthAndNutrition'));
const WaterSanitation = lazy(() => import('../../pages/projects/WaterSanitation'));

/**
 * Route configuration with lazy-loaded components
 */
export const APP_ROUTES = [
  {
    path: ROUTES.HOME,
    Component: Home,
  },
  {
    path: ROUTES.ABOUT,
    Component: About,
  },
  {
    path: ROUTES.CONTACT,
    Component: Contact,
  },
  {
    path: ROUTES.DONATION,
    Component: Donation,
  },
  {
    path: ROUTES.VOLUNTEER,
    Component: Volunteer,
  },
  {
    path: ROUTES.MEDIA_GALLERY,
    Component: MediaGallery,
  },
  {
    path: ROUTES.PROJECTS.ROOT,
    Component: Projects,
  },
  {
    path: ROUTES.PROJECTS.EDUCATION,
    Component: Education,
  },
  {
    path: ROUTES.PROJECTS.AGRICULTURE,
    Component: Agriculture,
  },
  {
    path: ROUTES.PROJECTS.CHILD_RIGHTS,
    Component: ChildRights,
  },
  {
    path: ROUTES.PROJECTS.HEALTH_NUTRITION,
    Component: HealthAndNutrition,
  },
  {
    path: ROUTES.PROJECTS.WATER_SANITATION,
    Component: WaterSanitation,
  },
] as const;

/**
 * Navigation items for header/menu
 */
export const NAVIGATION_ITEMS: NavItem[] = [
  { label: 'Home', path: ROUTES.HOME },
  { label: 'About', path: ROUTES.ABOUT },
  { label: 'Projects', path: ROUTES.PROJECTS.ROOT },
  { label: 'Media & Gallery', path: ROUTES.MEDIA_GALLERY },
  { label: 'Volunteer', path: ROUTES.VOLUNTEER },
  { label: 'Contact', path: ROUTES.CONTACT },
  { label: 'Donate', path: ROUTES.DONATION },
];
