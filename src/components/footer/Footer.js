import React from "react";

import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaPinterest,
} from "react-icons/fa";
import "./Footer.css";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="social">
        <FaFacebook style={{ color: "3B5999" }} className="icon" />
        <FaInstagram style={{ color: "E4405F" }} className="icon" />
        <FaTwitter style={{ color: "55ACEE" }} className="icon" />
        <FaPinterest style={{ color: "E60023" }} className="icon" />
      </div>
      <div className="container">
        <div className="col">
          <h3>About</h3>
          <p>Company</p>
          <p>Details</p>
          <p>Planning</p>
          <p>About Us</p>
        </div>
        <div className="col">
          <h3>Company</h3>
          <p>Company</p>
          <p>Details</p>
          <p>Planning</p>
          <p>About Us</p>
        </div>
        <div className="col">
          <h3>Legal</h3>
          <p>Company</p>
          <p>Details</p>
          <p>Planning</p>
          <p>About Us</p>
        </div>
        <div className="col">
          <h3>Information</h3>
          <p>Company</p>
          <p>Details</p>
          <p>Planning</p>
          <p>About Us</p>
        </div>
      </div>
    </div>
  );
};
