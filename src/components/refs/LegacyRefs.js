import React, { Component } from "react";
import PropTypes from "prop-types";

class LegacyRefs extends Component {

  componentDidMount(){
    this.refs.inputRef.focus();
  }

  render() {
    return (
        <div>
          <h3>Legacy ref:</h3>
          <input type="text" ref="inputRef" className={"form-control"} />
        </div>
    );
  }
}

LegacyRefs.propTypes = {
    variable: PropTypes.string
};

export default LegacyRefs;