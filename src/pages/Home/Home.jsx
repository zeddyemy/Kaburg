import React from "react";

import Hero from "./Hero/Hero";
import Services from "./Services/Services";
import Brands from "./Brands/Brands";
import FeaturedProducts from "./Featured/FeaturedProducts";

import "./Home.css";

const Home = () => {
	return (
		<>
			<Hero
				title="Elevate your electronics Experience"
				subtitle="Discover the latest in electronics, from cutting-edge gadgets to innovative accessories."
				ctaText="Explore"
				ctaLink="#"
			/>

			<Services />

			<Brands />
			
			<FeaturedProducts />
		</>
	);
};

export default Home;
