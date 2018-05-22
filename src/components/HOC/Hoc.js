import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withLoading from './simpleHOC';
import TestMouse from './AppWithMouse';
import { getData } from './fakeApi';
import styled from 'styled-components';

const Text = () => <h3>A basic HOC by example</h3>;
const TestLoadingComponent = withLoading(Text);

class Hoc extends Component {
  state = {
    loading: false,
  };

  fetchData = async () => {
    this.setState({ loading: true });
    try {
      await getData();
      this.setState({ loading: false });
    } catch (e) {
      this.setState({ loading: false });
    }
  };

  render() {
    return (
      <WrapperHOC>
        <div>
          <div className="form-group">
            <TestLoadingComponent isLoading={this.state.loading} />
          </div>
          <div className="form-group" style={{marginTop: 50}}>
            <button className="btn" onClick={this.fetchData}>
              {this.state.loading ? "loading..." : "Fetch data"}
            </button>
          </div>
        </div>
      </WrapperHOC>
    );
  }
}

Hoc.propTypes = {
  variable: PropTypes.string,
};

export default Hoc;

const WrapperHOC = styled.div`
  display: flex;
  width: 400px;
  justify-content: center;
`;
