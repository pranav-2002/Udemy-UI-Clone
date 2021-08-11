import React from "react";
import "./Featured.css";
import FeaturedRow from "./FeaturedRow";

function Featured() {
  return (
    <div className="featured">
      <h1 className="featured__heading">Featured topics by category</h1>
      <div className="featured__content">
        <FeaturedRow
          title="Development"
          source1="Python"
          source2="Web Development"
          source3="Machine Learning"
          student1="29,975,146 students"
          student2="9,651,368 students"
          student3="5,994,173 students"
          isLink
        />

        <FeaturedRow
          title="Business"
          source1="Financial Analysis"
          source2="SQL"
          source3="PMP"
          student1="1,087,201 students"
          student2="4,484,125 students"
          student3="1,400,281 students
          "
        />

        <FeaturedRow
          title="IT and Software"
          source1="AWS Certification"
          source2="Ethical Hacking"
          source3="Cyber Security"
          student1="4,498,898 students"
          student2="9,067,373 students"
          student3="3,300,117 students"
        />

        <FeaturedRow
          title="Design"
          source1="Photoshop"
          source2="Graphic Design"
          source3="Drawing"
          student1="9,775,341 students"
          student2="2,865,289 students"
          student3="2,202,724 students"
        />
      </div>
    </div>
  );
}

export default Featured;
