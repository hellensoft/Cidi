import { FC } from "react";
import { Link } from "react-router-dom";
import FoooterBanner from "../components/FooterBanner";
import SectionWrapper from "../components/SectionWrapper";
import services from "../data/whatWeDo.json";
import { BsArrowRight } from "react-icons/bs";
import Testimony from "../components/Testimony";
import HomeIntro from "../components/HomeIntro";
import Event from "../components/EventSection";
import BecomeVolunteer from "../components/BecomeVolunteer";

interface IHome {}

const Home: FC<IHome> = () => {
  return (
    <div>
      <HomeIntro />
      {/* <NewsBanner /> */}
      <SectionWrapper>
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-16 place-items-start my-10"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div data-aos="fade-up" data-aos-duration="1000">
            <div className="my-6 space-y-4">
              <h2 className="text-darkBlue text-xl font-semibold">
                COMMUNITY INFORMATION DEVELOPMENT INITIATIVE (CIDI)
              </h2>
              <p className="text-textGray text-sm leading-[27px]">
                <span className="font-semibold text-darkBlue">CIDI</span> is a
                non-profit organization dedicated to serving marginalized
                population groups throughout Tanzania.
              </p>

              <h2 className="text-darkBlue text-xl font-semibold">
                WHO WE ARE
              </h2>
              <p className="text-textGray text-sm leading-[27px]">
                “CIDI “stands for Community Information Development Initiatives”
              </p>
              <p className="text-textGray text-sm leading-[27px] text-justify">
                CIDI is a registered National NGO under NGO Act No. 24, 2002 of
                the Laws of United Republic of Tanzania by the Ministry of
                Health, Community Development, Gender and Children with a
                registration No. 00NGO/R/2765.
              </p>
              <p className="text-textGray text-sm leading-[27px] text-justify">
                We work to contribute in solving community challenges through
                implementing innovative programs related to quality education,
                agriculture, food security, climate change, child rights
                protection and health promotion, sharing lessons leant from our
                programs before scaling up through innovation, influencing,
                advocacy and sectoral engagement.
						  </p>
						  
			  <h2 className="text-darkBlue text-xl font-semibold">
               OUR STATEMENT
              </h2>
              <p className="text-textGray text-sm leading-[27px] text-justify">
                As an organization we believe that God loves all people equally
                and that his vision for this world, is to be a place where all
                people are cared for, where everyone’s needs are met and
                everyone is respected and valued. We believe that, our call is
                to make this vision reality, prioritizing the most vulnerable
                and neediest groups to bring help and hope.
              </p>

              <Link
                to="/about"
                className="bg-greenPrimary inline-block hover:bg-darkBlue duration-150 py-4 text-white font-medium px-6 sm:px-12 h-full border border-greenPrimary"
              >
                Know More
              </Link>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            className="relative aspect-square w-full h-auto"
          >
            <img src="/images/owners.jpg" alt="owners" />
            <div className="hidden lg:inline-block w-full h-[400px] absolute bg-darkBlue bottom-24 -right-10 -z-10"></div>
          </div>
        </div>
      </SectionWrapper>
      <div className="bg-sectionGray py-28">
        <SectionWrapper>
          <div>
            <div
              className="text-center space-y-2"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <p className="text-[15px] text-textBlue">Our Services</p>
              <h2 className="text-darkBlue text-2xl font-semibold">
                What we Do
              </h2>
            </div>
            <div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-4 my-16"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`flex items-start space-x-6 h-full hover:bg-white p-9 hover:shadow-[0px_12px_24px_rgba(0,0,0,0.05)] duration-150 ${
                    service.highlight &&
                    "bg-white shadow-[0px_12px_24px_rgba(0,0,0,0.05)]"
                  }`}
                >
                  <img
                    className="w-14 h-14"
                    src={service.icon}
                    alt={service.name}
                  />
                  <div className="flex flex-col items-start h-full justify-between">
                    <h2 className="text-darkBlue text-md sm:text-lg font-semibold">
                      {service.name}
                    </h2>
                    <p className="text-[15px] text-textBlue mt-4 mb-6">
                      {service.description}
                    </p>
                    <div className="mt-auto">
                      <Link
                        className="text-darkBlue text-[15px] flex items-center space-x-2"
                        to={service.link}
                      >
                        <span>Learn More</span>
                        <BsArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div
              className="flex items-center justify-center"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <Link
                to="/projects"
                className="bg-greenPrimary inline-block hover:bg-darkBlue duration-150 rounded-[5px] py-4 text-white font-medium px-6 sm:px-12 h-full border"
              >
                View More
              </Link>
            </div>
          </div>
        </SectionWrapper>
      </div>
      <BecomeVolunteer />
      <Testimony />
      <Event />
      <FoooterBanner text="Help us Improve  Agriculture Livelihood" />
    </div>
  );
};

export default Home;
