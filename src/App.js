import React from "react";
import './styles/styles.css';
import Title from "./components/Title"
import Calculator from "./components/Calculator";
import Signup from "./components/Signup";
import googleIcon from './assets/image-1.png';
import facebookLogo from './assets/Facebook_f_logo__2019_-1.png';
import twitterLogo from  './assets/twitter-icon-1.png';

export default function App() {
  return (
    <div className="App">
      <Title/>
      <Calculator/>
      <Signup/>
    </div>
  );
}
