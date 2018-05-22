import React from 'react';
import {PacmanLoader} from 'react-spinners';

const withLoading = Component => {
  class HOC extends React.Component {
    render() {
      if (this.props.isLoading) {
        return <PacmanLoader loading={true} color="mediumseagreen"/>;
      }
      return <Component {...this.props} />;
    }
  }

  return HOC;
};

export default withLoading;
