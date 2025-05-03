import React from 'react'

import Btn from '../../../components/common/Btn/Btn';

const ProductCard = ({ product }) => {
    return (
		<div className="card product-card">
			<div className="card-img fit-img">
				<img src={product.image} alt={`${product.title} Image`} />
			</div>

			<div className="card-body">
				<h3 className="card-title">{product.title}</h3>
				<p> ₦ {product.price} </p>

				<Btn
					txt={"Place Order"}
					variant={"pill"}
					className="ghost slide-hover"
					link={`https://wa.me/+2348148434507?text=Hello, I'm interested in ${product.title} for ₦${product.price}`}
					target="_blank"
					rel="noopener noreferrer"
				/>
			</div>
		</div>
	);
};

export default ProductCard