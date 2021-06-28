import Calculator from "./calculator";
import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div class="title_section">
        <div class="title_container">
          <h1>Calculate your NPS® (Net Promoter Score)</h1>
          <h3>Calculating your NPS score is as simple as tallying up your responses and subtracting the percentage of detractors from the percentage of promoters. The score is a whole number that ranges from -100 to 100, and indicates customer happiness with your brand experience.</h3>
          <h3>Use the calculator below to calculate your NPS from your survey responses.</h3> 
        </div>
      </div>

      <Calculator/>

      <div class="footer_section">
        <div class="footer_container">
          <h1>Interested in improving your customer experience with NPS?</h1>
          <h3>Calculating your NPS score is as simple as tallying up your responses and subtracting the percentage of detractors from the percentage of promoters. The score is a whole number that ranges from -100 to 100, and indicates customer happiness with your brand experience.</h3>
          <h3>Use the calculator below to calculate your NPS from your survey responses.</h3> 
        </div>
      </div>

    </div>
  );
}
