import React, { useState } from "react";
import classes from "./Reusable.module.css";

const EmptyCart = ({ cartCount, cartTotal, Product, handleDeleteAll }) => {
	const [isEmpty, setEmpty] = useState(cartTotal === 0);

	const handleDeleteAllAndEmptyCart = () => {
		handleDeleteAll();
		setEmpty(true);
	};

	return (
		<div className={classes.container}>
			<div className={classes.cart}>
				<header className={classes.title}>Cart</header>
				<div className={classes.wrapper}>
					{isEmpty ? (
						<div className={classes.price}>
							<p>Your Cart is Empty</p>
						</div>
					) : (
						cartCount > 0 && (
							<div className={classes.price}>
								<div className={classes.shoes}>
									<img className={classes.shoes} src={Product} alt="" />
								</div>
								<div>
									<p>Fall Limited Edition Sneakers</p>
									<p className={classes.amount}>
										{`$125.00 x ${cartCount} $${(125.0 * cartCount).toFixed(2)}`}
									</p>
								</div>
								<div>
									<button onClick={handleDeleteAllAndEmptyCart} className={classes.delete}>
										X
									</button>
								</div>
							</div>
						)
					)}
				</div>

				{cartCount > 0 && <button className={classes.btn}>checkbox</button>}
			</div>
		</div>
	);
};

export default EmptyCart;
