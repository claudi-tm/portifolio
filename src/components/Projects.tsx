import { RxCode, RxEyeOpen } from "react-icons/rx";

import { Button } from "./Button";
import { projects } from "./projects_file.tsx";

export function Projects() {
	
	
	return (
		<>
			<h2 id="projects" className="text-3xl border-b-2 border-blue-400">Projectos</h2>
			<div className="flex flex-col gap-4 items-center">
				{projects.map((project) => (
					<div
						className=" flex flex-col p-2  md:grid grid-cols-2 gap-5 rounded-md bg-zinc-100 "
						key={project.title}
					>
						<div className="flex flex-col gap-2 items-center ">
							<h3 className="text-2xl">{project.title}</h3>
							<p>{project.description}</p>
							<p className="flex gap-3">
								{project.techs.map((tech) => (
									<span
										className="font-semibold hover:scale-105 hover:transform hover:duration-200 hover:text-blue-500"
										key={tech.toString()}
									>
										{tech}
									</span>
								))}
							</p>
						</div>
						<div>
							<a href={project.url_production} target="_blank">
								<div>{project.image}</div>
							</a>
						</div>
						<div className="flex gap-2 justify-center">
							<a href={project.url_production} target="_blank">
								<Button text="Projecto">
									<RxEyeOpen />
								</Button>
							</a>
							<a href={project.url_code} target="_blank">
								<Button text=" Codigo">
									<RxCode />
								</Button>
							</a>
						</div>
					</div>
				))}
			</div>
		</>
	);
}
