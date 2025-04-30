import React, { useEffect, useState } from "react";

import Nav from "./Nav/Nav";

import "./Header.css";

const Header = () => {
	const [headerBg, setHeaderBg] = useState("");
	const [isNavOpen, setIsNavOpen] = useState(false);

	const handleScroll = () => {
		if (window.scrollY > 50) {
			setHeaderBg("header-bg");
		} else {
			setHeaderBg("");
		}
	};

	const toggleNav = () => {
		setIsNavOpen(!isNavOpen);
		// Prevent body scroll when nav is open
		document.body.style.overflow = !isNavOpen ? "hidden" : "unset";
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<>
			<header
				id="site-header"
				className={`site-header ${headerBg}`}
			>
				<div className="container">
					<div
						className={`header-box flex ${
							isNavOpen ? "is-active" : ""
						}`}
					>
						<div className="logo">
							<a href="#">
								<h1> Kaburg </h1>
								<span className="tagline"></span>
							</a>
						</div>

						<Nav toggleNav={toggleNav} />

						<div className="action-btns flex flex-center">
							<span
								className="menu-btn ico-btn"
								onClick={toggleNav}
								aria-label="Toggle navigation menu"
							>
								<i className="bx bx-menu"></i>
							</span>
						</div>

						{/* <div className="search-block flex flex-center"></div> */}
					</div>
				</div>
			</header>
		</>
	);
};

export default Header;
