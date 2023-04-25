import React, { useEffect } from "react";

import "../../styles/text.css";

export const ResearchTitle = (props) => {
  const { updateBG } = props;

  useEffect(() => {
    updateBG(false);
  }, [updateBG]);
  return (
    <div className="page-container fade-in cover-bg">
      {/* <ScrollingBackground /> */}
      <div className="section-container">
        <h1>Previous Research on Improvisational Music</h1>
      </div>
    </div>
  );
};
