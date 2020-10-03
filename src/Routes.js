import React from "react";
import { Switch, Route } from "react-router-dom";
import {ThemeProvider} from "@material-ui/core/styles";


import Home from "./pages/Home";
import TeamCreation from "./pages/TeamCreation";
import NotFound from "./pages/Page404";
import theme from "./GlobalStyle/theme"

function Routes () {
  return (
  <ThemeProvider theme={theme}>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/teamcreation' component={TeamCreation}/>
      <Route component={NotFound}/>
    </Switch>
  </ThemeProvider>
  )
}

export default Routes