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
          In 2014, Walton et. al published a study on “Self-Organization and
          Semiosis in Jazz Improvisation,” providing this description of the
          relationship between self-organization and musical performance:
        </p>
        <p className="quote">
          The complex systems principle of self-organization provides a new way
          of understanding the behavioral dynamics behind the emergent,
          spontaneous exchanges of musical performance. In biological
          self-organization, energy is expended in the form of work which
          operates to maintain order in a system, collectively constraining the
          possible behaviors the components of the system can exhibit. When two
          self-organized systems become closely coupled they form a synergistic,
          teledynamic system, such that in a circularly causal manner each
          system’s work helps to maintain and self-sustain one another’s
          behavioral dynamics. The semiotic exchange between two improvising
          jazz musicians can also be understood as forming a synergistic,
          teledynamic system, with musicians expending energy in the form of
          musical ‘work’ that operates to mutually constrain the semiotic form
          of their own and their co-musicians playing behavior.
        </p>
        <p>
          An interesting idea that emerges from Walton et. al’s work is that in
          jazz improvisation, two musicians mutually create constraints for each
          other, forcing them to listen and take cues from each other to produce
          a complete piece of music. Constraints allow for organization to
          exist, and living things within a system in equilibrium will maintain
          one another’s constraints.{" "}
        </p>
      </div>
    </div>
  );
};
