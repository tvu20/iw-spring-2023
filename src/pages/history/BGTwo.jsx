import React, { useEffect } from "react";

import "../../styles/text.css";

export const BGTwo = (props) => {
  const { updateBG } = props;

  useEffect(() => {
    updateBG(false);
  }, [updateBG]);
  return (
    <div className="page-container fade-in">
      {/* <ScrollingBackground /> */}
      <div className="text-container">
        <p>
          Here, the generation of “emergent music” is treated as a search for
          new genres and musical ideas that emerge from collective synchrony.
          Bell and Gabora explain their system as follows:
        </p>
        <p className="quote">
          NW is hardwired to exhibit the key properties of real world complex
          systems through{" "}
          <b>its modular, scale-free, small-world properties…</b> NW networks
          are not neural networks; they do not adapt or learn by tuning weights
          between nodes through experience or training, nor do they evolve;
          nodes simply accept input and respond.{" "}
          <b>
            Their rules of interaction do not change, adapt, or self-organize
            over time, but their structure does.
          </b>{" "}
          Just like an experience or realization can provide the ‘seed incident’
          that stimulates creative honing, the pseudo randomly generated initial
          conditions provide ‘seed incidents’ that initiate NW processing. After
          NW receives its inputs it is a closed system that adapts to itself
          (self organizes).{" "}
          <b>
            Musical ideas sometimes unfold in an open ended manner, producing
            novelty and surprise, both considered hallmarks of emergence.
          </b>
        </p>
      </div>
    </div>
  );
};
