import React from "react";
import { Link } from "react-router-dom";

import FadeInSection from "../../components/FadeInSection";

import "../../styles/text.css";

export const End = () => {
  return (
    <div
      className="alg-section alg-container"
      style={{ paddingTop: "50px", paddingBottom: "70px" }}
    >
      <FadeInSection>
        {/* <ScrollingBackground /> */}
        <div className="alg-explanation" style={{ textAlign: "center" }}>
          <p>
            You have reached the end of Part 2: Algorithm Design. To continue
            onto the third part of this website, click Next.
          </p>
          <p>To return to the homepage, click Return.</p>
          <Link to="/demo">
            <button
              className="btn end-btn"
              style={{ backgroundColor: "rgba(5, 62, 61, 0.9)" }}
            >
              Next
            </button>
          </Link>
          <Link to="/">
            <button style={{ marginRight: 0 }} className="btn return-btn">
              Return
            </button>
          </Link>
        </div>
      </FadeInSection>
    </div>
  );
};
