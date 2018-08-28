import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home.jsx';
import Profile from './components/Profile.jsx';

render((
  <BrowserRouter>
    <div>
      <Route exact path='/' component={Home} />
      <Route exact path='/profile' component={Profile} />
    </div>
  </BrowserRouter>
), document.getElementById('app'));