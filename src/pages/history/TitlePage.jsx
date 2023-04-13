import React, { useEffect } from "react";

import "../../styles/text.css";

export const TitlePage = (props) => {
  const { updateBG } = props;

  useEffect(() => {
    updateBG(false);
  }, [updateBG]);
  return (
    <div className="page-container fade-in">
      {/* <ScrollingBackground /> */}
      <div className="title-container">
        <h3>Emergent Patterns in Music: The Road So Far</h3>
      </div>
    </div>
  );
};
