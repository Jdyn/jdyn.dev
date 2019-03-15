import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import HomeContainer from "../containers/HomeContainer";

const routes = {
  home: "/"
};

const Router = () => (
  <Switch>
    <Route exact path={routes.home} render={props => <HomeContainer />} />
    <Redirect to={routes.home} />
  </Switch>
);

export default Router;
