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
        <h1>Self-Organized Music Generation</h1>
        <h2>Part 3: Algorithm Demos and Evaluation</h2>
      </div>
    </div>
  );
};
