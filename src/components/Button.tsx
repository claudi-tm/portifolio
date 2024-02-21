import { ComponentProps, ReactNode } from "react";

interface ButtonProps extends ComponentProps<"button"> {
	children?: ReactNode;
	text: string;
	url?: string;
}

export function Button(props: ButtonProps) {
	return (
		<a
			className="p-2 rounded-md flex items-center justify-center gap-1  border border-blue-600 hover:bg-blue-500 hover:text-zinc-50"
			href={props.url}
			target="_blank"
		>
			{props.children}
			{props.text}
		</a>
	);
}
