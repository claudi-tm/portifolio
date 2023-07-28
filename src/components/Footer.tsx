import { RxGithubLogo, RxLinkedinLogo, RxMobile, RxPencil1 } from "react-icons/rx";

export function Footer() {
	return (
		<>
			<footer className="flex flex-col gap-8  items-center p-10 bg-slate-800 w-full text-zinc-200">
				<div className="grid grid-cols-2 gap-16 bg-slate-800">
					<p className="flex items-center">
						Disponivel para novos trabalhos e no processo continuo
						de aprendizagem. <br /> Entre contacto
					</p>
					<div>
						<ul id="contact" className="flex flex-col items-start gap-3">
							<li className="flex items-center gap-3">
								{" "}
								<RxPencil1 /> ccaducarlos@gmail.com
							</li>
							<li>
								{" "}
								<a
									className="flex items-center gap-3"
									href="https://github.com/claudi-tm"
								>
									<RxGithubLogo /> GitHub
								</a>
							</li>
							<li>
								{" "}
								<a
									className="flex items-center gap-3"
									href="https://www.linkedin.com/in/claudio-tomas/"
								>
									<RxLinkedinLogo /> LinkedIn
								</a>{" "}
							</li>
							<li>
								<a
									className="flex items-center gap-3"
									href="tel:+258842666372"
								>
									{" "}
									<RxMobile /> 842666372
								</a>
							</li>
						</ul>
					</div>
				</div>

				<div className="text-center"> 2023 - by Cláudio Tomás</div>
			</footer>
		</>
	);
}
