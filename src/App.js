import "./App.css";
import Nav from "./components/Nav/Nav";
import Avatar from "./images/image-avatar.png";
import Product from "./images/image-product-1.jpg";
import ProductSecond from "./images/image-product-2.jpg";
import ProductThird from "./images/image-product-3.jpg";
import ProductFourth from "./images/image-product-4.jpg";
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
			<Nav
				Avatar={Avatar}
				cartCount={cartCount}
				cartTotal={cartTotal}
				Product={Product}
				handleDeleteAll={handleDeleteAll}
			/>
			<Content
				Product={Product}
				ProductSecond={ProductSecond}
				ProductThird={ProductThird}
				ProductFourth={ProductFourth}
				onAddToCart={handleAddToCart}
			/>
		</div>
	);
}

export default App;
