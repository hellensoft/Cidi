import { FC } from "react";
import intros from "../data/homeHero.json";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade, Pagination } from "swiper";
import { Link } from "react-router-dom";
import SectionWrapper from "./SectionWrapper";
import newsData from "../data/news.json";
import "swiper/css/pagination";

interface IHomeIntro {}

const HomeIntro: FC<IHomeIntro> = () => {
	return (
		<div className="-z-50 pt-16 lg:pt-32">
			<Swiper
				modules={[EffectFade, Autoplay, Pagination]}
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
							<div className="pl-[calc(((100vw-1222px)/2))] min-h-[calc(90vh-56px)] md:min-h-[70vh] pb-28 flex flex-col items-start justify-center lg:max-w-[calc(100vw)] bg-[linear-gradient(92.55deg,_rgba(0,0,0,0.5)_9.84%,_rgba(0,0,0,0.5)_77.03%,_rgba(0,0,0,0.5)_97.9%)]">
								<div
									className="px-4 max-w-[602px]"
									data-aos="fade-right"
									data-aos-duration="1000"
								>
									<h1 className="text-white text-3xl md:text-[44px] font-semibold">
										{intro.title}
									</h1>
									<p className="mt-5 text-white text-sm mb-14">
										{intro.subTitle}
									</p>
									<div className="space-x-6 sm:space-x-12">
										<Link
											to={intro.ctaLink}
											className="bg-greenPrimary inline-block hover:bg-darkBlue duration-150 text-sm sm:text-base py-2 sm:py-4 text-white font-medium px-4 sm:px-12 h-full border border-greenPrimary"
										>
											Learn More
										</Link>
										<Link
											to="/donation"
											className="bg-transparent inline-block duration-150 text-sm sm:text-base py-2 sm:py-4 text-white font-medium px-4 sm:px-12 h-full border border-white"
										>
											Make Donation
										</Link>
									</div>
								</div>
							</div>
						</div>
						<div
							className="z-30"
							data-aos="fade-up"
							data-aos-duration="1000"
						>
							<SectionWrapper>
								<div className="bg-darkBlue -mt-14 mb-20 md:flex  md:flex-row space-y-2 md:space-y-0 items-start md:items-center justify-start px-6 sm:px-12 lg:px-28 py-6 rounded-tl-[45px] shadow-[0px_15px_44px_rgba(0,122,255,0.15)] rounded-br-[45px]">
									<div className="w-[220px]">
										<h2 className="text-white text-md font-semibold mr-16">
											News and Events :
										</h2>
									</div>
									<Swiper
										modules={[
											EffectFade,
											Autoplay,
											Pagination,
										]}
										loop={true}
										effect="fade"
										slidesPerView={1}
										autoplay={{ delay: 4000 }}
										fadeEffect={{
											crossFade: true,
										}}
										allowTouchMove={false}
										className="md:flex-1"
									>
										{newsData.map((news, index) => (
											<SwiperSlide key={index}>
												<div className="md:flex md:flex-col md:items-start">
													<h2 className="text-white text-md md:text-2xl font-semibold">
														{news.title}
													</h2>
													<p className="text-lightText text-xs sm:text-sm mt-2">
														{news.description}
													</p>
												</div>
											</SwiperSlide>
										))}
									</Swiper>
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
