import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const Edit = (props) => (
  <div className="static-modal">
    <Modal show={props.showModal}>
      <Modal.Header>
        <Modal.Title>Edit Profile</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <label>Name</label>
        <input defaultValue={props.user.llama_name} id='name'></input><br/>
        <label>Description</label>
        <input defaultValue={props.user.description} id='description'></input><br/>
        <label>Image Link</label>
        <input defaultValue={props.user.img_link} id='photo'></input><br/>
      </Modal.Body>
      <Modal.Footer>
        <Button bsStyle="primary" onClick={props.save}>Save</Button>
        <Button onClick={props.closeModal}>Cancel</Button>
      </Modal.Footer>
    </Modal>
  </div>
)

export default Edit;
