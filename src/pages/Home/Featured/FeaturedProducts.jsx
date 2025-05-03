import React from "react";

import ProductCard from "./ProductCard";

import "./FeaturedProducts.css";

import img1 from "../../../assets/img/featured-1.webp";
import img2 from "../../../assets/img/featured-2.webp";
import img3 from "../../../assets/img/featured-3.webp";
import img4 from "../../../assets/img/featured-4.webp";
import img5 from "../../../assets/img/featured-5.webp";
import img6 from "../../../assets/img/featured-6.webp";
import img7 from "../../../assets/img/featured-7.webp";
import img8 from "../../../assets/img/featured-8.jpg";

const FeaturedProducts = () => {
	return (
		<section id="featured-prod-section" className="featured-prod-section">
			<div className="container">
				<div className="section-info col-12">
					<h2 className="title"> Featured Products </h2>
					<p className="description">
						We offer the best electronic products in the market.
					</p>
				</div>

				<div className="col-12 grid products">
					<ProductCard
						title={"HISREF73WR-RD"}
						price={"500,204"}
						prodImg={img1}
					/>
					<ProductCard
						title={"LGTV86UT80006LA"}
						price={"823,200"}
						prodImg={img2}
					/>
					<ProductCard
						title={"Hisense U7H"}
						price={"323,104"}
						prodImg={img3}
					/>
					<ProductCard
						title={"LG QNED 2024"}
						price={"723,504"}
						prodImg={img4}
					/>
					<ProductCard
						title={"LG XBOOM Party"}
						price={"623,204"}
						prodImg={img5}
					/>
					<ProductCard
						title={"Sharp Smart Freezer"}
						price={"1,223,299"}
						prodImg={img6}
					/>

					<ProductCard
						title={"Alien Gaming Chair"}
						price={"123,699"}
						prodImg={img7}
					/>

					<ProductCard
						title={"Mist premium Blender"}
						price={"93,500"}
						prodImg={img8}
					/>
				</div>
			</div>
		</section>
	);
};

export default FeaturedProducts;
