import React from "react";

function Validate(e) {
    if (!/[0-9]/.test(e.key)) {
        e.preventDefault();
      }
}

const Child = ({ value, handleInput }) => 
<input className="input-field" type="number" onKeyPress={(e) => Validate(e)} onChange={handleInput}></input>;

export default Child;