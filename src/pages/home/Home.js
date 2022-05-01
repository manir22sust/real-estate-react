import React from "react";

import { Hero } from "../../components/hero/Hero";
import { Featured } from "../../components/featured/Featured";
import { NewsLetter } from "../../components/newsLetter/NewsLetter";

import { BestRated } from "../../components/best-rated/BestRated";

import "./Home.css";

const Home = () => {
  return (
    <>
      <Hero />
      <BestRated />
      <Featured />
      <NewsLetter />
    </>
  );
};

export default Home;
