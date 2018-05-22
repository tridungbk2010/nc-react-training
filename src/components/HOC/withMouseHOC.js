import React from 'react'

export const withMouse = (Component) => {
  return class extends React.Component {
    state = { x: 0, y: 0 };

    handleMouseMove = (event) => {
      this.setState({
        x: event.clientX,
        y: event.clientY
      })
    };

    render() {
      return (
          <div style={{ height: '100%' }} onMouseMove={this.handleMouseMove}>
            <Component {...this.props} mouse={this.state}/>
          </div>
      )
    }
  }
};