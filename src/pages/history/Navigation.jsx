import React, { useEffect } from "react";

import "../../styles/text.css";

export const Navigation = (props) => {
  const { updateBG } = props;

  useEffect(() => {
    updateBG(true);
  }, [updateBG]);

  return (
    <div className="page-container fade-in">
      <div className="text-container white-bg">
        <h2>Navigating the Site</h2>
        <p>
          You can use the arrow keys on your keyboard to move between pages, or
          click the "Next" button at the bottom right of the screen to progress.
        </p>
      </div>
    </div>
  );
};
