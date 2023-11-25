import classes from "./Content.module.css";
import Information from "./Information";

const Content = ({ Product, ProductSecond, ProductThird, ProductFourth, onAddToCart }) => {
	return (
		<div className={classes.container}>
			<div className={classes["col-1-4"]}>
				<div>
					<img className={classes.shoes} src={Product} alt="Product" />

					<div className={classes.wrapper}>
						<div>
							<img className={classes.products} src={Product} alt="Product" />
						</div>
						<div>
							<img className={classes.products} src={ProductSecond} alt="Product" />
						</div>
						<div>
							<img className={classes.products} src={ProductThird} alt="Product" />
						</div>
						<div>
							<img className={classes.products} src={ProductFourth} alt="Product" />
						</div>
					</div>
				</div>
			</div>

			<div className={classes["col-1-4"]}>
				<Information onAddToCart={onAddToCart} />
			</div>
		</div>
	);
};

export default Content;
