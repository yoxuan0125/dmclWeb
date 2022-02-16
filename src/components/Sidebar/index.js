import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaFacebook, FaInstagram, FaLine } from "react-icons/fa";
import "./Sidebar.css";

const Sidebar = () => {
	return (
		<ul className="sidebar-btn">
			<li>
				<a href="#">
					<FaInstagram />
				</a>
			</li>
			<li>
				<a href="#">
					<FaFacebook />
				</a>
			</li>
			<li>
				<a href="#">
					<FaLine />
				</a>
			</li>
		</ul>
	);
};

export default Sidebar;
