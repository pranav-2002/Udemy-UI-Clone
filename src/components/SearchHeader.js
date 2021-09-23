import React from "react";
import "./SearchHeader.css";
import Help from "@material-ui/icons/Help";

function SearchHeader() {
  const results = Math.floor(Math.random() * 10001);
  const searchInput = window.location.href.split("/")[4].replace("%20", " ");

  return (
    <div className="searchHeader">
      <h1>
        {results} results for “{searchInput}”
      </h1>
      <h4>
        Explore <span>{searchInput} courses</span>
      </h4>
      <div className="searchHeader__component">
        <Help className="helpIcon" />
        <h3>Not sure? All courses have a 30-day money-back guarantee</h3>
      </div>
    </div>
  );
}

export default SearchHeader;
