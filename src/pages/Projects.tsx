import { FC } from "react";
import { Link } from "react-router-dom";
import PageIntro from "../components/PageIntro";
import SectionWrapper from "../components/SectionWrapper";
import projects from "../data/projects.json";

interface IProjects {}

const Projects: FC<IProjects> = () => {
	return (
		<div className="bg-sectionBlue">
			<PageIntro name="Projects" />
			<SectionWrapper>
				<div className="pb-24 space-y-8">
					{projects.map((project, index) => (
						<div
							className="grid md:grid-cols-2 lg:grid-cols-[2fr_3fr] gap-8 shadow-md p-6 md:p-12 rounded bg-white"
							key={index}
							data-aos="fade-up"
							data-aos-duration="1000"
						>
							<div className="">
								<img
									src={project.image}
									className="w-full h-full object-cover rounded"
									alt={project.name}
								/>
							</div>
							<div className="flex flex-col justify-between">
								<div className="flex w-full items-center justify-between">
									<span className="text-white bg-darkBlue px-4 text-sm font-semibold py-1 uppercase">
										{project.tag}
									</span>
									<Link
										className="text-sm font-semibold text-darkBlue hover:text-greenPrimary duration-100"
										to="/donation"
									>
										Donate
									</Link>
								</div>
								<h1 className="my-6 text-2xl md:text-3xl md:4xl font-semibold text-darkBlue">
									{project.name}
								</h1>
								<p className="text-darkText font-medium mb-auto">
									{project.description}
								</p>
								<div className="flex w-full justify-end mt-4 border-t pt-4">
									<Link
										to={project.link}
										className="bg-greenPrimary inline-block hover:bg-darkBlue duration-150 py-2 text-white font-medium px-6 sm:px-8 h-full border border-greenPrimary"
									>
										Read More
									</Link>
								</div>
							</div>
						</div>
					))}
				</div>
			</SectionWrapper>
		</div>
	);
};

export default Projects;
