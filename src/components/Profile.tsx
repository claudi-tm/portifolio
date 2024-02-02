import { RxLinkedinLogo, RxGithubLogo } from "react-icons/rx";
import { Button } from "./Button";
import Icon from "../assets/whatsapp.svg"

export function Profile() {
	return (
		<div className=" p-5 mt-8 flex flex-col items-center gap-10 md:flex-row ">
			<img
				className="rounded-md md:w-45 lg:w-35 "
				src="https://avatars.githubusercontent.com/u/55026292?v=4"
				alt="profile"
			/>
			<aside className="flex flex-col	 justify-normal text-justify gap-5">
				<h2 className="text-center text-xl sm:text-3xl sm:text-left font-montserrat">
					Desenvolvedor de Software | Web
				</h2>
				<p className="text-base md:text-lg max-w-xl font-palanquin text-slate-500">
					Dev apaixonado por criar e desenvolver, transformar ideias
					em coisas reais. Sempre disposto a aprender, descobrir e
					superar novos desafios. Com habilades em{" "}
					<strong>React JS</strong>, <strong>CSS</strong> ,
					<strong>Tailwind</strong>, <strong>Javascript</strong> ,
					<strong> JAVA</strong>. <br />
					Neste momento finalista do curso de Informática e
					Telecomunicações - ISUTC
				</p>
				<span className="flex flex-col md:flex-row justify-center sm:justify-start gap-5">
					<Button text="Whatsapp">
						<img src={Icon} alt="" className="h-[30px] w-[30px]" />
					</Button>
					<Button
						text="LinkedIn"
						url="https://www.linkedin.com/in/claudio-tomas/"
					>
						{" "}
						<RxLinkedinLogo className="h-[20px] w-[20px]" />{" "}
					</Button>
					<Button text="GitHub" url="https://github.com/claudi-tm">
						<RxGithubLogo className="h-[20px] w-[20px]" />
					</Button>
				</span>
			</aside>
		</div>
	);
}
