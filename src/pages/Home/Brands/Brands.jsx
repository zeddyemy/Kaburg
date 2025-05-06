import React from "react";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

import appleLogo from "../../../assets/img/b/brand-apple.webp";
import asusLogo from "../../../assets/img/b/brand-asus.webp";
import brotherLogo from "../../../assets/img/b/brand-brother.webp";
import bruhmLogo from "../../../assets/img/b/brand-bruhm.webp";
import dellLogo from "../../../assets/img/b/brand-dell.webp";
import fitbitLogo from "../../../assets/img/b/brand-fitbit.webp";
import hpLogo from "../../../assets/img/b/brand-hp.webp";
import lenovoLogo from "../../../assets/img/b/brand-lenovo.webp";
import mideaLogo from "../../../assets/img/b/brand-midea.webp";
import nexusLogo from "../../../assets/img/b/brand-nexus.webp";
import skyrunLogo from "../../../assets/img/b/brand-skyrun.webp";
import tecnoLogo from "../../../assets/img/b/brand-tecno.webp";

import "./Brands.css";
import "@splidejs/react-splide/css";

const Brands = () => {
    const brands = [
            { name: "apple", logo: appleLogo },
            { name: "asus", logo: asusLogo },
            { name: "brother", logo: brotherLogo },
            { name: "bruhm", logo: bruhmLogo },
            { name: "dell", logo: dellLogo },
            { name: "fitbit", logo: fitbitLogo },
            { name: "hp", logo: hpLogo },
            { name: "lenovo", logo: lenovoLogo },
            { name: "midea", logo: mideaLogo },
            { name: "nexus", logo: nexusLogo },
            { name: "skyrun", logo: skyrunLogo },
            { name: "tecno", logo: tecnoLogo },
        ];
	return (
		<section id="brands-section" className="brands-section">
			<div className="container">
				<div className="section-info col-12">
					{/* <h2 className="title" style={{textAlign: "center"}}> Brands You Trust </h2> */}
					{/* <p className="description">
						Our team of experts is dedicated to ensuring that your
						needs are met and that you are satisfied with the
						results.
					</p> */}
				</div>

				<div className="col-12 brands">
					<Splide
						aria-label="Brand Logos"
						options={{
							type: "loop",
							rewind: true,
							perPage: 6,
							arrows: false,
							pagination: false,
							drag: "free",
							breakpoints: {
                                640: {
                                    perPage: 3,
								},
								1050: {
                                    perPage: 4,
								},
							},
                            AutoScroll: {
                                speed: 1,
                            },
						}}
						extensions={{ AutoScroll }}
					>
						{brands.map((brand, index) => (
							<SplideSlide key={index}>
								<div className="brand-logo fit-img">
									<img src={brand.logo} alt={brand.name} />
								</div>
							</SplideSlide>
						))}
					</Splide>
				</div>
			</div>
		</section>
	);
};

export default Brands;
