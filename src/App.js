import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import Routes from "./Routes";

import CssBaseline from '@material-ui/core/CssBaseline';

function App() {
  return (
    <div className="App">
      <>
      <Router>
        <CssBaseline />
        <Routes />
      </Router>
      </>
    </div>
  );
}

export default App;
