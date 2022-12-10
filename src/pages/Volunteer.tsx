import { FC, useState } from "react";
import FoooterBanner from "../components/FooterBanner";
import PageIntro from "../components/PageIntro";
import { Formik, Form, Field } from "formik";

interface IVolunteer {}

const Volunteer: FC<IVolunteer> = () => {
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [loading, setLoading] = useState(false);

	return (
		<div>
			<PageIntro name="Volunteer Form" />
			<div className="px-4" data-aos="fade-up" data-aos-duration="1000">
				<div className="max-w-[1037px] bg-sectionGray border rounded px-6 md:px-12 py-6 md:py-16 sm:-mt-12 mx-auto">
					<Formik
						initialValues={{
							firstName: "",
							lastName: "",
							email: "",
							address: "",
							phoneNumber: "",
							dob: "",
							message: "",
							cv: null as File | null,
						}}
						onSubmit={async (values) => {
							setLoading(true);
							const toBase64 = (file: File) =>
								new Promise((resolve, reject) => {
									const reader = new FileReader();
									reader.readAsDataURL(file);
									reader.onload = () =>
										resolve(reader.result);
									reader.onerror = (error) => reject(error);
								});

							const file = await toBase64(values.cv as File);
							fetch(
								`${process.env.REACT_APP_BACKEND_URL}/cidi/cidi-volunteer`,
								{
									method: "POST",
									headers: {
										"Content-Type": "application/json",
									},
									body: JSON.stringify({
										...values,
										cv: file,
									}),
								}
							)
								.then((res) => res.json())
								.then((res) => {
									console.log(res);
									setLoading(false);
								})
								.catch((err) => {
									console.log(err);
									setLoading(false);
								});
						}}
					>
						{({ setFieldValue }) => (
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
								<div className="space-y-2">
									<label
										htmlFor="donorNote"
										className="text-darkBlue text-lg sm:text-xl"
									>
										CV
									</label>
									<input
										id="cv"
										name="cv"
										type="file"
										onChange={(e) => {
											if (
												e.currentTarget.files !== null
											) {
												setFieldValue(
													"cv",
													e.currentTarget.files[0]
												);
											}
										}}
										className="w-full py-1 px-2 border placeholder:text-grayText2 text-sm md:text-base text-grayText focus:outline-none rounded"
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
						)}
					</Formik>
				</div>
			</div>
			<FoooterBanner text="Help us educate a Child" />
		</div>
	);
};

export default Volunteer;
