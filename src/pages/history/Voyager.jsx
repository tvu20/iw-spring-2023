import React, { useEffect } from "react";

import "../../styles/text.css";

export const Voyager = (props) => {
  const { updateBG } = props;

  useEffect(() => {
    updateBG(false);
  }, [updateBG]);
  return (
    <div className="page-container fade-in">
      {/* <ScrollingBackground /> */}
      <div className="text-container">
        <h2>Voyager</h2>
        <p>
          Voyager, created by George Lewis, is a nonhierarchical, interactive
          musical environment that{" "}
          <b>
            allows users to engage with a computer-driven, interactive “virtual
            improvising orchestra.”
          </b>{" "}
          This program analyzes aspects of a human’s performance in real time
          and to guide an automatic composition program that generates complex
          responses to the musician’s playing and independent behavior arising
          from its own internal processes.
        </p>
        <p>
          Premiered in 1987, Voyager existed as a program that migrated from
          hardware to hardware before settling in its current existence as a Max
          program. It has been played in hundreds of concerts around the world,
          featuring a number of leading musicians including Lewis on trombone
          himself.
        </p>
      </div>
    </div>
  );
};
