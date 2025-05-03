import React from "react";

const ServiceCard = ({ title, description, bxIcon  }) => {
	return (
		<div className="card service-card">
			<div className="card-body">
				<span className="card-icon flex flex-center">
					<i className={`bx ${bxIcon}`}></i>
				</span>
				<h3> {title} </h3>
				<p> {description} </p>
			</div>
		</div>
	);
};

export default ServiceCard;
