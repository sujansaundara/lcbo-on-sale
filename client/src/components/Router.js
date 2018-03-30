import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Products from './Products';

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Products} />
    </Switch>
  </BrowserRouter>
);