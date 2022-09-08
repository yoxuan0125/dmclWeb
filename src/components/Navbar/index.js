import React, { useState, useRef, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import logo from "../../imgs/logo.jpg";
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
            <img src={logo} alt="error" className="logo" />
          </div>
          <button className="nav-toggle" onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>
        <div className="links-container" ref={linksContainerRef}>
          <ul className="links" ref={linksRef}>
            <a href={"/"}>
              <li className="nav-content">首頁</li>
            </a>
            {/* <a href={"#"}>
              <li className="nav-content">關於我們</li>
            </a> */}
            <a href={"/teacher"}>
              <li className="nav-content">主持人</li>
            </a>
            <a href={"/research"}>
              <li className="nav-content">研究成果</li>
            </a>
            <a href={"http://120.126.151.159:5000"}>
              <li className="nav-content">後台資訊</li>
            </a>
          </ul>
        </div>
        {/* <ul className="btn">
					<li>
						<a href="#" className="btn-1">
							立即預約
						</a>
					</li>
					<li>
						<a href="#">聯絡我們</a>
					</li>
				</ul> */}
      </div>
    </nav>
  );
};

export default Navbar;
