import { FC, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/css";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { ImQuotesLeft } from "react-icons/im";
import SectionWrapper from "./SectionWrapper";
import happens from "../data/events.json";

SwiperCore.use([Navigation]);

interface IEvent {}

const Event: FC<IEvent> = () => {
	const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
	const [nextEl, setNextEl] = useState<HTMLElement | null>(null);

	return (
		<SectionWrapper>
			<div className="py-24" data-aos="fade-up" data-aos-duration="1000">
				<div
					className="text-center space-y-2"
					data-aos="fade-up"
					data-aos-duration="1000"
				>
					<p className="text-[15px] text-textBlue">
						Latest news and events
					</p>
					<h2 className="text-darkBlue text-2xl font-semibold">
						News and Events
					</h2>
				</div>
				<div
					data-aos="fade-up"
					data-aos-duration="1000">
					<Swiper
						navigation={{
							prevEl,
							nextEl,
						}}
						spaceBetween={20}
						breakpoints={{
							640: {
								// width: 640,
								slidesPerView: 1,
							},
							768: {
								// width: 768,
								slidesPerView: 2,
							},
							1024: {
								slidesPerView: 3,
							},
						}}
						className=""
					>
						{happens.map((happen, index) => (
							<SwiperSlide
								key={index}
								className="min-h-[380px] md:min-h-[540px] my-12 bg-white shadow-[0px_8px_24px_rgba(0,0,0,0.07)] bg-cover bg-center overflow-hidden group"
								style={{
									backgroundImage: `url(${happen.bgImage})`,
								}}
							>
								<div className="bg-darkBluedark2 w-full h-full min-h-[380px] md:min-h-[540px] translate-y-[75%] md:translate-y-[83%] group-hover:translate-y-0 duration-200 p-6 flex flex-col justify-between">
									<div className="">
										<div className="h-[70px] flex items-start justify-between">
											<h2 className="text-lg md:text-xl max-w-[200px] text-white font-semibold">
												{happen.title}
											</h2>
											<div className="text-white">
												<p className="text-base font-medium">
													Date:
												</p>
												<span className="text-xs italic font-semibold">
													{happen.date}
												</span>
											</div>
										</div>
										<p className="text-sm md:text-base text-gray-200">
											{happen.description}
										</p>
									</div>
									<div className="space-y-4">
										<ImQuotesLeft className="text-[44px] font-semibold text-gray-300" />
										<p className="text-sm md:text-base text-gray-200">
											{happen.host.description}
										</p>
										{/* <img
											className="h-12 w-auto"
											src={happen.host.image}
											alt={happen.title}
										/> */}
									</div>
								</div>
								{/* <p className="text-[74px] leading-[64px] font-semibold text-greenPrimary">
									“
								</p>
								<p className="text-center text-textBlue">
									{happen.title}
								</p>
								<img
									className="my-6 rounded-full w-16 h-16"
									src={happen.host.image}
									alt={happen.title}
								/>
								<p className="text-[15px] text-darkBlue font-semibold text-center">
									{happen.description}
								</p> */}
							</SwiperSlide>
						))}
						<div className="flex items-center space-x-6 justify-center">
							<div
								className="hover:cursor-pointer p-2 rounded-full border border-blackPrimary w-auto aspect-square"
								ref={(node) => setPrevEl(node)}
							>
								<BsArrowLeft className="text-blackPrimary inline-block w-5 h-5" />
							</div>
							<div
								className="hover:cursor-pointer p-2 rounded-full border border-blackPrimary w-auto aspect-square"
								ref={(node) => setNextEl(node)}
							>
								<BsArrowRight className="text-blackPrimary inline-block w-5 h-5" />
							</div>
						</div>
					</Swiper>
				</div>
			</div>
		</SectionWrapper>
	);
};

export default Event;
