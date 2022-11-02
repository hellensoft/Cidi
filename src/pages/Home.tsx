import { FC } from "react";
import { Link } from "react-router-dom";
import FoooterBanner from "../components/FooterBanner";
import SectionWrapper from "../components/SectionWrapper";

interface IHome {}

const Home: FC<IHome> = () => {
	return (
		<div>
			<SectionWrapper>
				<div className="grid grid-cols-2 gap-16 place-items-center my-28">
					<div>
						<h2 className="text-darkBlue text-2xl font-semibold">
							Who We Are?
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
								className="bg-greenPrimary inline-block hover:bg-darkBlue duration-150 rounded-[5px] py-4 text-white font-medium px-6 sm:px-12 h-full border border-greenPrimary"
							>
								Know More
							</Link>
						</div>
					</div>
					<div className="relative aspect-square w-full h-auto">
						<img
							className="absolute top-0 right-0 w-[460px] h-auto"
							src="/images/class.png"
							alt="plants"
						/>
						<img
							className="absolute bottom-16 w-[320px] h-auto left-0"
							src="/images/planting.png"
							alt="plants"
						/>
					</div>
				</div>
			</SectionWrapper>
			<FoooterBanner text="Help us Improve  Agriculture Livelihood" />
		</div>
	);
};

export default Home;
