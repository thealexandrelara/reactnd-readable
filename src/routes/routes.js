import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Posts from '../pages/posts';
import PostDetail from '../pages/postDetail';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Posts} />
    <Route exact path="/:categoryId/:postId" component={PostDetail} />
    <Route path="/:categoryId" component={Posts} />
  </Switch>
);

export default Routes;
