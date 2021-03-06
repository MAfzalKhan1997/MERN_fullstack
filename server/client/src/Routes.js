import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

import "typeface-roboto";

import App from "./containers/App";
import Home from "./containers/Home";
import Dashboard from "./containers/Dashboard";
import CreateSurvey from "./containers/CreateSurvey";

const routes = () => (
  <Provider store={store}>
    <Router>
      <App>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/surveys" component={Dashboard} />
          <Route path="/surveys/new" component={CreateSurvey} />
        </Switch>
      </App>
    </Router>
  </Provider>
);

export default routes;
