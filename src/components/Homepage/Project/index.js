import React from "react";
import "./Project.css";
import image_1 from "../../imgs/feature1.png";
import image_2 from "../../imgs/feature2.png";
import image_3 from "../../imgs/feature3.png";
import image_4 from "../../imgs/feature4.png";

const Project = () => {
  return (
    <div className="project-container">
      <div className="project-text">
        <h2>目前計畫</h2>
      </div>
      <div className="cards">
        <div className="card">
          <img src={image_1} alt="error" className="card-img" />
          <h3 className="card-heading">雲端計算</h3>
        </div>
        <div className="card">
          <img src={image_2} alt="error" className="card-img" />
          <h3 className="card-heading">行動計算</h3>
        </div>
        <div className="card">
          <img src={image_3} alt="error" className="card-img" />
          <h3 className="card-heading">智慧計算</h3>
        </div>
        <div className="card">
          <img src={image_4} alt="error" className="card-img" />
          <h3 className="card-heading">資料探索</h3>
        </div>
      </div>
    </div>
  );
};

export default Project;
