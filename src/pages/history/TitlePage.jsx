import React, { useEffect } from "react";

import "../../styles/text.css";

export const TitlePage = (props) => {
  const { updateBG } = props;

  useEffect(() => {
    updateBG(false);
  }, [updateBG]);
  return (
    <div className="page-container fade-in cover-bg">
      {/* <ScrollingBackground /> */}
      <div className="title-container">
        <h1>Emergent Patterns in Music</h1>
        <h2>The Road So Far</h2>
      </div>
    </div>
  );
};
