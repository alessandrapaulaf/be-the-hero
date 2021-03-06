import { BrowserRouter, Route, Switch, Router } from 'react-router-dom';
import React from 'react';
import Logon from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Logon} />
        <Route path="/register" component={Register} />
        <Route path="/profile" component={Profile} />
      </Switch>
    </BrowserRouter>
  );
}

