import React, { Component } from 'react';

class Mouse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      y: 0,
      fixed: false,
    };
  }

  handleMouseMove = event => {
    this.setState({
      x: event.clientX,
      y: event.clientY,
    });
  };

  handleClick = event => {
    this.setState({
      x: event.clientX,
      y: event.clientY,
      fixed: true,
    });
  };

  render() {
    return (
      <div
        style={{ height: '100vh', width: '100vw' }}
        onMouseMove={this.state.fixed ? undefined : this.handleMouseMove}
        onClick={this.handleClick}
      >
        {this.props.render(this.state)}
      </div>
    );
  }
}

export default Mouse;
