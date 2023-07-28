import Twitter from "../assets/twitter.png";
import Notion from "../assets/notion.png";
import Calculadora from "../assets/calculadora.png";
export const projects = [
	{
		title: "UI-Twitter",
		description: (
			<p style={{ lineHeight: "40px" }}>
				Com menos polemica que a sua versão oficial apresento a UI do
				Twitter possivel conceber esta maravilha, faça o seu primeiro
				tweet.🐦
			</p>
		),
		image: (
			<img
				className="w-[100%] h-[100%]  hover:p-2 lg:hover:scale-110 hover:border border-blue-600 hover:transform duration-500"
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
		description: (
			<p style={{ lineHeight: "40px" }}>
				Com as tecnologias abaixo e o editor de Texto Avançado foi
				possivel conceber esta maravilha, capaz de criar listas
				(numeradas e não numeradas), formatar texto usando o formato
				base do notion(Titulo 1, Titulo 2, Titulo 3), para além das
				funções basicas de um editor, mas chega de spoiler, teste voce
				mesmo.⭐
			</p>
		),
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
		title: "Calculadora",
		description: (
			<p style={{ lineHeight: "40px" }}>
				O projecto iniciante de todo progamador, feita com amor, um
				pouco de dor e bugs. Make some math.🔢
			</p>
		),
		image: (
			<img
				className="w-[100%] h-[100%] hover:p-2 lg:hover:scale-110 hover:border border-blue-600 hover:transform duration-500"
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
