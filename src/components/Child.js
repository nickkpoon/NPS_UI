import React from "react";

function Validate(e) {
    if (!/[0-9]/.test(e.key)) {
        e.preventDefault();
      }
}

const Child = ({ value, handleInput }) => 
<input class="input-field" type="number" pattern="/^[0-9\b]+$/;" min="0" onKeyPress={(e) => {Validate(e);}} onChange={handleInput}></input>;

export default Child;