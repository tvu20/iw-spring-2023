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
          Improvisation, or <b>the art of immediate musical composition,</b> is
          an essential aspect of the art form for all musicians. Improvisation
          on a performance level primarily is utilized in 20th century music,
          but it has been a valued skill throughout the eras of musical
          tradition.{" "}
        </p>
        <p>
          While improvisation has long been understood to be created from a
          <b>
            {" "}
            combination of musical technique and understanding of theory with
            spontaneous responses to other musicians,
          </b>{" "}
          studies analyzing improvisational music as a self-organizing system
          have only emerged within the last 20 years.
        </p>
      </div>
    </div>
  );
};
