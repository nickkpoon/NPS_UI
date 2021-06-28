import React, {useState} from 'react';
import './styles/styles.css';
import Parent from "./components/Parent";
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
  const [click, setClick] = useState(0);
  const [promotor, setPromotor] = useState(0);
  const [detractor, setDetractor] = useState(0);
  const [neutral, setNeutral] = useState(0);


   
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
    calculate(newList);
  }

  function calculate(list) {
    const newPromotor = list[10].count + list[9].count;
    const newNeutral = list[7].count + list[8].count;
    const newDetractor = list[6].count + list[5].count + list[4].count + list[3].count + list[2].count + list[1].count + list[0].count; 

    setPromotor(newPromotor);
    setDetractor(newDetractor);
    setNeutral(newNeutral);

  }
 
  return (

    
    // <ul>

    //   <Parent handleClick={handleClick} />
    //   {click && <p>{click} is clicked.</p>}


    //   {list.map((item) => (
    //     <li key={item}>
    //      <span>
    //         {item.count}
    //       </span>
    //     </li>
    //   ))}

    //   <span>{promotor}</span>
    //   <span>{detractor}</span>
    //   <span>{neutral}</span>


    // </ul>
    <Parent handleClick={handleClick} />
  );
}
   
   export default Calculator;