import Twitter from "../assets/twitter.png";
import Notion from "../assets/notion.png";
import Nike from "../assets/nike.png";
export const projects = [
	
	{
		title: "UI-Twitter",
		image: (
			<img
				className="w-[100%] h-[100%] hover:p-2 lg:hover:scale-110 hover:border border-blue-600 hover:transform duration-500"
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
		image: (
			<img
				className="w-[100%] h-[100%] hover:p-2 lg:hover:scale-110 hover:border border-blue-600 hover:transform duration-500"
				src={Notion}
				alt=""
			/>
		),
		techs: ["React JS", "Typescript", "Tailwindcss", "Vite"],
		url_production: "https://notion-clone-i4lmo6811-claudi-tm.vercel.app/",
		url_code: "https://github.com/claudi-tm/Notion-clone",
	},
	{
		title: "Nike Landing",
		image: (
			<img
				className="w-[100%] h-[100%] hover:p-2 lg:hover:scale-110 hover:border border-blue-600 hover:transform duration-500"
				src={Nike}
				alt=""
			/>
		),
		techs: ["React JS", "Typescript", "Tailwindcss", "Vite"],
		url_production: "https://nike-project-tau.vercel.app/",
		url_code: "https://github.com/claudi-tm/nike-project",
	},
];
