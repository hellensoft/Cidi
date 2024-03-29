import { FC, useState } from "react";
import FoooterBanner from "../components/FooterBanner";
import PageIntro from "../components/PageIntro";
import SectionWrapper from "../components/SectionWrapper";
import contacts from "../data/contact.json";
import { IoSend } from "react-icons/io5";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { BsCheckCircle } from "react-icons/bs";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

interface IContact {}

const Contact: FC<IContact> = () => {
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [loading, setLoading] = useState(false);
	const [errorMessage, setErrorMessage] = useState<string | null>(null);

	return (
		<div>
			<PageIntro name="Contact Us" />
			<SectionWrapper>
				<div
					className="grid xs:grid-cols-2 md:grid-cols-3 gap-12 xs:gap-4 sm:gap-8 justify-items-center"
					data-aos="fade-up"
					data-aos-duration="1000"
				>
					{contacts.map((contact, index) => (
						<div
							className="flex flex-col items-center"
							key={index}
							data-aos="fade-up"
							data-aos-duration="1000"
						>
							<img src={contact.icon} alt={contact.title} />
							<div className="text-center mt-10 space-y-4">
								<h2 className="text-xl text-darkBlue font-semibold">
									{contact.title}
								</h2>
								<div>
									{contact.items.map((item, index) => (
										<p
											className="text-textGray text-lg leading-[25px]"
											key={index}
										>
											{item}
										</p>
									))}
								</div>
							</div>
						</div>
					))}
				</div>
			</SectionWrapper>
			<div className="grid lg:grid-cols-2 place-content-center my-24">
				<div
					className="row-start-2 lg:row-start-1 w-screen lg:w-full h-auto aspect-[9/7] sm:aspect-[9/5] lg:aspect-[9/7] bg-sectionGray"
					data-aos="fade-up"
					data-aos-duration="1000"
				>
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.096946618467!2d39.24132811502126!3d-6.758031667963097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185c4dd3ef90005d%3A0x1792d3fd63949cb5!2sUWP%20CONSULTING%20Dar%20Es%20Salaam!5e0!3m2!1sen!2stz!4v1667642738615!5m2!1sen!2stz"
						className="w-full h-full"
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
						title="location map"
					/>
				</div>
				<div
					className="px-4 mb-12 lg:mb-0 lg:pr-[calc(((100vw-1222px)/2))]"
					data-aos="fade-up"
					data-aos-duration="1000"
				>
					<div className="lg:pr-4 lg:pl-12 flex flex-col justify-center h-full">
						<p className="text-textBlue">CONTACT US</p>
						<h1 className="text-4zxl text-darkBlue font-semibold mb-8  mt-2">
							Have Questions?
							<br /> Get in Touch
						</h1>
						{isSubmitted ? (
							<div className="bg-sectionGray py-12 px-6">
								<div className="">
									<BsCheckCircle className="text-4xl text-greenPrimary mx-auto" />
								</div>
								<div className="text-center mt-6">
									<h1 className="text-2xl font-semibold text-darkBlue mb-2">
										Request Submitted
									</h1>
									<p className="text-gray-500">
										Thank you for contacting us. We will get
										back to you in no time.
									</p>
								</div>
							</div>
						) : (
							<Formik
								initialValues={{
									firstName: "",
									lastName: "",
									email: "",
									phoneNumber: "",
									message: "",
								}}
								validationSchema={yup.object({
									firstName: yup
										.string()
										.required("First name is required"),
									lastName: yup
										.string()
										.required("Last name is required"),
									email: yup
										.string()
										.email("Invalid email address")
										.required("Email is required"),
									phoneNumber: yup
										.string()
										.required("Phone number is required"),
									message: yup
										.string()
										.required("Message is required"),
								})}
								onSubmit={(values) => {
									setLoading(true);
									fetch(
										`${process.env.REACT_APP_BACKEND_URL}/cidi/cidi-contact`,
										{
											method: "POST",
											headers: {
												"Content-Type":
													"application/json",
											},
											body: JSON.stringify(values),
										}
									)
										.then((res) => res.json())
										.then((res) => {
											setLoading(false);
											setIsSubmitted(true);
										})
										.catch((err) => {
											setErrorMessage(err.message);
											setLoading(false);
										});
								}}
							>
								<Form className="space-y-6">
									<div className="grid xs:grid-cols-2 gap-8 gap-y-2">
										<Field
											type="text"
											name="firstName"
											id="firstName"
											className="block w-full border-0 pb-1 border-b border-textBlue text-sm sm:text-base focus:border-greenPrimary focus:ring-0"
											placeholder="First Name"
										/>
										<Field
											type="text"
											name="lastName"
											id="lastName"
											className="block w-full border-0 pb-1 border-b border-textBlue text-sm sm:text-base focus:border-greenPrimary focus:ring-0"
											placeholder="Last Name"
										/>
										<div className="pl-3">
											<ErrorMessage
												name="firstName"
												component="p"
												className="text-red-500 text-sm"
											/>
										</div>
										<div className="pl-3">
											<ErrorMessage
												name="lastName"
												component="p"
												className="text-red-500 text-sm"
											/>
										</div>
									</div>
									<div className="grid xs:grid-cols-2 gap-8 gap-y-2">
										<Field
											type="email"
											name="email"
											id="email"
											className="block w-full border-0 pb-1 border-b border-textBlue text-sm sm:text-base focus:border-greenPrimary focus:ring-0"
											placeholder="Email Address"
										/>
										<Field
											type="number"
											name="phoneNumber"
											id="phoneNumber"
											className="block w-full border-0 pb-1 border-b border-textBlue text-sm sm:text-base focus:border-greenPrimary focus:ring-0"
											placeholder="Phone Number"
										/>
										<div className="pl-3">
											<ErrorMessage
												name="email"
												component="p"
												className="text-red-500 text-sm"
											/>
										</div>
										<div className="pl-3">
											<ErrorMessage
												name="phoneNumber"
												component="p"
												className="text-red-500 text-sm"
											/>
										</div>
									</div>
									<Field
										as="textarea"
										name="message"
										id="message"
										className="block w-full border-0 pb-1 border-b border-textBlue text-sm sm:text-base focus:border-greenPrimary focus:ring-0"
										placeholder="Message"
									/>
									<div className="pl-3 mt-[8px_!important]">
										<ErrorMessage
											name="message"
											component="p"
											className="text-red-500 text-sm"
										/>
									</div>
									{errorMessage && (
										<p className="text-red-600 font-medium">
											{errorMessage}
										</p>
									)}
									<div className="pt-6">
										<button
											type="submit"
											disabled={loading}
											className="bg-greenPrimary hover:bg-darkBlue duration-150 py-4 text-white font-medium px-6 sm:px-9 h-full border border-greenPrimary flex items-center space-x-4 disabled:bg-gray-300 disabled:cursor-not-allowed"
										>
											{loading ? (
												<AiOutlineLoading3Quarters className="animate-spin" />
											) : (
												<IoSend />
											)}
											<span>Send a Message</span>
										</button>
									</div>
								</Form>
							</Formik>
						)}
					</div>
				</div>
			</div>
			<FoooterBanner text="Help us educate a Child" />
		</div>
	);
};

export default Contact;
