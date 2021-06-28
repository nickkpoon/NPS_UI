import React from "react";
import Child from "./Child";

const Parent = ({ handleClick }) => (
//   <div>
//     <Child
//       name="10"
//       handleClick={(e) => handleClick(10, e.target.valueAsNumber)}
//     />
//     <Child
//       name="9"
//       handleClick={(e) => handleClick(9, e.target.valueAsNumber)}
//     />
//     <Child
//       name="8"
//       handleClick={(e) => handleClick(8, e.target.valueAsNumber)}
//     />
//     <Child
//       name="7"
//       handleClick={(e) => handleClick(7, e.target.valueAsNumber)}
//     />
//     <Child
//       name="6"
//       handleClick={(e) => handleClick(6, e.target.valueAsNumber)}
//     />
//     <Child
//       name="5"
//       handleClick={(e) => handleClick(5, e.target.valueAsNumber)}
//     />
//     <Child
//       name="4"
//       handleClick={(e) => handleClick(4, e.target.valueAsNumber)}
//     />
//     <Child
//       name="3"
//       handleClick={(e) => handleClick(3, e.target.valueAsNumber)}
//     />
//     <Child
//       name="2"
//       handleClick={(e) => handleClick(2, e.target.valueAsNumber)}
//     />
//     <Child
//       name="1"
//       handleClick={(e) => handleClick(1, e.target.valueAsNumber)}
//     />
//     <Child
//       name="0"
//       handleClick={(e) => handleClick(0, e.target.valueAsNumber)}
//     />
//   </div>

<div class="nps-container">
    <div class="calc">
      <div class="row-1">
        <div class="column _1">
          <div class="nps_text">
            <h4>Heading</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor</p>
          </div>
        </div>
        <div class="column _2">
          <div class="nps_promotor">
            <div class="smiley-face"></div>
            <div class="both-group-total">
              <div class="group-total">
                <div class="_10">10</div>
                <div class="input-field">    
                <Child name="10" handleClick={(e) => handleClick(10, e.target.valueAsNumber)}/></div>
                </div>
              <div class="group-total">
                <div class="_9">9</div>
                <div class="input-field">
                <Child
      name="9"
      handleClick={(e) => handleClick(9, e.target.valueAsNumber)}
    />
                </div>
              </div>
            </div>
            <div class="line"></div>
          </div>
        </div>
        <div class="column _3">
          <div class="nps_neutral">
            <div class="smiley-face"></div>
            <div class="both-group-total">
              <div class="group-total">
                <div class="_8">8</div>
                <div class="input-field">    <Child
      name="8"
      handleClick={(e) => handleClick(8, e.target.valueAsNumber)}
    /></div>
              </div>
              <div class="group-total">
                <div class="_7">7</div>
                <div class="input-field">    <Child
      name="7"
      handleClick={(e) => handleClick(7, e.target.valueAsNumber)}
    /></div>
              </div>
            </div>
            <div class="line"></div>
          </div>
        </div>
        <div class="column _4">
          <div class="nps_detractor">
            <div class="smiley-face"></div>
            <div class="both-group-total">
              <div class="group-total">
                <div class="_6">6</div>
                <div class="input-field">    <Child
      name="6"
      handleClick={(e) => handleClick(6, e.target.valueAsNumber)}
    /></div>
              </div>
              <div class="group-total">
                <div class="_5">5</div>
                <div class="input-field">    <Child
      name="5"
      handleClick={(e) => handleClick(5, e.target.valueAsNumber)}
    /></div>
              </div>
              <div class="group-total">
                <div class="_4">4</div>
                <div class="input-field">    <Child
      name="4"
      handleClick={(e) => handleClick(4, e.target.valueAsNumber)}
    /></div>
              </div>
              <div class="group-total">
                <div class="_3">3</div>
                <div class="input-field">    <Child
      name="3"
      handleClick={(e) => handleClick(3, e.target.valueAsNumber)}
    /></div>
              </div>
              <div class="group-total">
                <div class="_2">2</div>
                <div class="input-field">    <Child
      name="2"
      handleClick={(e) => handleClick(2, e.target.valueAsNumber)}
    /></div>
              </div>
              <div class="group-total">
                <div class="_1">1</div>
                <div class="input-field">    <Child
      name="1"
      handleClick={(e) => handleClick(1, e.target.valueAsNumber)}
    /></div>
              </div>
              <div class="group-total">
                <div class="_0">0</div>
                <div class="input-field">    <Child
      name="0"
      handleClick={(e) => handleClick(0, e.target.valueAsNumber)}
    /></div>
              </div>
            </div>
            <div class="line"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Parent;
