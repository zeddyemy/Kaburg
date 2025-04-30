import React from "react";

import ServiceCard from "./ServiceCard";

import "./Services.css";

const Services = () => {
	return (
		<section id="services-section" className="services-section">
			<div className="container">
				<div className="section-info col-12">
					<h2 className="title"> What sets us apart? </h2>
                    <p className="description">
                        Our team of experts is dedicated to ensuring that your needs are met and that you are satisfied with the results.
                    </p>
				</div>

				<div className="col-12 grid services">
                    <ServiceCard 
                        title={"Quality"}
                        description={"We provide the best quality compared to our competition"}
                    />

                    <ServiceCard 
                        title={"Quality"}
                        description={"We provide the best quality compared to our competition"}
                    />

                    <ServiceCard 
                        title={"Quality"}
                        description={"We provide the best quality compared to our competition"}
                    />

                </div>
			</div>
		</section>
	);
};

export default Services;
