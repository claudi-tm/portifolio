import { Link } from "react-scroll";
interface NavItemsProps {
	text: string;
	url: string;
}

export function NavItems(props: NavItemsProps) {
	return (
		<>
			<li>
				<Link
					className=" pb-1 link link-underline link-underline-black text-lg hover:text-blue-500 cursor-pointer"
					to={props.url}
					smooth={true}
					duration={500}
				>
					{props.text}
				</Link>
			</li>
		</>
	);
}
