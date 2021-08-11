import React from "react";
import "./InstructorBanner.css";

function InstructorBanner() {
  return (
    <div className="instructorBanner">
      <img
        src="https://s.udemycdn.com/home/non-student-cta/instructor-1x-v3.jpg"
        alt="banner"
        className="instructorBanner__image"
      />
      <div className="instructorBanner__text">
        <h3>Become an instructor</h3>
        <p>
          Instructors from around the world teach <br /> millions of students on
          Udemy. We provide <br /> the tools and skills to teach what you love.
        </p>
        <a href="https://www.udemy.com/teaching/?ref=teach_home-body">
          Start teaching today
        </a>
      </div>
    </div>
  );
}

export default InstructorBanner;
