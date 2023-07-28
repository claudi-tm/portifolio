import { Button } from "./components/Button";
import { NavItems } from "./components/NavItems";

export function App() {
	return (
		<>
			<div className="px-20 py-5 flex flex-col gap-20">
				<nav className="p-2 flex items-center justify-between">
					<h1 className="text-4xl font-bold">Claudio Tomas</h1>
					<ul className="flex items-center gap-6 ">
						<NavItems text="Projectos" />
						<NavItems text="Formação" />
						<NavItems text="Contactos" />
					</ul>
				</nav>
				<main>
					<div className="flex items-center gap-10">
						<img
							className="rounded-full w-[30%]"
							src="https://avatars.githubusercontent.com/u/55026292?v=4"
							alt=""
						/>
						<aside className="flex flex-col gap-5">
							<h1 className="text-2xl ">
								Desenvolvedor de Softwere | Web
							</h1>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Necessitatibus modi soluta debitis dolorum
							tempora, perferendis, aspernatur blanditiis
							voluptate libero sint ea nesciunt vel distinctio
							accusantium labore corrupti ut, excepturi doloribus?
							Lorem ipsum, dolor sit amet consectetur adipisicing
							elit. Odio facere commodi animi. Minima soluta quis
							omnis animi consequuntur est alias, repellat cumque?
							Sit at debitis dolorem, fuga vero corrupti quia?
							<span className="flex gap-5">
								<Button text="LindedIN"></Button>
								<Button text="LindedIN"></Button>
								<Button text="LindedIN"></Button>
							</span>
						</aside>
					</div>
				</main>
			</div>
		</>
	);
}
