import React, { Component } from 'react';
import styled from 'styled-components';
import LoginForm from './LoginForm';
import Button from './Button';

class Login extends Component {
  onLogin = dataForm => {
    console.log(dataForm);
    this.props.afterLoginSuccessFully();
  };

  render() {
    return (
      <LoginContainer>
        <Header size="large">Login form</Header>
        <LoginForm
          render={dataForm => (
            <div style={{ marginTop: 20 }}>
              <Button onClick={this.onLogin.bind(this, dataForm)} text="Login"/>
            </div>
          )}
        />
      </LoginContainer>
    );
  }
}

export default Login;

const Header = styled.h1`
  font-size: ${props => (props.size === 'large' ? '20px' : '10px')};
  text-align: center;
`;

const LoginContainer = styled.div`
  font-size: 1em;
  padding: 1em;
  width: 300px;
  margin: 0 auto;
  background-color: #fff;
`;
