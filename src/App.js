import React from "react";
import './styles/styles.css';
import Title from "./components/Title"
import Calculator from "./components/Calculator";
import Signup from "./components/Signup";


export default function App() {
  return (
    <div className="App">
      <Title/>
      <Calculator/>
      <Signup/>
    </div>
  );
}
