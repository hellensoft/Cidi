import { FC, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/css";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import SectionWrapper from "./SectionWrapper";
import testimonies from "../data/testimony.json";

SwiperCore.use([Navigation]);

interface ITestimony {}

const Testimony: FC<ITestimony> = () => {
	const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
	const [nextEl, setNextEl] = useState<HTMLElement | null>(null);

	return (
		<SectionWrapper>
			<div className="my-24">
				<div className="text-center space-y-2">
					<p className="text-[15px] text-textBlue">Feedback</p>
					<h2 className="text-darkBlue text-2xl font-semibold">
						Volunteer Testimonials.
					</h2>
				</div>
				<Swiper
					navigation={{
						prevEl,
						nextEl,
					}}
					spaceBetween={48}
					slidesPerView={3}
					className=""
				>
					{testimonies.map((testimony, index) => (
						<SwiperSlide
							key={index}
							className="flex flex-col my-12 items-center px-8 py-6 bg-white shadow-[0px_8px_24px_rgba(0,0,0,0.07)]"
						>
							<p className="text-[74px] leading-[64px] font-semibold text-greenPrimary">
								“
							</p>
							<p className="text-center text-textBlue">
								{testimony.testimony}
							</p>
							<img
								className="my-6 rounded-full w-16 h-16"
								src={testimony.image}
								alt={testimony.name}
							/>
							<p className="text-[15px] text-darkBlue font-semibold text-center">
								{testimony.name}
							</p>
						</SwiperSlide>
					))}
					<div className="flex items-center space-x-6 justify-center">
						<div
							className="hover:cursor-pointer p-2 rounded-full border border-textBlue w-auto aspect-square"
							ref={(node) => setPrevEl(node)}
						>
							<BsArrowLeft className="text-textBlue inline-block w-5 h-5" />
						</div>
						<div
							className="hover:cursor-pointer p-2 rounded-full border border-textBlue w-auto aspect-square"
							ref={(node) => setNextEl(node)}
						>
							<BsArrowRight className="text-textBlue inline-block w-5 h-5" />
						</div>
					</div>
				</Swiper>
			</div>
		</SectionWrapper>
	);
};

export default Testimony;
