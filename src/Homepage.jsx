import React from "react";
import { Link } from "react-router-dom";

import "./styles/text.css";

export const Homepage = () => {
  return (
    <div className="page-container fade-in">
      {/* <ScrollingBackground /> */}
      <div className="title-container">
        <h1>Emergent Properties</h1>
        <Link to={`history`}>History</Link>
        <Link to={`demo`}>Demo</Link>
        <h2>Original Novel by Leo Tolstoy</h2>
        <p>
          A brief textual analysis of one of the most highly praised pieces of
          world classical literature, presented as an interactive data
          visualization essay.
        </p>
        <h4>Created by Giao Vu Dinh | Originally published in July 2022</h4>
      </div>
    </div>
  );
};
