import React, { Component } from 'react';
import styled from 'styled-components';
import { BackgroundContext } from './ContextAPI';
import Button from '../render-props/Button';
import {LvContext} from './Level2';

const BoxLevel3 = styled.div`
  width: 250px;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  background: ${props => (props.bgColor ? props.bgColor : 'palevioletred')};
  border-radius: 3px;
`;

class Level3 extends Component {
  render() {
    return (
      <BackgroundContext.Consumer>
        {state => (
          <BoxLevel3 bgColor={state.bgColor}>
            <div>
              <h3>Level 3</h3>
              <button onClick={state.onClick}>Reset background color</button>
              <LvContext.Consumer>{
                newState => (
                    <div>{newState.name}</div>
                )
              }</LvContext.Consumer>
            </div>
          </BoxLevel3>
        )}

      </BackgroundContext.Consumer>
    );
  }
}

export default Level3;
