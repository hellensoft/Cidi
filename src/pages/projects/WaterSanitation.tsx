import { FC } from "react";
import { Link } from "react-router-dom";
import Faqs from "../../components/Faqs";
import FoooterBanner from "../../components/FooterBanner";
import PageIntro from "../../components/PageIntro";
import SectionWrapper from "../../components/SectionWrapper";
import WaterInvolved from "../../components/WaterInvolved";
import washFaqs from "../../data/washFaq.json";

interface IWaterSanitation {}

const WaterSanitation: FC<IWaterSanitation> = () => {
	return (
		<div>
			<PageIntro name="Water, Hygiene and Sanitation (WASH)" />
			<SectionWrapper>
				<div
					className="grid md:grid-cols-2 lg:grid-cols-[500px_1fr] gap-8 place-items-center"
					data-aos="fade-up"
					data-aos-duration="1000"
				>
					<div>
						<img
							src="/images/sanitation-image.png"
							alt="section sanitation"
						/>
					</div>
					<div className="space-y-8 lg:ml-12">
						<h1 className="text-darkBlue max-w-[480px] font-semibold text-xl sm:text-2xl mb-6">
							WATER, SANITATION AND HYGIENE (WASH) SITUATION IN
							TANZANIA
						</h1>
						<p className="text-justify text-base md:text-md text-textGray font-medium">
							It is estimated that Tanzania spends 70 per cent of
							its health budget on preventable WASH-related
							diseases as the majority of the population does not
							have access to improved sanitation, and close to
							half of the population does not have access to clean
							drinking water. In Tanzania, WASH-sensitive
							indicators such as diarrhea and stunting are high.
						</p>
						<p className="text-justify text-base md:text-md text-textGray font-medium">
							Without adequate WASH facilities, living and working
							premises become breeding grounds for diseases that
							kill children and threaten their ability to grow.
							Girls, children with disabilities and children
							living in rural areas are most affected. This
							further heightens inequities and uneven
							opportunities for development. As part of its Vision
							2025, the Government of Tanzania has pledged to
							increase access to improved sanitation to 95 per
							cent by 2025. The Second Five Year Development Plan
							(FYDP II) has also set the target for access to
							improved sanitation facilities at 85 per cent in
							rural areas.
						</p>
					</div>
				</div>
				<WaterInvolved id="covid" />
				<div
					className="pt-32"
					data-aos="fade-up"
					data-aos-duration="1000"
				>
					<h1 className="text-darkBlue max-w-[485px] font-semibold text-2xl sm:text-[36px] mb-6">
						COVID-19 RESPONSE.{" "}
					</h1>
					<p className="text-justify text-base md:text-md text-textGray">
						In the face of COVID-19 Pandemic, CIDI is working in
						partnership with WASH Africa to support the government
						of Tanzania in strengthening access to covid-19
						immunization and promote uptake of the same through
						innovative training and community awareness campaigns.
					</p>
					<p className="text-justify text-base md:text-md text-textGray my-5">
						{/* <span className="text-darkBlue font-semibold">
							WASH-Africa
						</span>{" "} */}
						CIDI works to improve WASH facilities and services in
						schools, healthcare facilities and communities as a
						means to strengthen community systems response to
						Covid-19.
					</p>
					<p className="text-justify text-base md:text-md text-textGray my-5">
						To curb the spread of COVID-19, we work to promote
						handwashing and good hygiene messages, bringing key
						sanitation and hygiene messages to urban populations.
					</p>
					<p className="text-justify text-base md:text-md text-textGray my-5">
						We are tailoring COVID-19 messages for different target
						groups, including women, people with disabilities,
						school children, youth, frontline workers, and facility
						cleaners in public spaces (e.g., schools, health care
						facilities, transport hubs and markets).
					</p>
					<p className="text-justify text-base md:text-md text-textGray my-5">
						Our approach is informed by other organizations???
						coalition network members participating in behavioral
						change communication (BCC) strategies across the country
						from other foreign coutries.
					</p>
					<ul
						className="list-disc ml-8 sm:ml-16 space-y-6 mt-10"
						data-aos="fade-up"
						data-aos-duration="1000"
					>
						<li className="text-justify text-base md:text-md text-textGray">
							Tailoring messages based on formative research
							results and behavior centred design principles to
							promote hand hygiene, surface cleanliness, wearing a
							mask. and social distancing.
						</li>
						<li className="text-justify text-base md:text-md text-textGray">
							Communicating messages through diverse channels,
							innovatively linking interventions and carefully
							considering outreach, unequal digital access, and
							capabilities based on gender, poverty, and
							disability identifiers.
						</li>
						<li className="text-justify text-base md:text-md text-textGray">
							Promoting the rollout of cost-effective and durable
							handwashing and hygiene supplies, with preference to
							engage local service providers, and
						</li>
						<li className="text-justify text-base md:text-md text-textGray">
							Monitoring outreach, recall of messages, and
							behavioral change.
						</li>
					</ul>
					<Link
						data-aos="fade-up"
						data-aos-duration="1000"
						to="#"
						className="bg-greenPrimary inline-block hover:bg-darkBlue duration-150 py-4 text-white font-medium px-6 sm:px-9 h-full border mt-20 border-greenPrimary"
					>
						About Wash-Africa
					</Link>
				</div>
			</SectionWrapper>
			<Faqs faqs={washFaqs} />
			<FoooterBanner text="Help us Improve water hygiene and sanitation" />
		</div>
	);
};

export default WaterSanitation;
