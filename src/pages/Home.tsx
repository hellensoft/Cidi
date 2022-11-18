import { FC } from "react";
import { Link } from "react-router-dom";
import FoooterBanner from "../components/FooterBanner";
import SectionWrapper from "../components/SectionWrapper";
import services from "../data/whatWeDo.json";
import { BsArrowRight } from "react-icons/bs";
import Testimony from "../components/Testimony";
import HomeIntro from "../components/HomeIntro";

interface IHome {}

const Home: FC<IHome> = () => {
	return (
		<div>
			<HomeIntro />
			{/* <NewsBanner /> */}
			<SectionWrapper>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-16 place-items-center my-10">
					<div>
						<h2 className="text-darkBlue text-2xl font-semibold">
							Who We Are
						</h2>
						<div className="my-6 space-y-8">
							<p className="text-textGray text-sm leading-[27px]">
								Community Information Development Initiatives
								(CIDI) is a non governmental organisation based
								in Tanzania mainland . CIDI was registered
								National NGO under NGO Act of the law of united
								republic of Tanzania under ministry of Health,
								Community Development,Gender,Eldery and
								Children.
							</p>
							<p className="text-textGray text-sm leading-[27px]">
								CIDI is an education and agricultural based
								organisation with its main projects being
								quality improved education and agructural
								economic activities.
							</p>
							<p className="text-textGray text-sm leading-[27px]">
								CIDI is for marginalised people Particularly
								children ,youth ,and women
							</p>
							<Link
								to="/about"
								className="bg-greenPrimary inline-block hover:bg-darkBlue duration-150 py-4 text-white font-medium px-6 sm:px-12 h-full border border-greenPrimary"
							>
								Know More
							</Link>
						</div>
					</div>
					<div className="relative aspect-square w-full h-auto">
						<img src="/images/owners.jpg" alt="owners" />
                        <div className="hidden lg:inline-block w-full h-[400px] absolute bg-darkBlue bottom-24 -right-10 -z-10"></div>
					</div>
				</div>
			</SectionWrapper>
			<div className="bg-sectionGray py-28">
				<SectionWrapper>
					<div>
						<div className="text-center space-y-2">
							<p className="text-[15px] text-textBlue">
								Our Services
							</p>
							<h2 className="text-darkBlue text-2xl font-semibold">
								What we Do
							</h2>
						</div>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-16">
							{services.map((service, index) => (
								<div
									key={index}
									className={`flex items-start space-x-6 hover:bg-white p-9 hover:shadow-[0px_12px_24px_rgba(0,0,0,0.05)] duration-150 ${
										service.highlight &&
										"bg-white shadow-[0px_12px_24px_rgba(0,0,0,0.05)]"
									}`}
								>
									<img
										className="w-14 h-14"
										src={service.icon}
										alt={service.name}
									/>
									<div>
										<h2 className="text-darkBlue text-lg sm:text-xl font-semibold">
											{service.name}
										</h2>
										<p className="text-[15px] text-textBlue mt-4 mb-6">
											{service.description}
										</p>
										<Link
											className="text-darkBlue text-[15px] flex items-center space-x-2"
											to={service.link}
										>
											<span>Learn More</span>
											<BsArrowRight className="w-4 h-4" />
										</Link>
									</div>
								</div>
							))}
						</div>
						<div className="flex items-center justify-center">
							<Link
								to="#"
								className="bg-greenPrimary inline-block hover:bg-darkBlue duration-150 rounded-[5px] py-4 text-white font-medium px-6 sm:px-12 h-full border border-greenPrimary"
							>
								View More
							</Link>
						</div>
					</div>
				</SectionWrapper>
			</div>
			<Testimony />
			<FoooterBanner text="Help us Improve  Agriculture Livelihood" />
		</div>
	);
};

export default Home;
