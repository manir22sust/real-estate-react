import React from "react";
import ApartmentOne from "../../assets/apt1.jpeg";
import ApartmentTwo from "../../assets/apt2.jpeg";
import ApartmentThree from "../../assets/apt3.jpeg";

import "./BestRated.css";

export const BestRated = () => {
  return (
    <div className="bestRated">
      <h1> Find Best Rated Properties </h1>
      <div>
        <p>
          <span className="bold"> All</span>
        </p>
        <p>Commercial</p>
        <p>Residential</p>
        <p>Agriculture</p>
      </div>
      <div className="container">
        <img src={ApartmentOne} alt="" />
        <img src={ApartmentTwo} alt="" />
        <img src={ApartmentThree} alt="" />
      </div>
      <button className="btn"> View All</button>
    </div>
  );
};
