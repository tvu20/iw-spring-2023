import React from "react";
import "../../styles/text.css";
import "../../styles/homepage.css";
import "../../styles/alg.css";

import diagram from "../../images/networkdiagram.png";

export const Network = () => {
  return (
    <div className="alg-section alg-container" style={{ paddingTop: "30px" }}>
      <h3 style={{ marginBottom: "20px" }}>High-Level Architecture</h3>
      <img className="diagram-img" src={diagram} alt="Layer of Network" />
      <div className="alg-explanation">
        <p>
          Our algorithm consists of a <b>network of layers</b>,{" "}
          <b>universal state values</b>, and a series of{" "}
          <b>user inputs/contraints.</b>{" "}
        </p>
        <h3>Network of Layers</h3>
        <p>
          Each layer in the network is identified by its timbre as representing
          a particular instrument. Each layer contains some layer-specific
          state, which is widely accessible by all nodes at all times. There are
          interlayer connections between each of the layers in the system, which
          can be pruned as desired by the user.{" "}
        </p>
        <h3>Universal State Values</h3>
        <ul>
          <li>
            <b>Network entropy: </b> Describes the current entropy in the entire
            network. Calculated as the average entropy across all layers.
          </li>
          <li>
            <b>Universal metronome (ED): </b> Metronome for the entire iteration
            of the program. Set by the user before the program runs and is
            referenced by all layers.
          </li>
          <li>
            <b>Hierarchy of instruments:</b> From least amount of disorder to
            greatest amount of disorder. Entropy values of neighboring layers
            act as constraints for each layer's entropy value.{" "}
          </li>
        </ul>
        <h3>User Inputs/Constraints</h3>
        <p>
          Rules set by the user at the beginning of the program. Some of these
          are variable, meaning that they can change based on both user and
          program behavior. Others are fixed, such as the universal metronome
          and the number of layers.
        </p>
      </div>
    </div>
  );
};
