import React from 'react';
import Mouse from './Mouse';
import Cat from './Cat';

class MouseTracker extends React.Component {
  render() {
    return (
        <div style={{border:'1px dashed #d0d0d0', backgroundColor:'#fff', padding:30}}>
          <h1>Move the mouse around!</h1>
          <Mouse render={mouse => (
              <div>
                <h2>position is {mouse.x}, {mouse.y}</h2>
                <Cat mouse={mouse} />
              </div>
          )}/>
        </div>
    );
  }
}

export default MouseTracker;