import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../core/constants/routes';
import { APP_STRINGS } from '../../core/constants/strings';

/**
 * 404 Not Found page component
 */
const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-gray-300">404</h1>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {APP_STRINGS.ERRORS.NOT_FOUND}
          </h2>
          <p className="text-gray-600 mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        
        <div className="space-y-4">
          <Link
            to={ROUTES.HOME}
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            Return Home
          </Link>
          
          <div>
            <Link
              to={ROUTES.CONTACT}
              className="text-blue-600 hover:text-blue-800 underline"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
