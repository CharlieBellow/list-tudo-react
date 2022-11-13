import { FiChevronDown, FiSearch } from "react-icons/fi";

export function Header() {
	return (
		<header className="flex flex-row items-center justify-between mt-4 mx-4">
			<div className="flex flex-row items-center">
				<img
					src="https://avatars.githubusercontent.com/u/92690276?v=4"
					alt="foto de perfil"
					className="w-8 h-8 rounded-full"
				/>
				<h1 className="ml-8">Nome completo</h1>
			</div>
			<div className="flex flex-row gap-4">
				<FiChevronDown />
				<FiSearch />
			</div>
		</header>
	);
}
