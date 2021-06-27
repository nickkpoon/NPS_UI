import Input from "./input";
import React, {useState} from 'react';

function Calculator() {
  //const [inputState, setInputState] = useState(0);

  function ListItem(props) {
    // Correct! There is no need to specify the key here:
    //return <li>{props.value}</li>;
    
    const [inputState, setInputState] = useState(0);

    const handleInputChange = e => {
      setInputState(e.target.valueAsNumber);
    };
  
    return (
      <input type="number" pattern="/^[0-9\b]+$/;" onChange ={handleInputChange}></input>
    );
    
  }
  
  function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
      // Correct! Key should be specified inside the array.
      <ListItem key={number.toString()} value={number} />
    );
    return (
      <ul>
        {listItems}
      </ul>
    );
  }

  const numbers = [1, 2, 3, 4, 5];

    return (
        // <div className="App">
        //   <Input score="0" onUpdate/>
        //   <Input score="0"/>
        //   <Input score="0"/>
        // </div>
        <NumberList numbers={numbers} />

      );
}
   
   export default Calculator;