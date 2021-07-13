// tour.js

import React from "react";
import JoyRide from "react-joyride";

// Tour steps
const TOUR_STEPS = [
  {
    target: ".recharts-responsive-container",
    content:
      "CHARTTTTTTTTTT"
  },
  {
    target: "#left",
    content: "This is where you can search the dashboard.",
  },
];

// Tour component
const Tour = () => {
  return (
    <>
        <JoyRide
        steps={TOUR_STEPS}
        continuous={true}
        showSkipButton={true}
        locale={{
          last: "End Tour",
          skip: "Close Tour"
        }}
      />
    </>
  );
};

export default Tour;