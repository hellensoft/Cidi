import { FC } from "react";
import FoooterBanner from "../components/FooterBanner";

interface IHome {}

const Home: FC<IHome> = () => {
	return (
		<div>
			<FoooterBanner text="Help us Improve  Agriculture Livelihood" />
		</div>
	);
};

export default Home;
