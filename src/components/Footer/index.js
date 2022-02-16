import React from "react";

import "./footer.css";

const Footer = () => {
	return (
		<footer className="container">
			<p className="logo">MR. SURFING</p>
			<nav>
				<ul>
					<li>
						<a href="#">Home</a>
					</li>
					<li>
						<a href="#">About</a>
					</li>
					<li>
						<a href="#">Contact</a>
					</li>
				</ul>
			</nav>
			<p>© 2022. All Rights Reserved.</p>
		</footer>
	);
};

export default Footer;
