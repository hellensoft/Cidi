import { FC } from "react";
import FoooterBanner from "../components/FooterBanner";
import PageIntro from "../components/PageIntro";
import SectionWrapper from "../components/SectionWrapper";
import contacts from "../data/contact.json";
import { IoSend } from "react-icons/io5";
import { Formik, Form, Field } from "formik";

interface IContact {}

const Contact: FC<IContact> = () => {
	return (
		<div>
			<PageIntro name="Contact Us" />
			<SectionWrapper>
				<div className="grid xs:grid-cols-2 md:grid-cols-3 gap-12 xs:gap-4 sm:gap-8 justify-items-center">
					{contacts.map((contact, index) => (
						<div className="flex flex-col items-center" key={index}>
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
				<div className="row-start-2 lg:row-start-1 w-screen lg:w-full h-auto aspect-[9/7] sm:aspect-[9/5] lg:aspect-[9/7] bg-sectionGray">
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.096946618467!2d39.24132811502126!3d-6.758031667963097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185c4dd3ef90005d%3A0x1792d3fd63949cb5!2sUWP%20CONSULTING%20Dar%20Es%20Salaam!5e0!3m2!1sen!2stz!4v1667642738615!5m2!1sen!2stz"
						className="w-full h-full"
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
						title="location map"
					/>
				</div>
				<div className="px-4 mb-12 lg:mb-0 lg:pr-[calc(((100vw-1222px)/2))]">
					<div className="lg:pr-4 lg:pl-12 flex flex-col justify-center h-full">
                        <p className='text-textBlue'>CONTACT US</p>
                        <h1 className='text-3xl text-darkBlue font-semibold mb-8  mt-2'>Have Questions?<br/> Get in Touch</h1>
						<Formik 
							initialValues={{
								firstName: "",
								lastName: "",
								email: "",
								phoneNumber: "",
								message: "",
							}}
							onSubmit={(values) => console.log(values)}
						>
							<Form className="space-y-6">
								<div className="grid xs:grid-cols-2 gap-8">
									<Field
										type="text"
										name="firstName"
										id="firstName"
										className="block w-full border-0 pb-2 border-b border-textBlue textr-base sm:text-xl focus:border-greenPrimary focus:ring-0"
										placeholder="First Name"
									/>
									<Field
										type="text"
										name="lastName"
										id="lastName"
										className="block w-full border-0 pb-2 border-b border-textBlue textr-base sm:text-xl focus:border-greenPrimary focus:ring-0"
										placeholder="Last Name"
									/>
								</div>
								<div className="grid xs:grid-cols-2 gap-8">
									<Field
										type="email"
										name="email"
										id="email"
										className="block w-full border-0 pb-2 border-b border-textBlue textr-base sm:text-xl focus:border-greenPrimary focus:ring-0"
										placeholder="Email Address"
									/>
									<Field
										type="text"
										name="phoneNumber"
										id="phoneNumber"
										className="block w-full border-0 pb-2 border-b border-textBlue textr-base sm:text-xl focus:border-greenPrimary focus:ring-0"
										placeholder="Phone Number"
									/>
								</div>
								<Field
									as="textarea"
									name="message"
									id="message"
									className="block w-full border-0 pb-2 border-b border-textBlue textr-base sm:text-xl focus:border-greenPrimary focus:ring-0"
									placeholder="Message"
								/>
								<div className="pt-12">
									<button
										type="submit"
										className="bg-greenPrimary hover:bg-darkBlue duration-150 py-4 text-white font-medium px-6 sm:px-9 h-full border border-greenPrimary flex items-center space-x-4"
									>
										<IoSend /> <span>Send a Message</span>
									</button>
								</div>
							</Form>
						</Formik>
					</div>
				</div>
			</div>
			<FoooterBanner text="Help us educate a Child" />
		</div>
	);
};

export default Contact;
