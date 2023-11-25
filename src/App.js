import "./App.css";
import Nav from "./components/Nav";
import logo from "./images/logo.svg";
import Avatar from "./images/image-avatar.png";
import Product from "./images/image-product-1.jpg";
import ProductSecond from "./images/image-product-2.jpg";
import ProductThird from "./images/image-product-3.jpg";
import ProductFourth from "./images/image-product-4.jpg";
import Content from "./components/Content";
import EmptyCart from "./components/EmptyCart";
import { useState } from "react";

function App() {
	const [isCartEmpty, setCartEmpty] = useState(true);
	const [cartCount, setCartCount] = useState(0);
	const [cartTotal, setCartTotal] = useState(0);

	const handleBasketClick = () => {
		setCartEmpty(!isCartEmpty);
		handleDeleteAll();
	};

	const handleAddToCart = ({ count = 0, price = 0 }) => {
		const totalCount = cartCount + count;
		const totalPrice = cartTotal + count * price;

		setCartCount(totalCount);
		setCartTotal(totalPrice);

		setCartEmpty(false);
	};

	const handleDeleteAll = () => {
		handleAddToCart({});
	};

	return (
		<div className="App">
			<Nav logo={logo} Avatar={Avatar} onBasketClick={handleBasketClick} cartCount={cartCount} />
			<Content
				Product={Product}
				ProductSecond={ProductSecond}
				ProductThird={ProductThird}
				ProductFourth={ProductFourth}
				onAddToCart={handleAddToCart}
			/>
			{!isCartEmpty && (
				<EmptyCart
					cartCount={cartCount}
					cartTotal={cartTotal}
					Product={Product}
					handleDeleteAll={handleDeleteAll}
				/>
			)}
		</div>
	);
}

export default App;
