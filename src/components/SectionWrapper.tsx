import { FC, ReactNode } from "react";

interface ISectionWrapper {
	children: ReactNode;
}

const SectionWrapper: FC<ISectionWrapper> = ({ children }) => {
	return <div className="max-w-[1222px] mx-auto px-4">{children}</div>;
};

export default SectionWrapper;
