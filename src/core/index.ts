/**
 * Central export point for core functionality
 * Provides a clean API for importing constants, types, and utilities
 */

// Constants
export { ROUTES } from './constants/routes';
export { APP_STRINGS } from './constants/strings';
export { APP_CONFIG } from './constants/config';

// Types
export type {
  BaseComponentProps,
  NavItem,
  Project,
  ProjectCategory,
  TeamMember,
  Event,
  Testimony,
  FAQ,
} from './types';

// Utils
export {
  classNames,
  scrollToTop,
  scrollToElement,
  formatDate,
  debounce,
  isDevelopment,
  isProduction,
} from './utils';
