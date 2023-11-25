import { useState } from "react";
import classes from "./Information.module.css";

const Information = ({ onAddToCart, cartTotal }) => {
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
	};

	return (
		<div className={classes.wrapper}>
			<h4>SNEAKER COMPANY</h4>
			<h1>Fall Limited Edition Sneakers</h1>
			<p className={classes.text}>
				These low-profile sneakers are perfect casual wear companion.Featuring a durable rubber outer sole,
				they'll withstand everything the weather can offer.
			</p>

			<div className={classes.price}>
				<div className={classes.dollars}>
					<h4>$125.00</h4>
					<div className={classes.procent}>50%</div>
				</div>
				<p className={classes.discount}>250.00$</p>

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
