import React, { Component } from 'react';
import styled from 'styled-components';

const fields = [
  { id: '1', type: 'text', name: 'username', placeholder: 'User name' },
  { id: '2', type: 'password', name: 'password', placeholder: 'Password' },
];

const styles = theme => ({
  margin: {
    margin: theme.spacing.unit,
  },
});

class LoginForm extends Component {
  state = {
    formData: {
      username: '',
      password: '',
    },
  };

  handleChange = e => {
    const { formData } = this.state;
    formData[e.target.name] = e.target.value;
    this.setState({ formData });
  };

  render() {
    return (
      <FormWrapper className="input-field col s12">
        {fields.map(({ id, type, name, placeholder }) => (
            <Input
                key={id}
                placeholder={placeholder}
                type={type}
                name={name}
                onChange={this.handleChange}
            />
        ))}
        {this.props.render(this.state.formData)}
      </FormWrapper>
    );
  }
}

export default LoginForm;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  margin: 1em 0;
  padding: 1em 0.5em;
  background: transparent;
  border: 1px solid #e0e0e0;
  border-radius: 3px;
`;
