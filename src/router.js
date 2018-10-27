import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './containers/home';
import ItemList from './containers/item-list';

const routes = [
  {
    key: 'home',
    path: '/',
    exact: true,
    component: Home
  },
  {
    key: 'item-list',
    path: '/:listType',
    exact: false,
    component: ItemList
  }
];

export default ({ children }) => (
  <BrowserRouter>
    <>
      {children}
      <Switch>
        {routes.map(route => (
          <Route {...route} />
        ))}
      </Switch>
    </>
  </BrowserRouter>
);
