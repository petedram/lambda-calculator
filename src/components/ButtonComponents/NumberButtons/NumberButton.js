import React from "react";

export const NumberButton = (props) => {
  return <button key={props.number} className="button numsButton" id={'b'+props.number}>{props.number}</button>
      /* Display a button element rendering the data being passed down from the parent container on props */
};
