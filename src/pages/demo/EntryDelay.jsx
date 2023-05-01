import React, { useEffect } from "react";

import "../../styles/text.css";

export const EntryDelay = (props) => {
  const { updateBG } = props;

  useEffect(() => {
    updateBG(false);
  }, [updateBG]);
  return (
    <div className="page-container fade-in">
      {/* <ScrollingBackground /> */}
      <h2>Entry Delay Demo</h2>
      <script src="https://player.vimeo.com/api/player.js"></script>
      <iframe
        width="700"
        height="394"
        src="https://player.vimeo.com/video/822784931?h=47de54de2b&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <p style={{ width: "70vw", textAlign: "center" }}>
        An implementation of the integration across inputs and outputs from
        different nodes within a layer, specifically the Pitch, Velocity, and
        Duration nodes outputting values at a synchronous moment specified by
        entry delay.
      </p>
    </div>
  );
};
