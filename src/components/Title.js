import React from "react";

const Title = ({ value, handleInput }) =>
    <div>
        <div data-collapse="medium" data-animation="default" data-duration="400" role="banner" className="navbar-2 w-nav">
        <nav role="navigation" className="nav-menu">
                <a href="#" className="nav-item">Product</a>
                <a href="#" className="nav-item">Customers</a>
                <a href="#" className="nav-item">Enterprise</a>
                <a href="#" className="nav-item">Pricing</a>
            </nav>
            <nav role="navigation" className="nav-menu">
                <a href="#" className="nav-item">Help</a>
                <a href="#" className="nav-item">Get started for free</a>
                <a href="#" className="nav-item">Sign in</a>
            </nav>

        </div>
        <div className="title_section">
            <div className="title_container">
                <h1>Calculate your NPS® (Net Promoter Score)</h1>
                <h3>Calculating your NPS score is as simple as tallying up your responses and subtracting the percentage of detractors from the percentage of promoters. The score is a whole number that ranges from -100 to 100, and indicates customer happiness with your brand experience.</h3>
                <h3>Use the calculator below to calculate your NPS from your survey responses.</h3>
            </div>
        </div>
    </div>


export default Title;
