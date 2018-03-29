import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Books from './Books';

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Books} />
    </Switch>
  </BrowserRouter>
);