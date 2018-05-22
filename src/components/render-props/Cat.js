import React from 'react';

class Cat extends React.Component {
  render() {
    const { mouse } = this.props;
    return (
        <img src={require("./cat.png")} style={{ position: 'absolute', left: mouse.x, top: mouse.y }} />
    );
  }
}

export default Cat;