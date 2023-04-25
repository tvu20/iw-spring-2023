import React from "react";

import "../../styles/text.css";
import "../../styles/homepage.css";
import "../../styles/alg.css";

import wave from "../../images/wave.png";

export const Banner = () => {
  return (
    <div className="homepage-container fade-in alg-container">
      {/* <ScrollingBackground /> */}
      <div className="alg-banner">
        <h1>Part 2: Algorithm Design</h1>
        <img src={wave} alt="wave" />
      </div>
    </div>
  );
};
