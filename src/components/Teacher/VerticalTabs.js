import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";

import teacherPhoto from "./img/yue-shanjpg.jpg";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 0 }}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <div className="smallMenu">
        <Button
          id="demo-positioned-button"
          aria-controls={open ? "demo-positioned-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          查看更多
        </Button>
        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          anchorEl={anchorEl}
          value={value}
          open={open}
          onClose={handleClose}
          onChange={handleChange}
          anchorOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >
          <Tab label="關於我" onClick={() => setValue(0)} />
          <Tab label="學歷" onClick={() => setValue(1)} />
          <Tab label="專業經驗" onClick={() => setValue(2)} />
          <Tab label="研究專長" onClick={() => setValue(3)} />
          <Tab label="所獲獎項" onClick={() => setValue(4)} />
          <Tab label="指導學生曾獲獎項  " onClick={() => setValue(5)} />
          <Tab label="論文發表  " onClick={() => setValue(6)} />
        </Menu>
      </div>
      <Box
        sx={{
          flexGrow: 1,
          bgcolor: "background.paper",
          display: "flex",
          height: "87vh",
          columnRuleWidth: 200,
        }}
      >
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{ borderRight: 2, borderColor: "divider" }}
          className="tabsText"
        >
          <Tab label="關於我" {...a11yProps(0)} />
          <Tab label="學歷" {...a11yProps(1)} />
          <Tab label="專業經驗" {...a11yProps(2)} />
          <Tab label="研究專長" {...a11yProps(3)} />
          <Tab label="所獲獎項" {...a11yProps(4)} />
          <Tab label="指導學生曾獲獎項  " {...a11yProps(5)} />
          <Tab label="論文發表  " {...a11yProps(6)} />
        </Tabs>
        <TabPanel value={value} index={0}>
          <div className="tabContainer">
            <h3 className="tabTitle">關於我 (About)</h3>
            <div>
              <img src={teacherPhoto} className="img-responsive" />
            </div>
            <h3>張玉山 教授</h3>
            <h3>兼任教務長</h3>
            <h4>
              Yue-Shan Chang <br />
              <br />
              Professor <br />
              <br />
              <br />
              Department of Computer Science and Information Engineering
              <br />
              <br />
              National Taipei University <br />
              <br />
              Dean，Office of Academic Affairs
            </h4>
          </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <div className="tabContainer">
            <h3 className="tabTitle">學歷 (Education)</h3>
            <ul>
              <li>
                國立交通大學 資訊科學研究所-博士班
                <br />
                (2001.5 Ph.D in Dept. of Computer & Information Science National
                Chiao Tung University)
              </li>
              <br />

              <li>
                國立成功大學 電機工程研究所-碩士班
                <br />
                (1992.6 MS in Dept. of Electrical Engineering National Cheng
                Kung University)
              </li>
              <br />

              <li>
                國立臺灣科技大學 電子工程所-學士班
                <br />( 1990.6 BS in Dept. of Electronic Engineering National
                Taiwan University of Science & Technology)
              </li>
            </ul>
          </div>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <div className="tabContainer">
            <h3 className="tabTitle">專業經驗(Professional Experiences)</h3>

            <ul>
              <li>2006.8~ The Chief of Operation Section, Computer Center</li>
              <br />
              <li>
                Dept. of Computer Science & Information Engineering National
                Taipei of University 2005.8 ~ 2006.7 Associate Prof. &
                Chairperson of Department
              </li>
              <br />

              <li>
                Dept. of Computer Science & Information Engineerin National
                Taipei of University 2004.8 ~ 2005.7 <br />
                Associate Prof. & The Chief of Operation Section of Computer
                Center
              </li>
              <br />

              <li>
                Dept. of Statistics National Taipei of University 2003.8 ~
                2004.7 Associate Prof.
              </li>
              <br />

              <li>
                Dept. of Electronic Engineering Ming Hsin University of Science
                & Technology 2002.8 ~ 2003.7 Associate Prof. & The Head of
                Computer Center
              </li>
              <br />

              <li>
                Dept. of Electronic Engineering Ming Hsin Institute of
                Technology 2001.8 ~ 2002.7 Associate Prof. & Deputy Chair
              </li>
              <br />

              <li>
                Dept. of Electronic Engineering Ming Hsin Institute of
                Technology 1992.8 ~ 2001.7 Lecturer
              </li>
            </ul>
          </div>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <div className="tabContainer">
            <h3 className="tabTitle">研究專長 (Research Interests)</h3>

            <ul>
              <li>雲端計算</li>
              <br />
              <li>行動計算</li>
              <br />

              <li>智慧計算</li>
              <br />

              <li>資訊擷取與檢索</li>
            </ul>
          </div>
        </TabPanel>
        <TabPanel value={value} index={4}>
          <div className="tabContainer">
            <h3 className="tabTitle">所獲獎項 (Awards)</h3>

            <ul>
              <li>2004年國立台北大學卓越教師。(93)北大校字第9050號</li>
              <br />

              <li>2005年國立台北大學卓越教師。(94)北大校字第10240號</li>
              <br />

              <li>
                2006年中華電信加值大賽, 行動校園應用組入選決賽, 獲獎金五萬元
              </li>
              <br />

              <li>2007年全國計算機會議論文佳作</li>
              <br />

              <li>
                2007年教育部－數位家庭教學推動聯盟中心舉辦之全國數位家庭專題競賽入選決賽
              </li>
              <br />

              <li>2008年中華電信加值大賽, 資通訊技術應用組佳作</li>
              <br />

              <li>
                2008年教育部－數位家庭教學推動聯盟中心舉辦之全國數位家庭專題競賽,第二名
              </li>
            </ul>
          </div>
        </TabPanel>
        <TabPanel value={value} index={5}>
          <div className="tabContainer">
            <h3 className="tabTitle">指導學生曾獲獎項</h3>
            <ul>
              <li>
                指導學生林柏榆, 黃瀚勳,參加 2018 臺灣網際網路研討會(TANET)
                榮獲佳 作論文獎
              </li>
              <br />
              <li>
                107 年指導陳亮宇同學申請科技部大專生專題研究計畫，榮獲補助。
              </li>
              <br />
              <li>
                指導學生張佑祥、林柏榆、林冠名參加 2017 APP 移動應用創新賽
                榮獲佳作
              </li>
              <br />
              <li>
                指導學生張佑祥、蔡宜廷、林柏榆參加 2017
                臺灣網際網路研討會(TANET) 榮獲最佳論文獎 佳作
              </li>
              <br />
              <li>
                指導學生宋晉德、邱虹瑜、黃瀚勳等參加 2016
                上海舉辦海峽二岸大學生創新創業比賽榮獲一等獎。
              </li>
              <br />
              <li>
                指導學生宋晉德、邱虹瑜、黃瀚勳等參加 2016
                台北舉辦海峽二岸青年創新創業比賽榮獲優勝。
              </li>
              <br />
              <li>
                105 年指導宋晉德同學申請科技部大專生專題研究計畫，榮獲補助。
              </li>
            </ul>
          </div>
        </TabPanel>
        <TabPanel value={value} index={6}>
          <div className="tabContainer">
            <h3 className="tabTitle">論文發表</h3>
            <div className="content">
              <h3>
                <b>Referred Journal</b>
              </h3>
              <ul className="text-justify">
                <li>
                  Chih-Hua Tai, Kuo-Hsuan Chung, Ya-Wen Teng, Feng-Ming Shu,
                  <b>Yue-Shan Chang</b>, "Inference of Mood State Indices by
                  Using a Multimodal High-Level Information Fusion Technique",
                  IEEE Access , Volume: 9, 16 April 2021 , pp 61256 - 61268,DOI:
                  10.1109/ACCESS.2021.3073733
                  <font color="#FF0000">(SCI, IF=3.745@2021)</font>
                </li>
                <li>
                  Chi-Yeh Lin, <b>Yue-Shan Chang</b>, Satheesh Abimannan,
                  "Ensemble multifeatured deep learning models for air quality
                  forecasting", Atmospheric Pollution Research, Volume 12, Issue
                  6 , May 2021, pp 101045,
                  https://doi.org/10.1016/j.apr.2021.03.008.
                  <font color="#FF0000">(SCI, IF=3.527@2021)</font>
                </li>
                <li>
                  <b>Yue-Shan Chang</b>, Satheesh Abimannan, Hsin-Ta Chiao,
                  Chi-Yeh Lin, Yo-Ping Huang , "An ensemble learning based
                  hybrid model and framework for air pollution forecasting" ,
                  Environmental Science and Pollution Research, volume 27 ,pp
                  38155–38168 (2020), 03 July 2020,
                  https://doi.org/10.1007/s11356-020-09855-1.
                  <font color="#FF0000">(SCI, IF=3.056@2020)</font>
                </li>
                <li>
                  <b>YS Chang</b>, HT Chiao, S Abimannan, YP Huang, YT Tsai, KM
                  Lin, "An LSTM-based aggregated model for air pollution
                  forecasting", Atmospheric Pollution Research, Volume 11, Issue
                  8, August 2020, pp 1451-1463,
                  https://doi.org/10.1016/j.apr.2020.05.015
                  <font color="#FF0000">(SCI, IF=3.527@2020)</font>
                </li>
                <li>
                  Chih-Tien Fan, <b>Yue-Shan Chang,</b> Shyan-Ming Yuan,"VM
                  Instance Selection for Deadline Constraint Job on Agent-Based
                  Interconnected Cloud" , Future Generation of Computer Systems,
                  2018, vol. 87, pp. 470-487.
                  https://doi.org/10.1016/j.future.2018.04.017.
                  <font color="#FF0000">
                    (MOST-105-2221-E-305 -010- ) (SCI, IF=3.997@2016)
                  </font>
                </li>
                <li>
                  <font size="2">
                    Chih-Hua Tai, Ching-Tang Chang, <b>Yue-Shan Chang</b>
                    "Hybrid Knowledge Fusion and Inference on Cloud Environment"
                    Future Generation of Computer Systems, 2018, vol. 87, pp.
                    568-579. https://doi.org/10.1016/j.future.2018.01.045 .
                    <font color="#FF0000">
                      (MOST-105-2221-E-305 -010-, 105-2221-E-305-012-,
                      106-2221-E-305-014- ) (SCI, IF=3.997@2016)
                    </font>
                  </font>
                </li>
                <li>
                  <font size="2">
                    Chih-Hua Tai, Yin-En Fang,<b>Yue-Shan Chang</b>
                    "SOS-DR: A Social Warning System for Detecting Users at High
                    Risk of Depression" forthcoming, Personal and Ubiquitous
                    Computing, 2018, https://doi.org/10.1007/s00779-017-1092-3
                    <font color="#FF0000">
                      (MOST-104-2221-E-305-010-, 105-2221-E-305 -010-,
                      105-2221-E-305-012-, 106-2221-E-305-014- )(SCI,
                      IF=2.395@2016)
                    </font>
                  </font>
                </li>
                <li>
                  <font size="2">
                    <b>Yue-Shan Chang</b>, Chih-Tien Fan, Ruey-Kai Sheu,
                    Syuan-Ru Jhu, Shyan-Ming Yuan, "An Agent-based Workflow
                    Scheduling Mechanism with Deadline- Constraint on Hybrid
                    Cloud Environment" International Journal of Communication
                    System, Vol. 31, No. 1, January 2018, e3041.
                    https://doi.org/10.1002/dac.3401.
                    <font color="#FF0000">
                      (MOST-103-2221-E-305 -007-, 104-2221-E-305-010-) (SCI,
                      IF=1.066@2016)
                    </font>
                  </font>
                </li>
                <li>
                  <font size="2">
                    Chia-Feng Lin, Hsin-Ta Chiao, Ruey-Kai Sheu,
                    <b>Yue-Shan Chang </b> and Shyan-Ming Yuan " A
                    Fault-Tolerant ONVIF Protocol Extension for Seamless
                    Surveillance Video Stream Recording,” Computer Standards and
                    Interfaces, vol. 55, January 2018, pp. 55-72.
                    https://doi.org/10.1016/j.csi.2017.04.005
                    <font color="#FF0000">(SCI, IF=1.268@2016)</font>
                  </font>
                </li>
                <li>
                  <font size="2">
                    <b>Yue-Shan Chang</b>,Ruey-Kai Sheu,Guang-Ting Wu, "Control
                    point locating scheme of street light network in urban
                    environment,” International Journal of Distributed Sensor
                    Networks, 2017, Vol. 13, No. 3, pp.1-13. DOI:
                    10.1177/1550147717699626.
                    <font color="#FF0000">(SCIE, IF= 1.239@2016)</font>
                  </font>
                </li>
                <li>
                  <font size="2">
                    Winston Lo,<b> Yue-Shan Chang</b>, Shyan-Ming Yuan, Deron
                    Liang, "Design and Implementation of Multi-Threaded Object
                    Request Broker on the COBRA," Journal of Information Science
                    and Engineering, Vol. 16, No. 3, 2000, pp.365-379.
                    <font color="#FF0000">
                      (NSC86-2213-E-035-005) (SCI, IF=0.096@2000)(EI)
                    </font>
                  </font>
                </li>
                <li>
                  <font size="2">
                    <b>Yue-Shan Chang</b>, Shyan-Ming Yuan, Winston Lo, "A New
                    Multi-Search Engine for querying Data through Internet
                    Search Service on CORBA," Computer Networks, Vol.34, No.3,
                    Sep. 2000, pp.467-480.
                    <font color="#FF0000">
                      (NSC88-2213-E-009-087)(SCI. IF=0.390@2000)(EI)
                    </font>
                  </font>
                </li>
                <li>
                  <font size="2">
                    Ruey-Kai Sheu,<b> Yue-Shan Chang</b>, Shyan-Ming Yuan,
                    “Managing and Sharing Collaborative Files Through WWW,“
                    Future Generation of Computer Systems, Vol.17, No.8, May
                    2001, pp. 1039-1049.
                    <font color="#FF0000">
                      (89-E-FA04-1-4)(SCI IF=2.639@2013)(EI)
                    </font>
                  </font>
                </li>
                <li>
                  <font size="2">
                    <b>Yue-Shan Chang</b>, Ming-Huang Ho, Shyan-Ming Yuan, "A
                    Unified Interface for Integrating Information Retrieval,"
                    Computer Standards and Interfaces, Vol. 23, No.4, Sept.
                    2001, pp.325-340.
                    <font color="#FF0000">
                      (NSC 89-2626-E-159-001) (SCI, IF=1.177@2013)(EI)
                    </font>
                  </font>
                </li>
                <li>
                  <font size="2">
                    <b>Yue-Shan Chang</b>, Ming-Huang Ho, Wen-Chen Sun,
                    Shyan-Ming Yuan, "Supporting Unified Interface for Wrapper
                    Generator in Integrated Information Retrieval," Computer
                    Standards and Interfaces, Vol. 24, No.4, Sept. 2002, pp.
                    291-308.
                    <font color="#FF0000">
                      (NSC 90-2213-E-159-005) (SCI, IF=1.177@2013)(EI)
                    </font>
                  </font>
                </li>
                <li>
                  <font size="2">
                    Hsin-Ta Chiao, Scott Hsu-Jing Kao,<b> Yue-Shan Chang</b>,
                    Shen-Tzay Huang,Shyan-Ming Yuan "Experience in Building a
                    Real-Time Extension Library for Java" J. of Information
                    Science and Engineering,Vol.18, No6. ,Nov. 2002, pp. 905-927
                    .
                    <font color="#FF0000">
                      (89-E-FA04-1-4)(SCI,IF=0.333@2013)(EI)
                    </font>
                  </font>
                </li>
                <li>
                  <font size="2">
                    Kai-Chih Liang, Daphne Chyan,<b> Yue-Shan Chang</b>, Winston
                    Lo, Shyan-Ming Yuan, “Integration of CORBA and Object
                    Relational Databases,” Computer Standards and Interfaces,
                    Vol. 25, No. 4, Sept. 2003, pp. 373-389.
                    <font color="#FF0000">(SCI, IF=1.177@2013)(EI)</font>
                  </font>
                </li>
                <li>
                  <font size="2">
                    <b>Yue-Shan Chang</b>, Ruey-Shyang Wu, Kai-Chih Liang,
                    Shyan-Ming Yuan, Magic Yang,"CODEX: Content-Oriented Data
                    Exchange Model on CORBA," Computer Standards and Interfaces,
                    Vol. 25, No. 4, Sept. 2003, pp. 329-343.
                    <font color="#FF0000">
                      (NSC 90-2213-E-159-005)(SCI, IF=1.177@2013)(EI)
                    </font>
                  </font>
                </li>
                <li>
                  <font size="2">
                    Tsun-Yu Hsiao, Nei-Chiung Perng, Winston Lo,
                    <b> Yue-Shan Chang</b>, Shyan-Ming Yuan, “A New Development
                    Environment for an Event-based Distributed System,” Computer
                    Standards and Interfaces, Vol.25, No. 4, Sept. 2003,
                    pp.345-355 .
                    <font color="#FF0000">
                      (89-E-FA04-1-4) (SCI, IF=1.177@2013)(EI)
                    </font>
                  </font>
                </li>
                <li>
                  <font size="2">
                    <b>Yue-Shan Chang</b>, Kai-Chih Liang, Ming-Chun Cheng,
                    Shyan-Ming Yuan," Prototyping an integrated information
                    gathering system on CORBA," Journal of Systems and Software,
                    Vol.72, No. 2, Jun 2004, pp. 281-294 .
                    <font color="#FF0000">
                      (NSC 90-2213-E-159-005)(SCI, IF=1.125@2013)(EI)
                    </font>
                  </font>
                </li>
                <li>
                  <font size="2">
                    Min-Huang Ho,<b> Yue-Shan Chang</b>, Kuang-Lee Li,
                    Shyan-Ming Yuan, “The Federated Forums Based Integrated
                    Biological Data Mining Broker,” Computer Standards and
                    Interfaces, Vol.27, No. 6, June 2005, pp. 579-596.
                    <font color="#FF0000">
                      (NSC 93-2752-E-009-006-PAE) (SCI, IF=1.177@2013)(EI)
                    </font>
                  </font>
                </li>
                <li>
                  <font size="2">
                    <b>Yue-Shan Chang</b>, “Generating Adaptable Wrapper for Web
                    Page Change,” WSEAS Transaction on Computers, Vol. 5, No. 5,
                    May 2006, pp. 885-892.
                    <font color="#FF0000">
                      (NSC 92-2213-E-305-003) (INSPEC) (EI).
                    </font>
                  </font>
                </li>
                <li>
                  <font size="2">
                    <b>Yue-Shan Chang</b>, Tong-Ying Juang, “MASS- A
                    Multi/web-Agent based Statistical Service,” WSEAS
                    Transaction on Information Science &amp; Applications, Vol.
                    3, No. 6, June 2006, pp. 1122-1129
                    <font color="#FF0000">
                      (NSC 93-2118-M-305-003) (INSPEC) (EI).
                    </font>
                  </font>
                </li>
                <li>
                  <font size="2">
                    <b>Yue-Shan Chang</b>, Tong-Ying Juang, “Supporting
                    Statistical Computing for Wired/wireless Devices,” WSEAS
                    Transaction on Information Science &amp; Applications,
                    Vol.4, No.5, May 2007, pp-1081-1088.
                    <font color="#FF0000">
                      (NSC 93-2118-M-305-003)(INSPEC) (EI).
                    </font>
                  </font>
                </li>
                <li>
                  <font size="2">
                    <b>Yue-Shan Chang</b>, Tong-Ying Juang, Chun-Mu Cheng,
                    “Efficient Computational Grid Middleware for Mobile Device,”
                    Journal of Information Technology and Applications.
                    (Excellent paper selected from WoGTA06), Vol.1, No. 4, March
                    2007, pp. 275~283.
                  </font>
                </li>
                <li>
                  <font size="2">
                    <b>Yue-Shan Chang</b>, “Wrapper-based Personalized Mobile
                    Meta Portal,” International Journal of Autonomous and
                    Adaptive Communications Systems, Vol. 1, No. 3, 2008, pp.
                    296-307.
                  </font>
                </li>
                <li>
                  <font size="2">
                    <b>Yue-Shan Chang</b>, Ching-Lung Chang, Yung-Shuan Hung,
                    Ching-Tsorng Tsai “NCASH: NFC phone-enabled personalized
                    Context Awareness Smart Home environment,” Cybernetics and
                    Systems, Vol. 41, No. 2, Feb. 2010 , pp. 123 – 145.
                    <font color="#FF0000">
                      (NSC 97-2221-E-305-004) (SCI, IF= 0.507@2013)
                    </font>
                  </font>
                </li>
                <li>
                  <font size="2">
                    Victor R.L. Shen,<b> Yue-Shan Chang</b>, Tong-Ying Juang,
                    “Supervised and Unsupervised Learning by Using Petri Nets,”
                    IEEE TRANSACTIONS ON SYSTEMS, MAN, AND CYBERNETICS—PART A:
                    SYSTEMS AND HUMANS, VOL. 40, NO. 2, MARCH 2010, pp. 363-375.
                    <font color="#FF0000">
                      (NSC 97-2221-E-305-004 )(SCIE, IF=2.169@2013)
                    </font>
                  </font>
                </li>
                <li>
                  <font size="2">
                    <b>Yue-Shan Chang</b>, Guo-Jie Zou, Ching-lung Chang “RARS:
                    A Resource-Aware Replica Selection and co-allocation scheme
                    for Mobile Grid,” International Journal of Ad Hoc and
                    Ubiquitous Computing, Vol. 6, No. 2, 2010, pp. 99-113.
                    <font color="#FF0000">
                      (NSC 97-2221-E-305-004 and 98-2221-E-305-006)(SCIE,
                      IF=0.900@2013)
                    </font>
                  </font>
                </li>
                <li>
                  <font size="2">
                    <b>Yue-Shan Chang</b>, Pei-Chun Shih, “A Resource-Awareness
                    Information Extraction Architecture on Mobile Grid
                    Environment,” Journal of Network &amp; Computer
                    Applications, Vol. 33, No. 6, 2010, pp. 682-695.
                    <font color="#FF0000">
                      (NSC 97-2221-E-305-004 and 98-2221-E-305-006)(SCIE,
                      IF=1.772@2013)
                    </font>
                  </font>
                </li>
                <li>
                  <font size="2">
                    Ching-Tsorng Tsai, Chishyan Liaw, Chung-Chi Lin,
                    <b> Yue-Shan Chang</b> and Antony Chao, “A Mobile Pedestrian
                    Dead Reckoning System” Journal of Internet Technology, Vol.
                    11, No. 5, Sept. 2010, pp. 699-710.
                    <font color="#FF0000">(SCIE, IF=0.418@2013).</font>
                  </font>
                </li>
                <li>
                  <font size="2">
                    <b>Yue-Shan Chang</b>, Hung-Hsiang Chang, Ruey-Kai Sheu, and
                    Ching-Tsorng Tsai, “A Resource-Aware Task Scheduling
                    Algorithm on Mobile Computational Grid,”Journal of Internet
                    Technology,Vol. 12, No. 2, March 2011, pp. 279-291.
                    <font color="#FF0000">
                      (98-2221-E-305-006 , 99-2628-E-305-001)(SCIE,
                      IF=0.418@2013).
                    </font>
                  </font>
                </li>
                <li>
                  <font size="2">
                    <b>Yue-Shan Chang</b>, Chao-Tung Yang, Yu-Cheng Luo, “An
                    Ontology based Agent Generation for Information Retrieval on
                    Cloud Environment,” Journal of Universal Computer Science,
                    Vol. 17, No. 8, 2011, pp. 1135-1160.
                    <font color="#FF0000">
                      (98-2221-E-305-006 , 99-2628-E-305-001 ) (SCIE, IF= 0.401
                      @2013)
                    </font>
                  </font>
                </li>
                <li>
                  <font size="2">
                    <b>Yue-Shan Chang</b>, Chih-Tien Fan, Yu-Sheng Wu,
                    “Agent-based Intelligent Software Exploits Near-Field
                    Communication,” IT Professional, Vol. 13, No. 2, March/April
                    2011, pp.30-36.
                    <font color="#FF0000">(99-2628-E-305-001)(EI)</font>
                  </font>
                </li>
                <li>
                  <font size="2">
                    Ching-Lung Chang,<b> Yue-Shan Chang</b>, Ching-Hung Chang,
                    Fang-Jie Chen “XOR-based Frame Loss Recovery Scheme for
                    Video Streaming,” Computer Communications, Vol. 34, No.10,
                    July 2011, pp. 1195-1201.
                    <font color="#FF0000">(SCIE, IF= 1.352 @2013)</font>
                  </font>
                </li>
                <li>
                  <font size="2">
                    Chia-Feng Lin, Ruey-Kai Sheu,<b> Yue-Shan Chang</b>,
                    Shyan-Ming Yuan, “A Relaxable Service Selection Algorithm
                    for QoS-Based Web Service Composition,” Information and
                    Software Technology, Vol. 53, No. 12, Dec. 2011, pp. 1370 -
                    1381
                    <font color="#FF0000">(SCIE, IF= 1.328 @2013)</font>
                  </font>
                </li>
                <li>
                  <font size="2">
                    <b>Yue-Shan Chang</b>, Hsiang-Tai Cheng, “A scientific data
                    extraction architecture using classified metadata,” Journal
                    of Supercomputing, Vol. 60, No. 3, 2012, pp. 338-359.
                    <font color="#FF0000">
                      (NSC 98-2221-E-305-006)(SCI, IF= 0.841 @2013)
                    </font>
                  </font>
                </li>
                <li>
                  <font size="2">
                    <b>Yue-Shan Chang</b>, Chih-Tien Fan, Tong-Ying Juang,
                    “Supporting software intelligence in ubiquitous environment
                    exploits mobile agent,” Journal of Ambient Intelligence and
                    Humanized Computing, Vol. 3, No. 2, 2012, pp. 141–151
                    <font color="#FF0000">(NSC99-2628-E-305-001 , EI)</font>
                  </font>
                </li>
                <li>
                  <font size="2">
                    Wei-Jen Wang,<b> Yue-Shan Chang</b>, Cheng-Hui Wu, Wei-Xiang
                    Kang, “A Self-Adaptive Computing Framework for Parallel
                    Maximum Likelihood Evaluation,” Journal of Supercomputing,
                    Vol. 61, No. 1, 2012, 67-83.
                    <font color="#FF0000">(SCI, IF= 0.841 @2013)</font>
                  </font>
                </li>
                <li>
                  <font size="2">
                    <b>Yue-Shan Chang</b>, Ruey-Kai Sheu, Shyan-Ming Yuan,
                    Jyn-Jie Hsu,” Scaling Database Performance on GPUs,”
                    Information Systems Frontiers, Vol. 14, No. 4, 2012, pp.
                    909-924.
                    <font color="#FF0000">(SCIE, IF= 0.761 @2013)</font>
                  </font>
                </li>
                <li>
                  <font size="2">
                    <b>Yue-Shan Chang</b>, Wei-Jen Wang, Yung-Shuan Hung, “A
                    Near Field Communication driven home automation framework,”
                    Personal and Ubiquitous Computing, Vol. 17, No. 1 (2013),
                    pp. 169-185.
                    <font color="#FF0000">
                      (NSC 100-2221-E-305-013, SCIE, IF= 1.616 @2013)
                    </font>
                  </font>
                </li>
                <li>
                  <font size="2">
                    Wei-Jen Wang,<b>Yue-Shan Chang</b>, Win-Tsung Lo, Yi-Kang
                    Lee, “Adaptive Scheduling for Parallel Tasks with QoS
                    Satisfaction for Hybrid Cloud Environments,” Journal of
                    Supercomputing, Vol. 66, No. 2, (2013), pp. 783-811.
                    <font color="#FF0000">
                      (NSC 101-2221-E-305-009),(SCI, IF= 0.841 @2013)
                    </font>
                  </font>
                </li>
                <li>
                  <font size="2">
                    <b>Yue-Shan Chang</b>, Yi-Kang Lee, Tong-Ying Juang,
                    Jing-Shyang Yen “Cost evaluation on building and operating
                    cloud platform,” International Journal of Grid and High
                    Performance Computing (IJGHPC), Vol. 5, No. 2 (April-June,
                    2013), pp.43-53.
                    <font color="#FF0000">(NSC 101-2221-E-305-009), (EI)</font>
                  </font>
                </li>
                <li>
                  <font size="2">
                    Guo-Heng Luo, Sheng-Kai Huang,<b>Yue-Shan Chang</b>,
                    Shyan-Ming Yuan*, “A parallel Bees Algorithm implementation
                    on GPU,” Journal of Systems Architecture, Vol. 60, No. 3,
                    Mar. 2014, pp. 271-279.
                    <font color="#FF0000">(SCIE, IF= 0.689 @2013)</font>
                  </font>
                </li>
                <li>
                  <font size="2">
                    Win-Tsung Lo,<b>Yue-Shan Chang</b>, Ruey-Kai Sheu, and Hoang
                    Duy Nguyen, “The Practice of Two-Phase Recommender System
                    for Sporting Goods,” Malaysian Journal of Computer Science,
                    Vol. 27, No. 2, June 2014, pp. 138-155.
                    <font color="#FF0000">(SCIE, IF= 0.500 @2013)</font>
                  </font>
                </li>
                <li>
                  <font size="2">
                    Win-Tsung Lo,<b>Yue-Shan Chang</b>, Ruey-Kai Sheu, Chao-Tung
                    Yang, Tong-Ying Juang, and Yu-Sheng Wu, “Implementation and
                    Evaluation of Large-Scale Video Surveillance System Based on
                    P2P Architecture and Cloud Computing,” International Journal
                    of Distributed Sensor Networks, vol. 2014, Article ID
                    375871, 11 pages, 2014.
                    <font color="#FF0000">(SCIE, IF= 0.923 @2013)</font>
                  </font>
                </li>
                <li>
                  <font size="2">
                    Win-Tsung Lo,<b>Yue-Shan Chang</b>, Ruey-Kai Sheu,
                    Chun-Chieh Chiu, Shyan-Ming Yuan, “CUDT: A CUDA Based
                    Decision Tree Algorithm,” The Scientific World Journal. Vol.
                    2014, Article ID 745640, 12 pages, 2014
                    <font color="#FF0000">(SCIE, IF= 1.219 @2013)</font>
                  </font>
                </li>
                <li>
                  <font size="2">
                    <b>Yue-Shan Chang</b>, Chih-Tien Fan, Win-Tsung Lo, Wan-Chun
                    Hung, Shyan-Ming Yuan, “Mobile Cloud based Depression
                    Diagnosis Using Ontology and Bayesian Network,” Future
                    Generation Computer Systems 43–44 (2015) 87–98.
                    <font color="#FF0000">(SCI, IF=2.639@2013)</font>
                  </font>
                </li>
                <li>
                  <font size="2">
                    Win-Tung Lo, Ruey-Kai Sheu,<b>Yue-Shan Chang</b>, Yao-Wen
                    Chang, " A Restful Web Notification Service," Journal of the
                    Chinese Institute of Engineers (JCIE), Vol. 39, No. 4, May
                    2016, 429-435.
                    <font color="#FF0000">
                      (MOST-103-2221-E-305 -007 - )(SCIE, IF=0.241@2014)
                    </font>
                  </font>
                </li>
                <li>
                  <font size="2">
                    Hui-Chin Wu,<b>Yue-Shan Chang</b>, " Using Cloud-based
                    Mobile Learning for Practice-Oriented Education," Journal of
                    the Chinese Institute of Engineers (JCIE), Vol. 39, No. 6,
                    June 2016, pp. 755-764.
                    <font color="#FF0000">
                      (MOST-103-2221-E-305 -007 - )(NTPU-104HA1902）(SCIE,
                      IF=0.241@2014)
                    </font>
                  </font>
                </li>
                <li>
                  <font size="2">
                    Chih-Hua Tai, Zheng-Han Tan,<b>Yue-Shan Chang</b>,
                    "Systematical Approach for Detecting the Intention and
                    Intensity of Feelings on Social Network," IEEE Journal of
                    Biomedical and Health Informatics, Vol. 20, No. 4, July
                    2016, pp. 987-995.
                    <font color="#FF0000">
                      (MOST 103-2221-E-305-007-, MOST 103-2218-E-305-002-, MOST
                      104-2221-E-305-010- and MOST 104-2221-E-305-013-.)(SCI,
                      IF=2.023@2014)
                    </font>
                  </font>
                </li>
              </ul>
              <br />
              <h3>
                <b>Lecture Note of Computer Science</b>
              </h3>
              <ul className="text-justify">
                <li>
                  Yue-Shan Chang, Hsiang-Tai Cheng, “A Metadata Classification
                  Assisted Scientific Data Extraction Architecture,” Lecture
                  Notes in Computer Science (LNCS) of Springer-Verlag, Vol.
                  6104, May, 2010, pp. 679- 688.(EI)
                </li>
                <li>
                  Ming-Tsung Hsu, Frank Yeong-Sung Lin, Yue-Shan Chang, and
                  Tong-Ying Juang, “Reliable Greedy Forwarding in Obstacle-Aware
                  Wireless Sensor Networks,” Lecture Notes in Computer Science
                  (LNCS) of Springer-Verlag, Vol. 5574, June, 2009, pp. 597-
                  808.(EI)
                </li>
                <li>
                  Yue-Shan Chang, Tong-Ying Juang, Chen-Yi Su, “Wireless Sensor
                  Network assisted Dynamic Path Planning for Transportation
                  Systems,” Lecture Notes in Computer Science (LNCS) of
                  Springer-Verlag, Vol. 5060, Jun. 2008, pp. 615- 628.(EI)
                </li>
                <li>
                  Ming-Tsung Hsu, Frank Yeong-Sung Lin, Yue-Shan Chang,
                  Tong-Ying Juang, “The Reliability of Detection in Wireless
                  Sensor Networks: Modeling and Analyzing”, Lecture Notes in
                  Computer Science (LNCS) of Springer-Verlag, Vol. 4808, Dec.
                  2007, pp. 432- 443.(EI)
                </li>
                <li>
                  Yue-Shan Chang, Ming-Tsung Hsu, Hsu-Hang Liu, Tong-Ying Juang,
                  “Dependable Geographical Routing on Wireless Sensor Networks,”
                  Lecture Notes in Computer Science (LNCS) of Springer-Verlag,
                  Vol. 4523, May 2007, pp. 403- 414.(EI)
                </li>
                <li>
                  Min-Huang Ho, Yue-Shan Chang, Ming-Chun Cheng, Kuang-Lee Li,
                  Shyan-Ming Yuan, “A Unified, Adjustable, and Extractable
                  Biological Data Mining-Broker, “Lecture Notes in Computer
                  Science (LNCS) of Springer-Verlag, Vol. 2690, Mar. 2003, pp.
                  773- 777. (SCI, IF=0. 402)(EI)
                </li>
                <li>
                  Hsin-Ta Chiao, Ming-Chun Cheng, Yue-Shan Chang, Shyan-Ming
                  Yuan, "A Component-Based Reconfigurable Mobile Agent Syatem
                  for Context –Aware Computing," Lecture Notes in Computer
                  Science (LNCS) of Springer-Verlag, Vol.2457, Oct 2002, pp. 273
                  - 282 .(NSC 90-2213-E-009-160)(SCI, IF=0. 402)(EI)
                </li>
                <li>
                  Ming-Huang Ho, Yue-Shan Chang, Shyan-Ming Yuan, Winston Lo,
                  "An Agent-based Personalized Search on a Multi-Search Engine
                  based on Internet Search Service," Lecture Notes in Computer
                  Science (LNCS) of Springer-Verlag, Vol.1983, Dec 2000, pp. 404
                  - 409.(89-E-FA04-1-4)(SCI, IF=0. 402)(EI)
                </li>
                <li>
                  Winston Lo, Yue-Shan Chang, Chii-Long Chou, Ruey-Kai Sheu,
                  Shyan-Ming Yuan, "An Information Store and Retrieval Facility
                  on CORBA," Lecture Notes in Computer Science (LNCS) of
                  Springer-Verlag (WAIM 2000), Vol.1846, Jun. 2000, pp.374 -
                  379.(NSC87-2213-E-035-008) (SCI, IF=0.402) (EI)
                </li>
                <li>
                  Ruey-Kai Sheu, Ming-Chiun Chen, Yue-Shan Chang, Shyan-Ming
                  Yuan, Jensen Tsai, Yao-Jin Hung, and Ming-Chih Lai, "CFMS - A
                  Collaborative File Management System on WWW", Lecture Notes in
                  Computer Science (LNCS) of Springer-Verlag (HPCN Europe 2000),
                  Vol. 1823, May 2000, pp217-226.(NSC89-2213-2009-069) (SCI,
                  IF=0.402) (EI)
                </li>
              </ul>
              <br />
              <h3>
                <b>International Conference</b>
              </h3>
              <ul className="text-justify">
                <li>
                  Satheesh Abimannan, <b>Yue-Shan Chang</b>, Chi-Yeh Lin,
                  <u>
                    "Air Pollution Forecasting Using LSTM-Multivariate
                    Regression Model"
                  </u>
                  , International Conference on Internet of Vehicles,
                  echnologies and Services Toward Smart Cities. IOV 2019, 19
                  January 2020, https://doi.org/10.1007/978-3-030-38651-1_25
                </li>
                <li>
                  Chi-Yeh Lin, <b>Yue-Shan Chang</b>, Hsin-Ta Chiao, Satheesh
                  Abimannan,
                  <u>
                    "Design a Hybrid Framework for Air Pollution Forecasting*"
                  </u>
                  , 2019 IEEE International Conference on Systems, Man and
                  Cybernetics (SMC) , 6-9 Oct. 2019 ,pp 2472-2477 ,DOI:
                  10.1109/SMC.2019.8914257
                </li>
                <li>
                  Yu-Ren Zeng, <b>Yue-Shan Chang</b>, You Hao Fang,
                  <u>
                    "Data Visualization for Air Quality Analysis on Bigdata
                    Platform"
                  </u>
                  , 2019 International Conference on System Science and
                  Engineering (ICSSE), 20-21 July 2019,pp 65-72 ,DOI:
                  10.1109/ICSSE.2019.8823437
                </li>
                <li>
                  Bo-Yu Lin, Hung-Shing Huang, Ruey-Kai Sheu,{" "}
                  <b>Yue-Shan Chang</b>,
                  <u>
                    "Speech Recognition for People with Dysphasia Using
                    Convolutional Neural Network"
                  </u>
                  , 2018 IEEE International Conference on Systems, Man, and
                  Cybernetics (SMC) , 7-10 Oct. 2018 ,pp 2164-2169 ,DOI:
                  10.1109/SMC.2018.00372
                </li>
                <li>
                  Yi-Ting Tsai, Yu-Ren Zeng, <b>Yue-Shan Chang</b>,
                  <u>"Air pollution forecasting using RNN with LSTM"</u>, 2018
                  IEEE 16th Intl Conf on Dependable, Autonomic and Secure
                  Computing, 16th Intl Conf on Pervasive Intelligence and
                  Computing, 4th Intl Conf on Big Data Intelligence and
                  Computing and Cyber Science and Technology
                  Congress(DASC/PiCom/DataCom/CyberSciTech), 12-15 Aug. 2018,pp
                  1074-1079,DOI:
                  10.1109/DASC/PiCom/DataCom/CyberSciTec.2018.00178
                </li>
                <li>
                  Liang-Yu Chen, Hsiao-Shih Huang, Cheng-Ju Wu, Yi-Ting Tsai,
                  <b>Yue-Shan Chang</b>,
                  <u>
                    "A lora-based air quality monitor on unmanned aerial vehicle
                    for smart city"
                  </u>
                  , 2018 International Conference on System Science and
                  Engineering (ICSSE), 28-30 June 2018,pp 1-5, DOI:
                  10.1109/ICSSE.2018.8519967
                </li>
                <li>
                  Yu-Zheng Lai, Chih-Hua Tai, <b>Yue-Shan Chang</b>, Kuo-Hsuan
                  Chung,
                  <u>
                    "A mobile cloud-based biofeedback platform for evaluating
                    medication response"
                  </u>
                  , 2017 IEEE 7th International Symposium on Cloud and Service
                  Computing (SC2), 15 March 2018,pp 183-188 ,DOI:
                  10.1109/SC2.2017.35
                </li>
                <li>
                  <b>Yue-Shan Chang</b>, Chih‐Tien Fan, Ruey‐Kai Sheu, Syuan‐Ru
                  Jhu, Shyan‐Ming Yuan,
                  <u>
                    "An agent‐based workflow scheduling mechanism with deadline
                    constraint on hybrid cloud environment"
                  </u>
                  , International Journal of Communication Systems, Volume31,
                  Issue1,30 August 2017,pp
                  e3401,https://doi.org/10.1002/dac.3401
                </li>
                <li>
                  Wei-Yuan Lee, Chih-Hua Tai, <b>Yue-Shan Chang</b>,
                  <u>"Sliding Window Based Discounted Transaction Mining"</u>,
                  2017 IEEE 7th International Symposium on Cloud and Service
                  Computing (SC2) , 15 March 2018, DOI:
                  10.1109/SC2.2017.28,pp138-142
                </li>
                <li>
                  <font size="2">
                    Che-Pin Chang, Hsin-Ta Chiao,{" "}
                    <strong> Yue-Shan Chang </strong>, Ching-Tsorng Tsai,
                    Kuo-Kai Yuen, Shyan-Ming Yuan,
                    <u>“UCS — A Unified Cloud Storage Integration Service”</u>,
                    IEEE 7th International Symposium on Cloud and Service
                    Computing, Kanazawa, Japan, 22-25 November 2017, pp.
                    245-248.
                  </font>
                </li>
                <li>
                  <font size="2">
                    Hsin-Ta Chiao, Chia-Feng Lin,{" "}
                    <strong> Yue-Shan Chang </strong>, Ruey-Kai Sheu, Lung-Pin
                    Chen, Shyan-Ming Yuan,
                    <u>
                      “A Fault-Tolerant ONVIF Standard Extension for Cloud-Based
                      Surveillance Systems,”
                    </u>
                    IEEE 7th International Symposium on Cloud and Service
                    Computing, Kanazawa, Japan, 22-25 November 2017, pp.
                    201-208.
                  </font>
                </li>
                <li>
                  <font size="2">
                    Yu-Zheng Lai, Chih-Hua Tai,{" "}
                    <strong> Yue-Shan Chang </strong>, Kuo-Hsuan Chung,
                    <u>
                      “A Mobile Cloud-Based Biofeedback Platform for Evaluating
                      Medication Response,”
                    </u>
                    IEEE 7th International Symposium on Cloud and Service
                    Computing, Kanazawa, Japan, 22-25 November 2017, pp.
                    183-188.
                  </font>
                </li>
                <li>
                  <font size="2">
                    Wei-Yuan Lee, Chih-Hua Tai, <strong>Yue-Shan Chang</strong>,
                    <u>“Sliding Window Based Discounted Transaction Mining,”</u>
                    IEEE 7th International Symposium on Cloud and Service
                    Computing, Kanazawa, Japan, 22-25 November 2017, pp.
                    138-142.
                  </font>
                </li>
                <li>
                  <font size="2">
                    Tzu-Yi Chan, <strong> Yue-Shan Chang </strong>,
                    <u>
                      ”Enhancing Classification Effectiveness of Chinese News
                      Based on Term Frequency,”
                    </u>
                    IEEE 7th International Symposium on Cloud and Service
                    Computing, Kanazawa, Japan, 22-25 November 2017, pp.
                    124-131.
                  </font>
                </li>
                <li>
                  <font size="2">
                    Yu-Hsiang Chang, Ai-Lun Yang, Yung-Sheng Lin,
                    <strong> Yue-Shan Chang </strong>
                    <u>
                      “Monitoring and estimating inhalation of particular matter
                      using personal physiological data,”
                    </u>
                    2017 IEEE International Conference on Systems, Man, and
                    Cybernetics (SMC), Banff, AB, Canada, 5-8 Oct. 2017, pp.
                    852-857.
                  </font>
                </li>
                <li>
                  <font size="2">
                    Yung-Sheng Lin, Yu-Hsiang Chang,
                    <strong> Yue-Shan Chang </strong>,
                    <u>
                      “Constructing PM2.5 Map Based on Mobile PM2.5 Sensor and
                      Cloud Platform,”
                    </u>
                    2016 IEEE International Conference on Computer and
                    Information Technology (CIT), Nadi, Fiji, 8-10 Dec. 2016,
                    pp. 702-707.
                  </font>
                </li>
                <li>
                  <font size="2">
                    Feng-Ming Sue,<strong>Yue-Shan Chang</strong>, Ruey-Kai Sheu
                    <u>
                      “A platform for fusing psychological and physiological
                      data from hybrid cloud,”
                    </u>
                    13th IEEE International Conference on Networking, Sensing
                    and Control, April 28-30, 2016, Mexico City, Mexico, pp.
                    1-6.
                  </font>
                </li>
                <li>
                  <font size="2">
                    Syuan-Ru Jhu, Chih-Tien Fan, Shyan-Ming Yuan,
                    <strong>Yue-Shan Chang</strong>,
                    <u>“Implementing a Workflow Agent on Federated Cloud,”</u>{" "}
                    2015 International Symposium on Cloud and Service Computing,
                    December 19-21, 2015, ChengDu, China, pp. 915-920.
                  </font>
                </li>
                <li>
                  <font size="2">
                    Chih Hua Tai, Zheng Han Tan, Yung Sheng Lin,
                    <strong>Yue Shan Chang</strong>,
                    <u>
                      “Mental Disorder Detection and Measurement using Latent
                      Dirichlet Allocation and SentiWordNet,“
                    </u>
                    IEEE International Conference on Systems, Man, and
                    Cybernetics (SMC), October 9-12, 2015, Hong Kong, pp.
                    1215-1220.
                  </font>
                </li>
                <li>
                  <font size="2">
                    <strong>Yue-Shan Chang</strong>, Wei-Liang Hsu, and
                    Zheng-Han Tan, "Integrated Software and Platform Deployment
                    on Cloud Environment," Proceedings of the International
                    Computer Symposium (ICS)held at Taichung, Taiwan, December
                    12-14, 2014, Frontiers in Artificial Intelligence and
                    Applications,pp. 1436-1445
                  </font>
                </li>
                <li>
                  <font size="2">
                    Ruey-Kai Sheu, Guang-Ting Wu, Chih-Tien Fan,
                    <strong>Yue-Shan Chang</strong>, and Chi-Hua Tai, "Adaptive
                    Block Partition of Geographic Map Based on Road Coverage in
                    Urban Environment," Proceedings of the International
                    Computer Symposium (ICS)held at Taichung, Taiwan, December
                    12-14, 2014, Frontiers in Artificial Intelligence and
                    Applications, pp. 1416-1425.
                  </font>
                </li>
                <li>
                  <font size="2">
                    Yao-Wen Chang, Ruey-Kai Sheu, Syuan-Ru Jhu, and
                    <strong>Yue-Shan Chang</strong>, "Design and Implementation
                    of a RESTful Notification Service," Proceedings of the
                    International Computer Symposium (ICS)held at Taichung,
                    Taiwan, December 12-14, 2014, Frontiers in Artificial
                    Intelligence and Applications, pp. 1375-1385.
                  </font>
                </li>
                <li>
                  <font size="2">
                    Ying-En Fang, Chih-Hua Tai, <strong>Yue-Shan Chang</strong>,
                    Chih-Tien Fan, "A mental disorder early warning approach by
                    observing depression symptom in social diary," IEEE
                    International Conference on Systems, Man, and Cybernetics
                    (SMC), October 5, 2014, pp. 2060-2065.
                  </font>
                </li>
                <li>
                  <font size="2">
                    Yu-Sheng Wu, Tong-Ying Juang,{" "}
                    <strong>Yue-Shan Chang</strong>, Wei-Jen Wang, Jun-Ting Lu,
                    "Improving system and software deployment on a large-scale
                    cloud data center," Fifth International Conference on
                    Ubiqutious and Future Network (ICUFN), July 2, 2013, Da
                    Nang, Vietnam, pp. 82-87.
                  </font>
                </li>
                <li>
                  <font size="2">
                    <strong>Yue-Shan Chang</strong>, Wan-Chun Hung, Tong-Ying
                    Juang , "Depression diagnosis based on ontologies and
                    Bayesian networks," IEEE International Conference on
                    Systems, Man, and Cybernetics (SMC), October 13, 2013,
                    Manchester, UK, pp. 3452-3457.
                  </font>
                </li>
                <li>
                  <font size="2">
                    Chih-Tien Fan, <strong>Yue-Shan Chang</strong>, Wei-Jen
                    Wang, Shyan-Ming Yuan, "Execution time prediction using
                    rough set theory in hybrid cloud," The 9th International
                    Conference on Ubiquitous Intelligence &amp; Computing and
                    9th International Conference on Automatic &amp; Trusted
                    Computing (UIC/ATC), September 04, 2013, Fukuoka, Japan, pp.
                    729-734
                  </font>
                </li>
                <li>
                  <font size="2">
                    Yu-Sheng Wu, <strong>Yue-Shan Chang</strong>, Tong-Ying
                    Juang, Jing-Shyang Yen, "An architecture for video
                    surveillance service based on P2P and cloud computing," The
                    9th International Conference on Ubiquitous Intelligence
                    &amp; Computing and 9th International Conference on
                    Automatic &amp; Trusted Computing (UIC/ATC),September 04,
                    2013, Fukuoka, Japan, pp. 661-666
                  </font>
                </li>
                <li>
                  <font size="2">
                    <strong>Yue-Shan Chang</strong>, Tong-Ying Juang, Che-Hsiang
                    Chang, and Jing-Shyang Yen “Integrating Intelligent Agent
                    and Ontology for Services Discovery on Cloud Environment,”
                    The 2012 IEEE International Conference on Systems, Man, and
                    Cybernetics (IEEE SMC 2012), Oct. 14-17, 2012, Seoul, Korea,
                    pp. 3209-3214.
                  </font>
                </li>
                <li>
                  <font size="2">
                    <strong>Yue-Shan Chang</strong>, Chih-Tien Fan, and Wei-Jen
                    Wang, "RST-based dynamic resource allocation in cloud
                    environment," the 2012 International workshop on Performance
                    Evaluation of Wireless Networks, in Conjunction with the 5th
                    IET International Conference on Ubi-Media Computing (U-Media
                    2012), in Xining, China, August 16-18, 2012, pp. 281-286.
                  </font>
                </li>
                <li>
                  <font size="2">
                    Chih-Tien Fan,<strong>Yue-Shan Chang</strong>, Wei-Jen Wang,
                    Shyan-Ming Yuan, “Execution Time Prediction Using Rough Set
                    Theory in Hybrid Cloud,” The 9th IEEE International
                    Conference on Ubiquitous Intelligence and Computing (UIC
                    2012), September 04-07, 2012, Fukuoka, Japan, pp. 729-734.
                  </font>
                </li>
                <li>
                  <font size="2">
                    Yu-Sheng Wu,<strong>Yue-Shan Chang</strong>, Tong-Ying
                    Juang, Jing-Shyang Yen, “An Architecture for Video
                    Surveillance Service based on P2P and Cloud Computing,” The
                    9th IEEE International Conference on Ubiquitous Intelligence
                    and Computing (UIC 2012), September 04-07, 2012, Fukuoka,
                    Japan, pp. 661-666.
                  </font>
                </li>
                <li>
                  <font size="2">
                    Wei-Jen Wang, Yo-Ming Lo, Shao-Jui Chen, and
                    <strong>Yue-Shan Chang</strong>, ”Intelligent Application
                    Migration within a Self-Provisioned Hybrid Cloud
                    Environment,” The 3rd FTRA International Conference on
                    Computer Science and its Applications (CSA-11). Lecture
                    Notes in Electrical Engineering, 2012, Volume 114, Part 1,
                    pp. 295-303,
                  </font>
                </li>
                <li>
                  <font size="2">
                    Hsiu-Pang Yeh, <strong>Yue-Shan Chang</strong>, Chia-Feng
                    Lin, Shyan-Ming Yuan, “Accelerating 3 DES performance using
                    GUI, “ International Conference on Cyber-Enabled Distributed
                    Computing and Knowledge Discovery(CyberC2011), Beijing,
                    China, 10-12 October, 2011, pp. 250 - 256.
                  </font>
                </li>
                <li>
                  <font size="2">
                    Chih-Tien Fan, Wei-Jen Wang,<strong> Yue-Shan Chang</strong>
                    , “Agent-based Service Migration Framework in Hybrid Cloud”
                    2011 IEEE 13th International Conference on High Performance
                    Computing and Communications (HPCC), 2-4 Sept. 2011, pp.
                    887-892.
                  </font>
                </li>
                <li>
                  <font size="2">
                    Chih-Tien Fan ,<strong> Yue-Shan Chang</strong>, Hsuan-Jen
                    Lai, “A DHT-based Data Extraction Scheme for Geographical
                    Ocean Data” 2nd International Conference on Emerging
                    Intelligent Data and Web Technologies (EIDWT-2011), Tirana,
                    Albania, Sept. 7 - 9, 2011, pp. 30-35.
                  </font>
                </li>
                <li>
                  <font size="2">
                    <strong>Yue-Shan Chang</strong>, Hsiang-Tai Cheng, “Applying
                    Ontology to Geographical Scientific Data Extraction,” 2011
                    IEEE International Conference on Systems, Man, and
                    Cybernetics, Oct. 9-12, 2011, Anchorage, Alaska, pp. 3397 -
                    3402.
                  </font>
                </li>
                <li>
                  <font size="2">
                    <strong>Yue-Shan Chang</strong>, Chih-Tien Fan , "A mobile
                    agent-based software intelligence framework in ubiquitous
                    environment," 7th International Conference on Ubiquitous
                    Intelligence &amp; Computing, Oct. 26-29, 2010, Xian,
                    ShaanXi, China, pp. 76-81.
                  </font>
                </li>
                <li>
                  <font size="2">
                    <strong>Yue-Shan Chang</strong>, Yu-Cheng Luo,
                    <u>
                      "A Rule based Mobile Agent Generation for Information
                      Retrieval,"
                    </u>
                    2010 IEEE Conference on Systems, Man and Cybernetics
                    (SMC2010), Oct. 10-13, 2010, Istanbul, Turkey, pp.
                    3387-3392.
                  </font>
                </li>
                <li>
                  <font size="2">
                    <strong>Yue Shan Chang</strong>, Hsuan-Jen Lai, Hsiang-Tai
                    Cheng,
                    <u>
                      "Improving Scientific Data Extraction using Metadata
                      Classification,"
                    </u>
                    2009 10th International Symposium on Pervasive Systems,
                    Algorithms, and Networks (I-SPAN 2009), Kaohsiung, Taiwan,
                    Dec. 14-16 2009. pp. 669 – 673.
                  </font>
                </li>
                <li>
                  <font size="2">
                    <strong>Yue Shan Chang</strong>, Hsiang-Tai Cheng, Hsuan-Jen
                    Lai,
                    <u>
                      "Metadata Miner Assisted Integrated Information Retrieval
                      for Argo Ocean Data,"
                    </u>
                    2009 IEEE International Conference on Systems, Man, and
                    Cybernetics, San Antonio, Texas, USA, October 11-14, 2009,
                    pp. 2930 - 2935.
                  </font>
                </li>
                <li>
                  <font size="2">
                    <strong>Yue-Shan Chang</strong> and Yung-Shuan Hung,
                    Ching-Lung Chang, Tong-Ying Juang,
                    <u>
                      "Toward a NFC phone-Driven Context Awareness Smart
                      Environment,"
                    </u>
                    International Workshop on Ubiquitous Service Systems and
                    Technologies (USST) affiliated with UIC-09, Brisbane,
                    Australia, July 7-9, 2009, pp.298-303.
                  </font>
                </li>
                <li>
                  <font size="2">
                    <strong>Yue-Shan Chang</strong>, Pei-Chun Shih, Tong-Ying
                    Juang,
                    <u>
                      "RAKER: Resource-Aware Knowledge Extraction aRchitecture
                      on Mobile Grid,"
                    </u>
                    1st Asian Conference on Intelligent Information and Database
                    Systems (ACIIDS09), Dong Hoi, Vietnam, 1-3 April 2009, pp.
                    374-379.
                  </font>
                </li>
                <li>
                  <font size="2">
                    <strong>Yue-Shan Chang</strong>, Yu-Cheng Luo, Pei-Chun
                    Shih,
                    <u>
                      "AIR: Agent and ontology -based Information Retrieval
                      architecture for Mobile Grid,"
                    </u>
                    2008 IEEE Asia-Pacific Services Computing Conference (IEEE
                    APSCC-08), Yilan, Taiwan, December 9-12, 2008, pp. 650-655.
                  </font>
                </li>
                <li>
                  <font size="2">
                    <strong>Yue-Shan Chang</strong>, Pei-Chun Shih, Yu-Cheng
                    Luo,
                    <u>"Adaptive Knowledge Retrieving on Mobile Grid,"</u> 8th
                    IEEE International Conference on Intelligent Systems Design
                    and Applications (ISDA-2008), Kaohsiung, Taiwan, Nov. 26-28,
                    2008, pp. 158-163.
                  </font>
                </li>
                <li>
                  <font size="2">
                    Ming-Tsung, Hsu, Frank Yeong-Sung Lin,
                    <strong> Yue-Shan Chang</strong>, Tong-Ying Junag,
                    <u>
                      "The Fault Probability Estimation and Decision Reliability
                      Improvement in WSNs,"
                    </u>
                    in IEEE TENCON 2007, Taipei, Taiwan, 10/30~11/2, 2007.
                  </font>
                </li>
                <li>
                  <font size="2">
                    <strong>Yue-Shan Chang</strong>, Jiun-Hua Huang, Tong-Ying
                    Juang,
                    <u>
                      "Dependable Data Aggregation on Cluster-based Wireless
                      Sensor Networks,"
                    </u>
                    in 11th WSEAS International Conference on COMMUNICATIONS,
                    Crete Island, Greece, July 26-28, 2007.
                  </font>
                </li>
                <li>
                  <font size="2">
                    Victor R.L. Shen,<strong> Yue-Shan Chang</strong>, Tong-Ying
                    Juang,
                    <u>
                      "A Multiagent-Based Learning System in Artificial
                      Intelligence,"
                    </u>
                    in ED-MEDIA 2007--World Conference on Educational
                    Multimedia, Hypermedia &amp; Telecommunications, Vancouver,
                    Canada, June 25-29, 2007.
                  </font>
                </li>
                <li>
                  <font size="2">
                    <strong>Yue-Shan Chang</strong>, Yi-Shin Kuo,
                    <u>
                      "MSCE: A Mobile Statistical Computing Environment,"
                    </u>{" "}
                    The 2007 WSEAS International Conference on COMPUTER
                    ENGINEERING and APPLICATIONS (CEA 2007), Gold Coast,
                    Queensland, Australia, January 17-19, 2007.
                  </font>
                </li>
                <li>
                  <font size="2">
                    <strong>Yue-Shan Chang</strong>,
                    <u>
                      "Adaptable Wrapper Generation for Web Page Format Change,"
                    </u>
                    The 5th WSEAS International Conference on APPLIED COMPUTER
                    SCIENCE, Hangzhou, China, April 16-18, 2006
                  </font>
                </li>
                <li>
                  <font size="2">
                    <strong>Yue-Shan Chang</strong>, Tong-Ying Juang,
                    <u>"A Web Service based Statistical Service, "</u> The 5th
                    WSEAS International Conference on APPLIED COMPUTER SCIENCE,
                    Hangzhou, China, April 16-18, 2006
                  </font>
                </li>
                <li>
                  <font size="2">
                    <strong>Yue-Shan Chang</strong>, Tong-Ying Juang, Chih-Jen
                    Lo, Ming-Tsung Hsu, and Jiun-Hua Huang,
                    <u>
                      "Fault estimation and fault map construction in
                      Cluster-based Wireless,"
                    </u>
                    The IEEE International Workshop on Ad Hoc and Ubiquitous
                    Computing (AHUC2006), Taichung, Taiwan, June 5-7, 2006.
                  </font>
                </li>
                <li>
                  <font size="2">
                    Min-Huang Ho,<strong> Yue-Shan Chang</strong>, Shyan-Ming
                    Yuan,
                    <u>
                      "EMARE: An Email-based Mobile Agent Runtime Environment
                      for Information Retrieval on the Internet, "
                    </u>
                    Proc. On 2nd IEEE International Workshop on Wireless and
                    Mobile Technologies in Education (WMTE’04), March 23-25,
                    2004, JungLi, Taiwan, ROC, pp.93-97.
                  </font>
                </li>
                <li>
                  <font size="2">
                    Yuan-Deng Chuang,<strong> Yue-Shan Chang</strong>,
                    Ruey-Hsiang Wu, Shu-Ching Lin, Shyan-Ming Yuan,
                    <u>
                      "SDRsim: A PC-based Simulator of Software Defined Radio,"
                    </u>
                    10th International Conference on Telecommunications
                    (ICT'2003), February 23 - March 1, 2003, Tahiti Sofitel
                    Coralia Maeva Beach Hotel Papeete, French Polynesia,
                    pp.1251-1258.
                  </font>
                </li>
                <li>
                  <font size="2">
                    Yuan-Deng Chuang,<strong> Yue-Shan Chang</strong>,
                    Shyan-Ming Yuan,
                    <u>
                      "A Framework for Integrating MExE with SDR's Software
                      Architecture,"
                    </u>
                    in proc. of Networks2002(Joint conference ICWLHN2002 and
                    ICN2002), Aug. 26 - 29, 2002, Atlanta, Georgia, USA, pp.
                    749-760 .
                  </font>
                </li>
                <li>
                  <font size="2">
                    Chuan-Pao Hung, Hsin-Ta Chiao,
                    <strong> Yue-Shan Chang</strong>, Tsun-Yu Hsiao, Tzu-Han
                    Kao, Shyan-Ming Yuan,
                    <u>
                      "FJM: A Fast Java Message Delivery Mechanism based on
                      IP-Multicast,"
                    </u>
                    in proc. of CICI2002, Third International Conference on
                    Communications in Computing (CIC 2002), June 24 - 27, 2002,
                    Monte Carlo Resort, Las Vegas, Nevada, USA.
                  </font>
                </li>
                <li>
                  <font size="2">
                    Ming-Huang Ho,<strong> Yue-Shan Chang</strong>, Wen-Chen
                    Sun, Shyan-Ming Yuan,
                    <u>
                      "A Wrapper Generator for Integrated Information
                      Retrieval,"
                    </u>
                    in proc. of CS&amp;I2002(The 6th International Conference on
                    Computer Science &amp; Informatics), Durham, NC, USA, Mar.
                    2002.
                  </font>
                </li>
                <li>
                  <font size="2">
                    Ming-Huang Ho,<strong> Yue-Shan Chang</strong>, Shyan-Ming
                    Yuan,
                    <u>
                      "Multi-Agent based Teacher-Cooperated Course Scheduling,"
                    </u>
                    in proc. of IASTED, ISC2001(International Conference on
                    Intelligent Systems and Control), Tampa Florida, USA, Nov.
                    2001, pp. 232-237.
                  </font>
                </li>
                <li>
                  <font size="2">
                    <strong>Yue-Shan Chang</strong>, Shyan-Ming Yuan,
                    <u>
                      "A Framework for Integrating Information Retrieval on
                      CORBA,"
                    </u>
                    in Proc. of 12th International Workshop on Database and
                    Expert Systems Applications(DEXA2001), Munich, Germany,
                    Sept. 3-7, 2001. pp. 180-185.
                  </font>
                </li>
                <li>
                  <font size="2">
                    Ming-Huang Ho, Ming-Chiun Chen,
                    <strong> Yue-Shan Chang</strong>, Shyan-Ming Yuan,
                    <u>
                      "A GA-based Dynamic Personalized Filtering for Internet
                      Search,"
                    </u>
                    in Proc. of CCECE 2001(Canadian Conference on Electrical and
                    Computer Engineering), Toronto Canada, May 2001.
                  </font>
                </li>
                <li>
                  <font size="2">
                    Gi-Ping Lee,<strong> Yue-Shan Chang</strong>,
                    <u>
                      "Design and Implementation of a WWW-Based School Official
                      Memorandum System,"
                    </u>
                    in Proc. of ICCE/ICCAI 2000, Taipei, Taiwan R.O.C., November
                    21-24, 2000, pp.1643-1645.
                  </font>
                </li>
                <li>
                  <font size="2">
                    Gi-Ping Lee,<strong>Yue-Shan Chang</strong>, Shyan-Ming
                    Yuan, "A Software Framework for Software Radio," in Proc. of
                    WCC2000/ICCT2000, Beijing, China, August 21-25, 2000. pp.
                    1102-1105. (EI)
                  </font>
                </li>
                <li>
                  <font size="2">
                    <strong>Yue-Shan Chang</strong>, Hsin-Chun Hsieh, Shyan-Ming
                    Yuan, Winston Lo,
                    <u>
                      "An Agent-based Internet Search Service on the CORBA,"
                    </u>{" "}
                    in Proc. of DOA'99, Edinburgh, Scotland, September 1999, pp.
                    26-33.
                  </font>
                </li>
                <li>
                  <font size="2">
                    <strong>Yue-Shan Chang</strong>, Shyan-Ming Yuan, Hsin-Da
                    Chiao, Chi-Hwang Chiu, Wei-Pung Tsay,
                    <u>"Design and Implementation of IIPC Locking Facility,"</u>
                    in Proc. of PDPTA99, Las Vegas, USA, June 1999.
                  </font>
                </li>
                <li>
                  <font size="2">
                    Winston Lo,<strong>Yue-Shan Chang</strong>, Chii-Long Chou,
                    Shyan-Ming Yuan,
                    <u>
                      "Design and Implementation of Information Store and
                      Retrieval Facility on CORBA,"
                    </u>
                    in Poster Proc. of WWW8, Canada, May 1999, pp.44-45.
                  </font>
                </li>
                <li>
                  <font size="2">
                    <strong>Yue-Shan Chang</strong>, Winston Lo, Chii-Jet Wang,
                    Shyan-Ming Yuan, Deron Liang
                    <u>
                      "Design and Implementation of Multi-Threaded Object
                      Request Broker on The COBRA"
                    </u>
                    , in Proc. of ICPADS'98, Tainan Taiwan, December 1998,
                    pp.740-747.
                  </font>
                </li>
                <li>
                  <font size="2">
                    Deron Liang, Win-Tsung Lo, Y. M. Kao, S. M. Yuan &amp;
                    <strong>Yue-Shan Chang</strong>,
                    <u>
                      "A Fault Tolerant Object Transaction Service in CORBA,"
                    </u>
                    IEEE COMPSAC'97, Washing Ton D.C. Aug 15, 1997, pp.115-120.
                  </font>
                </li>
                <li>
                  <font size="2">
                    Guang-Way Sheu,<strong>Yue-Shan Chang</strong>, Deron
                    Liang,Shyan-Ming Yuan, Wintson Lo,
                    <u>"A Fault-Tolerant object service on CORBA,"</u> in Proc.
                    of the 17th International Conference on Distributed Computer
                    Systems (ICDCS'97),. Baltimore, USA, May, 1997, pp.393-400.
                  </font>
                </li>
                <li>
                  <font size="2">
                    <strong>Yue-Shan Chang</strong>, Yu-Ming Kao, Shyan-Ming
                    Yuan, Deron Liang,
                    <u>
                      "An Object Transaction Service based on the CORBA
                      Architecture,"
                    </u>
                    IFIP/IEEE ICDP96, Dresden Germany, 27 FEB. - 1 Mar. 1996,
                    pp.241-245
                  </font>
                </li>
              </ul>
              <br />
              <h3>
                <b>Domestic Conference</b>
              </h3>
              <ul className="text-justify">
                <li>
                  楊竹星,張玉山,"通用分散式容錯系統之設計,"第二屆太空科技研討會,
                  1994年3月, pp.193-201.
                </li>
                <li>
                  Yue-Shan Chang, Jyh-Tzong Chiou, Shang-Rong Tsai, "Highly
                  Reliable File Services on the DMINIX System," The 11th
                  Technological and Vocational Education Conference of R.O.C.,
                  Vol.3, Mar. 1996, pp. 30-39.
                </li>
                <li>
                  Yue-Shan Chang, Jia-Jiunn Shen, Deron Liang, Shyan-Ming Yuan,
                  Winston Lo "An IDL to C++ Compiler for the CORBA Envionment,"
                  The 8th Workshop on Object-Oriented Technology and
                  Applications, National Central University, Chung-Li. Taiwan,
                  Oct 1997,pp 91 - 98.
                </li>
                <li>
                  Yue-Shan Chang, Shyan-Ming Yuan, Winston Lo, Deron Liang,
                  "Fault Tolerant Object Service under Heterogenous ORBs," Proc.
                  on 13TH Technological and Vocational Education Conference,
                  Taipei, R.O.C., May 1998, pp. 195-202.
                </li>
                <li>
                  Yue-Shan Chang, Shyan-Ming Yuan, Deron Liang, Winston Lo,
                  "Design and Implementation of Inter-ORB Bridge on COBRA ,"
                  Workshop on Distributed System Technology and Application'98,
                  Tainan, Taiwan, R.O.C., May 1998, pp.86-94.
                </li>
                <li>
                  Hsin-Chun Hsieh, Yue-Shan Chang, Shyan-Ming Yuan, "Design and
                  Implementation of Heterogeneous Search Engine Agent," in Proc.
                  of TANET'98, Hualien, Taiwan, November 1998.
                </li>
                <li>
                  張玉山, 劉旨峰, 周靜娟, 林珊如, 袁賢銘,
                  "技術學院資訊相關科系學生的電腦病毒迷思概念之研究,"
                  第十六屆全國技術及職業教育研討會-一般技職與人文教育類, 四月
                  2001, 花蓮, pp. 251-260.
                </li>
                <li>
                  鄭明俊, 焦信達,張玉山, 袁賢銘,"CRMA -
                  一個支援Context-Aware計算的行動代理人平台,"二○○二數位生活與網際網路科技研討會,
                  六月二十六日 2002年, 台南, 台灣, 光碟版.
                </li>
                <li>
                  林書慶, 吳瑞祥,張玉山, 袁賢銘,
                  "3GPP之MExE行動應用程式開發框架-應用軟體無線電網路切換機制,"
                  2003數位生活與網際網路科技研討會, 九月, 2003, 台南. 光碟版.
                </li>
                <li>
                  Hong-Ting Yan, Ming-Tsung Hsu, Tong-Ying Juang,Yue-Shan Chang,
                  "Scatternet Formation based on Routing Area in Bluetooth Ad
                  Hoc Network," 2004 Cross Strait Tri-regional Radio Science and
                  Wireless Technology Conference(CSTRWC04), September 19-25,
                  2004, Hsin-Chu, Taiwan R.O.C., pp. A3-17 ~ A3-25.
                </li>
                <li>
                  徐瑋駿, 莊東穎,張玉山, "A RingTree topology for Bluetooth Ad
                  hoc Network," 2004 Cross Strait Tri-regional Radio Science and
                  Wireless Technology Conference(CSTRWC04), September 19-25,
                  2004, Hsin-Chu, Taiwan R.O.C., pp. A3-26 ~ A3-38.
                </li>
                <li>
                  吳妙玉,張玉山"建構一個標準化資訊交換及代理人為基礎之統計系統,"
                  2004商管與資訊研討會(TBI2004), 九月29~30日, 台北三峽, 台灣,
                  CD-ROM版.(NSC 93-2118-M-305-003) (INSPEC) (EI).
                </li>
                <li>
                  吳榮智,張玉山"網路資訊源之適應性包裝者程式產生器",
                  第十五屆物件導向技術及應用研討會, 2004年9月9日, 台灣台南,
                  CD-ROM版(NSC 92-2213-E-305-003).
                </li>
                <li>
                  羅智仁, 莊東穎,張玉山,
                  "以無線感測網路階層式架構協助動態網路位址環境下快速換手,"
                  創新與管理研討會, 2004年12月17日, 台灣台北.
                </li>
                <li>
                  羅智仁, 莊東穎,張玉山,
                  "應用貝氏網路於叢集式架構無線感測網路下節點錯誤偵測與錯誤地圖建立",
                  九十四年全國計算機會議(NCS2005).
                </li>
                <li>
                  張玉山, 吳榮智, 周松霖,
                  蔡秉融,"適應網頁異動之包裝者程式產生器設計與實作",ec2006電子商務與數位生活研討會.
                </li>
                <li>
                  劉旭航, 蘇宸毅,
                  莊東穎,張玉山,"應用無線感測器網路於道路之最適路徑選擇",
                  ec2006電子商務與數位生活研討會.
                </li>
                <li>
                  Yue-Shan Chang, "Efficient Computational Grid Middleware for
                  Mobile Device," Third Workshop on Grid Technologies and
                  Applications (WoGTA' 06), December 7-8, 2006, Chung Hua
                  University, Hsinchu, Taiwan.
                </li>
                <li>
                  Yue-Shan Chang, "Wrapper-based Personalized Mobile Meta
                  Portal," in Proceeding of National Computer Symposium 2007,
                  NCS2007, 20~21, Dec., 2007, 台中, 台灣, Vol. 2, pp 742-748.
                </li>
                <li>
                  張玉山, 鄒國界, "行動資料格網架構及其複本排程演算法,"in
                  Proceeding of National Computer Symposium 2007, NCS2007,
                  20~21, Dec., 2007, 台中, 台灣, Vol. 2, pp 724-733.
                  (大會佳作論文)
                </li>
                <li>
                  Yue-Shan Chang ,Hung-Hsiang Chang "Resource-Aware Task
                  Scheduling Algorithm on Mobile Grid Environment," 6th Workshop
                  on Grid Technologies and Applications (WoGTA' 09), Dec. 18-19,
                  2009, Taitung University, Taitung City, Taiwan, pp.xxx-xxx.
                </li>
                <li>
                  Yue-Shan Chang, Pei-Chun Shih, "Design and Implementation of
                  Resource-Aware Knowledge Extraction on Mobile Grid," 5th
                  Workshop on Grid Technologies and Applications (WoGTA' 08),
                  Dec. 12-13, 2008, Tainan University, Tainan City, Taiwan,
                  pp.xxx-xxx.
                </li>
                <li>
                  Yi-Kang Lee, Yue-Shan Chang ,Hung-Hsiang Chang "Resource-Aware
                  Task Scheduling Algorithm on Mobile Grid Environment," 6th
                  Workshop on Grid Technologies and Applications (WoGTA' 09),
                  Dec. 18-19, 2009, Taitung University, Taitung City, Taiwan,
                  pp.xxx-xxx.
                </li>
                <li>
                  張玉山, 賴宣任, 鄭翔太,
                  "以Metadata分類協助科學資料檢索之架構,"
                  2009第二十屆物件導向技術及應用研討會, Nov. 20, 2009, 台中,
                  台灣, pp.xxx-xxx.
                </li>
                <li>
                  張玉山, 陳宏志, "近場通訊之萬用服務框架," in Proceeding of
                  National Computer Symposium 2007, NCS2007, 27~28, Nov., 2009,
                  台北, 台灣, pp.xxx-xxx.
                </li>
                <li>
                  Yi-Kang Lee, Yue-Shan Chang, “Cost consideration on building
                  and operating of Hybrid Cloud,” 2011 Symposium on Cloud and
                  Services Computing, Jan 20-21, 2011, Taipei Taiwan, CD
                  Version.
                </li>
                <li>
                  YS Lin, YS Chang, KM Lin, BY Lin, YT Tsai, “以 ETL-Based
                  的資料融合建置 PM2. 5 地圖”,NCS 2017 全國計算機會議, 818-822
                </li>
                <li>
                  KM Lin, YS Chang, YR Zeng, CX Huang,
                  “在大數據平台使用機器學習方法預測空氣汙染”,TANET2018
                  臺灣網際網路研討會, 740-745
                </li>
              </ul>
            </div>
          </div>
        </TabPanel>
      </Box>
    </div>
  );
}
