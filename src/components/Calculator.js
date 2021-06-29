import React, { useState } from 'react';
import {clearFields} from './123.js';
import '../styles/styles.css';
const initialList = [
    {
        score: 0,
        count: 0,
    },
    {
        score: 1,
        count: 0,
    },
    {
        score: 2,
        count: 0,
    },
    {
        score: 3,
        count: 0,
    },
    {
        score: 4,
        count: 0,
    },
    {
        score: 5,
        count: 0,
    },
    {
        score: 6,
        count: 0,
    },
    {
        score: 7,
        count: 0,
    },
    {
        score: 8,
        count: 0,
    },
    {
        score: 9,
        count: 0,
    },
    {
        score: 10,
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

    function Clear() {
        setList(initialList);
        CountTotal(initialList);
    }


    function Validate(e) {
        if (!/[0-9]/.test(e.key)) {
            e.preventDefault();
        }
    }

    function HandleReset() {
        Clear();
        clearFields();
    }

    function handleInput(inputScore, input) {
        let inputInteger = 0;
        inputInteger = parseInt(input, 10);

        if (isNaN(inputInteger)) { inputInteger = 0; }

        const newList = list.map((item) => {
            if (item.score === inputScore) {
                const updatedItem = { ...item, count: inputInteger };
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

        if (totalCount > 0) {           //avoid dividing by 0 caused by backspace
            promotorPercent = ((promotorCount / totalCount) * 100).toFixed();
            detractorPercent = ((detractorCount / totalCount) * 100).toFixed();
            score = promotorPercent - detractorPercent;
        }

        setPromotor(promotorCount);
        setNeutral(neutralCount);
        setDetractor(detractorCount);

        setPromotorPercent(promotorPercent);
        setDetractorPercent(detractorPercent);
        setScore(score);
    }



    return (

        <div className="calculator_section">
            <div className="calculator_container">
                <div className="calc">
                    <div className="row_1">
                        <div className="column_1">
                            <div className="nps_text">
                                <h4>Count the responses</h4>
                                <p>Add up the number of responses provided for each score.</p>
                            </div>
                        </div>
                        <div className="column_2">
                            <div className="promotor_input">
                                <div className="smiley_face"></div>
                                <div className="both-group-total">
                                    <div className="group-total">
                                        <div className="input_number green">10</div>
                                        <div>
                                            <input className="input-field" type="number" onKeyPress={(e) => Validate(e)} onChange={(e) => handleInput(10, e.target.value)}></input>
                                        </div>
                                    </div>
                                    <div className="group-total">
                                        <div className="input_number green">9</div>
                                        <div>
                                            <input className="input-field" type="number" onKeyPress={(e) => Validate(e)} onChange={(e) => handleInput(9, e.target.value)}></input>
                                        </div>
                                    </div>
                                </div>
                                <div className="promotor_line_total"></div>
                            </div>
                        </div>
                        <div className="column_3">
                            <div className="neutral_input">
                                <div className="neutral_face"></div>
                                <div className="both-group-total">
                                    <div className="group-total">
                                        <div className="input_number grey">8</div>
                                        <div>
                                            <input className="input-field" type="number" onKeyPress={(e) => Validate(e)} onChange={(e) => handleInput(8, e.target.value)}></input>
                                        </div>
                                    </div>
                                    <div className="group-total">
                                        <div className="input_number grey">7</div>
                                        <div>
                                            <input className="input-field" type="number" onKeyPress={(e) => Validate(e)} onChange={(e) => handleInput(7, e.target.value)}></input>
                                        </div>
                                    </div>
                                </div>
                                <div className="line"></div>
                            </div>
                        </div>
                        <div className="column_4">
                            <div className="detractor_input">
                                <div className="sad_face"></div>
                                <div className="both-group-total">
                                    <div className="group-total">
                                        <div className="input_number red">6</div>
                                        <div>
                                            <input className="input-field" type="number" onKeyPress={(e) => Validate(e)} onChange={(e) => handleInput(6, e.target.value)}></input>
                                        </div>
                                    </div>
                                    <div className="group-total">
                                        <div className="input_number red">5</div>
                                        <div>
                                            <input className="input-field" type="number" onKeyPress={(e) => Validate(e)} onChange={(e) => handleInput(5, e.target.value)}></input>
                                        </div>
                                    </div>
                                    <div className="group-total">
                                        <div className="input_number red">4</div>
                                        <div>
                                            <input className="input-field" type="number" onKeyPress={(e) => Validate(e)} onChange={(e) => handleInput(4, e.target.value)}></input>
                                        </div>
                                    </div>
                                    <div className="group-total">
                                        <div className="input_number red">3</div>
                                        <div>
                                            <input className="input-field" type="number" onKeyPress={(e) => Validate(e)} onChange={(e) => handleInput(3, e.target.value)}></input>
                                        </div>
                                    </div>
                                    <div className="group-total">
                                        <div className="input_number red">2</div>
                                        <div>
                                            <input className="input-field" type="number" onKeyPress={(e) => Validate(e)} onChange={(e) => handleInput(2, e.target.value)}></input>
                                        </div>
                                    </div>
                                    <div className="group-total">
                                        <div className="input_number red">1</div>
                                        <div>
                                            <input className="input-field" type="number" onKeyPress={(e) => Validate(e)} onChange={(e) => handleInput(1, e.target.value)}></input>
                                        </div>
                                    </div>
                                    <div className="group-total">
                                        <div className="input_number red">0</div>
                                        <div>
                                            <input className="input-field" type="number" onKeyPress={(e) => Validate(e)} onChange={(e) => handleInput(0, e.target.value)}></input>
                                        </div>
                                    </div>
                                </div>
                                <div className="detractor_line_total"></div>
                            </div>
                        </div>
                    </div>
                    <div className="row_2">
                        <div className="column_1">
                            <div className="nps_text">
                                <h4>Group the responses</h4>
                                <p>Add up the total number of responses provided for each group.</p>
                            </div>
                        </div>
                        <div className="column_2">
                            <div className="promotor_total">
                                <div className="smiley_face"></div>
                                <div className="both-group-total">
                                    <div className="group-total">
                                        <div className="input_number green">Total</div>
                                        <div>
                                            <input className="input-field" value={promotor} readOnly></input>
                                        </div>
                                    </div>
                                </div>
                                <div className="promotor_line_score"></div>
                            </div>
                        </div>
                        <div className="column_3">
                            <div className="neutral_total">
                                <div className="neutral_face"></div>
                                <div className="both-group-total">
                                    <div className="group-total">
                                        <div className="input_number grey">Total</div>
                                        <div>
                                            <input className="input-field" value={neutral} readOnly></input>
                                        </div>
                                    </div>
                                </div>
                                <div className="line"></div>
                            </div>
                        </div>
                        <div className="column_4">
                            <div className="detractor_total">
                                <div className="sad_face"></div>
                                <div className="both-group-total">
                                    <div className="group-total">
                                        <div className="input_number red">Total</div>
                                        <div>
                                            <input className="input-field" value={detractor} readOnly></input>
                                        </div>
                                    </div>
                                </div>
                                <div className="detractor_line_score"></div>
                            </div>
                        </div>
                    </div>
                    <div className="row_3">
                        <div className="column_1">
                            <div className="nps_text">
                                <h4>Calculate your NPS</h4>
                                <p>Subtract the percentage of Detractors from the percentage of Promotors.</p>
                                <a class="start_over_button" onClick={() => HandleReset()}>Start over</a>
                            </div>
                        </div>
                        <div className="column_2">
                            <div className="promotor_score">
                                <div className="smiley_face"></div>
                                <div className="both-group-total">
                                    <div className="group_score_total">
                                        <div className="score_text green">{promotorPercent}%</div>
                                        <div className="score_text_below green">
                                            of total responses
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="minus"></div>
                        <div className="column_3">
                            <div className="detractor_score">
                                <div className="sad_face"></div>
                                <div className="both-group-total">
                                    <div className="group_score_total">
                                        <div className="score_text red">{detractorPercent}%</div>
                                        <div className="score_text_below red">
                                            of total responses

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="equal"></div>
                        <div className="column_4">
                            <div className="nps_score">
                                <div className="nps_face"></div>
                                <div className="both-group-total">
                                    <div className="group_score_total">
                                        <div className="score_text grey">{score}</div>
                                        <div className="score_text_below grey">
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