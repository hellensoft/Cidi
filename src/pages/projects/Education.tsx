import { FC } from "react";
import { Link } from "react-router-dom";
import Faqs from "../../components/Faqs";
import FoooterBanner from "../../components/FooterBanner";
import PageIntro from "../../components/PageIntro";
import SectionWrapper from "../../components/SectionWrapper";
import faqs from "../../data/educationFaqs.json";

interface IEducation {}

const Education: FC<IEducation> = () => {
	return (
		<div>
			<PageIntro name="Education" />
			<SectionWrapper>
				<div className="grid grid-cols-[1fr_350px] gap-8">
					<div>
						<div>
							<img
								src="/images/education-image-1.png"
								alt="students at school"
							/>
							<p className="text-textBlue mt-16 mb-10">
								CIDI believes that good quality publicly funded
								education is paramount to every child and should
								not be negotiable. We will work with
								communities, governments and partners to remove
								barriers to girls’ education and promote gender
								equality in education.
							</p>
							<div className="bg-sectionGray pt-16 pb-8 px-8">
								<p className="text-darkBlue text-md relative border-l-2 px-3 border-[rgba(17,28,66,0.2)]">
									<span className="text-greenPrimary absolute -top-14 text-[64px] left-3">
										“
									</span>
									A child’s early years are the foundation for
									his or her future development, providing a
									strong base for lifelong learning and
									learning abilities, including cognitive and
									social development.
								</p>
							</div>
							<div>
								<h2 className="text-darkBlue text-2xl font-semibold mt-16 mb-10">
									Children and Technology
								</h2>
								<p className="text-textBlue">
									The nature of the technology makes a
									difference to children’s experiences. We are
									interested in technologies used for
									entertainment, communication, work and
									study, such as smart toys, second screens,
									video streamed content for tablets and
									products using NFC (near field
									communication). Our work in this project
									will include basic research into children’s
									learning with technology, developing apps,
									the evaluation of specific products, looking
									at usability and exploring the values,
									attitudes and preferences of children and
									grown-ups.
								</p>
								<p className="text-textBlue">
									We have experience with a range of
									approaches to research, from detailed
									second-by-second video analysis of
									children’s interactions to focus groups,
									expert panels, visual methods, in-depth case
									studies and experimental approaches, whether
									in the home, at school, or elsewhere.
								</p>
								<p className="text-textBlue mt-12 mb-16">
									Beyond this focus on children and
									technology, our theoretical and
									methodological orientations vary depending
									on the project, what we want to know, and
									the team’s areas of expertise. Most of our
									research revolves around different
									combinations of six themes: learning,
									pedagogy, design, cognition, culture, and
									context. We are interested in where, with
									whom, why and how children interact with
									technology.
								</p>
								<img
									src="/images/education-image-2.png"
									alt="students at school"
								/>
							</div>
							<div>
								<h2 className="text-darkBlue text-2xl font-semibold mt-16 mb-10">
									Technology in Schools
								</h2>
								<Link
									to="#"
									className="bg-greenPrimary inline-block hover:bg-darkBlue duration-150  py-4 text-white font-medium px-6 sm:px-12 h-full border border-greenPrimary"
								>
									Learn More
								</Link>
							</div>
						</div>
					</div>
					<div className="relative w-full">
						<div className="w-full sticky top-6 bg-darkBlue flex flex-col items-center p-6">
							<h1 className="text-white text-[34px] leading-[64px] mb-6">
								Help us, Help them to reach for their Dreams..
							</h1>
							<Link
								to="/donation"
								className="bg-greenPrimary inline-block hover:bg-darkBlue duration-150  py-4 text-white font-medium px-6 sm:px-20 h-full border border-greenPrimary"
							>
								Donate now
							</Link>
						</div>
					</div>
				</div>
				<Faqs faqs={faqs} titlePosition="center" />
			</SectionWrapper>
			<FoooterBanner text="Help us educate a Child" />
		</div>
	);
};

export default Education;
