import React from "react";

export const SpecialButton = (props) => {
  return <button key={props.special} className="button specialsButton" id={props.special}>{props.special}</button>
  /* Display a button element rendering the data being passed down from the parent container on props */
};

