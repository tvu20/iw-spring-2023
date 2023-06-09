import React, { useEffect } from "react";

import "../../styles/text.css";

export const Combinations = (props) => {
  const { updateBG } = props;

  useEffect(() => {
    updateBG(false);
  }, [updateBG]);
  return (
    <div className="page-container fade-in">
      {/* <ScrollingBackground /> */}
      <h2>Combining Inputs</h2>
      <script src="https://player.vimeo.com/api/player.js"></script>
      <iframe
        width="700"
        height="394"
        src="https://player.vimeo.com/video/822787927?h=8a11920b57&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <p style={{ width: "70vw", textAlign: "center" }}>
        In this module, output values (the bottom row) are generated by various
        different summations or averages of various input streams, as designated
        by the 4DATAROUTR module.
      </p>
    </div>
  );
};
