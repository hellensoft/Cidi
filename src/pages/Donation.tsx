import { FC } from "react";
import FoooterBanner from "../components/FooterBanner";
import PageIntro from "../components/PageIntro";

interface IDonation {}

const Donation: FC<IDonation> = () => {
	return (
		<div>
			<PageIntro name="Donation Form" />
			<FoooterBanner text="Help us educate a Child" />
		</div>
	);
};

export default Donation;
