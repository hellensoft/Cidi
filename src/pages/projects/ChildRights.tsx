import { FC } from "react";
import Faqs from "../../components/Faqs";
import FoooterBanner from "../../components/FooterBanner";
import PageIntro from "../../components/PageIntro";
import SectionWrapper from "../../components/SectionWrapper";
import agriFaq from "../../data/agriFaq.json";

interface IChildRights {}

const ChildRights: FC<IChildRights> = () => {
	return (
		<div>
			<PageIntro name="Child Protection and Child Rights governance" />
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
						Child Right Situation in Tanzania
					</h2>
					<p
						className="text-textBlue mt-16 max-w-[1096px] text-justify mx-auto"
						data-aos="fade-up"
						data-aos-duration="1000"
					>
						Many children in Tanzania experience violence, neglect
						and exploitation. The 2009 Tanzania Violence Against
						Children Survey revealed the extent to which children
						are sexually assaulted, raped, physically attacked, and
						emotionally abused.
					</p>
					<p
						className="text-textBlue mt-6 mb-10 max-w-[1096px] text-justify mx-auto"
						data-aos="fade-up"
						data-aos-duration="1000"
					>
						The practice of physical violence is deeply rooted in
						cultural beliefs and norms, and further reinforced by
						legal frameworks that legitimize physical discipline of
						children at home and in schools. Domestic violence is
						also generally accepted in families.
					</p>
					<p
						className="text-textBlue mt-6 max-w-[1096px] text-justify mx-auto"
						data-aos="fade-up"
						data-aos-duration="1000"
					>
						Abuse is rarely reported as the perpetrators are usually
						known to the abused child. Children also do not know
						where to go for care, treatment and support.
					</p>
					<p
						className="text-textBlue mt-6 mb-10 max-w-[1096px] text-justify mx-auto"
						data-aos="fade-up"
						data-aos-duration="1000"
					>
						Early marriage (before the age of 18) is common in
						Tanzania. This exposes young girls to the risk of
						violence. Children in conflict with the law are not
						served by a child-friendly justice system and are often
						treated like criminals, rather than as victims of
						parental neglect, poverty and violence. Many are
						confined in prisons with adults, which also increases
						their vulnerability to further violence and abuse.
						UNICEF Tanzania 2021.
					</p>
					<p
						className="text-textBlue mt-6 mb-16 max-w-[1096px] text-justify mx-auto"
						data-aos="fade-up"
						data-aos-duration="1000"
					>
						There has been positive progress done by the government
						and development partners such as UNICEF to improve the
						situation, there still lingers indicators of violation
						of child rights which calls for coalition of efforts
						from different stakeholders.
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
									src="/images/charity.jpeg"
									alt="plants"
								/>
							</div>
						</div>
						<div>
							<div className="">
								<h2 className="text-xl font-bold tracking-tight text-blackPrimary sm:text-2xl">
									How do we get involved.
								</h2>
								<p className="text-textBlue mt-6 mb-10 max-w-[1096px] text-justify mx-auto">
									We work supporting the Ministry of Gender,
									elder and children achieving the national
									target through implementing various child
									rights innovative programs.
								</p>
								<ul className="list-disc ml-6 mt-4 space-y-4 text-gray-500">
									<li className="text-sm md:text-base text-justify">
										We are involved with empowering
										communities in prevention and responding
										to child abuse, violence, neglect and
										exploitation of children including
										challenging harmful social and cultural
										norms such as gender-based violence.
									</li>
									<li className="text-sm md:text-base text-justify">
										We provide capacity building program to
										children to know their rights, demands
										them and to raise their voices to people
										in authority.
									</li>
									<li className="text-sm md:text-base text-justify">
										We work in partnership with other
										stakeholders in strengthening child
										protection systems, building capacity of
										child protection duty bearers.
									</li>
									<li className="text-sm md:text-base text-justify">
										We are involved with providing community
										awareness on child rights and advocacy
										for responsive laws/policies that
										fosters prevention and responding to
										child abuse.
									</li>
									<li className="text-sm md:text-base text-justify">
										We are involved with Providing education
										to teachers, parents and school children
										about child rights, abuse and
										exploitation; influencing them early in
										life.
									</li>
									<li className="text-sm md:text-base text-justify">
										Promoting protective and supporting
										school learning environment for a child.
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
									In our child rights program, we focus at,
								</h2>
								<ul className="list-disc ml-6 mt-6 space-y-6 text-gray-500">
									<li className="text-sm md:text-base text-justify">
										Building capacity to LGAs, CSOs, Child
										NGOs, partners as well as influencing
										the government to improve service
										delivery, policy and Law enforcement.
									</li>
									<li className="text-sm md:text-base text-justify">
										Strengthening service provision through
										training service providers to deliver
										integrated and multi- sectoral services,
										combining social welfare, justice,
										health, education and community
										development.
									</li>
									<li className="text-sm md:text-base text-justify">
										Community awareness creation in the
										prevention and responding to violence
										against children and adolescents. We
										focus on interventions that promote and
										build synergy between child protection,
										child rights governance and policy
										issues.
									</li>
								</ul>
							</div>
							<div className="mt-6">
								<h2 className="text-xl font-bold tracking-tight text-blackPrimary sm:text-2xl">
									Program plan for the year 2023.
								</h2>
								<ul className="list-disc ml-6 mt-4 space-y-4 text-gray-500">
									<li className="text-sm md:text-base text-justify">
										To influence a strong enabling
										environment at national and local
										government levels to promote the
										legislative, political, budgetary and
										institutional factors that ensure the
										protection of children.
									</li>
									<li className="text-sm md:text-base text-justify">
										Communities able to prevent and respond
										to practices and behaviors harmful to
										children
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
									src="/images/children.jpeg"
									alt="plants"
								/>
							</div>
						</div>
					</div>
				</div>

				{/* GIVING BACKK TO THE CUSTOMER */}
				{/* <div

					className="py-12 max-w-5xl"
					data-aos="fade-up"
					data-aos-duration="1000"
				>
					<h1 className="text-2xl sm:text-3xl text-darkBluedark font-semibold">
						How do we impact communities.
					</h1>
					{/* <p className="text-md mt-4 md:text-lg text-justify text-gray-500">
						CIDI thought of giving back to the community by doing
						the following: -
					</p> 
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
				</div> */}
			</SectionWrapper>
			<Faqs faqs={agriFaq} />
			<FoooterBanner text="Help us Improve  Agriculture Livelihood" />
		</div>
	);
};

export default ChildRights;
