import React from 'react';
import {render} from 'react-dom';
import axios from 'axios';
import LlamaList from './components/LlamaList.jsx';
import Login from './components/Login.jsx';
import TopNav from './components/TopNav.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      llamalist: [],
      showLogin: false,
      isLoggedIn: false,
      currentUser: {}
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
    })
  }

  navClickHandler(eventKey) {
    if (eventKey === 'login') {
      // show login modal
      this.setState({showLogin: true});
    } else if (eventKey === 'profile') {
      
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
          currentUser: currentUser,
          isLoggedIn: true
        });
        this.closeModal();
      } else {
        alert(userNotFoundMsg);
      }
    })
  }

  render () {
    return (
      <div>
        <TopNav onSelect={this.navClickHandler} isLoggedIn={this.state.isLoggedIn}/>
        <Login showLogin={this.state.showLogin} closeModal={this.closeModal} login={this.login}/>
        <LlamaList llamalist={this.state.llamalist}/>
      </div>
    )
  }
}

render(<App/>, document.getElementById('app'));
