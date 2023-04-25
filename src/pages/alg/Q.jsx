import React from "react";

import FadeInSection from "../../components/FadeInSection";

import "../../styles/text.css";
import "../../styles/homepage.css";
import "../../styles/alg.css";

export const Q = () => {
  return (
    <div className="alg-section alg-container">
      <FadeInSection>
        <h2 style={{ textAlign: "center" }}>
          Can we develop an interactive music-generation algorithm that utilizes
          previously researched emergent patterns to model how music is
          improvised within an ensemble?
        </h2>
      </FadeInSection>
    </div>
  );
};
