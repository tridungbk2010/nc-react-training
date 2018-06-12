import React, { Component, Fragment } from 'react';
import Modal from './Modal';

class TestModal extends Component {
  state = {
    showModal: false,
  };

  showModal = () => {
    this.setState({ showModal: true });
  };

  onClose = () => {
    this.setState({ showModal: false });
  };

  render() {
    return (
      <div>
        <button onClick={this.showModal}>Show modal</button>
        <Modal
            onClose={this.onClose}
            showModal={this.state.showModal}>
          <Fragment>
            <h3>Test Modal</h3>
          </Fragment>
        </Modal>
      </div>
    );
  }
}

export default TestModal;
