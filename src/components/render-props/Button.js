import React from "react";
import styled, {ThemeProvider} from 'styled-components';

const ButtonStyle = styled.button`
  font-size: 1em;
  padding: 0.5em 1em;
  border-radius: 3px;
  color: #fff;
  background-color: ${props => props.theme.main};
  border: 2px solid ${props => props.theme.main};
`;

ButtonStyle.defaultProps = {
  theme: {
    main: 'palevioletred'
  }
};

const theme = {
  main: 'mediumseagreen'
};

const Button = (props) => {
    return (
        <ThemeProvider theme={theme}>
          <ButtonStyle onClick={props.onClick}>
            {props.text}
          </ButtonStyle>
        </ThemeProvider>
    );
};

export default Button;