import React from "react";

const ServiceCard = ({ title, description }) => {
	return (
		<div className="card service-card">
			<div className="card-img"></div>
            
			<div className="card-body">
				<h3> {title} </h3>
				<p> {description} </p>
			</div>
		</div>
	);
};

export default ServiceCard;
