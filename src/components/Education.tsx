import Certifcado1 from "../assets/cert1.png";
import Certifcado2 from "../assets/cert2.png";
import Certifcado3 from "../assets/cert3.png";

export function Education() {
	return (
		<>
			<h2 className="text-3xl border-b-2 border-blue-400">
				Formação Técnica
			</h2>
			<div
				id="education"
				className="flex flex-col md:grid grid-cols-2 gap-8 "
			>
				<img
					className="hover:border hover:scale-95 hover:border-blue-400 shadow-2xl hover:shadow-blue-800 duration-500 md:hover:scale-105"
					src={Certifcado1}
					alt=""
				/>
				<img
					className="hover:border hover:scale-95 hover:border-blue-400 shadow-2xl hover:shadow-blue-800 duration-500 md:hover:scale-105"
					src={Certifcado2}
					alt=""
				/>
				<img
					className="hover:border hover:scale-95 hover:border-blue-400 shadow-2xl hover:shadow-blue-800 duration-500 md:hover:scale-105"
					src={Certifcado3}
					alt=""
				/>
			</div>
		</>
	);
}
