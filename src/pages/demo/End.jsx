import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import "../../styles/text.css";

export const End = (props) => {
  const { updateBG } = props;

  useEffect(() => {
    updateBG(false);
  }, [updateBG]);
  return (
    <div className="page-container fade-in">
      {/* <ScrollingBackground /> */}
      <div className="text-container">
        <p>
          You have reached the end of Part 3: Algorithm Demos and Evaluation.
        </p>
        <p>
          Thank you for exploring the site - your interest and time is greatly
          appreciated. We hope that you have learned something new and gained an
          appreciation for the fields of improvisation and self-organized music!{" "}
        </p>
        <p>
          You may revisit any of the previous sections by returning to the
          landing page.{" "}
        </p>
        <Link to="/">
          <button className="btn end-btn">Return</button>
        </Link>
      </div>
    </div>
  );
};
