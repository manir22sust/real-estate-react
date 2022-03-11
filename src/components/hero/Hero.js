import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import "./Hero.css";

export const Hero = () => {
  return (
    <div className="hero">
      <div className="content">
        <h1> Find the perfect place</h1>
        <p className="search-text">
          search the largest selection of luxury high-rise apartments,
          multi-family homes ,and luxury homes.
        </p>
        <form className="search">
          <div>
            <input type="text" placeholder="Enter Keyword ..." />
          </div>
          <div className="radio">
            <input type="radio" />
            <label> Buy </label>
            <input type="radio" />
            <label> Rent </label>
            <button type="submit">
              <AiOutlineSearch className="icon" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
