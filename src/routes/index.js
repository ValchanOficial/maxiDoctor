import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import MaxDoctor from '../pages/MaxDoctor';
import NotFound from '../pages/NotFound';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/maxdoctor" component={MaxDoctor} />
    <Route component={NotFound} />
  </Switch>
);

export default Routes;
