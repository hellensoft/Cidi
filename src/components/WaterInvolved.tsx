import { FC } from "react";

interface IWaterInvolved {
	id?: string;
}

const WaterInvolved: FC<IWaterInvolved> = ({ id }) => {
	return (
		<>
			<div className="pt-12">
				<div className="relative bg-white py-16 sm:py-20">
					<div
						className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:items-start lg:gap-24 lg:px-8"
						data-aos="fade-up"
						data-aos-duration="1000"
					>
						<div
							className="relative sm:py-16 lg:py-0"
							data-aos="fade-up"
							data-aos-duration="1000"
						>
							<div
								aria-hidden="true"
								className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen"
							>
								<div className="absolute inset-y-0 right-1/2 w-full rounded-r-3xl bg-gray-50 lg:right-72" />
								<svg
									className="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12"
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
							</div>
							<div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:px-0 lg:py-20">
								{/* Testimonial card*/}
								<div className="relative overflow-hidden rounded-2xl pt-64 pb-10 shadow-xl">
									<img
										className="absolute inset-0 h-full w-full object-cover"
										src="/images/washing.jpg"
										alt="teachers"
									/>
									<div className="absolute inset-0 bg-darkBluelight mix-blend-multiply" />
									<div className="absolute inset-0 bg-gradient-to-t from-darkBluedark via-darkBluedark opacity-90" />
									<div className="relative px-8">
										<blockquote className="mt-8">
											<div className="relative text-lg font-medium text-white md:flex-grow">
												<svg
													className="absolute -top-2 left-0 h-8 w-8 -translate-x-3 -translate-y-2 transform text-greenPrimary"
													fill="currentColor"
													viewBox="0 0 32 32"
													aria-hidden="true"
												>
													<path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
												</svg>
												<p className="relative max-w-sm">
													Working closely with WASH
													sector and development
													partners to support achieve
													the national target on four
													priority WASH areas:
												</p>
											</div>

											<footer className="mt-4">
												<p className="text-base font-semibold text-greenPrimary">
													CIDI-Wash
												</p>
											</footer>
										</blockquote>
									</div>
								</div>
							</div>
						</div>
						<div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
							{/* Content area */}
							<div className="pt-12 sm:pt-16 lg:pt-20">
								<h2 className="text-xl font-bold tracking-tight text-blackPrimary sm:text-2xl">
									How do we get involved
								</h2>
								<p className="text-justify text-base md:text-md text-textGray font-medium">
									CIDI has partnered with WASH Africa to
									promote improved access in sustainable water
									supply, Sanitation and Hygiene facilities
									and services throughout Tanzania.
								</p>
								<p className="text-justify text-base md:text-md text-textGray font-medium">
									We are working closely with WASH sector and
									development partners to support Tanzania
									Government achieve national WASH targets in
									five priority areas:
								</p>
								<ul className="list-disc ml-6 mt-6 space-y-6 text-gray-500">
									<li className="text-sm md:text-base text-justify">
										Improved sustainable access to safe
										water, sanitation and hygiene in
										communities.
									</li>
									<li className="text-sm md:text-base text-justify">
										Improve WASH facilities and services in
										schools, HCFs, HHs and Public.
									</li>
									<li className="text-sm md:text-base text-justify">
										Improved technical assistance to WASH
										governance Systems, Structures and WASH
										management bodies.
									</li>

									<li className="text-sm md:text-base text-justify">
										Community empowerment on WASH diseases
										prevention.
									</li>
									<li className="text-sm md:text-base text-justify">
										Increase/maintain ODF through CLTS
										Committee, training and follow up on ODF
										verification protocols; technical and
										administrative assistance to maintain
										and/or advance the ODF status.
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="">
				<div className="relative bg-white">
					<div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:items-start lg:gap-24 lg:px-8">
						<div
							className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0"
							data-aos="fade-up"
							data-aos-duration="1000"
						>
							{/* Content area */}
							<div className="pt-12 sm:pt-16 lg:pt-20">
								<h2 className="text-xl font-bold tracking-tight text-blackPrimary sm:text-2xl">
									Under urban sanitation we are involved with
								</h2>
								<ul className="list-disc ml-6 mt-6 space-y-3 text-gray-500">
									<li className="text-sm md:text-base text-justify">
										Building entrepreneurship in waste
										management.
									</li>
									<li className="text-sm md:text-base text-justify">
										Community demand creation for WASH
										services and ownership.
									</li>
									<li className="text-sm md:text-base text-justify">
										Designing and construction of WASH
										infrastructures and post construction
										support services.
									</li>

									<li className="text-sm md:text-base text-justify">
										WASH governance regulations and
										enforcement:
									</li>
									<li className="text-sm md:text-base text-justify">
										SBCC and awareness
									</li>
									<li className="text-sm md:text-base text-justify">
										Promotion of sanitation products and
										services.
									</li>
									<li className="text-sm md:text-base text-justify">
										Social sanitation Marketing.
									</li>
									<li className="text-sm md:text-base text-justify">
										Design and implementation of sustainable
										waste management modal.
									</li>
								</ul>
							</div>
						</div>

						<div
							className="relative sm:py-16 lg:py-0 hidden lg:inline-block"
							data-aos="fade-up"
							data-aos-duration="1000"
						>
							<div
								aria-hidden="true"
								className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen"
							>
								{/* <div className="absolute inset-y-0 left-1/2 w-full rounded-r-3xl bg-gray-50 lg:left-72" /> */}
								<svg
									className="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12"
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
							</div>
							<div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:px-0 lg:py-20">
								{/* Testimonial card*/}
								<div className="relative overflow-hidden rounded-2xl pt-64 pb-10 shadow-xl">
									<img
										className="absolute inset-0 h-full w-full object-cover"
										src="/images/watersearch.jpeg"
										alt="teachers"
									/>
									<div className="absolute inset-0 bg-darkBluelight mix-blend-multiply" />
									<div className="absolute inset-0 bg-gradient-to-t from-darkBluedark via-darkBluedark opacity-90" />
									<div className="relative px-8">
										<blockquote className="mt-8">
											<div className="relative text-lg font-medium text-white md:flex-grow">
												<svg
													className="absolute -top-2 left-0 h-8 w-8 -translate-x-3 -translate-y-2 transform text-greenPrimary"
													fill="currentColor"
													viewBox="0 0 32 32"
													aria-hidden="true"
												>
													<path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
												</svg>
												<p className="relative max-w-sm">
													Working closely with WASH
													sector and development
													partners to support achieve
													the national target on four
													priority WASH areas:
												</p>
											</div>

											<footer className="mt-4" id={id}>
												<p className="text-base font-semibold text-greenPrimary">
													CIDI-Wash
												</p>
											</footer>
										</blockquote>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default WaterInvolved;
