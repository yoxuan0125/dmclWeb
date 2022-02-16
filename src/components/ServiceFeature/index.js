import React from "react";
import "./ServiceFeature.css";
import image_1 from "../picture/surfingboard.jpg";
import image_2 from "../picture/coaching.jpg";
import image_3 from "../picture/shop.jpg";

const ServiceFeature = () => {
	return (
		<div className="feature-container">
			<div className="feature-text">
				<h2>MR. SURFING所提供的服務</h2>
			</div>
			<div className="cards">
				<div className="card">
					<img src={image_1} alt="error" className="card-img" />

					<h3 className="card-heading">衝浪板租借</h3>
					<p className="card-text">
						以便宜的價格租借衝浪板，輕鬆開始每一次的衝浪之旅
					</p>
					<p className="card-btn">
						<a href="#">租借價格</a>
					</p>
				</div>
				<div className="card">
					<img src={image_2} alt="error" className="card-img" />
					<h3 className="card-heading">專業教練指導</h3>
					<p className="card-text">跟著專業教練一起來趟充滿樂趣的衝浪</p>
					<p className="card-btn">
						<a href="#">教練介紹</a>
					</p>
				</div>
				<div className="card">
					<img src={image_3} alt="error" className="card-img" />
					<h3 className="card-heading">相關商品販賣</h3>
					<p className="card-text">
						販售各種與衝浪相關商品，讓您擁有屬於自己的衝浪體驗
					</p>
					<p className="card-btn">
						<a href="#">租借價格</a>
					</p>
				</div>
			</div>
		</div>
	);
};

export default ServiceFeature;
