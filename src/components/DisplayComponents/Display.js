import React, { useState } from "react";

export const Display = () => {
  const [displayState, setDisplayState] = useState(0);
  console.log(displayState)
  return <div className="display">{displayState}</div>;
};

