import { RxCode, RxEyeOpen } from "react-icons/rx";

import { useTranslation } from "react-i18next";
import { Button } from "./Button";
import { projects } from "./projects_file.tsx";

export function Projects() {
	const [t] = useTranslation("global");
	return (
		<>
			<h2
				id="projects"
				className="text-3xl border-b-2 border-blue-400 font-palanquin"
			>
				{t("projects.title")}
			</h2>
			<div className="flex flex-col px-4 gap-4 items-center ">
				{projects.map((project, index) => (
					<div
						className=" flex flex-col  p-4 px-8 text-justify lg:grid grid-cols-2 md:gap-10 rounded-md bg-zinc-100 "
						key={project.title}
					>
						<div className="flex text-justify flex-col gap-2 items-center justify-center">
							<h3 className="text-2xl">{project.title}</h3>
							<p className="font-palanquin leading-loose">
								{t(`projects.project_${index}`)}
							</p>
							<p className="grid text-center grid-cols-2 md:flex pb-4 md:p-0 gap-3 md:divide-x-2 divide-slate-700">
								{project.techs.map((tech) => (
									<span
										className="font-semibold hover:scale-105 pl-2 hover:transform hover:duration-200 hover:text-blue-500"
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
						<div className="flex p-4 md:p-0 gap-2 justify-center">
							<a href={project.url_production} target="_blank">
								<Button text={t(`button.btn1`)}>
									<RxEyeOpen />
								</Button>
							</a>
							<a href={project.url_code} target="_blank">
								<Button text={t(`button.btn2`)}>
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
