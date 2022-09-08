import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function SimpleAccordion() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
            <h4>應用N-gram於言語障礙者中文語音辨識語句建構</h4>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p>
              近年已經提出許多應用深度學習於語音辨識之研究，結合語音辨識之應用也漸漸融入日常生活中，例如：Siri語音助理。然而，大多數研究都是專注在正常語音辨識，有言語障礙（Speech
              Impairment）的人因為其語音缺損而無法適用一般的語音辨識系統，因此近年言語障礙者之語音辨識漸漸成為重要的研究議題。我們研究團隊在先前研究中[1,2]提出應用深度學習之言語障礙者中文語音辨識系統，包含中文音節辨識模組以及語句建構模組之架構與實作方法。
              目前音節辨識模組的Top5準確度仍然無法達到50%，而語句建構模組已經建立了相鄰字之間的關係強度作為辨識系統之中文語言模型，但是只有少部分的案例可以透過語言模型建構出正確語句。目前仍然是比對法之準確度較高，比對法是去比對語句資料庫中存在的句子，缺點是若是不在語句庫中就無法辨識成功。
              延續本團隊先前提出之言語障礙者之語音辨識系統，本研究目標為應用自然語言處理（Natural
              Language
              Processing，NLP）的方法來改善目前語句建構模組之建構法。本研究改為採用使用者常用詞彙建立之n-gram詞庫輔助之語言模型，從音節辨識模組辨識出之Top9候選音節中去搜尋詞庫中詞彙，再從搜尋到的詞彙去建構語句。本研究實驗應用n-gram詞庫搜尋方法於語音辨識系統之語句建構模組，達到了提升語句建構正確率之成效。
            </p>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>
            <h4>以微測站協助之多層空氣污染預測模型</h4>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            在現今空氣汙染已越來越被重視，因高濃度的PM2.5(particulate
            matter，指空氣中極小的懸浮微粒)對人體造成的影響不容忽略，並且在先前已有許多研究用以預測細懸浮微粒，有針對一般值的預測，以及針對高峰值的預測，但在兩者之間一直沒有一個明確適合的使用時機，因此本文利用分類的概念來分辨模型何時適用，並且討論資料切割訓練的可行性，最後利用先前研究的模型來做驗證。
            首先本文使用CNN-LSTM的架構，以微測站的資料作為輸入並將其轉為網格模式，利用圖片的變化趨勢計算出PM2.5用以偵測環保署測站附近的趨勢，以及利用相關性分析使用包含AQI、PM2.5移動趨勢、PM10移動趨勢等等與新資料與原先資料做比較，再來將注意力機制的方法套用至微測站的網格資料中，減少了CNN(Convolutional
            Neural Network)參數並且增加了訓練效率，最後再輸出層以GAP(Global
            Average Pooling)的架構取代了原先全連接層。
            GAP架構減少了參數的運算量，並且避免過擬合，最後分類出結果是否為高峰值，若不為高峰值則使用原先一般模型，反之則利用SCORE損失函數做模型訓練，該函數可使模型在訓練時偏向高值預測。最後依據GAP分類結果選擇模型進行模型切換，並比較使用分類模型以及未使用分類模型之GRU，結果在高峰值情況的中部區域取得了良好的效果。
            本文將原先的SCORE損失函數的比例降低，避免高峰值超出觀測值太多，並且將分類套用至目前最優秀之模型做比較，從結果顯示在高峰值時段利用分類結果做模型切換在一至八小時的平均有降低的現象，證明利用分類結果在高峰值出現時有幫助。
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>
            <h4>以Attention Network為基礎改進高空氣汙染之預測準確度</h4>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            在目前預測空氣汙染PM2.5的高濃度值相當困難，因為空氣汙染的預測與測站附近的空汙活動十分相關，僅使用歷史的濃度趨勢來進行預測是明顯不足的，若附近發生火災或是其他大型空氣污染事件，會出現預測失準或低估的問題。而環保署於2018年在全台廣布微型感測器監測各個地區的資料，利用環保署微型感測器的資料可以輔助我們找到附近突發空汙事件的特徵。
            本文建構了基於注意力機制的CNN-LSTM模型用來對二維結構的微型感測器資料進行預測並與論文[7]中的LSTM做結合，製作出同時具有感知周遭是否有突發空汙事件發生與根據歷史趨勢預測未來PM2.5濃度的模型，並且藉由RMSE以及SCORE兩種不同的Loss
            function建立兩種不同風格的模型並以集成學習加以結合。
            本文將我們提出的Neighboring Attention LSTM (NALSTM)
            在實驗中與論文[7]中的三層架構的LSTM以及ALSTM做比較，在PM2.5值為35
            μg到55μg
            這個區間每個小時的預測值平均比ALSTM低了3.15%，而且每個小時的誤差MAPE平均也比LSTM低了5.09%，並且在PM2.5值為55
            μg以上的時候，每個小時的預測值誤差MAPE平均比ALSTM低了4.73%，而且每個小時的平均也比LSTM低了8.18%。經過實驗證明本文使用的注意力機制以及集成學習方法在預測PM2.5高濃度時是非常有效的。
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>
            <h4>以GRU為基礎的混合模型改善空氣品質預測度</h4>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            空氣污染危害人們健康是現今社會重要的問題，PM2.5濃度常作為空氣污染程度的指標，能精準預測未來PM2.5濃度變化的方法，可以為人們提供預警機制，讓人們可事先做好保護措施，避免吸入過多的空氣污染物。本文提出8種預測PM2.5的模型，以深度學習GRU
            (Gated Recurrent
            Unit)為基底，採用不同策略開發5種預測PM2.5的模型，分別是GRU13d (Gated
            Recurrent Unit 13 dimensions)、GRUAW14d (Gated Recurrent Unit
            Adaptive Weight 14 dimensions)、GRUAW13d (Gated Recurrent Unit
            Adaptive Weight 13 dimensions)、GRUST13d (Gated Recurrent Unit
            Spatial-Temporal 13 dimensions)和GRUSS13d (Gated Recurrent Unit
            Spatial-Season 13
            dimensions)，集成學習可以改善單一模型的效能，本文採用集成學習的堆疊技術對GRU13d、GRUAW14d、GRUAW13d、GRUST13d和GRUSS13d做集成，本文建構3種集成學習模型，分別是PEGRU
            (Pearson-based Ensemble learning Gated Recurrent Unit)、MEGRU (Mean
            absolute error-based Ensemble learning Gated Recurrent Unit)和MLEGRU
            (Multiple Linear regression Ensemble learning Gated Recurrent
            Unit)。PEGRU根據皮爾森係數選出最佳模型，PEGRU採用最佳模型的預測值與實際值建立線性迴歸模型，MEGRU取擁有最低MAE的模型為最佳模型，MEGRU使用最佳模型的預測值與實際值建立線性迴歸模型，MLEGRU使用GRU13d、GRUAW14d、GRUAW13d、GRUST13d和GRUSS13d的預測值和對應的實際值建立多元迴歸模型。本文將開發的模型與GBT
            (Gradient Boosted Tree)、SVR (Support Vector Regression)和LSTM (
            Long Short-Term Memory
            networks)做比較，來證實本文模型之效能，實驗結果顯示，
            MLEGRU有較佳的表現。
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>
            <h4>集成學習用於憂鬱症診斷之評估</h4>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            對於醫師針對抑鬱症病患的治療評估而言，一般來說從投藥及療程開始至少需要6-8周的觀察與評估徵狀的表現，來評估此療程與用藥是否具有相對應的療效。但是在於評估症狀的過程中，往往都會存在著許多經由病患所給予的主觀意識資訊，那麼便會影響了整體療程能帶來的效果甚至是惡化病情出現過度治療(overtreatment)或是低度治療(undertreatment)。那麼如何利用主觀資訊，配合快速且更為精準的治療評估，便成為重要的課題。而本論文將植基於過去對於生物回饋之高階心理資訊融合技術及平台之建置為基礎[1]，將透過穿戴式裝置及行動裝置即時收集使用者之心律變異(HRV)、腦波感測器（EEG）之生理資料及抑鬱情緒之心理資料，建置更為完整的生物回饋資訊收集平台，透過雲端平台及堆疊(Stacking)集成機器學習方法結合高階生理與心理資訊預測出抑鬱症患者狀態。我們的目的是通過多樣的單一機器學習模型，支援向量機(SVC)、隨機森林(RandomForest)以及樸素貝葉斯網路(Naive
            Bayes
            Network)等方法作為輸出，並且結合後輸入於第二層邏輯迴歸(Logistic
            Regression)方法進行預測分類，便能建構出兩層架構的堆疊(Stack)集成學習方法。利用堆疊(Stack)集成學習方法的分類多樣性，減少單一機器學習模型所帶來的誤差因素：變異數，雜訊和偏差，提高最終堆疊(Stack)集成學習模型的穩定性。本研究模型的成果達到抑鬱症狀態緩解評估裡，敏感度為85.8%及特異度為90.2%在ROC曲線積分面積(AUC)，達到0.909具有初步可參考價值，未來隨著在醫院收集收案數的增加，配合本論文所建構出更為完善的系統與平台，以協助病患可以將收案的設備帶回家中自行透過手機操作，通過更為方便的操作方法與更為便利性的攜帶裝置，提升病患的參與度與配合度，使得這項研究能夠更為廣布，以協助醫生可以快速及正確的評估症狀情形，進而決定是否調整治療方法及用藥細節，以便達到個人化緩解狀況之精確評估目的。
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>
            <h4>應用深度學習於語言障礙者之中文語句辨識</h4>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            對於一名語言障礙者想清楚地說話是一件相當困難的事情，為了可以改善他們溝通上的問題，我們希望可以運用語音辨識的技術來達成，然而，許多的語音辨識工具都難以對語言障礙者的聲音進行辨識，而且大都被視為噪音，因此，我們將以這套專門為語言障礙者所設計的中文語音辨識系統[1]為基礎，以輸出完整的語句做為目標，改善語言障礙者的溝通問題。
            本文將延續此篇論文[1]的研究，除了將中文的常用注音音節補齊外，觀察其準確度，證實了分層式架構確實比起未分層式架構有更好的效果，儘管如此，在top1的表現下降至約15%左右，即使將辨識結果取至top5，辨識度也不及50%，而且穩定度也不是很好，這對於用語句建構方法是相當致命的因素，使得語句辨識難以實行。
            針對上述兩個原因，我們延續分層式架構，利用神經網路來取代原先的組合基本發音音節方式，試圖提高發音辨識的辨識度及穩定度，即便在於辨識度的提升只有4%-7%，但在於穩定度的提升有不錯的表現。在於語句辨識的部分，考慮到發音辨識度很低的狀況，語句建構的方法難以達到我們想要的辨識效果，基於這個理由，並以比對歷史語句庫為主，語句建構為輔，向移動設備發送數個句子，並搭配改變使用者介面，以上這些改變，讓語句辨識獲得了很大的改善。
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
