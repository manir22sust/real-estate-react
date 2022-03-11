import React from "react";

import HouseOne from "../../assets/house1.jpg";
import BedOne from "../../assets/bed1.jpg";
import BedTwo from "../../assets/bed2.jpg";
import Kitchen from "../../assets/kitchen.jpg";
import Bathroom from "../../assets/bath1.jpg";

import HouseTwo from "../../assets/house2.jpg";
import BedThree from "../../assets/bed3.jpg";
import BedFour from "../../assets/bed4.jpg";
import BathroomTwo from "../../assets/bath2.jpg";
import LivingRoom from "../../assets/living-room.jpg";

import "./Featured.css";

export const Featured = () => {
  return (
    <div className="featured">
      <h1 className="featured-text"> Top Featured Listings</h1>
      <p className="featured-text">
        {" "}
        Selected listings by city, State, & Zip based on views .
      </p>

      <div className="container">
        <img className="span-3 image-grid-row-2" src={HouseOne} alt="" />
        <img src={BedOne} alt="" />
        <img src={BedTwo} alt="" />
        <img src={Kitchen} alt="" />
        <img src={Bathroom} alt="" />

        <div className="span-3 img-details">
          <div className="top">
            <h2> Dusseldorf </h2>
            <p> House for Sale</p>
            <p className="price"> € 4,500,000</p>
          </div>
          <div className="info-grid">
            <div>
              <div className="info">
                <p className="bold"> Bedrooms</p>
                <p>5</p>
              </div>
              <div className="info">
                <p className="bold"> Bathrooms</p>
                <p>7</p>
              </div>
            </div>
            <div>
              <div className="info">
                <p className="bold"> Square Feet</p>
                <p>8,138</p>
              </div>
              <div className="info">
                <p className="bold"> Est Payment :</p>
                <p>€ 25,797</p>
              </div>
            </div>
          </div>
        </div>

        <div className="span-2 right-img-details">
          <p>
            A beautiful modern day home in the city with a full-size
            pool.Spacious and luxurious home located in Dusseldorf. Including
            media room, workout facility, and built-in sauna.
          </p>
          <button className="btn"> View Listing </button>
        </div>
      </div>
      {/* Section  section  */}
      <div className="container">
        <img className="order-2" src={BedThree} alt="" />
        <img className="order-3" src={BedFour} alt="" />
        <img
          className="span-3 image-grid-row-2  order-1"
          src={HouseTwo}
          alt=""
        />
        <img className="order-4" src={BathroomTwo} alt="" />
        <img className="order-5" src={LivingRoom} alt="" />

        <div className="span-2 right-img-details order-7">
          <p>
            A beautiful modern day home in the city with a full-size
            pool.Spacious and luxurious home located in Dusseldorf. Including
            media room, workout facility, and built-in sauna.
          </p>
          <button className="btn"> View Listing </button>
        </div>

        <div className="span-3 img-details order-6">
          <div className="top">
            <h2> Dusseldorf </h2>
            <p> House for Sale</p>
            <p className="price"> € 4,500,000</p>
          </div>
          <div className="info-grid">
            <div>
              <div className="info">
                <p className="bold"> Bedrooms</p>
                <p>5</p>
              </div>
              <div className="info">
                <p className="bold"> Bathrooms</p>
                <p>7</p>
              </div>
            </div>
            <div>
              <div className="info">
                <p className="bold"> Square Feet</p>
                <p>8,138</p>
              </div>
              <div className="info">
                <p className="bold"> Est Payment :</p>
                <p>€ 25,797</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
