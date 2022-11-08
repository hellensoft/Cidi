import { FC } from "react";
import FoooterBanner from "../components/FooterBanner";
import PageIntro from "../components/PageIntro";
import { Formik, Form, Field } from "formik";

interface IDonation {}

const Donation: FC<IDonation> = () => {
	return (
		<div>
			<PageIntro name="Donation Form" />
			<div className="max-w-[1037px] bg-sectionGray border rounded px-12 py-16 -mt-12 mx-auto">
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
								className="text-darkBlue text-xl"
							>
								Donor Name
							</label>
							<div className="grid grid-cols-2 gap-8">
								<Field
									name="firstName"
									id="firstName"
									type="text"
									placeholder="First Name"
									className="block w-full bg-transparent rounded-md border-gray-300 shadow-sm focus:border-greenPrimary text-lg"
								/>
								<Field
									name="lastName"
									id="lastName"
									type="text"
									placeholder="Last Name"
									className="block w-full bg-transparent rounded-md border-gray-300 shadow-sm focus:border-greenPrimary text-lg"
								/>
							</div>
						</div>

						<div className="space-y-2">
							<label
								htmlFor="donationType"
								className="text-darkBlue text-xl"
							>
								Type of Donation
							</label>
							<div className="grid grid-cols-2 gap-8">
								<Field
									name="donationType"
									id="donationType"
									as="select"
									className="block w-full bg-transparent rounded-md border-gray-300 shadow-sm focus:border-greenPrimary text-lg"
								>
									<option value="cash">Cash</option>
									<option value="credit">Credit</option>
								</Field>
							</div>
						</div>

						<div className="space-y-2">
							<label
								htmlFor="amount"
								className="text-darkBlue text-xl"
							>
								Amount
							</label>
							<div className="grid grid-cols-2 gap-8">
								<Field
									name="amount"
									id="amount"
									type="number"
									placeholder="$100.00"
									className="block w-full bg-transparent rounded-md border-gray-300 shadow-sm focus:border-greenPrimary text-lg"
								/>
							</div>
						</div>

						<div className="space-y-2">
							<label
								htmlFor="donorNote"
								className="text-darkBlue text-xl"
							>
								Donor Notes
							</label>
							<Field
								name="donorNote"
								id="donorNote"
								as="textarea"
								placeholder="Donor Notes"
								className="block w-full h-48 bg-transparent rounded-md border-gray-300 shadow-sm focus:border-greenPrimary text-lg"
							/>
						</div>
						<div className="space-y-2">
							<label
								htmlFor="companyName"
								className="text-darkBlue text-xl"
							>
								Conpany Name
							</label>
							<Field
								name="companyName"
								id="companyName"
								type="text"
								placeholder="Company Name"
								className="block w-full bg-transparent rounded-md border-gray-300 shadow-sm focus:border-greenPrimary text-lg"
							/>
						</div>
						<div className="space-y-2">
							<label
								htmlFor="email"
								className="text-darkBlue text-xl"
							>
								Email
							</label>
							<Field
								name="email"
								id="email"
								type="email"
								placeholder="example@gmail.com"
								className="block w-full bg-transparent rounded-md border-gray-300 shadow-sm focus:border-greenPrimary text-lg"
							/>
						</div>
						<div className="space-y-2">
							<label
								htmlFor="areaCode"
								className="text-darkBlue text-xl"
							>
								Phone Number
							</label>
							<div className="flex items-center space-x-4">
								<Field
									name="areaCode"
									id="areaCode"
									type="number"
									placeholder="Area Code"
									className="block w-36 bg-transparent rounded-md border-gray-300 shadow-sm focus:border-greenPrimary text-lg"
								/>
								<Field
									name="phoneNumber"
									id="phoneNumber"
									type="number"
									placeholder="Phone Number"
									className="block w-56 bg-transparent rounded-md border-gray-300 shadow-sm focus:border-greenPrimary text-lg"
								/>
							</div>
						</div>
						<div className="space-y-2">
							<label
								htmlFor="street-1"
								className="text-darkBlue text-xl"
							>
								Address
							</label>
							<Field
								name="street1"
								id="street1"
								type="text"
								placeholder="Street Address 1"
								className="block w-full bg-transparent rounded-md border-gray-300 shadow-sm focus:border-greenPrimary text-lg"
							/>
						</div>
						<Field
							name="street2"
							id="street2"
							type="text"
							placeholder="Street Address 2"
							className="block w-full bg-transparent rounded-md border-gray-300 shadow-sm focus:border-greenPrimary text-lg"
						/>
						<div className="grid grid-cols-2 gap-8">
							<Field
								name="city"
								id="city"
								type="text"
								placeholder="City"
								className="block w-full bg-transparent rounded-md border-gray-300 shadow-sm focus:border-greenPrimary text-lg"
							/>
							<Field
								name="state"
								id="state"
								type="text"
								placeholder="State / Province"
								className="block w-full bg-transparent rounded-md border-gray-300 shadow-sm focus:border-greenPrimary text-lg"
							/>
						</div>
						<Field
							name="zipCode"
							id="zipCode"
							type="text"
							placeholder="Postal / Zip code"
							className="block w-full bg-transparent rounded-md border-gray-300 shadow-sm focus:border-greenPrimary text-lg"
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
			<FoooterBanner text="Help us educate a Child" />
		</div>
	);
};

export default Donation;
