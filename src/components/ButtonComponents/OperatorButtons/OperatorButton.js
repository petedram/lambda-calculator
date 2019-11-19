import React from "react";

export const OperatorButton = (props) => {
  return <button key={props.operator} className="button operatorsButton" id={props.operator}
  onClick={() => alert(props.operator)}
  >{props.operator}</button>
      /* Display a button element rendering the data being passed down from the parent container on props */
};
