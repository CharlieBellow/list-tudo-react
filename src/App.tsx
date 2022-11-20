
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from './Pages/Home';
import './style/main.css';

export default function App() {
  return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />}/>
			</Routes>
		</Router>
	);
}