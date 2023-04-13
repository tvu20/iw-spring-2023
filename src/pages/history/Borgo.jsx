import React, { useEffect } from "react";

import "../../styles/text.css";

export const Borgo = (props) => {
  const { updateBG } = props;

  useEffect(() => {
    updateBG(false);
  }, [updateBG]);
  return (
    <div className="page-container fade-in">
      {/* <ScrollingBackground /> */}
      <div className="text-container">
        <p>
          In 2005, David Borgo published his book “Sync or Swarm: Improvising
          Music in a Complex Age,” a book that examined the practice of
          improvisational music through the lens of contemporary science. Here,
          Borgo wrote:{" "}
        </p>
        <p className="quote">
          Waldrop’s descriptions of the science of complexity spoke of systems
          poised on “the edge of chaos,” never quite locking into place nor
          dissolving into complete turbulence; systems that could self-organize
          and adapt to a constantly shifting environment. “The edge of chaos,”
          he writes, “is where new ideas … are forever nibbling away at the
          edges of the status quo… the edge of chaos is the constantly shifting
          battle zone between stagnation and anarchy, the one place where a
          complex system can be spontaneous, adaptive, and alive.” I can think
          of no better definition of improvised music.
        </p>
      </div>
    </div>
  );
};
