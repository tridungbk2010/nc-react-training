import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const RadioGroup = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Radio = styled.div``;

class RadioButtons extends Component {
  state = {
    selected: '',
  };

  componentDidMount() {
    if (this.props.defaultValue) {
      this.setState({ selected: this.props.defaultValue });
    }
  }

  static getDerivedStateFromProps(nextProps, prevState){
    console.log(nextProps, prevState);
    return {
      selected: 'abc'
    }
  }

  onChange = selected => {
    this.setState({ selected });
    this.props.onChangeColor(selected);
  };

  render() {
    return (
      <RadioGroup>
        {this.props.data.map(color => (
          <Radio key={color.id}>
            <label>
              {color.label}
              <input
                type="radio"
                value={color.value}
                onChange={this.onChange.bind(this, color.value)}
                checked={this.state.selected === color.value}
              />
            </label>
          </Radio>
        ))}
      </RadioGroup>
    );
  }
}

RadioButtons.propTypes = {
  data: PropTypes.array,
  onChangeColor: PropTypes.func,
  defaultValue: PropTypes.string,
  resetValue: PropTypes.string,
};

export default RadioButtons;
