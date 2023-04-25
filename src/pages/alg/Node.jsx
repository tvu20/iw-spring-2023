import React from "react";

import FadeInSection from "../../components/FadeInSection";
import "../../styles/text.css";
import "../../styles/homepage.css";
import "../../styles/alg.css";

import diagram from "../../images/nodediagram.png";

export const Node = () => {
  return (
    <div className="alg-section alg-container" style={{ paddingTop: "30px" }}>
      <FadeInSection>
        <h3 style={{ marginBottom: "20px" }}>What's in a Layer?</h3>
      </FadeInSection>
      <FadeInSection>
        <img className="diagram-img " src={diagram} alt="Layer of Network" />
      </FadeInSection>
      <FadeInSection>
        <div className="alg-explanation">
          <p>
            Each layer consists of a{" "}
            <b>pitch node, velocity node, duration node, entry delay node,</b>{" "}
            and <b>universal state values</b>.
          </p>
          <h3>Universal State Values</h3>
          <ul>
            <li>
              <b>Current state: </b> Most recent values output by each of the
              four nodes. This information is accessibly both layer-wide and
              network-wide.
            </li>
            <li>
              <b>Layer entropy:</b> Describes the current entropy in the layer.
              Used to determine randomness/predictability of node outputs. This
              value is updated after each calculation based on where in the
              distribution the new output value of a node fell.
            </li>
            <li>
              <b>Timbre:</b> Describes how the notes output by the layer sound,
              used to identify each unique layer.
            </li>
          </ul>
          <h3>Entry Delay Node (E)</h3>
          <p>
            Entry delay represents how soon after a metronome tick a note is
            played - the greater the E value, the more of a delay in between
            notes. Correlates to rhythm.
          </p>
          <p>
            Layer entry delay is calculated at each metronome tick. This value
            is used to sync up the other three nodes, which will all run and
            output values at the exact moment according to the layer E. This
            allows notes to be played at variable, unpredictable times.
          </p>
          <p style={{ marginBottom: "0px" }}>
            <b>Inputs:</b> universal metronome, E values from other layers, and
            layer entropy.
          </p>
          <p style={{ marginTop: "0px" }}>
            <b>Outputs:</b> new layer E state, new layer entropy.
          </p>
          <h3>Velocity Node (V)</h3>
          <p>
            Velocity represents how loud a note is played. Correlates to
            dynamics (volume).
          </p>
          <p style={{ marginBottom: "0px" }}>
            <b>Inputs:</b> V values from other layers, layer entry delay, and
            layer entropy.
          </p>
          <p style={{ marginTop: "0px" }}>
            <b>Outputs:</b> new layer V state, new layer entropy.
          </p>
          <h3>Duration Node (D)</h3>
          <p>
            Duration represents how long a note is held. Correlates to note
            lengths.{" "}
          </p>
          <p>This node operates in a similar function to the velocity node.</p>
          <h3>Pitch Node (P)</h3>
          <p>
            Pitch represents which note is currently playing. This node keeps
            track of two key values:
          </p>
          <ul>
            <li>
              <b>Pitch (P):</b> Stores a pitch value for a MIDI note-on message,
              which corresponds to keys on an 88 key piano. This value is
              accessible in layer state and by other layers.
            </li>
            <li>
              <b>Pitch deviation (Pd):</b> Stores the number of steps between
              the previously played note and the current note. This value ranges
              from -12 to 12, representing a span of two octaves. Corresponds to
              the interval. This value is only accessible by the pitch node.
            </li>
          </ul>
          <p style={{ marginBottom: "0px" }}>
            <b>Inputs:</b> Current Pd value, P values from other layers, layer
            entry delay, and layer entropy.
          </p>
          <p style={{ marginTop: "0px" }}>
            <b>Outputs:</b> new Pd value, new layer P state, new layer entropy.
          </p>
          <p>
            First, this note uses layer E, layer entropy, and current Pd to
            calculate the new Pd value. This new Pd value is fed into a look-up{" "}
            table to determine the new interval for the next note.
          </p>
          <p>
            The node then uses the current P values of each layer to generate a
            new starting pitch, using layer entropy to determine the note
            distribution. Finally, we add the calculated interval to this note
            to determine the final P output, and update layer entropy
            accordingly.
          </p>
        </div>
      </FadeInSection>
    </div>
  );
};
