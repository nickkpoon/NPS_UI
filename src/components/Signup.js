import React from "react";
import googleIcon from '../assets/image-1.png';
import facebookLogo from '../assets/Facebook_f_logo__2019_-1.png';
import twitterLogo from  '../assets/twitter-icon-1.png';

const Signup = () =>
<div className="signup_section">
        <div className="signup_container">
          <h2>Interested in improving your customer experience with NPS?</h2>
          <div className="signup_form">
          <form className="signup_group">
              <div className="get_started_form"><input type="text" className="signup_input" placeholder="Your email address"></input><input type="email" className="signup_input_2" placeholder="Choose a password"></input><input type="submit" value="Get started" className="submit_button"></input></div>
              <div className="or_block">or</div>
              <a href="#" className="google_button"><img src={googleIcon} /><div className="google_signup">Sign up with Google</div></a>
          </form>
        </div>
        <div className="social_media_buttons"><img src={twitterLogo} className="image-30"/><img src={facebookLogo}/></div>
        </div>
      </div>


export default Signup;
