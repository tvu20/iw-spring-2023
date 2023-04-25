import React, { useState, useEffect } from "react";

import textFile from "./book.txt";

export const ScrollingBackground = (props) => {
  const [bgText, setBgText] = useState("");
  const [margin, setMargin] = useState("0px");

  useEffect(() => {
    setTimeout(() => {
      setMargin("-3000px");
    }, 1000);

    fetch(textFile)
      // fetch(window.location.href + "data/book.txt")
      .then((r) => r.text())
      .then((text) => {
        console.log(text);
        setBgText(text.replace(/(\r\n|\n|\r)/gm, " "));
      });
  }, []);

  return (
    <div className="scroller">
      <p style={{ marginTop: margin }}>{bgText}</p>
    </div>
  );
};
