import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from '../views/containers/home/index';
import Units from '../views/containers/units/index';

const RouterPoint = () => {
  return (
    <Router>
      <Switch>
        <Route path="/units">
          <Units />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default RouterPoint;
