import { FC } from "react";
import SectionWrapper from "./SectionWrapper";
import { Formik, Form, Field } from "formik";
import footerLinks from "../data/footerNav.json";
import { NavLink, Link } from "react-router-dom";
import {
	FaFacebookF,
	FaLinkedinIn,
	FaInstagram,
	FaTwitter,
} from "react-icons/fa";

interface IFooter {}

const socialMedia = [
	{
		name: "facebook",
		icon: FaFacebookF,
		link: "#",
	},
	{
		name: "linkedin",
		icon: FaLinkedinIn,
		link: "#",
	},
	{
		name: "instagram",
		icon: FaInstagram,
		link: "#",
	},
	{
		name: "twitter",
		icon: FaTwitter,
		link: "#",
	},
];

const Footer: FC<IFooter> = () => {
	return (
		<div className="bg-sectionGray pt-36 pb-8 sm:pb-20">
			<SectionWrapper>
				<div className="grid grid-cols-1 md:grid-cols-2 mb-8">
					<div>
						<img src="/images/cidi-logo.png" alt="company logo" />
						<p className="text-textBlue text-sm md:text-base mt-4 max-w-[516px]">
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Ultricies nulla enim nec massa morbi ut diam.
							Porta morbi ac vitae integer vel aliquet ipsum,
							facilisis varius. At suspendisse purus proin nunc.
							Morbi vulputate suscipit orci et, feugiat vivamus
							pulvinar ut. Pulvinar quam faucibus vitae massa,
							ipsum, varius. Odio faucibus cursus nascetur dolor
							posuere. Accumsan, cursus est in massa nam. Ut
							pretium a sit nulla blandit in feugiat. Felis nec
							pellentesque ut aliquam facilisis libero.
						</p>
					</div>
					<div className="pl-0 md:pl-16 mt-8 md:mt-24 flex flex-col items-start w-full justify-between">
						<Formik
							initialValues={{
								email: "",
							}}
							onSubmit={(values) => console.log(values)}
						>
							<Form className="w-full">
								<h2 className="text-md text-darkBlue font-semibold mb-5">
									Connect with us!
								</h2>
								<div className="w-full flex items-center h-12 lg:h-16 rounded-[5px] overflow-hidden">
									<Field
										name="email"
										type="email"
										placeholder="Email"
										className="h-full flex-1 border min-w-0 w-auto border-borderGray rounded-l-[5px] focus:border-current placeholder:text-textBlue text-darkBlue"
									/>
									<button
										type="submit"
										className="bg-greenPrimary hover:bg-darkBlue duration-150 text-white font-medium px-6 sm:px-9 h-full border border-greenPrimary"
									>
										Subscribe
									</button>
								</div>
							</Form>
						</Formik>
						<div className="mt-12 md:mt-0">
							<h2 className="text-md text-darkBlue font-semibold mb-5">
								Connect with us!
							</h2>
							<div className="flex items-center space-x-5">
								{socialMedia.map((social, index) => (
									<Link
										className="border border-greenPrimary p-3 rounded-full"
										to={social.link}
										key={index}
									>
										<social.icon className="w-5 h-5 text-greenPrimary" />
									</Link>
								))}
							</div>
						</div>
					</div>
				</div>
				<div className="grid grid-cols-1 justify-items-center gap-4 lg:gap-0 lg:grid-cols-2">
					<p className="text-darkBlue text-sm md:text-base font-semibold">
						© Copyright 2022 CIDI. All Right's Reserved. Experienced
						by HELLENSoft
					</p>
					<div className="lg:pl-16 row-start-1 lg:col-start-2 grid grid-cols-3 gap-2 xs:grid-cols-7 xs:justify-items-center max-w-[600px] justify-between w-full">
						{footerLinks.map((link, index) => (
							<NavLink
								to={link.link}
								key={index}
								className="text-xs sm:text-sm text-textBlue"
							>
								{link.name}
							</NavLink>
						))}
					</div>
				</div>
			</SectionWrapper>
		</div>
	);
};

export default Footer;
