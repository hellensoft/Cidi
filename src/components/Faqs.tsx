import { FC, useState } from "react";
import { BsPlusCircle } from "react-icons/bs";
import { Transition } from "@headlessui/react";

interface IFaqs {
	faqs: {
		question: string;
		answer: string;
	}[];
	titlePosition?: "center" | "start";
}

const Faqs: FC<IFaqs> = ({ faqs, titlePosition = "center" }) => {
	const [opened, setOpened] = useState<number | null>(null);

	return (
		<div className="my-28">
			<h2
				className={`text-${titlePosition} text-darkBlue text-2xl font-semibold`}
			>
				FAQ's
			</h2>
			<div
				className={`max-w-[753px] mt-4 ${
					titlePosition === "center" && "mx-auto"
				} px-6 sm:px-20 py-16 divide-y divide-[rgba(11,12,27,0.09)] shadow-[0px_12px_24px_rgba(0,0,0,0.06)] bg-white rounded`}
			>
				{faqs.map((faq, index) => (
					<div key={index} className="py-4">
						<button
							className="hover:cursor-pointer w-full"
							onClick={() => {
								if (opened !== index) {
									setOpened(index);
								} else setOpened(null);
							}}
						>
							<div className="flex items-center justify-between">
								<h4 className="text-darkBlue text-start text-base sm:text-md">
									{faq.question}
								</h4>
								<div>
									<BsPlusCircle className="w-5 h-5 ml-1" />
								</div>
							</div>
						</button>
						<Transition
							show={opened === index}
							enter="transition-opacity duration-150"
							enterFrom="opacity-0 -translate-y-full"
							enterTo="opacity-100 translate-y-0"
							leave="transition-opacity duration-150"
							leaveFrom="opacity-100 translate-y-0"
							leaveTo="opacity-0"
						>
							<div className="border-t py-2 mt-2">
								<p className="text-textBlue pl-2">
									{faq.answer}
								</p>
							</div>
						</Transition>
					</div>
				))}
			</div>
		</div>
	);
};

export default Faqs;
