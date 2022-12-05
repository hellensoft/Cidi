import { BiCheck } from "react-icons/bi";
import coreFeatures from "../data/coreValues.json";

const CoreValues = () => {
	return (
		<div className="bg-white" data-aos="fade-up" data-aos-duration="1000">
			<div className="mx-auto max-w-7xl py-16 px-6 sm:py-24 lg:px-8 lg:py-28">
				<div className="mx-auto max-w-3xl text-center">
					<h2 className="text-2xl font-bold tracking-tight text-darkBlue sm:text-4xl">
						Our Core Values / Principles
					</h2>
				</div>
				<dl
					className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8"
					data-aos="fade-up"
					data-aos-duration="1000"
				>
					{coreFeatures.map((feature) => (
						<div key={feature.name} className="relative">
							<dt>
								<BiCheck
									className="absolute h-6 w-6 text-greenPrimary"
									aria-hidden="true"
								/>
								<p className="ml-10 text-sm sm:text-base font-semibold leading-8 text-darkBlue">
									{feature.name}
								</p>
							</dt>
							<dd
								id="governance"
								className="mt-2 ml-10 text-xs sm:text-sm leading-7 text-textGray"
							>
								{feature.description}
							</dd>
						</div>
					))}
				</dl>
			</div>
		</div>
	);
};

export default CoreValues;
