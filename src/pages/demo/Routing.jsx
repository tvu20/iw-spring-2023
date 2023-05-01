import React, { useState } from "react";

import { ScrollingBackground } from "../../components/ScrollingBackground";

import { pagesArray } from "./pages";

export const Routing = (props) => {
  const { page } = props;

  const [showBG, setShowBG] = useState(false);

  const updateBG = (value) => {
    if (value !== showBG) setShowBG(value);
  };

  const pageComponent = pagesArray.map((Component, idx) => {
    if (idx === page) {
      return <Component key={idx} updateBG={updateBG} />;
    } else {
      return null;
    }
  });

  const showPage = () => {
    if (page < pagesArray.length) {
      return <div>{pageComponent}</div>;
    } else {
      return <div>Doesn't exist yet sorry</div>;
    }
  };

  return (
    <>
      {showBG && <ScrollingBackground />}
      {showPage()}
    </>
  );
};
