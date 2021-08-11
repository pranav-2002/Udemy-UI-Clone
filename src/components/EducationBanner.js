import React from "react";
import "./EducationBanner.css";

function EducationBanner() {
  return (
    <div className="instructorBanner">
      <img
        src="https://s.udemycdn.com/home/non-student-cta/transform-1x-v3.jpg"
        alt="banner"
        className="instructorBanner__image"
      />
      <div className="instructorBanner__text">
        <h3>
          Transform your life <br /> through education
        </h3>
        <p>
          Learners around the world are launching new <br /> careers, advancing
          in their fields, and enriching <br /> their lives.
        </p>
        <a
          className="educationBanner__customLink"
          href="https://about.udemy.com/tag/stories/"
        >
          Find out how
        </a>
      </div>
    </div>
  );
}

export default EducationBanner;
