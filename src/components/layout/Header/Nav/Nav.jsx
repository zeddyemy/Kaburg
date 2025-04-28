import { Link } from "react-router-dom";

const Nav = ({ toggleNav }) => {
	return (
		<>
			<nav className="nav nav-links">
				<div className="nav-action-btns flex space-between">
					<div className="action-btns flex flex-center"></div>

					<span
						className="menu-close-btn ico-btn"
						onClick={toggleNav}
						aria-label="Close navigation menu"
					>
						<i className="bx bx-x"></i>
					</span>
				</div>

				<div id="nav-items" className="links">
					<ul>
						<li>
							<Link to="/"> Home </Link>
						</li>
						<li>
							<Link to="#"> About </Link>
						</li>
						<li>
							<Link to="#"> Services </Link>
						</li>
						<li>
							<Link to="#"> Contact Us </Link>
						</li>
					</ul>
				</div>
			</nav>

			<div className="nav-overlay" onClick={toggleNav}></div>
		</>
	);
};

export default Nav