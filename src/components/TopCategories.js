import React from "react";
import "./TopCategories.css";
import TopCategoriesBox from "./TopCategoriesBox";

function TopCategories() {
  return (
    <div className="topCategories">
      <h1>Top categories</h1>
      <div className="topCategories__content">
        <TopCategoriesBox
          text="Design"
          image="https://s.udemycdn.com/home/top-categories/lohp-category-design-v2.jpg"
        />

        <TopCategoriesBox
          text="Development"
          image="https://s.udemycdn.com/home/top-categories/lohp-category-development-v2.jpg"
        />

        <TopCategoriesBox
          text="Marketing"
          image="https://s.udemycdn.com/home/top-categories/lohp-category-marketing-v2.jpg"
        />

        <TopCategoriesBox
          text="IT and Software"
          image="https://s.udemycdn.com/home/top-categories/lohp-category-it-and-software-v2.jpg"
        />

        <TopCategoriesBox
          text="Personal Development"
          image="https://s.udemycdn.com/home/top-categories/lohp-category-personal-development-v2.jpg"
        />

        <TopCategoriesBox
          text="Business"
          image="https://s.udemycdn.com/home/top-categories/lohp-category-business-v2.jpg"
        />

        <TopCategoriesBox
          text="Photography"
          image="https://s.udemycdn.com/home/top-categories/lohp-category-photography-v2.jpg"
        />

        <TopCategoriesBox
          text="Music"
          image="https://s.udemycdn.com/home/top-categories/lohp-category-music-v2.jpg"
        />
      </div>
    </div>
  );
}

export default TopCategories;
