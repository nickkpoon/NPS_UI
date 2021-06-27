import React from "react";
import Child from "./Child";

const Parent = ({ handleClick }) => (
  <div>
    <Child
      name="10"
      handleClick={(e) => handleClick(e.target.valueAsNumber)}
    />
    <Child
      name="9"
      handleClick={() => handleClick("Second Item is Clicked!")}
    />
    <Child
      name="8"
      handleClick={() => handleClick("Third Item is Clicked!")}
    />
    <Child
      name="7"
      handleClick={() => handleClick("Third Item is Clicked!")}
    />
    <Child
      name="6"
      handleClick={() => handleClick("Third Item is Clicked!")}
    />
    <Child
      name="5"
      handleClick={() => handleClick("Third Item is Clicked!")}
    />
    <Child
      name="4"
      handleClick={() => handleClick("Third Item is Clicked!")}
    />
    <Child
      name="3"
      handleClick={() => handleClick("Third Item is Clicked!")}
    />
    <Child
      name="2"
      handleClick={() => handleClick("Third Item is Clicked!")}
    />
    <Child
      name="1"
      handleClick={() => handleClick("Third Item is Clicked!")}
    />
    <Child
      name="0"
      handleClick={() => handleClick("Third Item is Clicked!")}
    />
  </div>
);

export default Parent;
