import React, { useEffect } from "react";

import "../../styles/text.css";

export const Walton = (props) => {
  const { updateBG } = props;

  useEffect(() => {
    updateBG(false);
  }, [updateBG]);
  return (
    <div className="page-container fade-in">
      {/* <ScrollingBackground /> */}
      <div className="text-container">
        <p>
          In 2014, Walton et. al published{" "}
          <i>“Self-Organization and Semiosis in Jazz Improvisation,”</i>{" "}
          providing this description of the relationship between
          self-organization and musical performance:
        </p>
        <p className="quote">
          The complex systems principle of self-organization provides{" "}
          <b>
            a new way of understanding the behavioral dynamics behind the
            emergent, spontaneous exchanges of musical performance.
          </b>{" "}
          In biological self-organization, energy is expended in the form of
          work which operates to maintain order in a system, collectively
          constraining the possible behaviors the components of the system can
          exhibit.{" "}
        </p>
        <p className="quote">
          When two self-organized systems become closely coupled they form a
          synergistic, teledynamic system, such that{" "}
          <b>
            in a circularly causal manner each system’s work helps to maintain
            and self-sustain one another’s behavioral dynamics.
          </b>{" "}
          The semiotic exchange between two improvising jazz musicians can also
          be understood as forming a synergistic, teledynamic system, with
          musicians expending energy in the form of musical ‘work’ that operates
          to <b>mutually constrain the semiotic form</b> of their own and their
          co-musicians playing behavior.
        </p>
      </div>
    </div>
  );
};
