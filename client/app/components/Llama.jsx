import React from 'react';

const Llama = (props) => (
  <div>
    <img src={props.img} width='200' height='150'/>
    <p>{props.name}</p>
    <p>{props.description}</p>
  </div>
);

export default Llama;