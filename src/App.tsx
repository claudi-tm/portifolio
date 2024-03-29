import { Profile } from "./components/Profile";
import { Projects } from "./components/Projects";

import { NavBar } from "./components/NavBar";
import { Education } from "./components/Education";
import { Footer } from "./components/Footer";

export function App() {
	return (
		<>
			
			<NavBar />
			<div className="px-2 md:px-20 w-screen md:w-full py-5 flex flex-col gap-64 text-zinc-800 ">
				<main className="w-full flex flex-col gap-10">
					<Profile />
					<Projects />
					<Education />
				</main>
			</div>
			<Footer />
		</>
	);
}
