import React, { useEffect } from "react";

import "../../styles/text.css";

export const WhatsNext = (props) => {
  const { updateBG } = props;

  useEffect(() => {
    updateBG(false);
  }, [updateBG]);
  return (
    <div className="page-container fade-in">
      {/* <ScrollingBackground /> */}
      <div className="text-container">
        <p>
          Given time, budget, and increased capability, the goal would be to
          <b>
            {" "}
            implement a large-scale functional model of the described algorithm,
          </b>
          which would be able to receive user inputs and generate spontaneous
          musical pieces for user consumption.
        </p>
        <p>
          With artistic creation comes human evaluation: through seeing how
          provided inputs shape the course of generated music, users would be
          able to <b>provide feedback</b> on how the algorithm is working and
          which key features play the most significant roles.
        </p>
      </div>
    </div>
  );
};
