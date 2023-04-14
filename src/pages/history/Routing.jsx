import React, { useState } from "react";

// import { ScrollingBackground } from "./ScrollingBackground";

import { TitlePage } from "./TitlePage";
import { PageOne } from "./PageOne";
import { Navigation } from "./Navigation";
import { PrevOne } from "./PrevOne";
import { Borgo } from "./Borgo";
import { Walton } from "./Walton";
import { TricaudIntro } from "./TricaudIntro";
import { Entropy } from "./Entropy";
import { Rules } from "./Rules";
import { Feedback } from "./Feedback";

const pagesArray = [
  TitlePage,
  Navigation,
  PageOne,
  PrevOne,
  Borgo,
  Walton,
  TricaudIntro,
  Entropy,
  Rules,
  Feedback,
];

export const Routing = (props) => {
  const { page } = props;

  const [showBG, setShowBG] = useState(false);

  const updateBG = (value) => {
    if (value !== showBG) setShowBG(value);
  };

  const pageComponent = pagesArray.map((Component, idx) => {
    if (idx === page) {
      return <Component updateBG={updateBG} />;
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
      {/* {showBG && <ScrollingBackground />} */}
      {showPage()}
    </>
  );
};
