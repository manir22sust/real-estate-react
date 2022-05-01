import React from "react";
import SendIcon from "@mui/icons-material/Send";

import "./NewsLetter.css";

export const NewsLetter = () => {
  return (
    <div className="newsLetter-container">
      <div className="newsLetter-title">
        <h1>Newsletter</h1>
      </div>
      <div className="newsLetter-description">
        Find super attractive price quotes from us, Find your residence soon.
      </div>
      <div className="newsLetter-input">
        <input placeholder=" Your email" className="email-input" />
        <button className="newsLetter-button">
          <SendIcon />
        </button>
      </div>
    </div>
  );
};
