import React, { Component } from 'react';
import Login from './components/render-props/Login';
import TestModal from './components/portal/TestModal';
import ContextAPI from './components/context-API/ContextAPI';
import Hoc from './components/HOC/Hoc';
import Refs from './components/refs/Refs';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import TestMouse from "./components/HOC/AppWithMouse";
import MouseTracker from "./components/render-props/MouseTracker";

const MainLayout = styled.div`
  background-color: #f0f0f0;
  height: 100vh;
  width: 100%;
  font-family: Arial, san-serif;
`;

const NavCustomLink = styled.li`
  a{
    color: #000 !important;
    display:block;
  }
  &:hover {
    a {
      color: orange !important;
     }
  }
`;

const Nav = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #fff;
  height: 60px;
  list-style: none;
`;

class App extends Component {
  render() {
    return (
      <Router>
        <MainLayout>
          <Nav>
            <NavCustomLink>
              <NavLink to="/">Home</NavLink>
            </NavCustomLink>
            <NavCustomLink>
              <NavLink to="/render-props">Render props</NavLink>
            </NavCustomLink>
            <NavCustomLink>
              <NavLink to="/hoc">HOC</NavLink>
            </NavCustomLink>
            <NavCustomLink>
              <NavLink to="/portal">React Portal</NavLink>
            </NavCustomLink>
            <NavCustomLink>
              <NavLink to="/context-api">Context-API</NavLink>
            </NavCustomLink>
            <NavCustomLink>
              <NavLink to="/refs">Refs</NavLink>
            </NavCustomLink>
            <NavCustomLink>
              <NavLink to="/hoc-mouse">HOC mouse</NavLink>
            </NavCustomLink>
            <NavCustomLink>
              <NavLink to="/render-props-mouse">Render props mouse</NavLink>
            </NavCustomLink>
          </Nav>
          <Route exact path="/" component={() => <h2>React training</h2>} />
          <Route path="/render-props" component={Login} />
          <Route path="/hoc" component={Hoc} />
          <Route path="/portal" component={TestModal} />
          <Route path="/refs" component={Refs} />
          <Route path="/hoc-mouse" component={TestMouse} />
          <Route path="/render-props-mouse" component={MouseTracker} />
          <Route
            path="/context-api"
            component={ContextAPI}
          />
        </MainLayout>
      </Router>
    );
  }
}

export default App;
