import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Home2 from '../pages/home2';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home2} />
  </Switch>
);

export default Routes;
