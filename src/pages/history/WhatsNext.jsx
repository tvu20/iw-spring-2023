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
          music.{" "}
        </p>
        <p className="quote">
          <b>
            Can we develop an interactive music-generation system that utilizes
            self-organizing principles and previously researched emergent
            patterns to model how music is improvised within an ensemble?
          </b>{" "}
        </p>
        <p>
          Gaining a better understanding behind the underlying mechanisms of
          improvisation and musical emergence has a lot of implications for the
          artistic field: for example, new composition techniquescould be
          developed through using swarm intelligence models to{" "}
          <b>generate innovative and dynamic compositions,</b> or can help
          budding musicians
          <b> develop their musicality</b> and artistic voice.{" "}
        </p>
      </div>
    </div>
  );
};
