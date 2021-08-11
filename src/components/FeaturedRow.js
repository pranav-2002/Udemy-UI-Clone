import React from "react";
import "./FeaturedRow.css";

function FeaturedRow({
  title,
  source1,
  source2,
  source3,
  student1,
  student2,
  student3,
  isLink,
}) {
  return (
    <div className="featuredRow">
      <h3>{title}</h3>
      <a href="https://www.udemy.com/topic/python/">{source1}</a>
      <p>{student1}</p>
      <a href="https://www.udemy.com/topic/web-development/">{source2}</a>
      <p>{student2}</p>
      <a href="https://www.udemy.com/topic/machine-learning/">{source3}</a>
      <p>{student3}</p>
      <h5 className={isLink ? "featuredRow__link" : "featuredRow__hide"}>
        Explore more topics
      </h5>
    </div>
  );
}

export default FeaturedRow;
