import React from "react";
import ApartmentOne from "../../assets/apt1.jpeg";
import ApartmentTwo from "../../assets/apt2.jpeg";
import ApartmentThree from "../../assets/apt3.jpeg";

import "./Home.css";

export const Home = () => {
  return (
    <div className="home">
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
