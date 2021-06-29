import React from "react";

const Title = () =>
    <div>
        <div data-collapse="medium" data-animation="default" data-duration="400" role="banner" className="navbar">
        <nav role="navigation" className="nav_menu">
                <a href="#" className="nav_item">Product</a>
                <a href="#" className="nav_item">Customers</a>
                <a href="#" className="nav_item">Enterprise</a>
                <a href="#" className="nav_item">Pricing</a>
            </nav>
            <nav role="navigation" className="nav_menu">
                <a href="#" className="nav_item">Help</a>
                <a href="#" className="nav_item">Get started for free</a>
                <a href="#" className="nav_item">Sign in</a>
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
