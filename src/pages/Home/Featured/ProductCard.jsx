import React from 'react'

import Btn from '../../../components/common/Btn/Btn';

const ProductCard = ({ title, price, prodImg }) => {
    return (
		<div className="card product-card">
			<div className="card-img fit-img">
				<img src={prodImg} alt={`${title} image`} />
			</div>

			<div className="card-body">
				<h3> {title} </h3>
				<p> ₦ {price} </p>

				<Btn
					txt={"Place Order"}
					variant={"pill"}
					className="ghost slide-hover"
					link={`https://wa.me/+2348148434507?text=Hello, I'm interested in ${title} for ₦${price}`}
					target="_blank"
					rel="noopener noreferrer"
				/>
			</div>
		</div>
	);
};

export default ProductCard