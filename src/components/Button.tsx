

import * as Icon from "phosphor-react"
import { IconBaseProps } from "react-icons";

interface ButtonProps {
	title: string;
  type: "button" | "submit" | "reset" | undefined;
  icon: Icon.IconProps | IconBaseProps
}

export function Button(props: ButtonProps) {
	return (
		<div className="flex items-center gap-2 border-red-700 border-2 max-w-xs">
      <>
        {props.icon}
      </>
			<button type={props.type}>{props.title}</button>
		</div>
	);
}
