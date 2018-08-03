import React from "react";
import withColor from "./withColor";

const View = props => {
  return <div style={{ color: props.color }}> Text </div>;
};

View.defaultProps = {
  color: "red"
};

export default withColor(View);
