import React, { Component } from 'react';
import styled from 'styled-components';
import Level3 from './Level3';
import {createContext} from 'react';

const ColorBox = styled.div`
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  background-color: ${props =>
    props.bgColor ? props.bgColor : 'mediumseagreen'};
`;
export const LvContext = createContext();
class Level2 extends Component {
  render() {
    return (
      <LvContext.Provider value={{
        name: 'dung.ho'
      }}>
        <h2>Context API</h2>
        <ColorBox>
          <h3>Level 2</h3>
        </ColorBox>
        <Level3 />
      </LvContext.Provider>
    );
  }
}

export default Level2;
