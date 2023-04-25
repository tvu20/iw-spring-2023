import React, { useEffect } from "react";

import "../../styles/text.css";

export const BG = (props) => {
  const { updateBG } = props;

  useEffect(() => {
    updateBG(false);
  }, [updateBG]);
  return (
    <div className="page-container fade-in">
      {/* <ScrollingBackground /> */}
      <div className="text-container">
        <h2>NetWorks</h2>
        <p>
          In 2016, Bell and Gabora published{" "}
          <i>“A Music-generating System Based on Network Theory,” </i>one of the
          first scholarly works to create a music generation system directly
          based off of self-organization principles. In this paper, they
          presented NetWorks (NW), an{" "}
          <b>
            “interactive music-generation system that uses a hierarchically
            clustered scale-free network to generate music that ranges from
            orderly to chaotic.”
          </b>{" "}
          Gabora and Bell reference the “edge of chaos” described earlier by
          Borgo — a critical state in which complex systems are poised at the
          transition between order and chaos.
        </p>
      </div>
    </div>
  );
};
