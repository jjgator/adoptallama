import React from 'react';
import { Image, Col, Row } from 'react-bootstrap';

const Llama = (props) => (
  <Row className="llama" style={{marginBottom: '20px'}}>
    <Col xs={3}>
      <Image src={props.img} width='250' height='200' rounded/>
    </Col>
    <Col xs={9}>
      <p style={{fontSize: '40px'}}>{props.name}</p>
      <p style={{fontSize: '16px'}}>{props.description}</p>
    </Col>
  </Row>
);

export default Llama;