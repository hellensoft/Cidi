import { FC } from "react";
import FoooterBanner from "../../components/FooterBanner";
import PageIntro from "../../components/PageIntro";

interface IEducation {}

const Education: FC<IEducation> = () => {
	return (
		<div>
			<PageIntro name="Education" />
			<FoooterBanner text="Help us educate a Child" />
		</div>
	);
};

export default Education;
