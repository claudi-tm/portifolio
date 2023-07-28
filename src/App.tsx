import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
import { NavItems } from "./components/NavItems";

import { Profile } from "./components/Profile";
import { Projects } from "./components/Projects";
import { useState } from "react";

export function App() {
	const [open, setOpen] = useState(false);
	return (
		<>
			<div className="px-20 py-5 flex flex-col gap-64 text-zinc-800">
				<nav className="bg-zinc-200 pb-2 pt-2 w-screen fixed left-0 top-0  md:px-20 md:flex items-center justify-between">
					<h1 className="text-2xl pl-3 px-3  md:text-4xl font-bold">
						<div className="border-b border-blue-700 transform transition-all duration-300">Claudio <span className="  text-blue-600">Tomas</span></div>
						<div
							className="hover:cursor-pointer"
							onClick={() => setOpen(!open)}
						>
							{open ? (
								<RxCross2 className="absolute right-4 top-2 md:hidden" />
							) : (
								<RxHamburgerMenu className="absolute right-4 top-2 md:hidden" />
							)}
						</div>
					</h1>
					<ul
						className={`bg-zinc-200  absolute transition-all duration-500 ease-in z-[-1]  flex flex-col pb-1 pl-3 	w-screen md:static pt-3 md:pt-0 md:px-3 md:z-auto md:w-auto md:flex md:flex-row  md:items-center justify-between gap-5 ${
							open ? "top-8 opacity-100" : "top-[-590px]"
						} md:opacity-100 opacity-100`}
					>
						<NavItems text="Projectos" url="projects" />
						<NavItems text="Formação" url="formacao" />
						<NavItems text="Contactos" url="contactos" />
					</ul>
				</nav>
				<main className="flex flex-col gap-10">
					<Profile />
					<Projects />
				</main>
			</div>
		</>
	);
}
