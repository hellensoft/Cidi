import { FC } from "react";
import SectionWrapper from "./SectionWrapper";
import { MdKeyboardArrowDown } from "react-icons/md";

interface IPageIntro {
	name: string;
}

const PageIntro: FC<IPageIntro> = ({ name }) => {
	return (
		<SectionWrapper>
			<div className="w-full max-w-[594px] mx-auto py-28 flex items-center flex-col">
				<h1 className="text-[44px] text-darkBlue text-center leading-[55px] font-semibold">
					{name}
				</h1>
				<MdKeyboardArrowDown className="mt-8 text-darkBlue w-8 h-8" />
			</div>
		</SectionWrapper>
	);
};

export default PageIntro;
