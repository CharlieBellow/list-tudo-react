
import './style/main.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from './Pages/Home';
import { ThemeContextProvider } from "./Contexts/ThemeContext"

export default function App() {
  return (
    <ThemeContextProvider>
  		<Router>
  			<Routes>
  				<Route path="/" element={<Home />}/>
  			</Routes>
  		</Router>
    </ThemeContextProvider>
	);
}