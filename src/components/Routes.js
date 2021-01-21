import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home';
import App from './App';
import Quotes from './Quotes';
import Navbar from './Navbar';

const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/calculator" component={App} />
      <Route exact path="/quotes" component={Quotes} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
