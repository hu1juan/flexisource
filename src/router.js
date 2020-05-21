import React, { lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

const LISTPAGE = lazy(() => import('./pages/ListPage'));

function MyRoute() {
  return (
    <Router>
      <Switch>
        <Suspense fallback={<div>LOADING...</div>}>
          <Route exact path='/' component={LISTPAGE} />
        </Suspense>
      </Switch>
    </Router>
  );
}

export default MyRoute;
