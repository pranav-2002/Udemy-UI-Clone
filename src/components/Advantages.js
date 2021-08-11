import React from "react";
import "./Advantages.css";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import StarIcon from "@material-ui/icons/Star";
import AllInclusiveIcon from "@material-ui/icons/AllInclusive";

function Advantages() {
  return (
    <div className="advantages">
      <h3 className="advantages__hidden">What to learn next?</h3>
      <div className="advantages__text">
        <PlayArrowIcon className="advantages__icon playIcon" />

        <h4>
          Learn in-demand skills with over <br /> 155,000 video courses
        </h4>
      </div>
      <div className="advantages__text">
        <StarIcon className="advantages__icon" />

        <h4>
          Choose courses taught by real-world <br /> experts
        </h4>
      </div>
      <div className="advantages__text">
        <AllInclusiveIcon className="advantages__icon" />

        <h4>
          Learn at your own pace, with lifetime <br /> access on mobile and
          desktop
        </h4>
      </div>
    </div>
  );
}

export default Advantages;
