import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES, APP_STRINGS, classNames } from '../../core';
import type { BaseComponentProps } from '../../core';

interface ExampleComponentProps extends BaseComponentProps {
  title?: string;
  variant?: 'primary' | 'secondary';
}

/**
 * Example component showing how to use the new structure
 * Demonstrates proper imports, typing, and styling patterns
 */
const ExampleComponent: React.FC<ExampleComponentProps> = ({
  title = APP_STRINGS.APP_NAME,
  variant = 'primary',
  className = '',
  children,
}) => {
  const baseClasses = 'px-4 py-2 rounded-lg transition-colors duration-200';
  const variantClasses = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
  };

  return (
    <div className={classNames('p-6 bg-white rounded-lg shadow-md', className)}>
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      
      <div className="space-y-4">
        {children}
        
        <div className="flex gap-4">
          <Link
            to={ROUTES.HOME}
            className={classNames(baseClasses, variantClasses[variant])}
          >
            {APP_STRINGS.NAV.HOME}
          </Link>
          
          <Link
            to={ROUTES.ABOUT}
            className={classNames(baseClasses, variantClasses.secondary)}
          >
            {APP_STRINGS.NAV.ABOUT}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ExampleComponent;
