import { Header } from "../../components/Header";
import { Page } from "../../components/Page";
import { InputTask } from "../../components/InputTask";
import { Button } from "../../components/Button";

import * as Icon from "phosphor-react";
import { FiPlus } from "react-icons/fi";



export function Home() {
	return (
    <>
      <Page content={ 
        <>
          <Header />
          <Button
              title={"Adicionar tarefa"}
              type={"submit"}
              icon={
                <Icon.Airplane size={20} weight="bold" className="text-red-400" />
              }
              theme="light"
            />
            <Button
              title={"Adicionar tarefa"}
              type={"submit"}
              icon={<FiPlus size={20} className="stroke-2 text-green-500" />}
              theme="light"
            />
          
          <InputTask />
        </>

      } />
		</>
	);
}
