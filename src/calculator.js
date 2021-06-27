import React, {useState} from 'react';
import Parent from "./components/Parent";
const initialList = [


  {
    id: 0,
    count: 0,
    isComplete: true,
  },
  {
    id: 1,
    count: 0,
    isComplete: false,
  },
  {
    id: 2,
    count: 0,
    isComplete: false,
  },
  {
    id: 3,
    count: 0,
    isComplete: false,
  },
  {
    id: 4,
    count: 0,
    isComplete: false,
  },
  {
    id: 5,
    count: 0,
    isComplete: false,
  },
  {
    id: 6,
    count: 0,
    isComplete: false,
  },
  {
    id: 7,
    count: 0,
    isComplete: false,
  },
  {
    id: 8,
    count: 0,
    isComplete: false,
  },
  {
    id: 9,
    count: 0,
    isComplete: false,
  },
  {
    id: 10,
    count: 0,
    isComplete: false,
  }
];

function Calculator() {

  const [click, setClick] = useState(0);
  const [list, setList] = useState(initialList);

   
  function handleClick(id, count) {
    setClick(count);

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
  }
 
  return (
    <ul>

      <Parent handleClick={handleClick} />
      {click && <p>{click} is clicked.</p>}


      {list.map((item) => (
        <li key={item}>
         <span>
            {item.count}
          </span>
        </li>
      ))}

    </ul>
  );
}
   
   export default Calculator;