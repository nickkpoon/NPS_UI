import React from "react";

const Title = ({ value, handleClick }) =>
    <div>
        <div data-collapse="medium" data-animation="default" data-duration="400" role="banner" class="navbar-2 w-nav">
        <nav role="navigation" class="nav-menu">
                <a href="#" class="nav-item">Product</a>
                <a href="#" class="nav-item">Customers</a>
                <a href="#" class="nav-item">Enterprise</a>
                <a href="#" class="nav-item">Pricing</a>
            </nav>
            <nav role="navigation" class="nav-menu">
                <a href="#" class="nav-item">Help</a>
                <a href="#" class="nav-item">Get started for free</a>
                <a href="#" class="nav-item">Sign in</a>
            </nav>

        </div>
        <div class="title_section">
            <div class="title_container">
                <h1>Calculate your NPS® (Net Promoter Score)</h1>
                <h3>Calculating your NPS score is as simple as tallying up your responses and subtracting the percentage of detractors from the percentage of promoters. The score is a whole number that ranges from -100 to 100, and indicates customer happiness with your brand experience.</h3>
                <h3>Use the calculator below to calculate your NPS from your survey responses.</h3>
            </div>
        </div>
    </div>


export default Title;
