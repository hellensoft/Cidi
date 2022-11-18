import { FC } from "react";
import FoooterBanner from "../components/FooterBanner";
import PageIntro from "../components/PageIntro";
import { Formik, Form, Field } from "formik";

interface IVolunteer {}

const Volunteer: FC<IVolunteer> = () => {
	return (
		<div>
			<PageIntro name="Volunteer Form" />
			<div className="px-4">
				<div className="max-w-[1037px] bg-sectionGray border rounded px-6 md:px-12 py-6 md:py-16 sm:-mt-12 mx-auto">
					<Formik
						initialValues={{
							firstName: "",
							lastName: "",
							email: "",
							addess: "",
							phoneNumber: "",
							dob: "",
							message: "",
						}}
						onSubmit={(values) => console.log(values)}
					>
						<Form className="space-y-8">
							<div className="space-y-2">
								<label
									htmlFor="firstName"
									className="text-darkBlue text-lg sm:text-xl"
								>
									Full Names
								</label>
								<div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
									<Field
										name="firstName"
										id="firstName"
										type="text"
										placeholder="First Name"
										className="block w-full bg-transparent rounded-md border-gray-300 shadow-sm focus:border-greenPrimary text-base sm:text-lg"
									/>
									<Field
										name="lastName"
										id="lastName"
										type="text"
										placeholder="Last Name"
										className="block w-full bg-transparent rounded-md border-gray-300 shadow-sm focus:border-greenPrimary text-base sm:text-lg"
									/>
								</div>
							</div>

							<div className="space-y-2">
								<label
									htmlFor="firstName"
									className="text-darkBlue text-lg sm:text-xl"
								>
									Date of Birth
								</label>
								<div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
									<Field
										name="dob"
										id="dob"
										type="date"
										placeholder="Date Of Birth"
										className="block w-full bg-transparent rounded-md border-gray-300 shadow-sm focus:border-greenPrimary text-base sm:text-lg"
									/>
								</div>
							</div>

							<div className="space-y-2">
								<label
									htmlFor="email"
									className="text-darkBlue text-lg sm:text-xl"
								>
									Contacts
								</label>
								<div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
									<Field
										name="email"
										id="email"
										type="email"
										placeholder="example@gmail.com"
										className="block w-full bg-transparent rounded-md border-gray-300 shadow-sm focus:border-greenPrimary text-base sm:text-lg"
									/>
									<Field
										name="phoneNumber"
										id="phoneNumber"
										type="text"
										placeholder="Phone Number"
										className="block w-full bg-transparent rounded-md border-gray-300 shadow-sm focus:border-greenPrimary text-base sm:text-lg"
									/>
								</div>
							</div>

							<Field
								name="address"
								id="address"
								type="text"
								placeholder="Address"
								className="block w-full bg-transparent rounded-md border-gray-300 shadow-sm focus:border-greenPrimary text-base sm:text-lg"
							/>

							<div className="space-y-2">
								<label
									htmlFor="donorNote"
									className="text-darkBlue text-lg sm:text-xl"
								>
									Message
								</label>
								<Field
									name="message"
									id="message"
									as="textarea"
									placeholder="Message"
									className="block w-full h-48 bg-transparent rounded-md border-gray-300 shadow-sm focus:border-greenPrimary text-base sm:text-lg"
								/>
							</div>

							<div className="pt-12 flex justify-center">
								<button
									type="submit"
									className="bg-greenPrimary hover:bg-darkBlue duration-150 py-4 text-white font-medium px-6 sm:px-16 h-full border border-greenPrimary flex items-center space-x-4"
								>
									Submit
								</button>
							</div>
						</Form>
					</Formik>
				</div>
			</div>
			<FoooterBanner text="Help us educate a Child" />
		</div>
	);
};

export default Volunteer;