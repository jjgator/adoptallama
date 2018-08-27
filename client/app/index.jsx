import React from 'react';
import {render} from 'react-dom';
import LlamaList from './components/LlamaList.jsx';
import TopNav from './components/TopNav.jsx';

const dummyData = [
  {name: "Llarry", img_link: "https://www.outtherecolorado.com/wp-content/uploads/2017/03/e9bb2a136a67b3aa4f28fa89ff2e9e1f-1024x897.jpg", description: "I'm fat and sassy, but I can be super cool if you can."}, 
  {name: "Llinda", img_link: "https://peopledotcom.files.wordpress.com/2016/10/llama-wp.jpg", description: "I'm sweet as pie, and if you're really nice, I'll fill your day with smiles."}, 
  {name: "Llancelot", img_link: "https://i.pinimg.com/236x/d7/d3/ec/d7d3ec275b71dab2fc4368f9fe707436--alpacas-funny-animals.jpg", description: "I'm a bit of scaredy-cat, if you know what I mean. If you have a lot of patience, I'll eventually be brave and let you be my favorite human."}
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      llamalist: []
    }
  }

  componentDidMount() {
    this.setState({llamalist: dummyData});
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
