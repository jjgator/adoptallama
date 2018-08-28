import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home.jsx';
import EditProfile from './components/EditProfile.jsx';

render((
  <BrowserRouter>
    <div>
      <Route exact path='/' component={Home} />
      <Route exact path='/edit' component={EditProfile} />
    </div>
  </BrowserRouter>
), document.getElementById('app'));