import React from "react";

import FadeInSection from "../../components/FadeInSection";

import timbre from "../../images/timbre.png";
import mess from "../../images/mess.png";
import rules from "../../images/rules.png";

import "../../styles/text.css";
import "../../styles/homepage.css";
import "../../styles/alg.css";

export const KeyTerms = () => {
  return (
    <div className="alg-section alg-container" style={{ paddingTop: "30px" }}>
      <FadeInSection>
        <h3>Key Terms</h3>
      </FadeInSection>
      <FadeInSection>
        <div className="goals-container alg-item-container">
          <div className="goals-item auto-height alg-item">
            <a
              href="https://www.flaticon.com/free-icons/musical-instrument"
              title="algorithm icons"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={timbre}
                alt="Musical instrument icons created by surang - Flaticon"
              />
            </a>
            <h4>Timbre</h4>
            <p>
              The quality of a musical sound, often determined by the instrument
              used.
            </p>
            <p>
              In an ensemble, each instrument contributes a different musical
              tone and quality.{" "}
            </p>
            <p>
              In our algorithm, we construct a <b>series of node layers,</b>{" "}
              where each layer represents an individual member/instrument.
            </p>
          </div>
          <div className="goals-item auto-height alg-item">
            <a
              href="https://www.flaticon.com/free-icons/mess"
              title="output icons"
              target="_blank"
              rel="noreferrer"
            >
              <img src={mess} alt="Mess icons created by Freepik - Flaticon" />
            </a>
            <h4>Entropy</h4>
            <p>
              The amount of disorder in the system. Each individual has an
              entropy level, and the entire network also has an overall entropy.
            </p>
            <p>
              A <b>hierarchy of instruments</b> is created, where entropy of
              each individual influenced by those above and below.{" "}
            </p>
            <p>
              The entropy of the system changes over time to reflect the amount
              of randomness in the notes generated!
            </p>
          </div>

          <div className="goals-item auto-height alg-item">
            <a
              href="https://www.flaticon.com/free-icons/rules"
              title="music icons"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={rules}
                alt="Rules icons created by Freepik - Flaticon"
              />
            </a>
            <h4>Rules</h4>
            <p>
              Orient each individual’s behaviors but cannot predict the behavior
              of the system as a whole.
            </p>

            <p>
              Some rules <b>cannot change:</b> instruments have diffirent
              physical constraints, and we can set initial musical guidelines
              (starting pitches, metronome tempo).
            </p>
            <p>
              Other rules can be <b>changed by the user as the program runs:</b>{" "}
              for example, communication and connections between individuals.{" "}
            </p>
          </div>
        </div>
      </FadeInSection>
    </div>
  );
};
