import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NewRefs extends Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
  }

  focusTextInput = () => {
    this.textInput.current.focus();
  };

  render() {
    return (
      <div>
        <h3>New refs</h3>
        <div>
          <div className="form-group">
            <input type="text" className="form-control" ref={this.textInput} />
          </div>
          <div className="form-group">
            <button onClick={this.focusTextInput} className="btn btn-primary">
              Focus the text input
            </button>
          </div>
        </div>
      </div>
    );
  }
}

NewRefs.propTypes = {
  variable: PropTypes.string,
};

export default NewRefs;
