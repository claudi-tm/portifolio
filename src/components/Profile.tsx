import { RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";

import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { useTranslation } from "react-i18next";
import { Button } from "./Button";

export function Profile() {
	const [t] = useTranslation("global");
	return (
		<div className=" p-5 mt-8 flex flex-col items-center gap-10 md:flex-row ">
			<img
				className="rounded-md w-[50%]  md:w-45 lg:w-35 "
				src="https://avatars.githubusercontent.com/u/55026292?v=4"
				// src="https://i.ibb.co/BjNZNfZ/photo1708591498.jpg"
				alt="profile"
			/>
			<aside className="flex flex-col	 justify-normal text-justify gap-5">
				<h2 className="text-center text-xl sm:text-3xl sm:text-left font-montserrat">
					{t("profile.header")}
				</h2>
				<p className="text-base md:text-lg max-w-xl font-palanquin text-slate-500">
					{t("profile.p")}
				</p>
				<span className="flex flex-col md:flex-row justify-center sm:justify-start gap-5">
					<Button text="Whatsapp" url="https://wa.me/258842666372">
						{/* <img src={Icon} alt="" className="h-[30px] w-[30px]" /> */}
						<WhatsAppIcon />
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
