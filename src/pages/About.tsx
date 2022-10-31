import { FC } from "react";
import FoooterBanner from "../components/FooterBanner";
import PageIntro from "../components/PageIntro";

interface IAbout {}

const About: FC<IAbout> = () => {
	return (
		<div>
			<PageIntro name="About Us" />
			<FoooterBanner text="Help us educate a Child" />
		</div>
	);
};

export default About;
