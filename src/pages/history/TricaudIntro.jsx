import React, { useEffect } from "react";

import "../../styles/text.css";

export const TricaudIntro = (props) => {
  const { updateBG } = props;

  useEffect(() => {
    updateBG(true);
  }, [updateBG]);
  return (
    <div className="page-container fade-in">
      {/* <ScrollingBackground /> */}
      <div className="text-container white-bg">
        <p>
          In 2018, Marguerite Tricaud published “Musical Emergence – A study of
          self-organization and disruption in systems of distributed
          performers,” a thesis exploring the parallel between self-organization
          in non-human complex systems and the process of improvisation in
          musical ensembles. Here, Tricaud describes what the sufficient
          conditions are for the emergence of music in a system of distributed
          performers:
        </p>
      </div>
    </div>
  );
};
