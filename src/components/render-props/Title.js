import React, { Component } from "react";
import styled from 'styled-components';

class Title extends Component {
  state = {
    title: ''
  };
  componentWillReceiveProps(nextprops){
    console.log(nextprops.title);
  }
  render() {
    return (
        <TitleStyled>
          {this.props.title}
        </TitleStyled>
    );
  }
}

const TitleStyled = styled.h2`
  font-size: 20px;
  light-weight: 24px;
  color: #888;
`;

export default Title;