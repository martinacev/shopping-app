import classes from "./Content.module.css";
import Information from "../Information/Information";

import product from "../../images/image-product-1.jpg";
import productSecond from "../../images/image-product-2.jpg";
import productThird from "../../images/image-product-3.jpg";
import productFourth from "../../images/image-product-4.jpg";

const Content = ({ Product, ProductSecond, ProductThird, ProductFourth, onAddToCart }) => {
	const gallery = [Product, ProductSecond, ProductThird, ProductFourth];

	// create state with name ActiveImage
	//set default value of the state to be gallery[0]

	// add onClick on the images, onClick should change ste activeImage state with theri src value

	return (
		<div className={classes.container}>
			<div className={classes["col-1-4"]}>
				<div>
					<img className={classes.shoes} src={product} alt="Product" />

					<div className={classes.wrapper}>
						<div>
							<img className={classes.products} src={product} alt="Product" />
						</div>
						<div>
							<img className={classes.products} src={productSecond} alt="Product" />
						</div>
						<div>
							<img className={classes.products} src={productThird} alt="Product" />
						</div>
						<div>
							<img className={classes.products} src={productFourth} alt="Product" />
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
