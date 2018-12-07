import React from 'react';

import { Switch, Route } from 'react-router-dom';

// import Home2 from '../pages/home2';
import Home from '../pages/home';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
  </Switch>
);

export default Routes;
