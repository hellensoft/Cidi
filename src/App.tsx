import { FC, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Donation from "./pages/Donation";
import Home from "./pages/Home";
import Agriculture from "./pages/projects/Agriculture";
import Education from "./pages/projects/Education";
import WaterSanitation from "./pages/projects/WaterSanitation";
import Volunteer from "./pages/Volunteer";
import AOS from "aos";
import "aos/dist/aos.css";
import Projects from "./pages/Projects";
import MediaGallery from "./pages/MediaGallery";
import ChildRights from "./pages/projects/ChildRights";
import HealthAndNutrition from "./pages/projects/HealthAndNutrition";

interface IApp {}

const App: FC<IApp> = () => {
	const location = useLocation();

	useEffect(() => {
		AOS.init();
		window.scrollTo(0, 0);
	}, [location]);

	return (
		<div>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/donation" element={<Donation />} />
				<Route path="/volunteer" element={<Volunteer />} />
				<Route path="/media&gallery" element={<MediaGallery />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="/projects/education" element={<Education />} />
				<Route path="/projects/agriculture" element={<Agriculture />} />
				<Route path="/projects/child-rights" element={<ChildRights />} />
				<Route path="/projects/health-nutrition" element={<HealthAndNutrition />} />
				<Route
					path="/projects/water-sanitation"
					element={<WaterSanitation />}
				/>
			</Routes>
			<Footer />
		</div>
	);
};

export default App;
