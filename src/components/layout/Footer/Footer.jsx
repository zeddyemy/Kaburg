import React from "react";
import "./Footer.css"; // You'll need to create this CSS file

const Footer = () => {
	return (
		<footer className="footer">
			<div className="container">
				<div className="footer-content flex col-12">
					<div className="footer-section col-5">
						<h4>About Kaburg</h4>
						<p>Kaburg is a leading provider of innovative solutions, committed to delivering excellence and quality service to our clients across Nigeria and beyond.</p>
					</div>
					<div className="footer-section col-2">
						<h4>Quick Links</h4>
						<ul>
							<li>
								<a href="/">Home</a>
							</li>
							<li>
								<a href="/about">About</a>
							</li>
							<li>
								<a href="/services">Services</a>
							</li>
							<li>
								<a href="/contact">Contact</a>
							</li>
						</ul>
					</div>
					<div className="footer-section col-2">
						<h4>Contact Us</h4>
						<ul>
							<li> Email: info@kaburg.com </li>
							<li> Phone: +254 123 456 789 </li>
							<li> Address: Lagos, Nigeria </li>
						</ul>
					</div>
				</div>

				<div className="footer-bottom flex flex-center col-12">
					<p>
						&copy; {new Date().getFullYear()} Kaburg. All rights
						reserved.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
