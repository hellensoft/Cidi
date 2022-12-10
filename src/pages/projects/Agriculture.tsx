import { FC } from "react";
import Faqs from "../../components/Faqs";
import FoooterBanner from "../../components/FooterBanner";
import PageIntro from "../../components/PageIntro";
import SectionWrapper from "../../components/SectionWrapper";
import agriFaq from "../../data/agriFaq.json";

interface IAgriculture {}

const Agriculture: FC<IAgriculture> = () => {
	return (
		<div>
			<PageIntro name="AGRICULTURE AND FOOD SECURITY" />
			<SectionWrapper>
				<div>
					<div
						className="grid xs:grid-cols-[5fr_3fr] gap-4"
						data-aos="fade-up"
						data-aos-duration="1000"
					>
						<img
							src="/images/agri.jpeg"
							alt="agriculture images"
							className="w-full aspect-[10/7] object-cover object-center"
						/>
						<img
							src="/images/agriculture-2.png"
							alt="agriculture images"
							className="hidden xs:inline-block h-full object-cover object-center"
						/>
					</div>
					<h2 className="text-darkBlue mt-16 font-semibold text-xl sm:text-[36px]">
						Situation Anaylsis in Tanzania
					</h2>
					<p
						className="text-textBlue mt-16 max-w-[1096px] text-justify mx-auto"
						data-aos="fade-up"
						data-aos-duration="1000"
					>
						CIDI’s main objective is to help youth and women in the
						community to actively participate in initiating,
						planning and implementing development activities to
						improve their standard of living. The Miswe project is
						based on a 16-acre farm land located as Mlandizi-Pwani
						that has already started livestock production in pigs,
						cows, goats, turkeys, geese, ducks and rabbits while
						crops like maize, tomatoes, pineapples, cassavas, okra,
						eggplants, and beans are also being produced for the
						benefit of the surrounding communities.
					</p>
					<p
						className="text-textBlue mt-6 mb-16 max-w-[1096px] text-justify mx-auto"
						data-aos="fade-up"
						data-aos-duration="1000"
					>
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
									src="/images/agriculture-woman.jpeg"
									alt="plants"
								/>
							</div>
						</div>
						<div>
							<div className="">
								<h2 className="text-xl font-bold tracking-tight text-blackPrimary sm:text-2xl">
									What have we done
								</h2>
								<ul className="list-disc ml-6 mt-4 space-y-4 text-gray-500">
									<li className="text-sm md:text-base text-justify">
										CIDI Founder members and affiliated
										partners have purchased 16 acres of land
										at Mkuranga district to be used for
										developing Farm Field Schools (FFSs) for
										crops and livestock production.
									</li>
									<li className="text-sm md:text-base text-justify">
										The field is used for testing
										agriculture technology before scaling up
										to make sustainable change on a national
										scale.
									</li>
									<li className="text-sm md:text-base text-justify">
										Lessons learnt from our innovative
										programs is used for influencing and
										engagement of sector and development
										partners.
									</li>
								</ul>
							</div>
							<div className="mt-6">
								<h2 className="text-xl font-bold tracking-tight text-blackPrimary sm:text-2xl">
									Our program plan for 2023
								</h2>
								<ul className="list-disc ml-6 mt-4 space-y-4 text-gray-500">
									<li className="text-sm md:text-base text-justify">
										To strengthen our services and reach for
										more needy communities.
									</li>
									<li className="text-sm md:text-base text-justify">
										We intend to build crops and livestock
										skills training center that will be used
										to train local communities, groups of
										individuals on improved crops and
										livestock keeping, baseline survey has
										indicated there is a great demand.
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div
						className="grid xs:grid-cols-2 gap-8 sm:gap-24 place-items-center my-12 xs:my-28"
						data-aos="fade-up"
						data-aos-duration="1000"
					>
						<div>
							<div className="">
								<h2 className="text-xl font-bold tracking-tight text-blackPrimary sm:text-2xl">
									How do we get involved
								</h2>
								<ul className="list-disc ml-6 mt-6 space-y-6 text-gray-500">
									<li className="text-sm md:text-base text-justify">
										We work with small scale farmers to
										improve entrepreneurship skills in
										livestock, food and cash crops
										production.
									</li>
									<li className="text-sm md:text-base text-justify">
										We work to support and coordinate small
										scale farmers to form producer groups
										and network for collective bargain of
										better price of their produce to benefit
										from their surplus production.
									</li>
									<li className="text-sm md:text-base text-justify">
										We provide technical support and advice
										to small scale farmer on better
										agricultural practice, production
										innovations, and improved farm inputs
										such as certified seeds,
										pesticides/fertilizer and follow up on
										activities.
									</li>
									<li className="text-sm md:text-base text-justify">
										We offer trainings to small scale
										farmers and farmers’ institutions on
										field-based production (FFSs), Pre- and
										Post-harvest losses, primary
										processing/value addition, branding,
										handling, distribution, improved access
										to financing, market linkages and value
										chain.
									</li>
									<li className="text-sm md:text-base text-justify">
										We carry out advocacy to local, national
										and international development partners
										to influence investment in agriculture
										sector, support and influence
										implementation of agricultural policy.
									</li>
									<li className="text-sm md:text-base text-justify">
										We work to support small scale farmers
										to invent /adopt and scale up and
										finance value added agricultural
										practices such as irrigation/watering,
										harvesting, drying, processing etc. to
										our network farmers.
									</li>
									<li className="text-sm md:text-base text-justify">
										We also work to strengthening the
										capacity for smallholder famers to track
										expenditure of government budget
										allocated for agriculture (PETS) to
										increase social accountability
										monitoring in Agriculture sector.
									</li>
								</ul>
							</div>
						</div>
						<div className="hidden xs:inline-block aspect-square w-full relative h-auto">
							<svg
								className="absolute -z-10 top-0 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:-top-10"
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
									src="/images/mbuzi.jpeg"
									alt="plants"
								/>
							</div>
						</div>
					</div>
				</div>

				{/* GIVING BACKK TO THE CUSTOMER */}
			 
				 <div
					className="py-24 max-w-full"
					data-aos="fade-up"
					data-aos-duration="1000"
				>
					<h1 className="text-2xl sm:text-3xl text-darkBluedark font-semibold">
                    How do we impact communities.
					</h1>
					{/* <p className="text-md mt-4 md:text-lg text-justify text-gray-500">
						CIDI thought of giving back to the community by doing
						the following: -
					</p> */}
					<ul
						className="list-disc ml-4 md:ml-16 mt-6 space-y-6 text-gray-500"
						data-aos="fade-up"
						data-aos-duration="1000"
					>
						<li className="text-sm md:text-base text-justify">
							Communities learn how to develop community projects
							(planning), financing, implementation, monitoring,
							evaluation and linkage to government for support and
							sustainability.
						</li>
						<li className="text-sm md:text-base text-justify">
							Selected farmers are trained to provide
							paraprofessional skills to their fellow farmers in
							their localities hence reduce reliance on government
							extension officers.
						</li>
						<li className="text-sm md:text-base text-justify">
							Production based trainings are accorded to small
							scale farmers and livestock keepers to improve their
							production and life quality.
						</li>
						<li className="text-sm md:text-base text-justify">
							Increased self-employment in agriculture and
							livestock production to majority youth.
						</li>
						<li className="text-sm md:text-base text-justify">
							Our service has become a knowledge hub where
							communities come from various places to gain
							practical knowledge, information, skills,
							experience, updates on new methods, crops, vaccines,
							training and technological knowledge to improve
							crops and livestock production.
						</li>
					 </ul>
						</div>
				
				
			</SectionWrapper>
			<Faqs faqs={agriFaq} />
			<FoooterBanner text="Help us Improve  Agriculture Livelihood" />
		</div>
	);
};

export default Agriculture;
