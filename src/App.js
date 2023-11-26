import "./App.css";
import Nav from "./components/Nav/Nav";
import Content from "./components/Content/Content";
import { useState } from "react";

function App() {
	const [cartCount, setCartCount] = useState(0);
	const [cartTotal, setCartTotal] = useState(0);

	const handleAddToCart = ({ count = 0, price = 0 }) => {
		const totalCount = cartCount + count;
		const totalPrice = cartTotal + count * price;

		setCartCount(totalCount);
		setCartTotal(totalPrice);
	};

	const handleDeleteAll = () => {
		setCartCount(0);
		setCartTotal(0);
	};

	return (
		<div className="App">
			<Nav cartCount={cartCount} cartTotal={cartTotal} handleDeleteAll={handleDeleteAll} />
			<Content onAddToCart={handleAddToCart} />
		</div>
	);
}

export default App;
