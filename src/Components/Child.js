import React from "react";

const Child = ({ value, handleClick }) => 
<input type="number" pattern="/^[0-9\b]+$/;" onChange={handleClick}></input>;

export default Child;
