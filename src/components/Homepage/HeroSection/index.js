import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="herosection">
      <div className="div-filter"></div>
      <div class="scrollNavWrap onlyPc">
        <span class="scrollNav">Scroll</span>
      </div>
      <div className="textarea">
        <div className="text">
          <h1>國立臺北大學資訊工程學系</h1>
          <h1> 分散式及行動計算實驗室</h1>
          <h6>Distributied and Mobile Computing Lab</h6>
          <p>
            臺北大學資工系分散及行動計算實驗室，以雲端技術、智慧物聯網為研究領域，涵蓋人工智慧、類神經網路、IOS/Android系統等相關領域。
            目前研究計畫PM2.5空氣品質預警及視覺化之研究、AI與高階資訊融合於復健者之心理狀態評估與心理復健之探討與應用、
            電信信令整合專案、應用N-gram於言語障礙者中文語音辨識語句建構。
            本實驗室強調成員獨立思考、創新設計及實作能力之培養與訓練，並有效結合成員間及設備等資源，依選定研究方向，進行雲端及AI方面作為研究。
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
