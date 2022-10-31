import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Donation from "./pages/Donation";
import Home from "./pages/Home";
import Agriculture from "./pages/projects/Agriculture";
import Education from "./pages/projects/Education";
import WaterSanitation from "./pages/projects/WaterSanitation";

interface IApp {}

const App: FC<IApp> = () => {
	return (
		<div>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/donation" element={<Donation />} />
				<Route path="/projects/education" element={<Education />} />
				<Route path="/projects/agriculture" element={<Agriculture />} />
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
