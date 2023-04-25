import React, { useEffect } from "react";

import "../../styles/text.css";

export const Feedback = (props) => {
  const { updateBG } = props;

  useEffect(() => {
    updateBG(false);
  }, [updateBG]);
  return (
    <div className="page-container fade-in">
      {/* <ScrollingBackground /> */}
      <div className="text-container">
        <h2>3. Feedback</h2>
        <p>
          Feedback from the emergent to the system{" "}
          <b>allows the system as a whole to evolve.</b> Reinforcement, or
          positive feedback, is a core property of swarm intelligence, allowing
          musicians to not only develop their own ideas but to also work
          together to support the ideas of others and the evolving ensemble
          sound.
        </p>
      </div>
    </div>
  );
};
