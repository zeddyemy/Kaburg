import React from "react";

import Hero from "./Hero/Hero";
import Services from "./Services/Services";
import FeaturedProducts from "./Featured/FeaturedProducts";

import "./Home.css";

const Home = () => {
	return (
		<>
			<Hero />
			<Services />
            <FeaturedProducts/>
		</>
	);
};

export default Home;
