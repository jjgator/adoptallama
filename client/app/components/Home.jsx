import React from 'react';
import { render } from 'react-dom';
import axios from 'axios';
import LlamaList from './LlamaList.jsx';
import Login from './Login.jsx';
import TopNav from './TopNav.jsx';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      llamalist: [],
      showLogin: false,
      isLoggedIn: false
    };
    this.closeModal = this.closeModal.bind(this);
    this.login = this.login.bind(this);
    this.navClickHandler = this.navClickHandler.bind(this);
  }

  componentDidMount() {
    axios.get('/profiles')
    .then(response => {
      let profiles = response.data;
      this.setState({llamalist: profiles});
    });
    if (localStorage.getItem("username") !== null) {
      this.setState({isLoggedIn: true});
    }
  }

  navClickHandler(eventKey) {
    if (eventKey === 'login') {
      // show login modal
      this.setState({showLogin: true});
    } 
  }

  closeModal() {
    this.setState({showLogin: false});
  }

  login() {
    const username = document.getElementById('username').value;
    const userNotFoundMsg = "We couldn't find a profile with that username. Please check your spelling and re-enter the username."

    axios.post('/user', {username: username})
    .then(response => {
      let currentUser = response.data[0];
      if (currentUser) {
        this.setState({
          isLoggedIn: true
        });
        localStorage.setItem("username", currentUser.username);
        this.closeModal();
      } else {
        alert(userNotFoundMsg);
      }
    })
  }

  render () {
    return (
      <div>
        <TopNav onSelect={this.navClickHandler} isLoggedIn={this.state.isLoggedIn} page="home"/>
        <Login showLogin={this.state.showLogin} closeModal={this.closeModal} login={this.login}/>
        <LlamaList llamalist={this.state.llamalist}/>
      </div>
    )
  }
}

export default Home;
