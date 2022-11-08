import { FC } from "react";
import intros from "../data/homeHero.json";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade, Pagination } from "swiper";
import { Link } from "react-router-dom";
import SectionWrapper from "./SectionWrapper";

import "swiper/css/pagination";

interface IHomeIntro {}

const HomeIntro: FC<IHomeIntro> = () => {
	const pagination = {
		clickable: true,
		el: () => {
			return <div className={`z-50`}>1</div>;
		},
	};

	return (
		<div className="-z-50">
			<Swiper
				modules={[EffectFade, Autoplay, Pagination]}
				// pagination={{
				//     el: (<div className={`z-50`}>1</div>)
				// }}
				loop={true}
				effect="fade"
				slidesPerView={1}
				autoplay={{ delay: 8000 }}
				fadeEffect={{
					crossFade: true,
				}}
				allowTouchMove={false}
			>
				{intros.map((intro, index) => (
					<SwiperSlide key={index}>
						<div
							className={`w-screen bg-cover bg-center -z-20`}
							style={{ backgroundImage: `url(${intro.bgImage})` }}
						>
							<div className="pl-[calc(((100vw-1222px)/2))] min-h-[70vh] pb-28 flex flex-col items-start justify-center max-w-[calc(100vw/2)] bg-[linear-gradient(92.55deg,_rgba(0,0,0,0.8)_9.84%,_rgba(0,0,0,0.4)_77.03%,_rgba(0,0,0,0)_97.9%)]">
								<div className="px-4">
									<h1 className="text-white text-[44px] font-semibold">
										{intro.title}
									</h1>
									<p className="mt-5 text-lightText max-w-[418px] text-sm mb-14">
										{intro.subTitle}
									</p>
									<div className="space-x-12">
										<Link
											to={intro.ctaLink}
											className="bg-greenPrimary inline-block hover:bg-darkBlue duration-150 rounded-[5px] py-4 text-white font-medium px-6 sm:px-12 h-full border border-greenPrimary"
										>
											Learn More
										</Link>
										<Link
											to="/donation"
											className="bg-transparent inline-block duration-150 rounded-[5px] py-4 text-white font-medium px-6 sm:px-12 h-full border border-white"
										>
											Make Donation
										</Link>
									</div>
								</div>
							</div>
						</div>
						<div className="z-30">
							<SectionWrapper>
								<div className="bg-darkBlue -mt-14 mb-20 flex items-center justify-start px-28 py-6 rounded-tl-[45px] shadow-[0px_15px_44px_rgba(0,122,255,0.15)] rounded-br-[45px]">
									<h2 className="text-white text-md font-semibold mr-16">
										News and Events :
									</h2>
									<div className="flex flex-col items-start">
										<h2 className="text-white text-2xl font-semibold">
											Together to Make Tanzania Better
										</h2>
										<p className="text-lightText text-sm mt-2">
											Please Help Us Change Lives in
											Tanzania
										</p>
									</div>
								</div>
							</SectionWrapper>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default HomeIntro;
