import React from 'react';
import axios from 'axios';
import { Modal, Button } from 'react-bootstrap';
import Llama from './Llama.jsx';
import TopNav from './TopNav.jsx';
import Home from './Home.jsx';

class Profile extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {}
    };
    this.navClickHandler = this.navClickHandler.bind(this);
  }

  componentDidMount() {
    const username = localStorage.getItem("username");
    axios.post('/user', {username: username})
    .then(response => {
      const userObj = response.data[0];
      this.setState({
        user: userObj
      });
    })
  }

  navClickHandler(eventKey) {
    if (eventKey === 'logout') {
      localStorage.removeItem("username");
    }
  }

  render () {
    return (
      <div>
        <TopNav onSelect={this.navClickHandler}/>
        <Llama 
          name={this.state.user.llama_name}
          description={this.state.user.description}
          img={this.state.user.img_link}
        />
      </div>
    )
  }
}

export default Profile;


