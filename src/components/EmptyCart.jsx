import classes from "./Reusable.module.css";

const EmptyCart = ({ cartCount, cartTotal }) => {
	return (
		<div className={classes.container}>
			<div className={classes.cart}>
				<header className={classes.title}>Cart</header>

				<div className={classes.wrapper}>
					{cartTotal === 0 ? (
						<div className={classes.price}>
							<p>Your Cart is Empty</p>
						</div>
					) : (
						cartCount > 0 && (
							<div className={classes.price}>
								<p>Fall Limited Edition Sneakers</p>
								<p>$125.00 x ${(125.0 * cartCount).toFixed(2)}</p>
							</div>
						)
					)}
				</div>

				{cartCount > 0 && <button className={classes.btn}></button>}
			</div>
		</div>
	);
};

export default EmptyCart;
