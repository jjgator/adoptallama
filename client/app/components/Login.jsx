import React from 'react';
import {Modal, Button} from 'react-bootstrap';

const Login = (props) => (
  <div className="static-modal">
    <Modal show={props.showLogin}>
      <Modal.Header>
        <Modal.Title>Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <label>Username:</label>
        <input placeholder='username' id='username'></input><br/>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.closeModal}>Close</Button>
        <Button bsStyle="primary" onClick={props.login}>Sign In</Button>
      </Modal.Footer>
    </Modal>
  </div>
)

export default Login;
