import React, { Component } from "react";
import PropTypes from "prop-types";
import ChildComponent from './ChildComponent';
// import ChildClassComp from './ChildClassComp';
import LegacyRefs from './LegacyRefs';
import NewRefs from './NewRefs';

class Refs extends Component {
  constructor(props){
    super(props);
    this.textInput = React.createRef();
  }

  focusTextInput = () => {
    this.textInput.current.focus();
  };

  render() {
    return (
        <div style={{
          textAlign:'center',
          margin:'0 auto',
          display: 'flex',
          justifyContent:'space-around'
        }}>
          <div>
            <LegacyRefs/>
          </div>
          <div>
            <NewRefs/>
          </div>
          <div style={{background:'papayawhip', height: '100%', padding: 20}}>
            <h3>Forwarding refs to DOM components</h3>
            <ChildComponent ref={this.textInput}/>
            <div className="form-group">
              <p>Parent component</p>
              <button onClick={this.focusTextInput} className="btn">
                Focus the text input
              </button>
            </div>
          </div>
        </div>
    );
  }
}

Refs.propTypes = {
    variable: PropTypes.string
};

export default Refs;