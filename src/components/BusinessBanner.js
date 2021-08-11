import React from "react";
import "./BusinessBanner.css";

function BusinessBanner() {
  return (
    <div className="businessBanner">
      <div className="businessBanner__text">
        <img
          src="https://www.udemy.com/staticx/udemy/images/v7/logo-ub.svg"
          alt="logo"
          className="businessBanner__logo"
        />
        <p>
          Get unlimited access to 6,000+ of Udemy’s top <br /> courses for your
          team. Learn and improve skills <br /> across business , tech, design,
          and more.
        </p>
        <a href="https://www.udemy.com/udemy-business/?locale=en_US&path=request-demo-in-mx%2F&ref=ufb_home-body&utm_campaign=mx-hooks&utm_content=ufb-home-body&utm_medium=referral&utm_source=marketplace&utm_term=">
          Get Udemy Business
        </a>
      </div>
      <img
        src="https://s.udemycdn.com/home/non-student-cta/ub-1x-v3.jpg"
        alt="banner"
        className="businessBanner__image"
      />
    </div>
  );
}

export default BusinessBanner;
