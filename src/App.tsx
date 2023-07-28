import { Profile } from "./components/Profile";
// import { Projects } from "./components/Projects";

import { NavBar } from "./components/NavBar";

export function App() {
	return (
		<>
			<NavBar />
			<div className="px-2 md:px-20 w-screen py-5 flex flex-col gap-64 text-zinc-800">
				<main className="flex flex-col gap-10">
					<Profile />
					{/* <Projects /> */}
				</main>
			</div>
		</>
	);
}
