import { FC } from "react";
import { Link } from "react-router-dom";
import SectionWrapper from "./SectionWrapper";

interface IBecomeVolunteer {}

const BecomeVolunteer: FC<IBecomeVolunteer> = () => {
	return (
		<div
			className="py-36 bg-bottom bg-no-repeat bg-cover"
			style={{
				backgroundImage:
					"linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.5) 100%), url('/images/Charity.jpeg')",
			}}
		>
			<SectionWrapper>
				<div
					className="space-y-6 max-w-xl"
					data-aos="fade-up"
					data-aos-duration="1000"
				>
					<span className="text-white bg-darkBlue px-4 text-sm font-semibold py-2">
						JOIN WITH US
					</span>
					<h1 className="font-3xl md:text-5xl font-bold leading-10 text-white">
						Become A Proud <br />
						Volunteer
					</h1>
					<p className="text-white text-sm leading-[27px]">
						For those who are willing and have the desire to help
						those in need. If you are young, active and ready to
						change the world for the better, we look forward to
						seeing your own design.
					</p>
					<p className="text-white text-sm leading-[27px]">
						The dedication and the charity work of volunteers from
						CIDI organization are doing can’t be under estimated. We
						are always looking for new people to join our team.
					</p>
					<div className="">
						<Link
							to="/volunteer"
							className="bg-greenPrimary inline-block hover:bg-darkBlue duration-150 py-2 text-white font-medium px-6 sm:px-12 h-full border border-greenPrimary"
						>
							APPLY HERE
						</Link>
					</div>
				</div>
			</SectionWrapper>
		</div>
	);
};

export default BecomeVolunteer;
