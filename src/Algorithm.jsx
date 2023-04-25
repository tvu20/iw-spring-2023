import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import "./styles/main.css";

import { Banner } from "./pages/alg/Banner";
import { Q } from "./pages/alg/Q";
import { KeyTerms } from "./pages/alg/KeyTerms";
import { Network } from "./pages/alg/Network";
import { Node } from "./pages/alg/Node";
import { End } from "./pages/alg/End";

function Algorithm() {
  const { pathname } = useLocation();

  useEffect(() => {
    // "document.documentElement.scrollTo" is the magic for React Router Dom v6
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // Optional if you want to skip the scrolling animation
    });
  }, [pathname]);
  // return <Homepage />;
  return (
    <>
      <Banner />
      <Q />
      <KeyTerms />
      <Network />
      <Node />
      <End />
      <div
        style={{
          backgroundColor: "rgba(5, 62, 61, 0.9)",
          height: "20px",
          width: "100%",
        }}
      >
        {" "}
      </div>
    </>
  );
}

export default Algorithm;
