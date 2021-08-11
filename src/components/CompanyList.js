import React from "react";
import "./CompanyList.css";

function CompanyList() {
  return (
    <div className="companyList">
      <div className="companyList__text">
        <h3>Trusted by companies of all sizes</h3>
      </div>
      <div className="companyList__images">
        <img
          src="https://s.udemycdn.com/partner-logos/v4/apple-dark.svg"
          alt="apple"
        />
        <img
          src="https://s.udemycdn.com/partner-logos/v4/box-dark.svg"
          alt="box"
        />
        <img
          src="https://s.udemycdn.com/partner-logos/v4/volkswagen-dark.svg"
          alt="car"
        />
        <img
          src="https://s.udemycdn.com/partner-logos/v4/netflix-dark.svg"
          alt="netflix"
        />
        <img
          src="https://s.udemycdn.com/partner-logos/v4/eventbrite-dark.svg"
          alt="bite"
        />
      </div>
    </div>
  );
}

export default CompanyList;
