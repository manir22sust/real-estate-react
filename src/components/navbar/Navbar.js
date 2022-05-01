import React, { useState } from "react";

import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { FaRegTimesCircle } from "react-icons/fa";
import { BsFillHouseFill } from "react-icons/bs";

import "./Navbar.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <div className="navbar">
      <div className="container">
        <Link to="/">
          <h1>
            <span>
              <BsFillHouseFill /> Real
            </span>
            Estate
          </h1>
        </Link>
        <Link to="/register">
          <button className="btn"> Sign In</button>
        </Link>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li>
            {" "}
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Search</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaRegTimesCircle className="icon" />
          ) : (
            <HiOutlineMenuAlt4 className="icon" />
          )}
        </div>
      </div>
    </div>
  );
};
