import React from "react";
import { connect } from "react-redux";

const withColor = Component => {
  const WrappedComponent = props => {
    return <Component color={props.color} />;
  };

  const mapStateToProps = state => {
    return {
      color: state.view.color
    };
  };

  return connect(
    mapStateToProps,
    null
  )(WrappedComponent);
};

export default withColor;
