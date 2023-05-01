import React, { useEffect } from "react";

import "../../styles/text.css";

export const PageOne = (props) => {
  const { updateBG } = props;

  useEffect(() => {
    updateBG(false);
  }, [updateBG]);
  return (
    <div className="page-container fade-in">
      {/* <ScrollingBackground /> */}
      <div className="text-container">
        <p>
          By implementing <b>key features of the algorithm</b>, we can evaluate
          their function. This method serves as a <b>proof of concept:</b> by
          demonstrating that smaller key pieces of the algorithm can be
          successfully implemented and work as desired, we can draw inferences
          about how this algorithm would function on a larger scale.
        </p>
      </div>
    </div>
  );
};
