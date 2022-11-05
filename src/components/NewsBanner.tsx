import { FC } from "react";
import SectionWrapper from "./SectionWrapper";
import { Link } from "react-router-dom";

interface INewsBanner {}

const NewsBanner: FC<INewsBanner> = () => {
	return (
		<div className="z-30">
			<SectionWrapper>
				<div className="bg-darkBlue -mt-12 mb-20 flex items-center justify-between px-28 py-6 rounded-tl-[45px] shadow-[0px_15px_44px_rgba(0,122,255,0.15)] rounded-br-[45px]">
					<h2 className="text-white text-2xl font-semibold">
						testin testin
					</h2>
					<Link
						to="/donation"
						className="bg-greenPrimary inline-block hover:bg-darkBlue duration-150 rounded-[5px] py-4 text-white font-medium px-6 sm:px-9 h-full border border-greenPrimary"
					>
						Donate now
					</Link>
				</div>
			</SectionWrapper>
		</div>
	);
};

export default NewsBanner;
