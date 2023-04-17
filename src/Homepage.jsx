import React from "react";
import { Link } from "react-router-dom";

import music1 from "./images/music1.png";
import music2 from "./images/music2.jpeg";
import neural from "./images/neural.png";
import outputs from "./images/outputs.png";
import exp from "./images/exp.png";

import "./styles/text.css";
import "./styles/homepage.css";

export const Homepage = () => {
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
      <h3>What is this site?</h3>
      <p>
        This site is a portfolio for all of the resources, algorithms, and
        evaluations compiled throughout this independent work process. Click on
        one of the sections below to get started!
      </p>
      <Link to={`history`}>History</Link>
      <Link to={`algorithm`}>Algorithm</Link>
      <Link to={`demo`}>Demo</Link>

      <h3>Acknowledgements</h3>

      <p>Advisor: Professor Radikha Nagpal</p>
      <p>Max and musical guidance: Professor Jeff Snyder</p>
      <p>Inspiration and algorithm advice: Shawn Bell and Liane Gabora</p>
    </div>
  );
};
