import Twitter from "../assets/twitter.png";
import Notion from "../assets/notion.png";
import Calculadora from "../assets/calculadora.png";
export const projects = [
	{
		title: "UI-Twitter",
		description: "",
		image: (
			<img
				className="hover:p-2 hover:scale-110 hover:border border-blue-600 hover:transform hover:duration-500"
				src={Twitter}
				alt=""
			/>
		),
		techs: ["React JS", "Typescript", "CSS", "Vite"],
		url_production: "https://ui-twitter-taupe.vercel.app/",
		url_code: "https://github.com/claudi-tm/ui-twitter",
	},
	{
		title: "Notion-Clone",
		description: "",
		image: (
			<img
				className="hover:p-2 hover:scale-110 hover:border border-blue-600 hover:transform hover:duration-500"
				src={Notion}
				alt=""
			/>
		),
		techs: ["React JS", "Typescript", "Tailwindcss", "Vite"],
		url_production: "https://notion-clone-i4lmo6811-claudi-tm.vercel.app/",
		url_code: "https://github.com/claudi-tm/Notion-clone",
	},
	{
		title: "Calculadora",
		description: "",
		image: (
			<img
				className="hover:p-2 hover:scale-110 hover:border border-blue-600 hover:transform hover:duration-500"
				src={Calculadora}
				alt=""
			/>
		),
		techs: ["React JS", "Typescript", "Tailwindcss", "Vite"],
		url_production:
			"https://boracodar-jfx621piw-claudi-tm.vercel.app/calculator",
		url_code:
			"https://github.com/claudi-tm/boracodar/tree/main/src/app/calculator",
	},
];
