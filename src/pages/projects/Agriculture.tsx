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
			<PageIntro name="Agriculture, Food Security and Climate Change." />
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
									What CIDI has done to contribute in
									addressing agriculture challenges in
									Tanzania.
								</h2>
								<ul className="list-disc ml-6 mt-6 space-y-6 text-gray-500">
									<li className="text-sm md:text-base text-justify">
										CIDI Founder members and affiliated
										partners have purchased 16 acres of land
										at Mkuranga district to be used for
										developing FFSs for nutritional crops
										and livestock production, testing
										agriculture technology before scaling up
										to national scale, to make sustainable
										change on a large scale through sharing
										experimental findings, influencing,
										advocacy and sector engagement.
									</li>
									<li className="text-sm md:text-base text-justify">
										In 2023 we intend to build crops and
										livestock skills training centre that
										will be used to train local communities,
										groups of individuals on improved crops
										and livestock keeping. The vision which
										is expected to transform the lives of
										many unemployed youth into commercial
										agriculture and livestock keeping
										self-employment.
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
									We are involved with;
								</h2>
								<ul className="list-disc ml-6 mt-6 space-y-6 text-gray-500">
									<li className="text-sm md:text-base text-justify">
										Improving Entrepreneurship Skills for
										livestock, food and cash crops for
										smallholder farmers.
									</li>
									<li className="text-sm md:text-base text-justify">
										Organize small scale farmers to form
										producer network for them to
										collectively bargain for the better
										price of their produce in order to
										benefit from their surplus production.
									</li>
									<li className="text-sm md:text-base text-justify">
										Providing technical advice to small
										scale farmer on better agricultural
										practice, production innovations, and
										improved farm inputs such as certified
										seeds, pesticides/fertilizer and follow
										up on activities.
									</li>
									<li className="text-sm md:text-base text-justify">
										Training small scale farmers and
										farmers’ institutions on field-based
										production (FFSs), Pre- and Post-harvest
										losses, primary processing/value
										addition, branding, handling,
										distribution, improved access to
										financing, market linkages and value
										chain.
									</li>
									<li className="text-sm md:text-base text-justify">
										Advocacy and support implementation of
										agricultural policy.
									</li>
									<li className="text-sm md:text-base text-justify">
										Inventing /adopting and scaling up and
										financing value added agricultural
										practices such as irrigation/watering,
										harvesting, drying, processing etc. to
										our network farmers.
									</li>
									<li className="text-sm md:text-base text-justify">
										Strengthening smallholder famers to
										track expenditure of government budget
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
					className="py-12 max-w-5xl"
					data-aos="fade-up"
					data-aos-duration="1000"
				>
					<h1 className="text-2xl sm:text-3xl text-darkBluedark font-semibold">
						Giving back to the Community
					</h1>
					<p className="text-md mt-4 md:text-lg text-justify text-gray-500">
						CIDI thought of giving back to the community by doing
						the following: -
					</p>
					<ul
						className="list-disc ml-4 md:ml-16 mt-6 space-y-6 text-gray-500"
						data-aos="fade-up"
						data-aos-duration="1000"
					>
						<li className="text-sm md:text-base text-justify">
							CIDI, would work in collaboration with the local
							community in the implementation of the project.
						</li>
						<li className="text-sm md:text-base text-justify">
							Create employment to the people of Miswe especially
							for the young adults as livestock production and
							crop production makes a significant contribution to
							the livelihoods of the poor and offers substantial
							scope for expansion to alleviate poverty
						</li>
						<li className="text-sm md:text-base text-justify">
							Livestock and crop production would be introduced to
							the people of Miswe as an alternative income, food
							and nutrition to their homes
						</li>
						<li className="text-sm md:text-base text-justify">
							Indirect benefits are also likely to accrue, in
							terms of expanded markets for labour intensive,
							non-tradable local goods and services, stemming from
							the increased incomes and expenditures of livestock
							producers and farmers.
						</li>
						<li className="text-sm md:text-base text-justify">
							Knowledge, information, updated news on new methods,
							crops, vaccines, training and technological
							knowledge would be introduced in the management of
							livestock and crop production.
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
