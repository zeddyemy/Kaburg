import React from "react";

import Btn from "../../../components/common/Btn/Btn"

import "./Hero.css";
import heroImage from "../../../assets/img/hero.webp";

const Hero = ({ title, subtitle, ctaText, ctaLink="#" }) => {
	return (
		<>
			<section
				id="hero-header"
				className="hero-header no-pad fit-img"
				style={{ backgroundImage: `url(${heroImage})` }}
			>
				<div className="container">
					<div className="hero-content flex flex-start">
						<h2>{title}</h2>
						<p>{subtitle}</p>

						<Btn txt={ctaText} variant={"pill"} link={ctaLink} />
					</div>
				</div>
			</section>
		</>
	);
};

export default Hero;
