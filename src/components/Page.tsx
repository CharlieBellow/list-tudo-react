//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./Header";
import { Button } from "./Button";

import * as Icon from 'phosphor-react';
import {FiPlus } from 'react-icons/fi';

export function Page() {
	return (
		<>
			<div className="w-80 mx-auto">
				<Header />
				<Button title={"Adicionar tarefa"} type={"submit"} icon={<Icon.Airplane size={ 20} weight="bold" className="text-red-400"/>} />
				<Button title={"Adicionar tarefa"} type={"submit"} icon={<FiPlus size={20} className="stroke-2 text-green-500" />}/>

			</div>
		</>
	);
}

