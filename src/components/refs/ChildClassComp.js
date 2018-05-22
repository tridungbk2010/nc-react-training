import React, { Component } from "react";
import PropTypes from "prop-types";

class ChildClassComp extends Component {
  render() {
    return (
        <input type="text" className="form-control"/>
    );
  }
}

ChildClassComp.propTypes = {
    variable: PropTypes.string
};

export default ChildClassComp;