import React, { useEffect } from "react";

import "../../styles/text.css";

export const ImprovVideo = (props) => {
  const { updateBG } = props;

  useEffect(() => {
    updateBG(false);
  }, [updateBG]);
  return (
    <div className="page-container fade-in">
      {/* <ScrollingBackground /> */}
      <div className="video-container">
        <iframe
          width="700"
          height="394"
          src="https://www.youtube.com/embed/ggnk1fCQENw"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <p>
          Here is an introductory video exploring the nature of improvisation in
          jazz!
        </p>
      </div>
    </div>
  );
};
