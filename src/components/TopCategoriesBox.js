import React from "react";
import "./TopCategoriesBox.css";

function TopCategoriesBox({ text, image }) {
  return (
    <div className="box">
      <img src={image} alt={text} className="box__image" />
      <h4 className="box__title">{text}</h4>
    </div>
  );
}

export default TopCategoriesBox;
