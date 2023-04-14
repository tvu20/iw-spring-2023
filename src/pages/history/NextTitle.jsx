import React, { useEffect } from "react";

import "../../styles/text.css";

export const NextTitle = (props) => {
  const { updateBG } = props;

  useEffect(() => {
    updateBG(false);
  }, [updateBG]);
  return (
    <div className="page-container fade-in">
      {/* <ScrollingBackground /> */}
      <div className="text-container">
        <h1>What's Next?</h1>
      </div>
    </div>
  );
};
