import { FC, useState } from "react";
import FoooterBanner from "../components/FooterBanner";
import PageIntro from "../components/PageIntro";
import { Formik, Form, Field } from "formik";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { BsCheckCircle } from "react-icons/bs";

interface IDonation {}

const Donation: FC<IDonation> = () => {
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [loading, setLoading] = useState(false);
	const [errorMessage, setErrorMessage] = useState<string | null>(null);

	const donationTypes = [
		"Cash",
		"Items",
		"Tools",
		"Experties",
		"Scholarship Program",
	];

	return (
		<div>
			<PageIntro name="Donation Form" />
			<div className="px-4" data-aos="fade-up" data-aos-duration="1000">
				<div className="max-w-[1037px] bg-sectionGray border rounded px-6 md:px-12 py-6 md:py-16 sm:-mt-12 mx-auto">
					{isSubmitted ? (
						<div className="py-12 px-6">
							<div className="">
								<BsCheckCircle className="text-4xl text-greenPrimary mx-auto" />
							</div>
							<div className="text-center mt-6">
								<h1 className="text-2xl font-semibold text-darkBlue mb-2">
									Donation received
								</h1>
								<p className="text-gray-500">
									Thank you for your donation. Kindly visit CIDI offices to handin your donation.
								</p>
							</div>
						</div>
					) : (
						<Formik
							initialValues={{
								firstName: "",
								lastName: "",
								donationType: "Cash",
								currencyType: "tzs",
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
							onSubmit={(values) => {
								setLoading(true);
								fetch(
									`${process.env.REACT_APP_BACKEND_URL}/cidi/cidi-donation`,
									{
										method: "POST",
										headers: {
											"Content-Type": "application/json",
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
										setErrorMessage(err.error.message);
										setLoading(false);
									});
							}}
						>
							{({ values }) => (
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

									{/* DONATION TYPE */}
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
												{donationTypes.map((type) => (
													<option value={type}>
														<span className="capitalize">
															{type}
														</span>
													</option>
												))}
											</Field>
										</div>
									</div>

									{values.donationType === "Cash" && (
										<div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
											<div className="space-y-2">
												<label
													htmlFor="currencyType"
													className="text-darkBlue text-lg sm:text-xl"
												>
													Type of Currency
												</label>
												<Field
													name="currencyType"
													id="currencyType"
													as="select"
													className="block w-full bg-transparent rounded-md border-gray-300 shadow-sm focus:border-greenPrimary text-base sm:text-lg"
												>
													<option value="tzs">
														TZS
													</option>
													<option value="usd">
														USD
													</option>
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
									)}
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
											Company Name
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
									{errorMessage && (
										<p className="text-red-600 font-medium">
											{errorMessage}
										</p>
									)}
									<div
										className="pt-12 flex justify-center"
										data-aos="fade-up"
										data-aos-duration="1000"
									>
										<button
											type="submit"
											disabled={loading}
											className="bg-greenPrimary hover:bg-darkBlue duration-150 py-4 text-white font-medium px-6 sm:px-16 h-full border border-greenPrimary flex items-center space-x-4 disabled:bg-gray-300 disabled:cursor-not-allowed"
										>
											{loading && (
												<AiOutlineLoading3Quarters className="animate-spin mr-2" />
											)}
											Submit
										</button>
									</div>
								</Form>
							)}
						</Formik>
					)}
				</div>
			</div>
			<FoooterBanner text="Help us educate a Child" />
		</div>
	);
};

export default Donation;
