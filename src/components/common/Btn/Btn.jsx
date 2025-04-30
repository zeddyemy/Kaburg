import React from "react";
import PropTypes from "prop-types";

import "./Btn.css";

const Btn = ({txt, variant, className="", ...props}) => {
	return (
		<>
			<a
                href=""
                className={`btn ${variant} ${className}`}
                {...props}
            >
                {txt}
            </a>
		</>
	);
};

Btn.propTypes = {
	txt: PropTypes.string.isRequired,
	variant: PropTypes.oneOf(["default", "ghost", "pill", "rounded"]),
	className: PropTypes.string,
};

export default Btn;
