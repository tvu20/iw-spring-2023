import React, { useEffect } from "react";

import "../../styles/text.css";

export const PrevOne = (props) => {
  const { updateBG } = props;

  useEffect(() => {
    updateBG(false);
  }, [updateBG]);
  return (
    <div className="page-container fade-in">
      {/* <ScrollingBackground /> */}
      <div className="text-container">
        <p>
          Improvisation, or the art of immediate musical composition, is an
          essential aspect of the art form for all musicians. While
          improvisation on a performance level primarily is utilized in 20th
          century music, improvisation has been a valued skill throughout the
          eras of musical tradition. While improvisation has long been
          understood to be created from a combination of musical technique and
          understanding of theory with spontaneous responses to other musicians,
          studies analyzing improvisational music as a self-organizing system
          have only emerged within the last 20 years.
        </p>
      </div>
    </div>
  );
};
