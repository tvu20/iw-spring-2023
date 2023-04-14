import React, { useEffect } from "react";

import "../../styles/text.css";

export const WhatsNext = (props) => {
  const { updateBG } = props;

  useEffect(() => {
    updateBG(false);
  }, [updateBG]);
  return (
    <div className="page-container fade-in">
      {/* <ScrollingBackground /> */}
      <div className="text-container">
        <p>
          Substantial work has been done in both the fields of behavioral
          evaluation of improvisational music and algorithmic generation of
          music. Can we develop an interactive music-generation system that
          utilizes self-organizing principles and previously researched emergent
          patterns to model how music is improvised within an ensemble? Gaining
          a better understanding behind the underlying mechanisms of
          improvisation and musical emergence has a lot of implications for the
          artistic field: for example, new composition techniques could be
          developed through using swarm intelligence models to generate
          innovative and dynamic compositions, or can help budding musicians
          develop their musicality and artistic voice.{" "}
        </p>
      </div>
    </div>
  );
};
