import React from "react";

import Btn from "../../../components/common/Btn/Btn"

import "./Hero.css";
import heroImage from "../../../assets/img/hero.webp";

const Hero = () => {
	return (
		<>
			<section
				id="hero-header"
				className="hero-header no-pad fit-img"
				style={{ backgroundImage: `url(${heroImage})` }}
			>
				<div className="container">
					<div className="hero-content flex flex-start">
						<h2>Elevate your electronics Experience</h2>
						<p>
							Discover the latest in electronics, from
							cutting-edge gadgets to innovative accessories.
						</p>

						<Btn txt={"Explore"} variant={"pill"} />
					</div>
				</div>
			</section>
		</>
	);
};

export default Hero;
