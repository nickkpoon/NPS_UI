import React, {useState} from 'react';
import Parent from "./components/Parent";

function Calculator() {
  //const [inputState, setInputState] = useState(0);

  const numbers = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

  const [click, setClick] = useState(0);
  const handleClick = name => {
    setClick(name);
  };
  return (
    <div>
      <Parent handleClick={handleClick} />
      {click && <p>{click} is clicked.</p>}
    </div>
  );
}
   
   export default Calculator;