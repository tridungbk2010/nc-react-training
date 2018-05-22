import React, { Component } from "react";
import PropTypes from "prop-types";
import {withMouse} from './withMouseHOC';

class AppWithMouse extends Component {
  render() {
    const { x, y } = this.props.mouse;
    return (
        <div style={{textAlign: 'center'}}>
          <h3>The mouse position is ({x}, {y})</h3>
        </div>
    );
  }
}

AppWithMouse.propTypes = {
    variable: PropTypes.string
};

export default withMouse(AppWithMouse);