import { FC, useState } from "react";
import FoooterBanner from "../components/FooterBanner";
import PageIntro from "../components/PageIntro";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { BsCheckCircle } from "react-icons/bs";

interface IVolunteer {}

const Volunteer: FC<IVolunteer> = () => {
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [loading, setLoading] = useState(false);
	const [errorMessage, setErrorMessage] = useState<string | null>(null);

	return (
		<div>
			<PageIntro name="Volunteer Form" />
			<div className="px-4" data-aos="fade-up" data-aos-duration="1000">
				<div className="max-w-[1037px] bg-sectionGray border rounded px-6 md:px-12 py-6 md:py-16 sm:-mt-12 mx-auto">
					{isSubmitted ? (
						<div className="">
							<div className="">
								<BsCheckCircle className="text-4xl text-greenPrimary mx-auto" />
							</div>
							<div className="text-center mt-6">
								<h1 className="text-2xl font-semibold text-darkBlue mb-2">
									Form Submitted
								</h1>
								<p className="text-gray-500">
									Your volunteer application has successfully
									been submitted. We will notify you for
									futher notice.
								</p>
							</div>
						</div>
					) : (
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
								address: yup
									.string()
									.required("Address is required"),
								phoneNumber: yup
									.string()
									.required("Phone number is required"),
								dob: yup
									.date()
									.required("Date of birth is required"),
								message: yup
									.string()
									.required("Message is required"),
								cv: yup.mixed().required("CV is required"),
							})}
							onSubmit={(values) => {
								setLoading(true);
								let formData = new FormData();
								formData.append("firstName", values.firstName);
								formData.append("lastName", values.lastName);
								formData.append("email", values.email);
								formData.append("address", values.address);
								formData.append(
									"phoneNumber",
									values.phoneNumber
								);
								formData.append("dob", values.dob);
								formData.append("message", values.message);
								formData.append("file", values.cv as File);

								fetch(
									`${process.env.REACT_APP_BACKEND_URL}/cidi/cidi-volunteer`,
									{
										method: "POST",
										body: formData,
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
							{({ setFieldValue }) => (
								<Form
									className="space-y-8"
									encType="multipart/form-data"
								>
									<div className="space-y-2">
										<label
											htmlFor="firstName"
											className="text-darkBlue text-lg sm:text-xl"
										>
											Full Names
										</label>
										<div className="grid grid-cols-1 sm:grid-cols-2 gap-8 gap-y-2">
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
										<div className="pl-3">
											<ErrorMessage
												name="dob"
												component="p"
												className="text-red-500 text-sm"
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
										<div className="grid grid-cols-1 sm:grid-cols-2 gap-8 gap-y-2">
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
									</div>
									<Field
										name="address"
										id="address"
										type="text"
										placeholder="Address"
										className="block w-full bg-transparent rounded-md border-gray-300 shadow-sm focus:border-greenPrimary text-base sm:text-lg"
									/>
									<div className="pl-3 mt-[8px_!important]">
										<ErrorMessage
											name="address"
											component="p"
											className="text-red-500 text-sm"
										/>
									</div>
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
										<div className="pl-3">
											<ErrorMessage
												name="message"
												component="p"
												className="text-red-500 text-sm"
											/>
										</div>
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
													e.currentTarget.files !==
													null
												) {
													setFieldValue(
														"cv",
														e.currentTarget.files[0]
													);
												}
											}}
											className="w-full py-1 px-2 border placeholder:text-grayText2 text-sm md:text-base text-grayText focus:outline-none rounded"
										/>
										<div className="pl-3">
											<ErrorMessage
												name="cv"
												component="p"
												className="text-red-500 text-sm"
											/>
										</div>
									</div>
									{errorMessage && (
										<p className="text-red-600 font-medium">
											{errorMessage}
										</p>
									)}
									<div className="pt-12 flex justify-center">
										<button
											type="submit"
											disabled={loading}
											className="bg-greenPrimary hover:bg-darkBlue duration-150 py-4 text-white font-medium px-6 sm:px-16 h-full border border-greenPrimary flex items-center space-x-4 disabled:bg-gray-300 disabled:cursor-not-allowed"
										>
											{loading && (
												<AiOutlineLoading3Quarters className="animate-spin" />
											)}
											<span>Submit</span>
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

export default Volunteer;
