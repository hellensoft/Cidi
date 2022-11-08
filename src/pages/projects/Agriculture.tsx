import { FC } from "react";
import FoooterBanner from "../../components/FooterBanner";
import PageIntro from "../../components/PageIntro";
import SectionWrapper from "../../components/SectionWrapper";

interface IAgriculture {}

const Agriculture: FC<IAgriculture> = () => {
	return (
		<div>
			<PageIntro name="Miswe Livestock and Crop Production Project" />
			<SectionWrapper>
				<div>
					<div className="grid xs:grid-cols-2 gap-12">
						<img
							src="/images/agriculture-1.png"
							alt="agriculture images"
						/>
						<img
							src="/images/agriculture-2.png"
							alt="agriculture images"
                            className="hidden xs:inline-block"
						/>
					</div>
					<p className="text-textBlue mt-16 max-w-[1096px]">
						CIDI’s main objective is to assist community members to
						actively participate in initiating, planning and
						implementing development activities to improve their
						standard of living. The Miswe project is based on a
						16-acre farm land that has already started livestock
						production in pigs, cows, goats, turkeys, geese, ducks
						and rabbits while crops like maize, tomatoes,
						pineapples, cassavas, okra, eggplants, and beans are
						also being produced for the benefit of the surrounding
						communities.
					</p>
					<p className="text-textBlue mt-6 mb-16 max-w-[1096px]">
						Analysis of allocative efficiency suggests that family
						labour is substantially over utilized, a sign of
						considerable excess labour supply and the use of
						intermediate inputs, on the other hand, is well below
						what is commensurate with the estimated value of their
						marginal productivities. An important reason for low
						input use is lack of credit to purchase inputs, but
						difficult access to the inputs themselves, being
						connected to the economy, and food security and
						self-insurance considerations are also important
						impediments.
					</p>
					<div className="grid xs:grid-cols-2 gap-8 sm:gap-24 place-items-center my-0 xs:my-28">
						<div className="hidden xs:inline-block aspect-square w-full h-auto">
							<img
								className="w-full h-auto"
								src="/images/agriculture-3.png"
								alt="plants"
							/>
						</div>
						<div>
							<p className="text-textBlue mt-6 mb-16 max-w-[1096px]">
								Livestock has been be introduced to the people
								of Miswe as an alternative income, food and
								nutrition to their homes.
							</p>
						</div>
					</div>
					<div className="grid xs:grid-cols-2 gap-8 sm:gap-24 place-items-center my-0 xs:my-28">
						<div>
							<p className="text-textBlue mt-6 mb-16 max-w-[1096px]">
								We find that general agriculture productivity
								directly affects household consumption and hence
								overall poverty and warlfare, farmers, farmers
								are farming and rearing livestock’s well below
								best practice in different regions
							</p>
						</div>
						<div className="hidden xs:inline-block aspect-square w-full h-auto">
							<img
								className="w-full h-auto"
								src="/images/agriculture-3.png"
								alt="plants"
							/>
						</div>
					</div>
				</div>
			</SectionWrapper>
			<FoooterBanner text="Help us Improve  Agriculture Livelihood" />
		</div>
	);
};

export default Agriculture;
