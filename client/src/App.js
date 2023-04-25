import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from './page/CartPage';
import Home from './page/Home';
import CartPage from './page/CartPage';

function App() {
	return (
		<>
			<Router>
				<Header />
				<Routes>
					<Route exact path="/home" element={<Home />} />
					<Route exact path="/cart" element={<CartPage />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
