//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


interface PageProps {
	content: any;
}
export function Page(props: PageProps) {
	return (
		<>
			<div className="w-80 mx-auto">{props.content}</div>
		</>
	);
}

