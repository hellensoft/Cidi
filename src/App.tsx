import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import About from "./pages/About";
import Home from "./pages/Home";

interface IApp {}

const App: FC<IApp> = () => {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
			</Routes>
			<Footer />
		</div>
	);
};

export default App;
