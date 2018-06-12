import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
const modalRoot = document.getElementById('modal-root');

class Modal extends Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }

  componentDidMount() {
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }

  render() {
    const renderModalOverlay = this.props.showModal ? (
      <ModalOverlay>
        <ChildWrapper>
          <button onClick={this.props.onClose}>Close modal</button>
          {this.props.children}
        </ChildWrapper>
      </ModalOverlay>
    ) : null;

    return ReactDOM.createPortal(renderModalOverlay, this.el);
  }
}

export default Modal;

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
