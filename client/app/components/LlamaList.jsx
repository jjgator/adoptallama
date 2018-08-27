import React from 'react';
import Llama from './Llama.jsx';

const LlamaList = (props) => (
  <div>
    {props.llamalist.map((llama, i) => {
      return <Llama 
        key={i}
        name={llama.name}
        description={llama.description}
        img={llama.img_link}
      />
    })}
  </div>
);

export default LlamaList;