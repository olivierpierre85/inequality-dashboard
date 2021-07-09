// tour.js

import React from "react";
import JoyRide from "react-joyride";

// Tour steps
const TOUR_STEPS = [
  {
    target: "#left",
    content: "This is where you can search the dashboard.",
  },
  {
    target: ".recharts-responsive-container",
    content:
      "CHARTTTTTTTTTT"
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
          last: "End tour",
          skip: "Close tour"
        }}
      />
    </>
  );
};

export default Tour;