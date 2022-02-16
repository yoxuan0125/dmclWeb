import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
	return (
		<div className="herosection">
			<div className="div-filter"></div>
			<div className="textarea">
				<h1>開始你的衝浪之旅</h1>
				<p>在炎熱的夏天，享受冰涼的大海</p>
				<p>還在等什麼，馬上行動吧 !</p>
				<div>
					<ul className="herosection-btn">
						<li>
							<a href="#" className="btn-dark">
								立即預約
							</a>
						</li>
						<li>
							<a href="#" className="btn-light">
								了解更多
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default HeroSection;
