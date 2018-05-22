import React, { Component } from 'react';
import Modal from './Modal';
import styled from 'styled-components';

class TestModal extends Component {
  state = {
    showModal: false,
  };

  showModal = () => {
    this.setState({ showModal: !this.state.showModal });
  };

  render() {
    return (
      <div>
        <button onClick={this.showModal}>Show modal</button>
        {this.state.showModal && (
          <Modal>
            <ModalOverlay>
              <ChildWrapper>
                <h3>Test Modal</h3>
                <button onClick={this.showModal}>Close</button>
              </ChildWrapper>
            </ModalOverlay>
          </Modal>
        )}
      </div>
    );
  }
}

const ChildWrapper = styled.div`
  background-color: #fff;
  width: 320px;
  height: 300px;
`;

const ModalOverlay = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default TestModal;
