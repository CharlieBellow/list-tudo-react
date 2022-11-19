

import * as Icon from "phosphor-react"
import { IconBaseProps } from "react-icons";

interface ButtonProps {
	title: string;
  type: "button" | "submit" | "reset" | undefined;
	icon: Icon.IconProps | IconBaseProps;
	theme: "light" | "dark"
}

export function Button(props: ButtonProps) {
  //const ColorTheme = ; 

	return (
		<div
			className={`font-sans font-medium py-1 px-1 bg-transparent rounded text-lg hover:bg-dark-actions w-full border-solid border-2 focus:ring-2 ring-light-text border-dark-actions  ${
				props.theme === "light" ? "text-light-text" : "text-dark-text"
			}`}
		>
			<>{props.icon}</>
			<button type={props.type}>{props.title}</button>
		</div>
	);
}
