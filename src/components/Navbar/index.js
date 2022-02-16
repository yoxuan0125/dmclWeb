import React, { useState, useRef, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
	const [showLinks, setShowLinks] = useState(false);
	const linksContainerRef = useRef(null);
	const linksRef = useRef(null);
	const toggleLinks = () => {
		setShowLinks(!showLinks);
	};
	useEffect(() => {
		const linksHeight = linksRef.current.getBoundingClientRect().height;
		if (showLinks) {
			linksContainerRef.current.style.height = `${linksHeight}px`;
		} else {
			linksContainerRef.current.style.height = "0px";
		}
	}, [showLinks]);
	return (
		<nav>
			<div className="nav-center">
				<div className="nav-header">
					<div>
						<a href="#" className="logo">
							MR. SURFING
						</a>
					</div>
					<button className="nav-toggle" onClick={toggleLinks}>
						<FaBars />
					</button>
				</div>
				<div className="links-container" ref={linksContainerRef}>
					<ul className="links" ref={linksRef}>
						<li className="nav-content">
							<a href={"#"}>關於MR.SURFING</a>
						</li>
						<li className="nav-content">
							<a href={"#"}>服務據點</a>
						</li>
						<li className="nav-content">
							<a href={"#"}>價目表</a>
						</li>
					</ul>
				</div>
				<ul className="btn">
					<li>
						<a href="#" className="btn-1">
							立即預約
						</a>
					</li>
					<li>
						<a href="#">聯絡我們</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
