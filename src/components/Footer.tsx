import { useTranslation } from "react-i18next";
import {
	RxGithubLogo,
	RxLinkedinLogo,
	RxMobile,
	RxPencil1,
} from "react-icons/rx";

export function Footer() {
	const [t] = useTranslation("global");
	return (
		<footer className="flex flex-col p-10 gap-8  items-center  bg-slate-800 w-full text-zinc-200">
			<div className="grid grid-cols-1 w-full  bg-slate-800">
				<p className="flex items-center justify-start">
					{t("footer.p")}
				</p>
				<p>{t("footer.contact")}</p>
				<div>
					<ul
						id="contact"
						className="flex p-3 flex-col items-start gap-3"
					>
						<li className="flex w-fit whitespace-normal items-center ">
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
	);
}
