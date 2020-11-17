import React from "react";
import { Route, Switch } from "react-router-dom";

import InboxRoute from "./InboxRoute";


const Routes = () => (
  <Switch>
    <Route exact path="/inbox">
      <InboxRoute />
    </Route>
  </Switch>
);

export default Routes;
