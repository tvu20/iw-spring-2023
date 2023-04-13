import React, { useEffect } from "react";

import "../../styles/text.css";

export const Rules = (props) => {
  const { updateBG } = props;

  useEffect(() => {
    updateBG(false);
  }, [updateBG]);
  return (
    <div className="page-container fade-in">
      {/* <ScrollingBackground /> */}
      <div className="text-container">
        <h2>2. Rules</h2>
        <p>
          Rules in improvisational ensembles do not dictate the outcome of the
          performance by defining each performer’s exact behavior; instead, they
          orient the behavior of each performer but cannot predict the behavior
          of a system as a whole. Rules come in both physical and abstract
          constraints: physical constraints being the capabilities of an
          instrument or performer, and abstract constraints in the form of genre
          and communication between musicians.
        </p>
        <p>
          When all individual entities of a system follow a common set of rules,
          a structure emerges at the macroscopic level of the system. This
          emergent becomes a constraining force that acts back on the
          performers, forming a feedback loop between the microscopic and
          macroscopic levels of the system. At every moment, the decision of a
          performer orients the improvisation in a precise path due to
          influencing the entropy of the system and enforcing certain rules.
        </p>
      </div>
    </div>
  );
};
