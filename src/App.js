import Title from "./components/Title"
import Calculator from "./components/Calculator";
import React from "react";
import './styles/styles.css';
import googleIcon from './assets/image-1.png';
import facebookLogo from './assets/Facebook_f_logo__2019_-1.png';
import twitterLogo from  './assets/twitter-icon-1.png';

export default function App() {
  return (
    <div className="App">
      <Title/>
      <Calculator/>

      <div class="sectionn">
        <div class="containerr">
          <h2>Interested in improving your customer experience with NPS?</h2>
          <div class="w-form">
          <form id="email-form" name="email-form" data-name="Email Form" class="sign-up-wrapper">
              <div class="get-started-form"><input type="text" class="text-field w-input" placeholder="Your email address" id="Email-2"></input><input type="email" class="text-field-2 w-input" maxLength="256" name="Password" data-name="Password" placeholder="Choose a password" id="Password" required=""></input><input type="submit" value="Get started" data-wait="Please wait..." class="submit-button w-button"></input></div>
              <div class="text-block-10">or</div>
              <a href="#" class="google-sign-up-buttoon-link-block w-inline-block"><img src={googleIcon} /><div class="text-block-11">Sign up with Google</div></a>
          </form>
        </div>
        <div class="social-media-buttons"><img src={twitterLogo} loading="lazy" alt="" class="image-30"/><img src={facebookLogo} loading="lazy" alt=""/></div>
        </div>
      </div>

    </div>
  );
}
