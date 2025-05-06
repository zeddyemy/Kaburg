import React from "react";

import Hero from "./Hero/Hero";
import Services from "./Services/Services";
import Brands from "./Brands/Brands";
import FeaturedProducts from "./Featured/FeaturedProducts";
import ContactUs from "./ContactUs/ContactUs";

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

			<ContactUs
				title={"Get in Touch with Us"}
			/>
		</>
	);
};

export default Home;
