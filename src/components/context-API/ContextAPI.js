import React, { Component } from 'react';
import Level2 from './Level2';
import RadioButtons from './RadioButtons';
import {createContext} from 'react';

const RADIO_BTN_COLORS = [
  { id: 1, value: 'papayawhip', label: 'Papayawhip' },
  { id: 2, value: 'palevioletred', label: 'Pale violet red' },
  { id: 3, value: 'mediumseagreen', label: 'Medium sea green' },
];

export const BackgroundContext = createContext();

class ContextAPI extends Component {
  state = {
    bgColor: '#fff',
    resetValue: ''
  };

  radioBtnChange = selectedValue => {
    this.setState({bgColor: selectedValue});
  };
  resetRadioBtn = () => {
    this.setState({resetValue: RADIO_BTN_COLORS[0].value});
  };

  render() {
    return (
      <BackgroundContext.Provider value={{
        bgColor: this.state.bgColor,
        onClick: () => {
          this.setState({
            bgColor: '#fff',
          })
        }
      }}>
        <RadioButtons
          defaultValue={RADIO_BTN_COLORS[0].value}
          data={RADIO_BTN_COLORS}
          onChangeColor={this.radioBtnChange}
          resetValue={this.state.resetValue}
        />
        <Level2 bgColor={this.state.bgColor} />
        <button onClick={this.resetRadioBtn}>Reset radio btn</button>
      </BackgroundContext.Provider>
    );
  }
}

export default ContextAPI;
