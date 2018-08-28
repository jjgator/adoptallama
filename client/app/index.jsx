import React from 'react';
import {render} from 'react-dom';
import axios from 'axios';
import LlamaList from './components/LlamaList.jsx';
import TopNav from './components/TopNav.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      llamalist: []
    }
  }

  componentDidMount() {
    axios.get('/profiles')
    .then(response => {
      let profiles = response.data;
      this.setState({llamalist: profiles});
    })
  }

  render () {
    return (
      <div>
        <TopNav />
        <LlamaList llamalist={this.state.llamalist}/>
      </div>
    )
  }
}

render(<App/>, document.getElementById('app'));
