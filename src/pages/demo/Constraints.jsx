import React, { useEffect } from "react";

import "../../styles/text.css";

export const Constraints = (props) => {
  const { updateBG } = props;

  useEffect(() => {
    updateBG(false);
  }, [updateBG]);
  return (
    <div className="page-container fade-in">
      {/* <ScrollingBackground /> */}
      <h2>Constraining Outputs</h2>
      <script src="https://player.vimeo.com/api/player.js"></script>
      <iframe
        width="700"
        height="394"
        src="https://player.vimeo.com/video/822788523?h=7826489f27&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <p style={{ width: "70vw", textAlign: "center" }}>
        In this module, constraints have been imposed on the output streams of
        the given input. There are three forms of constraints: wrapping values,
        folding values, and clipping values.
      </p>
    </div>
  );
};
