import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

// import "typeface-roboto";

import App from "./containers/App";

const routes = () => (
  <Provider store={store}>
    <Router>
      <App>
        <Switch>
          <Route exact path="/">
            <p>
              Edit <code>src/App.js</code> and save to reload
            </p>
            <a href="/auth/google">Sign in with Google</a>
          </Route>
          {/* <Route path="/login" component={SignInPage} />
          <Route path="/signup" component={SignUpPage} />
          <Route path="/dashboard" component={requireAuth(Dashboard)} /> */}
        </Switch>
      </App>
    </Router>
  </Provider>
);

export default routes;
