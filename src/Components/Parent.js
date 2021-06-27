import React from "react";
import Child from "./Child";

const Parent = ({ handleClick }) => (
  <div>
    <Child
      name="10"
      handleClick={(e) => handleClick(10, e.target.valueAsNumber)}
    />
    <Child
      name="9"
      handleClick={(e) => handleClick(9, e.target.valueAsNumber)}
    />
    <Child
      name="8"
      handleClick={(e) => handleClick(8, e.target.valueAsNumber)}
    />
    <Child
      name="7"
      handleClick={(e) => handleClick(7, e.target.valueAsNumber)}
    />
    <Child
      name="6"
      handleClick={(e) => handleClick(6, e.target.valueAsNumber)}
    />
    <Child
      name="5"
      handleClick={(e) => handleClick(5, e.target.valueAsNumber)}
    />
    <Child
      name="4"
      handleClick={(e) => handleClick(4, e.target.valueAsNumber)}
    />
    <Child
      name="3"
      handleClick={(e) => handleClick(3, e.target.valueAsNumber)}
    />
    <Child
      name="2"
      handleClick={(e) => handleClick(2, e.target.valueAsNumber)}
    />
    <Child
      name="1"
      handleClick={(e) => handleClick(1, e.target.valueAsNumber)}
    />
    <Child
      name="0"
      handleClick={(e) => handleClick(0, e.target.valueAsNumber)}
    />
  </div>
);

export default Parent;
