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

export const Routing = (props) => {
  const { page } = props;

  const [showBG, setShowBG] = useState(false);

  const updateBG = (value) => {
    if (value !== showBG) setShowBG(value);
  };

  const showPage = () => {
    switch (page) {
      case 0:
        return <TitlePage updateBG={updateBG} />;
      case 1:
        return <Navigation updateBG={updateBG} />;
      case 2:
        return <PageOne updateBG={updateBG} />;
      case 3:
        return <PrevOne updateBG={updateBG} />;
      case 4:
        return <Borgo updateBG={updateBG} />;
      case 5:
        return <Walton updateBG={updateBG} />;
      case 6:
        return <TricaudIntro updateBG={updateBG} />;
      case 7:
        return <Entropy updateBG={updateBG} />;
      case 8:
        return <Rules updateBG={updateBG} />;
      case 9:
        return <Feedback updateBG={updateBG} />;
      //   case 10:
      //     return <ThemeIntro updateBG={updateBG} />;
      //   case 11:
      //     return <Themes updateBG={updateBG} />;
      //   case 12:
      //     return <Outro />;
      //   case 13:
      //     return <Credits />;
      default:
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
