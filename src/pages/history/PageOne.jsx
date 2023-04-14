import React, { useEffect } from "react";

import "../../styles/text.css";

export const PageOne = (props) => {
  const { updateBG } = props;

  useEffect(() => {
    updateBG(false);
  }, [updateBG]);
  return (
    <div className="page-container fade-in">
      {/* <ScrollingBackground /> */}
      <div className="text-container">
        <p>
          Musical ensemble improvisation is an incredibly complex, impressive,
          and unpredictable phenomenon. In such a performance, musicians pick up
          on existing dynamics within the group, follow a set of unspoken rules,
          and adapt over time to meet the needs of their fellow ensemble
          members.
        </p>
        <p>
          A significant amount of behavioral research has been done on the
          parallel between self-organization in non-human complex systems such
          as ant colonies or fish swarms and the process of musical
          improvisation. The common thread lies with the presence of emergent
          patterns, which occurs when a system is observed to have properties or
          interactions arising when observed at a high level that cannot be
          predicted by its individual parts.
        </p>
      </div>
    </div>
  );
};
