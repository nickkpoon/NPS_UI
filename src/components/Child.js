import React from "react";

const Child = ({ value, handleInput }) => 
<input class="input-field" type="number" pattern="/^[0-9\b]+$/;" onChange={handleInput}></input>;

export default Child;
