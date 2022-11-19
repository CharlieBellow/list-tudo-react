import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Page } from './components/Page';
import './style/main.css';

export default function App() {
  return (
		<Router>
			<Routes>
				<Route path="/" element={<Page />}/>
			</Routes>
		</Router>
	);
}