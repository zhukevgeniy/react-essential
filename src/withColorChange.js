import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { changeViewColor } from "./awesome-btn.action-creators";

const withColorChange = Component => {
  const WrappedComponent = props => {
    return <Component changeColor={props.changeColor} />;
  };

  const mapDispatchToProps = dispatch =>
    bindActionCreators(
      {
        changeColor: changeViewColor
      },
      dispatch
    );

  return connect(
    null,
    mapDispatchToProps
  )(WrappedComponent);
};

export default withColorChange;
