import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import { Footer } from "./components/Footer";

import music1 from "./images/music1.png";
import music2 from "./images/music2.jpeg";
import neural from "./images/neural.png";
import outputs from "./images/outputs.png";
import exp from "./images/exp.png";
import alg from "./images/alg.jpeg";
import history from "./images/history.jpeg";
import demo from "./images/demo.png";

import "./styles/text.css";
import "./styles/homepage.css";

export const Homepage = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // "document.documentElement.scrollTo" is the magic for React Router Dom v6
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // Optional if you want to skip the scrolling animation
    });
  }, [pathname]);

  return (
    <div className="homepage-container fade-in">
      {/* <ScrollingBackground /> */}
      <div className="home-banner">
        <h1>
          Music Generation Based on Self-Organization and Emergent Patterns
        </h1>
        <h2>
          Created by Giao Vu Dinh | Independent Work Project for Spring 2023
        </h2>
      </div>
      <div className="home-section flex-container">
        <div className="flex-item">
          <p>
            Musical ensemble improvisation is an incredibly complex, impressive,
            and unpredictable phenomenon. In such a performance, musicians pick
            up on existing dynamics within the group, follow a set of unspoken
            rules, and adapt over time to meet the needs of their fellow
            ensemble members.
          </p>
          <p>
            A significant amount of behavioral research has been done on the
            parallel between self-organization in non-human complex systems such
            as ant colonies or fish swarms and the process of musical
            improvisation. The common thread lies with the presence of emergent
            patterns, which occurs when a system is observed to have properties
            or interactions arising when observed at a high level that cannot be
            predicted by its individual parts.
          </p>
        </div>
        <div className="flex-item__image hide-mobile">
          <img src={music1} alt="music" />
        </div>
      </div>
      <div className="home-section flex-container">
        <div className="flex-item__image">
          <img src={music2} alt="music" />
        </div>
        <div className="flex-item flex-item-custom">
          <p>Within a musical ensemble, musicians:</p>
          <ul>
            <li>Pick up on existing dynamics within the group</li>
            <li>Follow a set of constraints/rules</li>
            <li>Adapt over time to meet the needs of the group</li>
          </ul>
          <p>
            Musical improvisation demonstrates many properties of
            self-organization within non-human complex systems!
          </p>
          <p>
            Gaining a better understanding behind the underlying mechanisms of
            improvisation and musical emergence would have a lot of implications
            for the artistic field: for example, new composition techniques
            could be developed through using swarm intelligence models to
            generate innovative and dynamic compositions, or can help budding
            musicians develop their musicality and artistic voice.
          </p>
        </div>
      </div>
      <div className="goals-banner">
        <h3>Project Goals</h3>
        <div className="goals-container">
          <div className="goals-item">
            <a
              href="https://www.flaticon.com/free-icons/algorithm"
              title="algorithm icons"
              target="_blank"
              rel="noreferrer"
            >
              <img src={neural} alt="icons created by netscript" />
            </a>
            <h4>Design an algorithm</h4>
            <p>
              for a model that generates music using self-organization and
              emergent properties.
            </p>
          </div>
          <div className="goals-item">
            <a
              href="https://www.flaticon.com/free-icons/output"
              title="output icons"
              target="_blank"
              rel="noreferrer"
            >
              <img src={outputs} alt="icon by Vlad Szirka" />
            </a>
            <h4>Generate outputs</h4>
            <p>
              evaluate key pieces of the algorithm to demonstrate proof of
              concept and scalability.
            </p>
          </div>

          <div className="goals-item">
            <a
              href="https://www.flaticon.com/free-icons/music"
              title="music icons"
              target="_blank"
              rel="noreferrer"
            >
              <img src={exp} alt="icons created by Freepik" />
            </a>
            <h4>Curate an experience</h4>
            <p>
              for musicians and computer scientists to approach this media and
              gain a better understanding of the field.
            </p>
          </div>
        </div>
      </div>
      <div className="grid-container">
        <div className="grid-item">
          <h3>How should I start using this site?</h3>
        </div>
        <div className="grid-item">
          <p>
            This site is a portfolio for all of the resources, algorithms, and
            evaluations compiled throughout this independent work process. Click
            on one of the sections below to get started!
          </p>
        </div>
      </div>
      <div style={{ width: "100%", marginBottom: "100px" }}>
        <div className="goals-container">
          <div className="button-item">
            <Link to={`history`}>
              <img src={history} alt="history" />
            </Link>
            <h4>Part 1: History</h4>
            <p>
              Take a look at the road so far - what's been researched previously
              in the fields of self-organization within musical improvisation
              and generative music.{" "}
            </p>
          </div>
          <div className="button-item">
            <Link to={`algorithm`}>
              <img src={alg} alt="alg" />
            </Link>
            <h4>Part 2: Algorithm</h4>
            <p>
              How do we develop a model representing an interactive
              music-generation system that utilizes emergent patterns to model
              how music is improvised within an ensemble?
            </p>
          </div>
          <div className="button-item">
            <Link to={`demo`}>
              <img src={demo} alt="demo" />
            </Link>
            <h4>Part 3: Demo</h4>
            <p>
              By representing key pieces of the algorithm as Max patchers and
              evaluating their outputs, we can draw inferences about how the
              larger-scale program might function.{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="thanks-banner" style={{ marginBottom: "50px" }}>
        <h3>Acknowledgements</h3>

        <p>
          <b>Advisor:</b> Professor Radikha Nagpal
        </p>
        <p>
          <b>Max and musical guidance:</b> Professor Jeff Snyder
        </p>
        <p style={{ marginBottom: "80px" }}>
          <b>Inspiration and algorithm advice:</b> Shawn Bell and Liane Gabora
        </p>
      </div>

      <Footer />
    </div>
  );
};
