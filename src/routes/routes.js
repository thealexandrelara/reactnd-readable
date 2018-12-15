import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Posts from '../pages/posts';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Posts} />
    <Route path="/category/:categoryId" component={Posts} />
  </Switch>
);

export default Routes;
