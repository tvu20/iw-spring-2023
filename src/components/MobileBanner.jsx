import React from "react";
import { Link } from "react-router-dom";

import "../styles/text.css";
import "../styles/main.css";

export const MobileBanner = (props) => {
  return (
    <div className="page-container mobile-only banner">
      <div className="text-container">
        <h2>
          This module is currently not available on mobile browsers. Sorry for
          the inconvenience!
        </h2>
        <p>
          See the full source code on{" "}
          <a href="https://github.com/tvu20/iw-spring-2023">Github.</a>
        </p>
        <Link to="/">
          <button className="btn end-btn">Return</button>
        </Link>
      </div>
    </div>
  );
};
