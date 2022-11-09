import { FC } from "react";
import { Link } from "react-router-dom";
import FoooterBanner from "../../components/FooterBanner";
import PageIntro from "../../components/PageIntro";
import SectionWrapper from "../../components/SectionWrapper";

interface IWaterSanitation {}

const WaterSanitation: FC<IWaterSanitation> = () => {
	return (
		<div>
			<PageIntro name="Water, Sanitation and Hygiene" />
			<SectionWrapper>
				<div className="grid md:grid-cols-2 lg:grid-cols-[500px_1fr] gap-8 place-items-center">
					<div>
						<img
							src="/images/sanitation-image.png"
							alt="section sanitation"
						/>
					</div>
					<div className="space-y-8 lg:ml-12">
						<p className="text-justify text-base md:text-xl text-textGray font-semibold">
							CIDI and Wash africa came together to make CIDI-
							Wash with a sole purpose of to creating a strong
							non-governmental organization that will coordinate
							volunteer projects for the forgotten community
							especially children, youths, women and the elderly.
						</p>
						<p className="text-justify text-base md:text-xl text-textGray font-semibold">
							The projects that will be involved include
							education, environment, agriculture, clean and safe
							water, hygiene as well as sustainable energy.
						</p>
					</div>
				</div>
				<div className="py-32 max-w-[1095px]">
					<h1 className="text-darkBlue max-w-[485px] font-semibold text-2xl sm:text-[36px] mb-6">
						CIDI-WASH Africa on COVID-19
					</h1>
					<p className="text-justify text-base md:text-xl text-textGray">
						Well-positioned to help communities respond to the
						COVID-19 crisis and become more resilient. We act
						quickly with customized approaches considering the
						circumstances. To curb the spread of COVID-19
						WASH-Africa promote handwashing and good hygiene
						messages, bringing key sanitation and hygiene messages
						to urban populations whose,
					</p>
					<p className="text-justify text-base md:text-xl text-textGray my-5">
						<span className="text-darkBlue font-semibold">
							WASH-Africa
						</span>{" "}
						is tailoring COVID-19 messages for different target
						groups, including women, people with disabilities,
						school children, youth, frontline workers, and facility
						cleaners in public spaces (e.g., schools, health care
						facilities, transport hubs and markets). WASH-Africa’s
						Covid-19 Behavior Change Communication (BCC) strategy
						includes,
					</p>
					<ul className="list-disc ml-8 sm:ml-16 space-y-6 mt-10">
						<li className="text-justify text-base md:text-xl text-textGray">
							Tailoring messages based on formative research
							results and behavior centred design principles to
							promote hand hygiene, surface cleanliness, wearing a
							mask. and social distancing.
						</li>
						<li className="text-justify text-base md:text-xl text-textGray">
							Communicating messages through diverse channels,
							innovatively linking interventions and carefully
							considering outreach, unequal digital access, and
							capabilities based on gender, poverty, and
							disability identifiers.
						</li>
						<li className="text-justify text-base md:text-xl text-textGray">
							Promoting the rollout of cost-effective and durable
							handwashing and hygiene supplies, with preference to
							engage local service providers, and
						</li>
						<li className="text-justify text-base md:text-xl text-textGray">
							Monitoring outreach, recall of messages, and
							behavioral change.
						</li>
					</ul>
					<Link
						to="#"
						className="bg-greenPrimary inline-block hover:bg-darkBlue duration-150 rounded-[5px] py-4 text-white font-medium px-6 sm:px-9 h-full border mt-20 border-greenPrimary"
					>
						About Wash-Africa
					</Link>
				</div>
			</SectionWrapper>
			<FoooterBanner text="Help us Improve water hygiene and sanitation" />
		</div>
	);
};

export default WaterSanitation;
