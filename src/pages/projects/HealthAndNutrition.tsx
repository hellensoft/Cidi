import { FC } from "react";
import Faqs from "../../components/Faqs";
import FoooterBanner from "../../components/FooterBanner";
import PageIntro from "../../components/PageIntro";
import SectionWrapper from "../../components/SectionWrapper";
import healthFaqs from "../../data/healthFaqs.json";

const HealthAndNutrition: FC = () => {
	return (
		<div>
			<PageIntro name="Health and Nutritions" />
			<SectionWrapper>
				<div>
					<div
						className="grid xs:grid-cols-[5fr_3fr] gap-4"
						data-aos="fade-up"
						data-aos-duration="1000"
					>
						<img
							src="/images/happy family.jpeg"
							alt="Children rights"
							className="w-full aspect-[10/7] object-cover object-right"
						/>
						<img
							src="/images/class.png"
							alt="Children rights"
							className="hidden xs:inline-block h-full object-cover object-center"
						/>
					</div>
					<h2 className="text-darkBlue mt-16 font-semibold text-xl sm:text-[36px]">
						Situation analysis in Tanzania.
					</h2>
					<p
						className="text-textBlue mt-16 max-w-[1096px] text-justify mx-auto"
						data-aos="fade-up"
						data-aos-duration="1000"
					>
						According to Tanzania Human Development Report, 2017
						says under-nutrition among Tanzanian children remain a
						serious and widespread concern. Data from the Tanzania
						Demographic and Health Survey and Malaria Indicator
						Survey (TDHS-MIS) 2015–16 found that 34 percent of
						children under five years of age were stunted, 14
						percent were underweighted or too thin for their age,
						and 5 percent were wasted or too thin for their height.
						Moreover, the prevalence of wasting a sign of acute
						malnutrition has remained virtually unchanged between
						1999 and 2016.
					</p>
					<p
						className="text-textBlue mt-6 mb-10 max-w-[1096px] text-justify mx-auto"
						data-aos="fade-up"
						data-aos-duration="1000"
					>
						Data further show substantial disparities in nutritional
						status among children, children from very poor
						households are three times more likely to be chronically
						malnourished than children from better off households.
						These high rates of chronic under-nutrition are driven
						not only by poverty and food insecurity but also by poor
						infant and young child caring and feeding practices at
						the household level.
					</p>
					<p
						className="text-textBlue mt-6 max-w-[1096px] text-justify mx-auto"
						data-aos="fade-up"
						data-aos-duration="1000"
					>
						In line with Tanzania Human Development Report, 2017
						CIDI is dedicated at improving the Health and Nutrition
						of children, Lactating mothers and community at large.
					</p>

					<div
						className="grid xs:grid-cols-2 gap-8 sm:gap-24 place-items-center my-0 xs:my-28"
						data-aos="fade-up"
						data-aos-duration="1000"
					>
						<div className="hidden xs:inline-block aspect-square w-full relative h-auto">
							<svg
								className="absolute -z-10 top-0 right-1/2 -ml-3 lg:-left-8 lg:right-auto lg:-top-10"
								width={404}
								height={392}
								fill="none"
								viewBox="0 0 404 392"
							>
								<defs>
									<pattern
										id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
										x={0}
										y={0}
										width={20}
										height={20}
										patternUnits="userSpaceOnUse"
									>
										<rect
											x={0}
											y={0}
											width={4}
											height={4}
											className="text-gray-200"
											fill="currentColor"
										/>
									</pattern>
								</defs>
								<rect
									width={404}
									height={392}
									fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)"
								/>
							</svg>
							<div className="w-full h-auto aspect-square rounded overflow-hidden">
								<img
									className="w-full h-full object-cover object-center"
									src="/images/Charity.jpeg"
									alt="Children right"
								/>
							</div>
						</div>
						<div>
							<div className="">
								<h2 className="text-xl font-bold tracking-tight text-blackPrimary sm:text-2xl">
									How do we get involved.
								</h2>
								<ul className="list-disc ml-6 mt-4 space-y-4 text-gray-500">
									<li className="text-sm md:text-base text-justify">
										We are involved with growing sustainable
										nutrition portfolio based on the local
										population need.
									</li>
									<li className="text-sm md:text-base text-justify">
										We are involved with building local
										capacity to trigger demand for diverse
										diets by working with communities such
										as raising awareness on the risk of
										stunting, malnutrition, poor hygiene
										etc.
									</li>
									<li className="text-sm md:text-base text-justify">
										we are involved with capacity building
										support to smallholder farmers to
										diversify into nutrient-rich vegetable
										and food crops
									</li>
									<li className="text-sm md:text-base text-justify">
										We work in partnership with Nutritionist
										and HCFs on nutritional needs required
										for children, pregnant and lactating
										mothers of the locality and develop
										tailor made program and promotional
										massages for community awareness and
										engagement.
									</li>
									<li className="text-sm md:text-base text-justify">
										We are involved with developing
										standardized messages and materials for
										promoting nutritional behavior change
										and hygiene practices in needy areas.
									</li>
									<li className="text-sm md:text-base text-justify">
										We are involved with working with
										government agricultural/extension
										officers, CDOs and local community
										implementing nutritional based crops
										through FFSs and scaling-up the
										innovations.
									</li>
									<li className="text-sm md:text-base text-justify">
										Working in partnerships with
										Foods/Nutritionists, health stakeholders
										and communities to improve nutrition.
									</li>
									<li className="text-sm md:text-base text-justify">
										We use multiple channels to improve
										Health including health volunteers’ home
										visits, sharing messages at community
										fairs, and establishing village Health
										committees supported by the heads of
										village development committees.
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</SectionWrapper>
			<Faqs faqs={healthFaqs} />
			<FoooterBanner text="Help us Improve  Agriculture Livelihood" />
		</div>
	);
};

export default HealthAndNutrition;
