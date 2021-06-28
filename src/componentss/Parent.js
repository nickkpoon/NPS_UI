import React from "react";
import Child from "./Child";

const Parent = ({ handleClick }) => (
    <div class="nps_section">
        <div class="container">
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
                                        <Child name="10" handleClick={(e) => handleClick(10, e.target.valueAsNumber)} />
                                    </div>
                                </div>
                                <div class="group-total">
                                    <div class="input_number green">9</div>
                                    <div>
                                        <Child name="9" handleClick={(e) => handleClick(9, e.target.valueAsNumber)} />
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
                                        <Child name="8" handleClick={(e) => handleClick(8, e.target.valueAsNumber)} />
                                    </div>
                                </div>
                                <div class="group-total">
                                    <div class="input_number grey">7</div>
                                    <div>
                                        <Child name="7" handleClick={(e) => handleClick(7, e.target.valueAsNumber)} />
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
                                        <Child name="6" handleClick={(e) => handleClick(6, e.target.valueAsNumber)} />
                                    </div>
                                </div>
                                <div class="group-total">
                                    <div class="input_number red">5</div>
                                    <div>
                                        <Child name="5" handleClick={(e) => handleClick(5, e.target.valueAsNumber)} />
                                    </div>
                                </div>
                                <div class="group-total">
                                    <div class="input_number red">4</div>
                                    <div>
                                        <Child name="4" handleClick={(e) => handleClick(4, e.target.valueAsNumber)} />
                                    </div>
                                </div>
                                <div class="group-total">
                                    <div class="input_number red">3</div>
                                    <div>
                                        <Child name="3" handleClick={(e) => handleClick(3, e.target.valueAsNumber)} />
                                    </div>
                                </div>
                                <div class="group-total">
                                    <div class="input_number red">2</div>
                                    <div>
                                        <Child name="2" handleClick={(e) => handleClick(2, e.target.valueAsNumber)} />
                                    </div>
                                </div>
                                <div class="group-total">
                                    <div class="input_number red">1</div>
                                    <div>
                                        <Child name="1" handleClick={(e) => handleClick(1, e.target.valueAsNumber)} />
                                    </div>
                                </div>
                                <div class="group-total">
                                    <div class="input_number red">0</div>
                                    <div>
                                        <Child name="0" handleClick={(e) => handleClick(0, e.target.valueAsNumber)} />
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
                                        <Child name="10" handleClick={(e) => handleClick(10, e.target.valueAsNumber)} />
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
                                        <Child name="8" handleClick={(e) => handleClick(8, e.target.valueAsNumber)} />
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
                                        <Child name="6" handleClick={(e) => handleClick(6, e.target.valueAsNumber)} />
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
                                <div class="group-total">
                                    <div class="input_number green">Total</div>
                                    <div>
                                        
                                    </div>
                                </div>
                            </div>
                            <div class="line"></div>
                        </div>
                    </div>
                    <div class="column_3">
                        <div class="detractor_score">
                            <div class="sad_face"></div>
                            <div class="both-group-total">
                                <div class="group-total">
                                    <div class="input_number red">Total</div>
                                    <div>

                                    </div>
                                </div>
                            </div>
                            <div class="line"></div>
                        </div>
                    </div>
                    <div class="column_4">
                    <div class="nps_score">
                            <div class="nps_face"></div>
                            <div class="both-group-total">
                                <div class="group-total">
                                    <div class="input_number grey">Total</div>
                                    <div>

                                    </div>
                                </div>
                            </div>
                            <div class="line"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Parent;
