import { NavItems } from "./components/NavItems";

import { Profile } from "./components/Profile";
import { Projects } from "./components/Projects";

export function App() {
	return (
		<>
			<div className="px-20 py-5 flex flex-col gap-20 text-zinc-800">
				<nav className="p-2 flex items-center justify-between">
					<h1 className="text-4xl font-bold">Claudio Tomas</h1>
					<ul className="flex items-center gap-6 ">
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
