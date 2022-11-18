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

interface IAbout {}

const About: FC<IAbout> = () => {
	return (
		<div>
			<PageIntro name="About Us" />
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
						<div className="my-6">
							<p className="text-textGray text-sm leading-[27px]">
								CIDI is a registered National NGO under NGO Act
								No 24, 2002 of the Laws of United Republic of
								Tanzania, with Registration number{" "}
								<span className="text-darkBlue font-bold">
									00NGO/R/2765
								</span>
								.
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
						className="hidden md:inline-block relative aspect-square w-full h-auto"
						data-aos="fade-up"
						data-aos-duration="2000"
					>
						<img
							className="absolute top-0 right-0"
							src="/images/plantations.png"
							alt="plants"
						/>
						<img
							className="hidden lg:inline-block absolute bottom-0 left-0"
							src="/images/cows.png"
							alt="plants"
						/>
					</div>
				</div>
			</SectionWrapper>
			<div className="bg-sectionGray">
				<SectionWrapper>
					<div
						className="grid grid-cols-1 md:grid-cols-2 gap-16 place-items-center py-24"
						data-aos="fade-up"
						data-aos-duration="1000"
					>
						<div className="hidden md:inline-block relative aspect-square w-full h-auto">
							<img
								className="absolute top-0 left-0"
								src="/images/planting.png"
								alt="plants"
							/>
							<img
								className="hidden lg:inline-block absolute bottom-0 right-0"
								src="/images/learning.png"
								alt="plants"
							/>
						</div>
						<div data-aos="fade-up" data-aos-duration="2000">
							<h2 className="text-darkBlue text-2xl font-semibold">
								Who We Are?
							</h2>
							<div className="my-6">
								<p className="text-textGray text-sm leading-[27px]">
									CIDI represents the interest of the
									multi-sector wishing to facilitate, educate,
									inform and promote the development growth
									and expansion of different multi-sectorial
									industries on poverty alleviation in
									education, information, agriculture,
									capacity building and other initiatives
									through reciprocity, Dialogue and working
									closely with the relevant Government and
									non-Government bodies in Tanzania.
								</p>
							</div>
						</div>
					</div>
				</SectionWrapper>
			</div>
			<div className="px-4" data-aos="fade-up" data-aos-duration="1000">
				<div className="max-w-[806px] mx-auto bg-darkBlue text-center py-12 px-6 rounded-[10px] my-28">
					<h1 className="text-white text-[34px] font-semibold mb-4">
						Mission and Vision
					</h1>
					<p className="text-lightText text-[15px] max-w-[668px] leading-[27px] mx-auto">
						The organization shall be voluntary, consultative,
						non-government, non-political and non-profit making with
						the sole focus on the growth and development in
						improving the quality of life to all it serves through
						participatory approach on different development
						initiatives of Tanzania.
					</p>
				</div>
			</div>
			<SectionWrapper>
				<div data-aos="fade-up" data-aos-duration="1000">
					<h2 className="text-darkBlue text-2xl font-semibold">
						Core Values
					</h2>
					<div className="ml-0 sm:ml-16 mt-6">
						<p className="text-textGray">
							To improve living standards of community members
							through improved livelihoods, promote availability
							and accessibility of information and resources to
							overcome poverty and misery through different
							initiatives that are education based on all levels,
							religious counselling, agriculture, manufacturing
							and infrastructure based on practical business
							initiatives.
						</p>
						<ul className="list-disc ml-16 grid grid-cols-2 gap-y-4 max-w-[700px] mt-10">
							<li className="text-justify text-sm text-textGray">
								Professionalism
							</li>
							<li className="text-justify text-sm text-textGray">
								Honest
							</li>
							<li className="text-justify text-sm text-textGray">
								Transparency
							</li>
							<li className="text-justify text-sm text-textGray">
								Team work
							</li>
							<li className="text-justify text-sm text-textGray">
								Intergrity
							</li>
							<li className="text-justify text-sm text-textGray">
								Collaboration
							</li>
						</ul>
					</div>
				</div>
				<div
					className="my-28 max-w-[910px] mx-auto"
					data-aos="fade-up"
					data-aos-duration="1000"
				>
					<h2 className="text-center text-darkBlue text-2xl font-semibold">
						Our Team
					</h2>
					<div
						className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-6 md:gap-12 mt-12"
						data-aos="fade-up"
						data-aos-duration="1000"
					>
						{team.map((member, index) => (
							<div
								className="relative group aspect-[274/330] w-full bg-center bg-cover flex items-end"
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
			<Faqs faqs={faqs} />
			<FoooterBanner text="Help us educate a Child" />
		</div>
	);
};

export default About;
