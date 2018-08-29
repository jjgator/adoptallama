import React from 'react';
import Llama from './Llama.jsx';
import { Row, Grid, Col } from 'react-bootstrap';

const LlamaList = (props) => (
  <Grid>
    {props.llamalist.map((llama, i) => {
      return (
        <Llama 
          key={i}
          name={llama.llama_name}
          description={llama.description}
          img={llama.img_link}
        />
      )
    })}
  </Grid>
);

export default LlamaList;