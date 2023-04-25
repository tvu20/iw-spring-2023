import React, { useEffect } from "react";

import "../../styles/text.css";

import jazz from "../../images/jazz.jpeg";

export const WaltonTwo = (props) => {
  const { updateBG } = props;

  useEffect(() => {
    updateBG(false);
  }, [updateBG]);
  return (
    <div className="page-container fade-in">
      {/* <ScrollingBackground /> */}
      <div className="img-container">
        <img src={jazz} alt="music" />
        <p>
          An interesting idea that emerges from Walton et. al’s work is that in
          jazz improvisation, two musicians mutually create constraints for each
          other, forcing them to listen and take cues from each other to produce
          a complete piece of music. Constraints allow for organization to
          exist, and living things within a system in equilibrium will maintain
          one another’s constraints.{" "}
        </p>
      </div>
    </div>
  );
};
