import { FC, Fragment } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import navLinks from "../data/topNav.json";
import topInfor from "../data/topInfor.json";
import { Menu } from "@headlessui/react";
import { FaAngleDown } from "react-icons/fa";

interface IHeader {}

const Header: FC<IHeader> = () => {
	const { pathname } = useLocation();

	return (
		<div className="flex items-center justify-between bg-white shadow-[0px_12px_24px_rgba(0,0,0,0.04)]">
			<div className="pl-[calc(((100vw-1222px)/2))]">
				<img
					src="/images/cidi-logo.png"
					alt="company logo"
					className="pl-4"
				/>
			</div>
			<div>
				<div className="pr-[calc(((100vw-1222px)/2))]">
					<div className="pr-4 pl-12 py-3 flex items-center space-x-6">
						{topInfor.map((infor, index) => (
							<div
								key={index}
								className="flex items-center space-x-3"
							>
								<img src={infor.icon} alt={infor.name} />
								<div className="">
									<p className="text-xs text-textBlue">
										{infor.name}
									</p>
									<p className="text-sm text-darkText font-semibold">
										{infor.infor}
									</p>
								</div>
							</div>
						))}
						<Link to="#" className="flex items-center space-x-3">
							<img
								src="/images/svgs/volunteer-infor.svg"
								alt="volunteer"
							/>
							<div className="">
								<p className="underline text-darkText font-semibold">
									Become a volunteer
								</p>
							</div>
						</Link>
					</div>
				</div>
				<div className="pr-[calc(((100vw-1222px)/2))] bg-darkBlue rounded-tl-[30px]">
					<div className="pr-4 pl-12 py-2 space-x-6 flex items-center">
						{navLinks.map((link, index) => (
							<Fragment key={index}>
								{link.multiple ? (
									<Menu>
										{({ open }) => (
											<div className="relative">
												<Menu.Button
													className={`hover:text-white duration-150 border-b-[3px] flex items-center ${
														open ||
														link.links?.some(
															(el) =>
																el.link ===
																pathname
														)
															? "border-greenPrimary text-white"
															: "border-transparent text-lightText"
													}`}
												>
													{link.name}
													<FaAngleDown
														className={`ml-1 w-4 h-4 duration-150 ${
															open
																? "rotate-180"
																: "rotate-0"
														}`}
													/>
												</Menu.Button>
												<Menu.Items
													as="div"
													className="absolute mt-6 py-6 px-5 w-[200px] shadow-[0px_12px_24px_rgba(0,0,0,0.04)] bg-white flex flex-col items-start space-y-2"
												>
													{link.links?.map(
														(subLink, index) => (
															<Menu.Item>
																<NavLink
																	end={
																		subLink.end
																	}
																	key={index}
																	to={
																		subLink.link
																	}
																	className={({
																		isActive,
																	}) =>
																		`text-darkBlue border-b-[3px] ${
																			isActive
																				? "border-greenPrimary"
																				: "border-transparent"
																		}`
																	}
																>
																	{
																		subLink.name
																	}
																</NavLink>
															</Menu.Item>
														)
													)}
												</Menu.Items>
											</div>
										)}
									</Menu>
								) : (
									<NavLink
										end={link.end}
										key={index}
										className={({ isActive }) =>
											`hover:text-white duration-150 border-b-[3px] ${
												isActive
													? "border-greenPrimary text-white"
													: "border-transparent text-lightText"
											}`
										}
										to={link.link}
									>
										{link.name}
									</NavLink>
								)}
							</Fragment>
						))}
						<Link
							to="/donation"
							className="bg-greenPrimary hover:bg-darkBlue duration-150 rounded-[5px] py-4 text-white font-medium px-6 sm:px-9 h-full border border-greenPrimary"
						>
							Donate now
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
