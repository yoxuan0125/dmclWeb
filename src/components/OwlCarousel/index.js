import React from "react";
import "./OwlCarousel.css";

import Owlpic from "../picture/blackman.png";

import Slider from "react-slick";

export default function OwlCarousel({ data }) {
	const settings = {
		dots: false,
		infinite: true,
		speed: 800,
		autoplay: true,
		autoplaySpeed: 3000,
		arrows: false,
		// cssEase: "linear",
		slidesToShow: 3,
		slidesToScroll: 1,

		responsive: [
			{
				breakpoint: 1105,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true,
					speed: 500,
					arrows: false,
				},
			},
		],
	};
	return (
		<div className="owlsection">
			<div className="owl-text">
				<h6>Recommand</h6>
				<p>
					好評<b>推薦</b>
				</p>
			</div>
			<Slider {...settings} className="owl-container">
				{data.map((item, index) => {
					return (
						<div className="card__container--inner--card" key={index}>
							<h2>{item.text}</h2>
							<img src={Owlpic} alt="" />
						</div>
					);
				})}
			</Slider>
		</div>
	);
}
