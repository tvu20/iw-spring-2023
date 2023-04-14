import React, { useEffect } from "react";

import "../../styles/text.css";

export const VoyagerThree = (props) => {
  const { updateBG } = props;

  useEffect(() => {
    updateBG(false);
  }, [updateBG]);
  return (
    <div className="page-container fade-in">
      {/* <ScrollingBackground /> */}
      <div className="text-container">
        <p>
          Lewis explains his intention with Voyager in an interview with Max
          from 2020:
        </p>
        <p className="quote">
          I try to make it so that Voyager has a lot of different ways it can
          respond that seem plausible to what someone is going to do. And so in
          order to do that, there have to be a lot of different possibilities
          you have to build in for what's possible, it can't just keep
          responding in the same way because, one, the musicians will get bored
          - they'll hear that right away because they're very experienced. The
          second thing is there's always going to be a kind of rigidity where
          the musicians say, “Well, it just doesn't understand what I'm doing.”
          That can happen with anybody. It could also happen today. I played it
          once with John Oswald, and it didn’t work out at all. Not because of
          John – he’s a great player and great improviser. He just has a very
          different way of thinking about the world than what I was doing with
          Voyager. So when I do change something around, that's a challenge
          because Voyager should really change itself. It should just say, “Oh,
          this what's going on, and I'll do this….” But if I have to sit there
          and go, “Oh, I’ve got to tweak this,” that means I didn't account for
          some possibility, which is clearly present.
        </p>
      </div>
    </div>
  );
};
