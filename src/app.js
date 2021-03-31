import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import * as ROUTES from './constants/routes';
import {Home, Signin, Signup, Browse} from './pages';

export default function App() {
  return (
    <Router>
      <Route exact path={ROUTES.HOME} component={Home} />
      <Route path={ROUTES.BROWSE} component={Browse} />
      <Route path={ROUTES.SIGN_IN} component={Signin} />
      <Route path={ROUTES.SIGN_UP} component={Signup} />
    </Router>
  );
}
