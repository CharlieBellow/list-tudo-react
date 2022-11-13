import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from './components/header';
import './style/main.css';

export default function App() {
  return (
		<Router>
			<Routes>
				<Route path="/" element={<Header />} />
				<Route path="/profile" element={} />
			</Routes>
		</Router>
	);
}