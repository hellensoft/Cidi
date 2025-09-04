import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { scrollToTop } from '../../core/utils';
import type { BaseComponentProps } from '../../core/types';

interface MainLayoutProps extends BaseComponentProps {}

/**
 * Main layout component that wraps all pages
 * Handles common functionality like AOS initialization and scroll behavior
 */
const MainLayout: React.FC<MainLayoutProps> = ({ children, className = '' }) => {
  const location = useLocation();

  useEffect(() => {
    // Initialize AOS (Animate On Scroll) library
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
    });

    // Scroll to top on route change
    scrollToTop();
  }, [location]);

  return (
    <div className={`min-h-screen flex flex-col ${className}`}>
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
