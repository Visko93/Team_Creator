import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import TeamCreation from "./pages/TeamCreation";
import NotFound from "./pages/Page404";


function Routes () {
  return (
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/teamcreation' component={TeamCreation}/>
      <Route component={NotFound}/>
    </Switch>
  )
}

export default Routes