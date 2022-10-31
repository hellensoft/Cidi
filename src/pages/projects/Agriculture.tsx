import { FC } from "react";
import FoooterBanner from "../../components/FooterBanner";
import PageIntro from "../../components/PageIntro";

interface IAgriculture {}

const Agriculture: FC<IAgriculture> = () => {
	return (
		<div>
			<PageIntro name="Miswe Livestock and Crop Production Project" />
			<FoooterBanner text="Help us Improve  Agriculture Livelihood" />
		</div>
	);
};

export default Agriculture;
