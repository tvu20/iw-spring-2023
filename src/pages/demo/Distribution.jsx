import React, { useEffect } from "react";

import "../../styles/text.css";

import bg from "../../images/distrib.png";

export const Distribution = (props) => {
  const { updateBG } = props;

  useEffect(() => {
    updateBG(false);
  }, [updateBG]);
  return (
    <div className="page-container fade-in">
      {/* <ScrollingBackground /> */}
      <div
        className="img-container"
        style={{ width: "65vw", maxWidth: "700px" }}
      >
        <img src={bg} alt="music" style={{ width: "80%" }} />
        <p>
          We can see this distribution more clearly in this image; the more
          numbers averaged to generate an output, the narrower the distribution.
        </p>
      </div>
    </div>
  );
};
