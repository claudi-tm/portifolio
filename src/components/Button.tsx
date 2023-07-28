import { ComponentProps, ReactNode } from "react";

interface ButtonProps extends ComponentProps<"button"> {
    children?: ReactNode;
    text: string;
}

export function Button(props: ButtonProps) {
    return (
        <>
            <button className="p-2 border border-blue-600 rounded-md ">{ props.children }{ props.text }</button>
        </>
    )
}