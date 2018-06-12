import React, { Component, Fragment } from 'react';
import Modal from './Modal';
import LoginForm from '../render-props/Login';
import delayFunction from '../../utils';

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

  afterLoginSuccessFully = async () => {
    await delayFunction(1000);
    this.setState({ showModal: false });
  };

  render() {
    return (
      <div>
        <button onClick={this.showModal}>Show modal</button>
        <Modal
          isConfirmForm={false}
          onClose={this.onClose}
          handleConfirm={this.onClose}
          showModal={this.state.showModal}
        >
          <Fragment>
            <LoginForm afterLoginSuccessFully={this.afterLoginSuccessFully} />
          </Fragment>
        </Modal>
      </div>
    );
  }
}

export default TestModal;
