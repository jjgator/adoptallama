import React from 'react';
import {render} from 'react-dom';

class App extends React.Component {
  render () {
    return <p>Hello Llamas!</p>;
  }
}

render(<App/>, document.getElementById('app'));