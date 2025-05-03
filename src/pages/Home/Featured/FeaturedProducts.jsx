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
	const products = [
		{ title: "HISREF73WR-RD", price: "630,999.99", image: img1 },
		{ title: "LGTV86UT80006LA", price: "320,199.99", image: img2 },
		{ title: "Hisense U7H", price: "199,799.99", image: img3 },
		{ title: "LG QNED 2024", price: "690,000", image: img4 },
		{ title: "LG XBOOM Party", price: "200,000", image: img5 },
		{ title: "Sharp Smart Freezer", price: "1,200,099", image: img6 },
		{ title: "Alien Gaming Chair", price: "129,099", image: img7 },
		{ title: "Mist premium Blender", price: "99,000", image: img8 },
	];

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
					{products.map((product, index) => (
						<ProductCard key={index} product={product} />
					))}
				</div>
			</div>
		</section>
	);
};

export default FeaturedProducts;
