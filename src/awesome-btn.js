import React from "react";
import withColorChange from "./withColorChange";

const AwesomeBtn = props => {
  return <button onClick={props.changeColor}> Click me</button>;
};

export default withColorChange(AwesomeBtn);
