import React, { useEffect } from "react";

import "../../styles/text.css";

import bg from "../../images/max.png";

export const Maximage = (props) => {
  const { updateBG } = props;

  useEffect(() => {
    updateBG(false);
  }, [updateBG]);
  return (
    <div className="page-container fade-in">
      {/* <ScrollingBackground /> */}
      <div className="img-container">
        <img src={bg} alt="music" />
        <p>
          Implementation was done entirely in Max, a visual, interactive
          programming software for music creation.
        </p>
      </div>
    </div>
  );
};
