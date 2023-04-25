import React, { useEffect } from "react";

import "../../styles/text.css";

export const Entropy = (props) => {
  const { updateBG } = props;

  useEffect(() => {
    updateBG(false);
  }, [updateBG]);
  return (
    <div className="page-container fade-in">
      {/* <ScrollingBackground /> */}
      <div className="text-container">
        <h2>1. Entropy</h2>
        <p>
          A term within thermodynamics used to describe the{" "}
          <b>level of disorder in a system. </b>When a system shows organized
          behavior, the entropy of the system decreases.{" "}
        </p>
        <p>
          In an ensemble, this is illustrated by the basic rules musicians
          follow: if musicians have to all play the same note, the entropy is at
          its lowest state, whereas if each performer is given the full range of
          possible notes to choose from, the disorder in the system rises.{" "}
        </p>
        <p>
          The entropy of a musical system also correlates to the{" "}
          <b>
            probability of a given musical event at any moment of the
            performance:
          </b>{" "}
          the probability of each note depends on the previous notes played, the
          genre and tone of the piece, the instructions of the conductor, and so
          on. The higher probability for a musical event to happen, the lower
          its entropy will be.
        </p>
      </div>
    </div>
  );
};
