import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./shared/layouts/MainLayout";
import { APP_ROUTES } from "./config/routes/appRoutes";
import LoadingSpinner from "./shared/components/LoadingSpinner";
import NotFound from "./shared/components/NotFound";

/**
 * Main App component with improved structure
 * Uses lazy loading for better performance and proper error boundaries
 */
const App: React.FC = () => {
	return (
		<MainLayout>
			<Suspense fallback={<LoadingSpinner />}>
				<Routes>
					{APP_ROUTES.map(({ path, Component }) => (
						<Route key={path} path={path} element={<Component />} />
					))}
					{/* Catch-all route for 404 */}
					<Route path="*" element={<NotFound />} />
				</Routes>
			</Suspense>
		</MainLayout>
	);
};

export default App;
