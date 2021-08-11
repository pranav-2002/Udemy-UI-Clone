import React from "react";
import "./Banner.css";

function Banner() {
  return (
    <div className="banner">
      <div className="banner__image">
        <img
          src="https://img-c.udemycdn.com/notices/web_banner/image_udlite/9f3d2c00-09e9-43ac-9417-4bcfea569bd9.jpg"
          alt="banner"
        />
        <div className="banner__text">
          <h1>Courses from ₹385</h1>
          <p>
            Shop our Love to Learn Sale by Aug. 13 to <br /> score bonus
            lessons.
            <a href="https://blog.udemy.com/bonus-lessons/"> Learn more.</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Banner;
