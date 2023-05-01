import React, { useEffect } from "react";

import "../../styles/text.css";

export const Averaging = (props) => {
  const { updateBG } = props;

  useEffect(() => {
    updateBG(false);
  }, [updateBG]);
  return (
    <div className="page-container fade-in">
      {/* <ScrollingBackground /> */}
      <h2>Averaging Demo</h2>
      <script src="https://player.vimeo.com/api/player.js"></script>
      <iframe
        width="700"
        height="394"
        src="https://player.vimeo.com/video/822786589?h=e862b38004&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <p style={{ width: "70vw", textAlign: "center" }}>
        This video contains two separate streams of random numbers, with the
        left stream outputting single numbers and the right stream averaging two
        random values to produce outputs. We can see that the distribution the
        right stream is more concentrated towards the center of the y-axis.
      </p>
    </div>
  );
};
