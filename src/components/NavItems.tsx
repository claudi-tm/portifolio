interface NavItemsProps {
	text: string;
}

export function NavItems(props: NavItemsProps) {
	return (
		<>
			<li>
				<a
					className=" pb-1 link link-underline link-underline-black text-lg hover:text-blue-500"
					href=""
				>
					{props.text}
				</a>
			</li>
		</>
	);
}
