import { FC } from "react";
import FoooterBanner from "../components/FooterBanner";
import PageIntro from "../components/PageIntro";
import { Formik, Form, Field } from "formik";

interface IDonation {}

const Donation: FC<IDonation> = () => {
	return (
		<div>
			<PageIntro name="Donation Form" />
			<div className="px-4">
				<div className="max-w-[1037px] bg-sectionGray border rounded px-6 md:px-12 py-6 md:py-16 sm:-mt-12 mx-auto">
					<Formik
						initialValues={{
							firstName: "",
							lastName: "",
							donationType: "cash",
							amount: 0,
							donorNote: "",
							companyName: "",
							email: "",
							areaCode: "",
							phoneNumber: "",
							street1: "",
							street2: "",
							city: "",
							state: "",
							zipCode: "",
						}}
						onSubmit={(values) => console.log(values)}
					>
						<Form className="space-y-8">
							<div className="space-y-2">
								<label
									htmlFor="firstName"
									className="text-darkBlue text-lg sm:text-xl"
								>
									Donor Name
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

							<div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
								<div className="space-y-2">
									<label
										htmlFor="donationType"
										className="text-darkBlue text-lg sm:text-xl"
									>
										Type of Donation
									</label>
									<Field
										name="donationType"
										id="donationType"
										as="select"
										className="block w-full bg-transparent rounded-md border-gray-300 shadow-sm focus:border-greenPrimary text-base sm:text-lg"
									>
										<option value="cash">Cash</option>
										<option value="credit">Credit</option>
									</Field>
								</div>

								<div className="space-y-2">
									<label
										htmlFor="amount"
										className="text-darkBlue text-lg sm:text-xl"
									>
										Amount
									</label>
									<Field
										name="amount"
										id="amount"
										type="number"
										placeholder="$100.00"
										className="block w-full bg-transparent rounded-md border-gray-300 shadow-sm focus:border-greenPrimary text-base sm:text-lg"
									/>
								</div>
							</div>

							<div className="space-y-2">
								<label
									htmlFor="donorNote"
									className="text-darkBlue text-lg sm:text-xl"
								>
									Donor Notes
								</label>
								<Field
									name="donorNote"
									id="donorNote"
									as="textarea"
									placeholder="Donor Notes"
									className="block w-full h-48 bg-transparent rounded-md border-gray-300 shadow-sm focus:border-greenPrimary text-base sm:text-lg"
								/>
							</div>
							<div className="space-y-2">
								<label
									htmlFor="companyName"
									className="text-darkBlue text-lg sm:text-xl"
								>
									Conpany Name
								</label>
								<Field
									name="companyName"
									id="companyName"
									type="text"
									placeholder="Company Name"
									className="block w-full bg-transparent rounded-md border-gray-300 shadow-sm focus:border-greenPrimary text-base sm:text-lg"
								/>
							</div>
							<div className="space-y-2">
								<label
									htmlFor="email"
									className="text-darkBlue text-lg sm:text-xl"
								>
									Email
								</label>
								<Field
									name="email"
									id="email"
									type="email"
									placeholder="example@gmail.com"
									className="block w-full bg-transparent rounded-md border-gray-300 shadow-sm focus:border-greenPrimary text-base sm:text-lg"
								/>
							</div>
							<div className="space-y-2">
								<label
									htmlFor="areaCode"
									className="text-darkBlue text-lg sm:text-xl"
								>
									Phone Number
								</label>
								<div className="flex flex-col xs:flex-row items-start xs:items-center space-y-4 xs:space-y-0 xs:space-x-4">
									<Field
										name="areaCode"
										id="areaCode"
										type="number"
										placeholder="Area Code"
										className="block w-28 sm:w-36 bg-transparent rounded-md border-gray-300 shadow-sm focus:border-greenPrimary text-base sm:text-lg"
									/>
									<Field
										name="phoneNumber"
										id="phoneNumber"
										type="number"
										placeholder="Phone Number"
										className="block flex-1 w-full sm:w-56 bg-transparent rounded-md border-gray-300 shadow-sm focus:border-greenPrimary text-base sm:text-lg"
									/>
								</div>
							</div>
							<div className="space-y-2">
								<label
									htmlFor="street-1"
									className="text-darkBlue text-lg sm:text-xl"
								>
									Address
								</label>
								<Field
									name="street1"
									id="street1"
									type="text"
									placeholder="Street Address 1"
									className="block w-full bg-transparent rounded-md border-gray-300 shadow-sm focus:border-greenPrimary text-base sm:text-lg"
								/>
							</div>
							<Field
								name="street2"
								id="street2"
								type="text"
								placeholder="Street Address 2"
								className="block w-full bg-transparent rounded-md border-gray-300 shadow-sm focus:border-greenPrimary text-base sm:text-lg"
							/>
							<div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
								<Field
									name="city"
									id="city"
									type="text"
									placeholder="City"
									className="block w-full bg-transparent rounded-md border-gray-300 shadow-sm focus:border-greenPrimary text-base sm:text-lg"
								/>
								<Field
									name="state"
									id="state"
									type="text"
									placeholder="State / Province"
									className="block w-full bg-transparent rounded-md border-gray-300 shadow-sm focus:border-greenPrimary text-base sm:text-lg"
								/>
							</div>
							<Field
								name="zipCode"
								id="zipCode"
								type="text"
								placeholder="Postal / Zip code"
								className="block w-full bg-transparent rounded-md border-gray-300 shadow-sm focus:border-greenPrimary text-base sm:text-lg"
							/>
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

export default Donation;
