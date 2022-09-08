import React from "react";

import "./waves.css";

const Footer = () => {
  return (
    <footer>
      {/* <div class="waves">
        <div class="wave" id="wave1"></div>
        <div class="wave" id="wave2"></div>
        <div class="wave" id="wave3"></div>
        <div class="wave" id="wave4"></div>
      </div> */}

      <div id="address">
        <p>新北市三峽區大學路151號 國立臺北大學 音律電機資訊大樓 5F11</p>
        <p>
          5F ,511, University Rd., San Shia District, New Taipei City, 23741
          Taiwan
        </p>
        <p>TEL : (02)8674-1111 分機 66854</p>
      </div>
      <p>©2022 Distributied and Mobile Computing Lab | All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
