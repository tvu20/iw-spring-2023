import React, { useEffect } from "react";

import "../../styles/text.css";

export const VoyagerTwo = (props) => {
  const { updateBG } = props;

  useEffect(() => {
    updateBG(false);
  }, [updateBG]);
  return (
    <div className="page-container fade-in">
      {/* <ScrollingBackground /> */}
      <div className="text-container">
        <p>
          Lewis provides an overview of the algorithm behind Voyager in his 2000
          article, “Too Many Notes: Complexity and Culture in Voyager”:
        </p>
        <p className="quote">
          The Voyager program is conceived as a{" "}
          <b>
            set of 64 asynchronously operating single-voice MIDI-controlled
            “players,”
          </b>{" "}
          all generating music in real time. Several different (and to some,
          clashing) sonic behavior groupings, or ensembles, may be active
          simultaneously, moving in and out of metric synchronicity, with no
          necessary arithmetic correlation between the strongly discursive
          layers of multirhythm. While this is happening, a lower-level routine
          parses incoming MIDI data into separate streams for up to two human
          improvisors, who are either performing on MIDI-equipped keyboards or
          playing acoustic instruments through “pitch followers,” devices that
          try to parse the sounds of acoustic instruments into MIDI data
          streams.
        </p>
      </div>
    </div>
  );
};
