import React, {useState} from 'react';
import Child from "./Child";
import '../styles/styles.css';
const initialList = [
  {
    id: 0,
    count: 0,
  },
  {
    id: 1,
    count: 0,
  },
  {
    id: 2,
    count: 0,
  },
  {
    id: 3,
    count: 0,
  },
  {
    id: 4,
    count: 0,
  },
  {
    id: 5,
    count: 0,
  },
  {
    id: 6,
    count: 0,
  },
  {
    id: 7,
    count: 0,
  },
  {
    id: 8,
    count: 0,
  },
  {
    id: 9,
    count: 0,
  },
  {
    id: 10,
    count: 0,
  }
];

function Calculator() {

  const [list, setList] = useState(initialList);
  const [promotor, setPromotor] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [detractor, setDetractor] = useState(0);
  const [promotorPercent, setPromotorPercent] = useState(0);
  const [detractorPercent, setDetractorPercent] = useState(0);
  const [score, setScore] = useState(0);

  function handleClick(id, count) {

    const newList = list.map((item) => {
      if (item.id === id) {
        const updatedItem = {
          ...item,
          count: count,
        };
        return updatedItem;
      }
      return item;
    });
    setList(newList);

    CountTotal(newList);
  }

  function CountTotal(list) {
    let promotorCount = 0;
    let neutralCount = 0;
    let detractorCount = 0;
    let totalCount = 0;

    let promotorPercent = 0;
    let detractorPercent = 0;
    let score = 0;

    promotorCount = list[10].count + list[9].count;
    neutralCount = list[7].count + list[8].count;
    detractorCount = list[6].count + list[5].count + list[4].count + list[3].count + list[2].count + list[1].count + list[0].count;
    totalCount = promotorCount + neutralCount + detractorCount;

    promotorPercent = ((promotorCount/totalCount) * 100).toFixed();
    detractorPercent = ((detractorCount/totalCount) * 100).toFixed();
    score = promotorPercent - detractorPercent;

    setPromotor(promotorCount);
    setNeutral(neutralCount);
    setDetractor(detractorCount);

    setPromotorPercent(promotorPercent);
    setDetractorPercent(detractorPercent);
    setScore(score);
  }

  return (
    
    <div class="calculator_section">
      <div class="calculator_container">
        <div class="calc">
            <div class="row-1">
                <div class="column_1">
                    <div class="nps_text">
                        <h4>Count the responses</h4>
                        <p>Add up the number of responses provided for each score.</p>
                    </div>
                </div>
                <div class="column_2">
                    <div class="promotor_input">
                        <div class="smiley_face"></div>
                        <div class="both-group-total">
                            <div class="group-total">
                                <div class="input_number green">10</div>
                                <div>
                                    <Child handleClick={(e) => handleClick(10, e.target.valueAsNumber)} />
                                </div>
                            </div>
                            <div class="group-total">
                                <div class="input_number green">9</div>
                                <div>
                                    <Child handleClick={(e) => handleClick(9, e.target.valueAsNumber)} />
                                </div>
                            </div>
                        </div>
                        <div class="promotor_line_total"></div>
                    </div>
                </div>
                <div class="column_3">
                    <div class="neutral_input">
                        <div class="neutral_face"></div>
                        <div class="both-group-total">
                            <div class="group-total">
                                <div class="input_number grey">8</div>
                                <div>
                                    <Child handleClick={(e) => handleClick(8, e.target.valueAsNumber)} />
                                </div>
                            </div>
                            <div class="group-total">
                                <div class="input_number grey">7</div>
                                <div>
                                    <Child handleClick={(e) => handleClick(7, e.target.valueAsNumber)} />
                                </div>
                            </div>
                        </div>
                        <div class="line"></div>
                    </div>
                </div>
                <div class="column_4">
                    <div class="detractor_input">
                        <div class="sad_face"></div>
                        <div class="both-group-total">
                            <div class="group-total">
                                <div class="input_number red">6</div>
                                <div>
                                    <Child handleClick={(e) => handleClick(6, e.target.valueAsNumber)} />
                                </div>
                            </div>
                            <div class="group-total">
                                <div class="input_number red">5</div>
                                <div>
                                    <Child handleClick={(e) => handleClick(5, e.target.valueAsNumber)} />
                                </div>
                            </div>
                            <div class="group-total">
                                <div class="input_number red">4</div>
                                <div>
                                    <Child handleClick={(e) => handleClick(4, e.target.valueAsNumber)} />
                                </div>
                            </div>
                            <div class="group-total">
                                <div class="input_number red">3</div>
                                <div>
                                    <Child handleClick={(e) => handleClick(3, e.target.valueAsNumber)} />
                                </div>
                            </div>
                            <div class="group-total">
                                <div class="input_number red">2</div>
                                <div>
                                    <Child handleClick={(e) => handleClick(2, e.target.valueAsNumber)} />
                                </div>
                            </div>
                            <div class="group-total">
                                <div class="input_number red">1</div>
                                <div>
                                    <Child handleClick={(e) => handleClick(1, e.target.valueAsNumber)} />
                                </div>
                            </div>
                            <div class="group-total">
                                <div class="input_number red">0</div>
                                <div>
                                    <Child handleClick={(e) => handleClick(0, e.target.valueAsNumber)} />
                                </div>
                            </div>
                        </div>
                        <div class="detractor_line_total"></div>
                    </div>
                </div>
            </div>
            <div class="row-2">
                <div class="column_1">
                    <div class="nps_text">
                        <h4>Group the responses</h4>
                        <p>Add up the total number of responses provided for each group.</p>
                    </div>
                </div>
                <div class="column_2">
                <div class="promotor_total">
                        <div class="smiley_face"></div>
                        <div class="both-group-total">
                            <div class="group-total">
                                <div class="input_number green">Total</div>
                                <div>
                                    <input class="input-field" value={promotor} readOnly></input>
                                </div>
                            </div>
                        </div>
                        <div class="promotor_line_score"></div>
                    </div>
                </div>
                <div class="column_3">
                    <div class="neutral_total">
                        <div class="neutral_face"></div>
                        <div class="both-group-total">
                            <div class="group-total">
                                <div class="input_number grey">Total</div>
                                <div>
                                  <input class="input-field" value={neutral} readOnly></input>
                                </div>
                            </div>
                        </div>
                        <div class="line"></div>
                    </div>
                </div>
                <div class="column_4">
                <div class="detractor_total">
                        <div class="sad_face"></div>
                        <div class="both-group-total">
                            <div class="group-total">
                                <div class="input_number red">Total</div>
                                <div>
                                  <input class="input-field" value={detractor} readOnly></input>
                                </div>
                            </div>
                        </div>
                        <div class="detractor_line_score"></div>
                    </div>
                </div>
            </div>
            <div class="row-3">
                <div class="column_1">
                    <div class="nps_text">
                        <h4>Calculate your NPS</h4>
                        <p>Subtract the percentage of Detractors from the percentage of Promotors.</p>
                    </div>
                </div>
                <div class="column_2">
                <div class="promotor_score">
                        <div class="smiley_face"></div>
                        <div class="both-group-total">
                            <div class="group_score_total">
                                <div class="score_text green">{promotorPercent}%</div>
                                <div class="score_text_below green">
                                of total responses                            
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="column_3">
                    <div class="detractor_score">
                        <div class="sad_face"></div>
                        <div class="both-group-total">
                            <div class="group_score_total">
                                <div class="score_text red">{detractorPercent}%</div>
                                <div class="score_text_below red">
                                of total responses                            

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="column_4">
                <div class="nps_score">
                        <div class="nps_face"></div>
                        <div class="both-group-total">
                            <div class="group_score_total">
                                <div class="score_text grey">{score}</div>
                                <div class="score_text_below grey">
                                This is your NPS
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  );
}
   
export default Calculator;