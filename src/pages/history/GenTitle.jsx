import React, { useEffect } from "react";

import "../../styles/text.css";

export const GenTitle = (props) => {
  const { updateBG } = props;

  useEffect(() => {
    updateBG(false);
  }, [updateBG]);
  return (
    <div className="page-container fade-in">
      {/* <ScrollingBackground /> */}
      <div className="text-container">
        <h1>Generative Music Utilizing Emergent Properties</h1>
      </div>
    </div>
  );
};
