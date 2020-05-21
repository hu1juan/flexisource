import React, { lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import ListPageContextProvider from './contexts/ListPageContext';

const LISTPAGE = lazy(() => import('./pages/ListPage'));
const SINGLEVIEWPAGE = lazy(() => import('./pages/SingleViewPage'));

function MyRoute() {
  return (
    <Router>
      <Switch>
        <Suspense fallback={<div>LOADING...</div>}>
          <ListPageContextProvider>
            <Route exact path='/' component={LISTPAGE} />
            <Route exact path='/:id' component={SINGLEVIEWPAGE} />
          </ListPageContextProvider>
        </Suspense>
      </Switch>
    </Router>
  );
}

export default MyRoute;
