import { useState } from "react";
import classes from "./Information.module.css";
import PRODUCT_DATA from "../data/productData";

const Information = ({ onAddToCart }) => {
	const [count, setCount] = useState(0);

	const handleIncremet = () => {
		setCount(count + 1);
	};

	const handleDecrement = () => {
		if (count > 0) {
			setCount(count - 1);
		}
	};

	const handleAddToCartClick = () => {
		onAddToCart({ count, price: 125 });
		setCount(0);
	};

	return (
		<div className={classes.wrapper}>
			<h4>{PRODUCT_DATA.name}</h4>
			<h1>{PRODUCT_DATA.title}</h1>
			<p className={classes.text}>{PRODUCT_DATA.text}</p>

			<div className={classes.price}>
				<div className={classes.dollars}>
					<h4>{PRODUCT_DATA.value}</h4>
					<div className={classes.procent}>{PRODUCT_DATA.discount}</div>
				</div>
				<p className={classes.discount}>{PRODUCT_DATA.price}</p>

				<div className={classes.payment}>
					<button onClick={handleDecrement} className={classes.btn}>
						-
					</button>
					<input className={classes.field} type="text" name="input numbers" value={count} readOnly />
					<button onClick={handleIncremet} className={classes.btn}>
						+
					</button>
					<button onClick={handleAddToCartClick} className={classes.basket}>
						Add to card
					</button>
				</div>
			</div>
		</div>
	);
};

export default Information;
