import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./containers/main/Main";
import SignIn from "./containers/sign/SignIn";
import SignUp from "./containers/sign/SignUp";
import Dashboard from"./containers/dashboard/Dashboard";

// export class App extends Component {
export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={SignIn} />
          <Route exact path="/Dashboard" component={Dashboard} />
          <Route exact path="/home" component={Main} />
          <Route exact path="/signup" component={SignUp} />
        </Switch>
      </BrowserRouter>
    );
  }
}
