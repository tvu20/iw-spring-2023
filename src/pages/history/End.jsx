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
          You have reached the end of Part 1: The Road So Far. To continue onto
          the second part of this interactive website, click Next.
        </p>
        <p>To return to the homepage, click Return.</p>
        <Link to="/algorithm">
          <button>Next</button>
        </Link>
        <Link to="/">
          <button>Return</button>
        </Link>
      </div>
    </div>
  );
};
