import { FC } from "react";
import {
	FaFacebookF,
	FaTwitter,
	FaInstagram,
	FaLinkedinIn,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import FoooterBanner from "../components/FooterBanner";
import PageIntro from "../components/PageIntro";
import SectionWrapper from "../components/SectionWrapper";
import team from "../data/ourTeam.json";
import faqs from "../data/aboutFaqs.json";
import Faqs from "../components/Faqs";
import CoreValues from "../components/CoreValues";

interface IAbout {}

const About: FC<IAbout> = () => {
	return (
		<div>
			<PageIntro name="Our History" id="history" />
			<SectionWrapper>
				<div
					className="grid grid-cols-1 md:grid-cols-2 gap-16 place-items-center mb-24"
					data-aos="fade-up"
					data-aos-duration="1000"
				>
					<div>
						<h2 className="text-darkBlue text-2xl font-semibold">
							Who We Are
						</h2>
						<div className="my-6 space-y-4">
							<p className="text-textGray text-sm leading-[27px]">
								“CIDI “stands for Community Information
								Development Initiatives”
							</p>
							<p className="text-textGray text-sm leading-[27px]">
								CIDI is a registered National NGO under NGO Act
								No. 24, 2002 of the Laws of United Republic of
								Tanzania by the Ministry of Health, Community
								Development, Gender and Children with a
								registration No.{" "}
								<span className="text-darkBlue font-bold">
									00NGO/R/2765
								</span>
							</p>
							<p className="text-textGray text-sm leading-[27px]">
								It operates to promote access to Information
								relating to Education, Agriculture, Environment
								and Sustainable Energy in Tanzania. We uphold,
								nurture and abide by the core values of
								volunteerism, tolerance, gender equality,
								non-discrimination, participation, transparency
								and accountability, and strive to become and
								remain a member driven organization.
							</p>
						</div>
					</div>
					<div
						data-aos="fade-up"
						data-aos-duration="2000"
						className="relative aspect-square w-full h-auto"
					>
						<img src="/images/owners.jpg" alt="owners" />
						<div className="hidden lg:inline-block w-full h-[400px] absolute bg-darkBlue bottom-24 -right-10 -z-10"></div>
					</div>
				</div>
			</SectionWrapper>
			<div className="bg-sectionGray">
				<SectionWrapper>
					<div
						className="px-4 grid grid-cols-2 gap-12"
						data-aos="fade-up"
						data-aos-duration="1000"
					>
						<div className="mx-auto bg-darkBlue text-center py-12 px-6 rounded-[10px] my-28">
							<h1 className="text-white text-[34px] font-semibold mb-4">
								Vision
							</h1>
							<p className="text-lightText text-[15px] max-w-[668px] leading-[27px] mx-auto">
								Improved community wellbeing through quality
								education and shared information.
							</p>
						</div>
						<div className=" mx-auto bg-darkBlue text-center py-12 px-6 rounded-[10px] my-28">
							<h1 className="text-white text-[34px] font-semibold mb-4">
								Mission
							</h1>
							<p className="text-lightText text-[15px] max-w-[668px] leading-[27px] mx-auto">
								To transform the lives of children, youth and
								community at large through provision of quality
								education and shared information required for
								self-determination and developmental support.
							</p>
						</div>
					</div>
				</SectionWrapper>
			</div>
			<SectionWrapper>
				<CoreValues />
			</SectionWrapper>
			
			<div className="bg-darkBlue">
				<SectionWrapper>
					<div
						data-aos="fade-up"
						data-aos-duration="1000"
						className="max-w-5xl py-24"
					>
						<h2 className="text-white text-3xl font-semibold mb-5">
							CIDI Governance
						</h2>
						<p className="text-lightText text-justify">
							Community Information Development Initiatives (CIDI) is a member-based organization
							with its supreme decision makers vested to its
							members. Members meets once annually during Annual
							General Assembly or extra ordinary meeting. It has a
							Board with twelve members who meet once after every
							six months, but do meet at any time when a need
							arises. Reporting to the Board of Directors is the
							Executive Director who is the head of secretariat
							that oversees implementation of daily activities of
							the organization. Additionally, CIDI
							has a team of 4 multidisciplinary experts who forms
							Technical Advisory Committee that advice the
							secretariat on all technical matters regularly and
							also advises the Board of Directors. The executive
							director is supported by seven key technical staff
							for running activities of the organization supported
							by five volunteers.
						</p>
						<p
							className="text-lightText mt-6 text-justify"
							id="finance"
						>
							CIDI  team is composed of qualified
							and experienced experts and volunteers from various
							background Policy, human rights, Environmental,
							Agriculture, water resources, nutritionist, gender
							experts, WASH business development specialist,
							gender, agronomist, lawyers etc.
						</p>
						<p
							className="text-lightText mt-6 text-justify"
							id="finance"
						>
							CIDI has a system of quality
							planning and controls at field, head office and
							partnerships levels. Regular planning and review
							meeting which involves key members of the
							organization are set up and operational. Major
							decisions and approvals of yearly plans and budgets
							are done in annual planning meetings. The annual
							plans are then split into small plans at monthly and
							quarterly levels including, field/project level,
							head office and partners planning levels.
						</p>
					</div>
				</SectionWrapper>
			</div>

			<SectionWrapper>
				<div
					data-aos="fade-up"
					data-aos-duration="1000"
					className="max-w-5xl py-24"
				>
					<h2 className="text-darkBlue text-3xl font-semibold mb-5">
						Finance
					</h2>
					<p className="text-textBlue text-justify">
						CIDI has a Finance Department that adhere to
						International Financial Reporting Standards (IFRS) and
						practices. Finance department is managed by a finance
						officer who is a holder of CPA assisted by one chartered
						accountant and one assistant with duties to manage and
						account for funds.
					</p>
					<p className="text-textBlue mt-6 text-justify">
						The finance department maintains a system for recording
						and submitting all types of financial transactions for
						the purpose of implementing projects and running
						organization activities. The accounting software in use
						is called Tally. Financial details and transactions are
						processed through computer program where various reports
						and details are extracted on daily basis for
						crosschecking, approvals and as part of back-up system
						to external/hard files.
					</p>
					<p className="text-textBlue mt-6 text-justify" id="team">
						On monthly basis reports are produced, signed and put on
						file for various uses. Bank reconciliation is done
						monthly and financial reports for internal reflection is
						done quarterly. Annual Financial statements are prepared
						each year and audited by independent Auditor. Revenue
						grants from donors are recorded in the accounting period
						it is received and expenses recognized when incurred.
						Grants and donations are recorded separately from
						operational activities. In-kind contributions are also
						recognized through journal adjustments that are
						supported by appropriate and objective documentation
						(e.g., agreements, formal letters or memos and
						Memorandum of Understanding). CIDI has zero tolerance
						for corruption, theft, fraud and dishonesty.
					</p>
				</div>
			</SectionWrapper>
			<div className="bg-sectionGray">
				<SectionWrapper>
					<div
						className="py-28 max-w-[910px] mx-auto"
						data-aos="fade-up"
						data-aos-duration="1000"
					>
						<h2 className="text-center text-darkBlue text-3xl font-semibold">
							Our Team
						</h2>
						<div
							className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-6 md:gap-12 mt-12"
							data-aos="fade-up"
							data-aos-duration="1000"
						>
							{team.map((member, index) => (
								<div
									className="relative group aspect-[274/330] w-full bg-top bg-cover flex items-end"
									key={index}
									style={{
										backgroundImage: `url(${member.image})`,
									}}
								>
									<div className="inline-block sm:hidden sm:group-hover:inline-block duration-300 w-full aspect-[274/211] bg-[linear-gradient(180deg,_rgba(58,65,84,0)_0%,_rgba(58,65,84,0.69)_54.19%,_#3A4154_100%)]">
										<div className="px-4 pb-8 flex items-start h-full justify-end flex-col">
											<h2 className="text-white text-2xl font-semibold">
												{member.name}
											</h2>
											<p className="text-sm text-lightText">
												{member.role}
											</p>
											<div className="flex items-center space-x-4 mt-4">
												<Link to="#">
													<FaTwitter className="text-[#888888] h-5 w-5" />
												</Link>
												<Link to="#">
													<FaFacebookF className="text-[#888888] h-5 w-5" />
												</Link>
												<Link to="#">
													<FaInstagram className="text-[#888888] h-5 w-5" />
												</Link>
												<Link to="#">
													<FaLinkedinIn className="text-[#888888] h-5 w-5" />
												</Link>
											</div>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</SectionWrapper>
			</div>
			<Faqs faqs={faqs} />
			<FoooterBanner text="Help us educate a Child" />
		</div>
	);
};

export default About;
