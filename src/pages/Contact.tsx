import { FC } from "react";
import FoooterBanner from "../components/FooterBanner";
import PageIntro from "../components/PageIntro";

interface IContact {}

const Contact: FC<IContact> = () => {
	return (
		<div>
			<PageIntro name="Contact Us" />
            <FoooterBanner text='Help us educate a Child' />
		</div>
	);
};

export default Contact;
