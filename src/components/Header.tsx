import { FC, Fragment, useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import navLinks from "../data/topNav.json";
import topInfor from "../data/topInfor.json";
import { Menu, Transition, Dialog } from "@headlessui/react";
import { FaAngleDown } from "react-icons/fa";
import { CgMenu } from "react-icons/cg";
import { IoClose } from "react-icons/io5";
import { BsChevronDown } from "react-icons/bs";
import { NavHashLink } from "react-router-hash-link";

interface IHeader {}

const Header: FC<IHeader> = () => {
	const { pathname } = useLocation();
    console.log(useLocation())
	const [openSideBar, setOpenSideBar] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handler = () => {
			setScrolled((scrolled) => {
				if (
					!scrolled &&
					(document.body.scrollTop > 50 ||
						document.documentElement.scrollTop > 50)
				) {
					return true;
				}

				if (
					scrolled &&
					document.body.scrollTop < 50 &&
					document.documentElement.scrollTop < 50
				) {
					return false;
				}

				return scrolled;
			});
		};

		window.addEventListener("scroll", handler);
		return () => window.removeEventListener("scroll", handler);
	});

	useEffect(() => {
		setOpenSideBar(false);
	}, [pathname]);

	return (
		<div className="fixed w-screen z-50">
			<div className="flex items-center z-50 justify-between bg-white shadow-[0px_12px_24px_rgba(0,0,0,0.04)]">
				<div className="pl-[calc(((100vw-1222px)/2))]">
					<Link to="/">
						<img
							src="/images/cidi-logo.png"
							alt="company logo"
							className={`pl-4 duration-200 ${
								scrolled ? "w-12 lg:w-20" : "w-16 lg:w-auto"
							} h-auto lg:h-auto py-4 lg:py-0`}
						/>
					</Link>
				</div>
				<button
					onClick={() => setOpenSideBar(!openSideBar)}
					className="ml-auto space-x-8 inline-block mr-4 lg:hidden z-40"
				>
					{openSideBar ? (
						<IoClose className="text-darkBlue h-7 w-7" />
					) : (
						<CgMenu className="text-darkBlue h-7 w-7" />
					)}
				</button>

				<Transition show={openSideBar} as={Fragment}>
					<Dialog
						open={openSideBar}
						onClose={() => setOpenSideBar(false)}
						className="relative z-30"
					>
						<div
							className="fixed inset-0 bg-black/50"
							aria-hidden="true"
						/>
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="translate-x-full"
							enterTo="translate-x-0"
							leave="ease-out duration-300"
							leaveFrom="translate-x-0"
							leaveTo="translate-x-full"
						>
							<div className="fixed inset-y-0 right-0 flex items-center z-50 justify-center">
								<Dialog.Panel className="h-screen w-screen bg-white">
									<img
										src="/images/cidi-logo.png"
										alt="company logo"
										className="pl-4 w-20 lg:w-auto h-auto lg:h-auto py-2 lg:py-0"
									/>

									<div className="ml-auto overflow-auto flex flex-col w-full 2lg:hidden items-center">
										{navLinks.map((nav, index) => (
											<Fragment key={index}>
												{nav.multiple ? (
													<Menu key={index}>
														{({ open }) => (
															<>
																<Menu.Button
																	className={`w-full py-2 px-4 border hover:text-greenPrimary font-medium focus:outline-none flex items-center justify-between ${
																		open ||
																		nav.links?.some(
																			(
																				el
																			) =>
																				el.link ===
																				pathname
																		)
																			? "text-greenPrimary"
																			: "text-bluePrimary"
																	} duration-300`}
																>
																	<span>
																		{
																			nav.name
																		}
																	</span>
																	<BsChevronDown
																		className={`ml-2 duration-300 ${
																			open
																				? "rotate-180"
																				: "rotate-0"
																		}`}
																	/>
																</Menu.Button>
																<Transition
																	as={
																		Fragment
																	}
																	enter="transition duration-100 ease-out"
																	enterFrom="transform scale-95 opacity-0"
																	enterTo="transform scale-100 opacity-100"
																	leave="transition duration-75 ease-out"
																	leaveFrom="transform scale-100 opacity-100"
																	leaveTo="transform scale-95 opacity-0"
																>
																	<Menu.Items className="z-10 w-full">
																		<div className="bg-white w-full border flex flex-col items-start divide-y">
																			{nav.links?.map(
																				(
																					link,
																					index
																				) => (
																					<>
																						{link.hash ? (
																							<NavHashLink
																								smooth
																								to={
																									link.link
																								}
																								key={
																									index
																								}
																								// activeClassName="bg-[#eee] text-bluePrimary"
																								className="hover:text-greenPrimary font-medium text-bluePrimary hover:bg-[#eee] px-8 py-2 w-full"
																							>
																								{
																									link.name
																								}
																							</NavHashLink>
																						) : (
																							<NavLink
																								key={
																									index
																								}
																								end={
																									link.end
																								}
																								to={
																									link.link ||
																									"/"
																								}
																								className={({
																									isActive,
																								}) =>
																									`hover:text-greenPrimary font-medium text-bluePrimary hover:bg-[#eee] px-8 py-2 w-full ${
																										isActive &&
																										"bg-[#eee] text-bluePrimary"
																									}`
																								}
																							>
																								{
																									link.name
																								}
																							</NavLink>
																						)}
																					</>
																				)
																			)}
																		</div>
																	</Menu.Items>
																</Transition>
															</>
														)}
													</Menu>
												) : (
													<NavLink
														key={index}
														to={nav.link || "/"}
														end={nav.end}
														className={({
															isActive,
														}) =>
															`w-full py-2 px-4 border hover:text-greenPrimary font-medium text-bluePrimary ${
																isActive &&
																"text-greenPrimary"
															}`
														}
													>
														{nav.name}
													</NavLink>
												)}
											</Fragment>
										))}
										<Link
											className="font-medium bg-bluePrimary w-full hover:bg-greenPrimary duration-300 py-2 px-6 text-center text-white"
											to="/register"
										>
											Register
										</Link>
									</div>
								</Dialog.Panel>
							</div>
						</Transition.Child>
					</Dialog>
				</Transition>

				<div>
					<div className="hidden lg:block pr-[calc(((100vw-1222px)/2))]">
						<div
							className={`pr-4 pl-12 py-3 flex items-center space-x-6 ${
								scrolled && "hidden"
							}`}
						>
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
							<Link
								to="/volunteer"
								className="flex items-center space-x-3"
							>
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
					<div className="hidden lg:block pr-[calc(((100vw-1222px)/2))] bg-darkBlue rounded-tl-[30px]">
						<div className="pr-4 pl-12 py-4 space-x-12 flex items-center justify-between">
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
														className="absolute mt-6 py-6 px-5 w-[280px] shadow-[0px_12px_24px_rgba(0,0,0,0.04)] bg-white z-50 flex flex-col items-start space-y-2"
													>
														{link.links?.map(
															(
																subLink,
																index
															) => (
																<>
																	{subLink.hash ? (
																		<Menu.Item>
																			<NavHashLink
																				smooth
																				to={
																					subLink.hashLink
																				}
																				key={
																					index
																				}
																				// activeClassName="bg-[#eee] text-bluePrimary"
																				className="text-darkBlue border-b-[3px] border-transparent"
																			>
																				{
																					subLink.name
																				}
																			</NavHashLink>
																		</Menu.Item>
																	) : (
																		<Menu.Item>
																			<NavLink
																				end={
																					subLink.end
																				}
																				key={
																					index
																				}
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
																	)}
																</>
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
								className="bg-greenPrimary hover:bg-darkBlue duration-150 py-2 text-white font-medium px-6 sm:px-9 h-full border border-greenPrimary"
							>
								Donate now
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
