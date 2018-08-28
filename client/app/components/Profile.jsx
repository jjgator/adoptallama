import React from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import Llama from './Llama.jsx';
import TopNav from './TopNav.jsx';
import Edit from './Edit.jsx';


class Profile extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {},
      showModal: false,
    };
    this.navClickHandler = this.navClickHandler.bind(this);
    this.editProfile = this.editProfile.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.save = this.save.bind(this);
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

  editProfile() {
    this.setState({showModal: true});
  }

  closeModal() {
    this.setState({showModal: false});
  }

  save() {
    const currentUser = this.state.user.username;
    const llama_name = document.getElementById('name').value;
    const description = document.getElementById('description').value;
    const img_link = document.getElementById('photo').value;

    axios.post('/edit', {
      username: currentUser,
      llama_name: llama_name,
      description: description,
      img_link: img_link
    })
    .then(response => {
      const updatedUser = response.data[0];
      this.setState({user: updatedUser});
    })

    this.closeModal();
  }

  render () {
    return (
      <div>
        <TopNav onSelect={this.navClickHandler}/>
        <Edit 
          showModal={this.state.showModal} 
          closeModal={this.closeModal} 
          user={this.state.user}
          save={this.save}
        />
        <Llama 
          name={this.state.user.llama_name}
          description={this.state.user.description}
          img={this.state.user.img_link}
        />
        <Button onClick={this.editProfile}>Edit Profile</Button>
      </div>
    )
  }
}

export default Profile;


