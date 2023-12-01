import classes from "./Content.module.css";
import Information from "../Information/Information";

import product from "../../images/image-product-1.jpg";
import productSecond from "../../images/image-product-2.jpg";
import productThird from "../../images/image-product-3.jpg";
import productFourth from "../../images/image-product-4.jpg";
import { useState } from "react";

const Content = ({ onAddToCart }) => {
	const gallery = [product, productSecond, productThird, productFourth];

	const [activeImage, setActiveImage] = useState(gallery[0]);

	const handleImageClick = (src) => {
		setActiveImage(src);
	};

	return (
		<div className={classes.container}>
			<div className={classes["col-1-4"]}>
				<div>
					<img className={classes.shoes} src={activeImage} alt="Product" />

					<div className={classes.wrapper}>
						{gallery.map((image, index) => (
							<div key={index} onClick={() => handleImageClick(image)}>
								<img className={classes.products} src={image} alt={`Product ${index + 1}`} />
							</div>
						))}
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
